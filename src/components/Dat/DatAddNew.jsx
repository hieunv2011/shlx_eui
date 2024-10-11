import React, { useState } from "react";
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiSpacer,
  EuiButton,
  EuiFormRow,
  EuiFieldText,
  EuiCheckbox,
  EuiPanel,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import { postDat } from "../../api/dat"; // Import hàm gửi dữ liệu

const DatAddNew = ({ isModalVisible, closeModal }) => {
  const modalTitleId = "datAddNewModal"; // ID cho modal
  const [formData, setFormData] = useState({
    name: "",
    serial_no: "",
    board_serial: "",
    manufacture: "",
    sim: "",
    status: true, // Mặc định trạng thái là true
    config: "",
    branch_id: 0,
    description: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      await postDat(formData); // Gửi dữ liệu lên API
      closeModal(); // Đóng modal sau khi gửi thành công
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Thêm thiết bị DAT</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiPanel>
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFormRow label="Tên thiết bị">
                    <EuiFieldText
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="SIM">
                    <EuiFieldText
                      name="sim"
                      value={formData.sim}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="IMEI">
                    <EuiFieldText
                      name="serial_no"
                      value={formData.serial_no}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Manufacture">
                    <EuiFieldText
                      name="manufacture"
                      value={formData.manufacture}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Board Serial">
                    <EuiFieldText
                      name="board_serial"
                      value={formData.board_serial}
                      disabled={true}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Ghi chú">
                    <EuiFieldText
                      name="description"
                      value={formData.description}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiCheckbox
                id="simpleCheckbox"
                label="Đang hoạt động"
                checked={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
              />
            </EuiPanel>
          </EuiModalBody>

          <EuiModalFooter>
            <EuiButton onClick={handleSubmit} fill>
              Thêm mới
            </EuiButton>
            <EuiButton onClick={closeModal} fill color="danger">
              Đóng
            </EuiButton>
          </EuiModalFooter>
        </EuiModal>
      )}
    </>
  );
};

export default DatAddNew;

