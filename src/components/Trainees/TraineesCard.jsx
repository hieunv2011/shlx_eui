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
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
function TraineesCard({ trainee, isModalVisible, closeModal, traineeId }) {
  const modalTitleId = useGeneratedHtmlId();
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Sửa thông tin thẻ</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody className="">
            <EuiPanel>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <div className="p-2">Số thẻ</div>
                  <EuiFieldText
                    placeholder="Số thẻ..."
                    value={value}
                    onChange={(e) => onChange(e)}
                    aria-label="Use aria labels when no actual label is in use"
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <div className="p-2">ID thẻ</div>
                  <EuiFieldText
                    placeholder="ID thẻ..."
                    value={value}
                    onChange={(e) => onChange(e)}
                    aria-label="Use aria labels when no actual label is in use"
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
            <EuiSpacer size="l" />
            <EuiPanel>
              <div className="p-2">Tìm thẻ chưa dùng để gán</div>
              <EuiFieldText
                placeholder="Tìm thẻ chưa dùng để gán..."
                value={value}
                onChange={(e) => onChange(e)}
                aria-label="Use aria labels when no actual label is in use"
              />
            </EuiPanel>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={closeModal} fill>
              Đóng
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
}

export default TraineesCard;
