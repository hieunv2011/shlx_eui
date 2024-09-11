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
  EuiFormRow,
  EuiFieldText,
  EuiSelect,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { format } from "date-fns";
import { useOutdoor } from "../../hooks/get";

function TraineesInfo({ trainee, isModalVisible, closeModal, traineeId }) {
  const [status, setStatus] = useState("");
  const options = [
    { value: -1, label: "Tất cả" },
    { value: 0, label: "Lỗi" },
    { value: 1, label: "Thành công" },
  ];
  // console.log(trainee);
  const modalTitleId = useGeneratedHtmlId();
  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <h2>Thông tin học viên</h2>
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody className="">
            <EuiPanel>
              <EuiFormRow label="Họ và tên">
                <EuiFieldText
                  placeholder={trainee.ho_va_ten}
                  compressed="true"
                  disabled="true"
                  readOnly="true"
                  aria-label="Use aria labels when no actual label is in use"
                />
              </EuiFormRow>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFormRow label="Ngày sinh">
                    <EuiFieldText
                      placeholder={format(
                        new Date(trainee.ngay_sinh),
                        "dd/MM/yyyy"
                      )}
                      compressed="true"
                      disabled="true"
                      readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Giới tính">
                    <EuiFieldText
                      placeholder={
                        trainee.gioi_tinh === "F"
                          ? "Nữ"
                          : trainee.gioi_tinh === "M"
                          ? "Nam"
                          : ""
                      }
                      compressed="true"
                      disabled="true"
                      readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Chứng minh thư">
                    <EuiFieldText
                      placeholder={trainee.so_cmt}
                      compressed="true"
                      disabled="true"
                      readOnly="true"
                      aria-label="Use aria labels when no actual label is in use"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiFormRow label="KẾT QUẢ MÔN PHÁP LUẬT GTĐB">
                <EuiSelect
                  options={options}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  compressed="true"
                />
              </EuiFormRow>
              <EuiFormRow label="KẾT QUẢ MÔN KỸ THUẬT LÁI XE">
                <EuiSelect
                  options={options}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  compressed="true"
                />
              </EuiFormRow>
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

export default TraineesInfo;
