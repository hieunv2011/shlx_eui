import React, { useState, useEffect } from "react";
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
  EuiFlexItem,
  EuiFormRow,
  EuiFieldText,
  EuiCheckbox,
  EuiCallOut,
} from "@elastic/eui";
import axios from "axios";

function DatModal({ dat, isModalVisible, closeModal, datId, refreshData }) {
  const modalTitleId = useGeneratedHtmlId();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [updatedDat, setUpdatedDat] = useState({});
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setUpdatedDat(dat);
    setChecked(dat.status); // Khởi tạo checked từ dat.status
  }, [dat]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedDat((prevDat) => ({
      ...prevDat,
      [name]: value,
    }));
  };

  const onChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    setUpdatedDat((prevDat) => ({
      ...prevDat,
      status: isChecked, // Cập nhật status trong updatedDat
    }));
  };

  const handleUpdate = async () => {
    console.log("Sending updated dat:", updatedDat);
    setLoading(true);
    setError("");

    try {
      await axios.put(
        `https://jira.shlx.vn/v1/tracking_devices/${datId}`,
        updatedDat,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      closeModal();
      refreshData();
    } catch (err) {
      setError("Failed to update data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Thông tin thiết bị: {dat.id}</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>
          <EuiModalBody>
            <EuiSpacer />
            <EuiPanel>
              {error && (
                <EuiCallOut title="Error" color="danger">
                  {error}
                </EuiCallOut>
              )}
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFormRow label="Tên">
                    <EuiFieldText
                      name="name"
                      value={updatedDat.name}
                      onChange={handleInputChange}
                      compressed={true}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Sim">
                    <EuiFieldText
                      name="sim"
                      value={updatedDat.sim}
                      onChange={handleInputChange}
                      compressed={true}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Imei">
                    <EuiFieldText
                      name="serial_no"
                      value={updatedDat.serial_no}
                      onChange={handleInputChange}
                      compressed={true}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Manufracture">
                    <EuiFieldText
                      name="vehicle_model"
                      value={updatedDat.vehicle_model}
                      onChange={handleInputChange}
                      compressed={true}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Board Serial">
                    <EuiFieldText
                      name="board_serial"
                      value={updatedDat.board_serial}
                      compressed={true}
                      disabled={true}
                      readOnly={true}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Ghi chú">
                    <EuiFieldText
                      name="notes"
                      value={updatedDat.notes}
                      onChange={handleInputChange}
                      compressed={true}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiCheckbox
                id="simpleCheckbox"
                label="Đang hoạt động"
                checked={checked}
                onChange={onChange}
              />
            </EuiPanel>
          </EuiModalBody>
          <EuiModalFooter>
            <EuiButton onClick={handleUpdate} fill isLoading={isLoading}>
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
