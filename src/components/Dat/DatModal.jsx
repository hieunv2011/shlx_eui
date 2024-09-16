import React, { useState } from "react";
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiButton,
  useGeneratedHtmlId,
  EuiPanel,
  EuiFlexGroup,
  EuiFormErrorText,
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiCheckbox,
} from "@elastic/eui";
import { format } from "date-fns";
import { useOutdoor } from "../../hooks/get";
import { useUpdateTrackingDevice } from "../../hooks/put";

function DatModal({ dat, isModalVisible, closeModal, datId }) {
  //console.log(dat);
  const modalTitleId = useGeneratedHtmlId();
  //Data
  const [isLoading, setLoading] = useState("");
  const { data: outdoorData } = useOutdoor({ dat_id: datId });
  // const outdoor = Array.isArray(outdoorData?.items) ? outdoorData.items : [];
  const onToggleChange = (e) => {
    setLoading(e.target.checked);
  };

  //Checkbox
  const [checked, setChecked] = useState(false);
  const checkboxId = useGeneratedHtmlId({ prefix: "singleCheckbox" });

  const onChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Thông tin thiết bị:{dat.id}</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody className="">
            <EuiSpacer />
            <EuiPanel>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFormRow label="Tên">
                    <EuiFieldText
                      placeholder={dat.name}
                      compressed="true"
                    //   disabled="true"
                    //   readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Sim">
                    <EuiFieldText
                      placeholder={dat.sim}
                      compressed="true"
                    //   disabled="true"
                    //   readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Imei">
                    <EuiFieldText
                      placeholder={dat.serial_no}
                      compressed="true"
                    //   disabled="true"
                    //   readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Manufracture">
                    <EuiFieldText
                      placeholder={dat.vehicle_model}
                      compressed="true"
                    //   disabled="true"
                    //   readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Board Serial">
                    <EuiFieldText
                      placeholder={dat.board_serial}
                      compressed="true"
                      disabled="true"
                      readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Ghi chú">
                    <EuiFieldText
                      placeholder={""}
                      compressed="true"
                    //   disabled="true"
                    //   readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiCheckbox
                id={checkboxId}
                label="Đang hoạt động"
                checked={checked}
                onChange={(e) => onChange(e)}
              />
            </EuiPanel>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Cập nhật
            </EuiButton>
            <EuiButton onClick={closeModal} fill color="success">
              Đóng
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
}

export default DatModal;
