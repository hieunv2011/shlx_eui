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
  EuiSelect,
  EuiFilePicker,
  EuiDatePicker
} from "@elastic/eui";
import { postDat } from "../../api/dat";
import moment from 'moment';

const TeacherAddNew = ({ isModalVisible, closeModal }) => {
  const modalTitleId = "TeacherAddNewModal";
  const [formData, setFormData] = useState({
    name: "",
    file: "",
    gender: "",
    birthday: "",
    id_card: "",
    level: "",
    driving_license_no: "",
    teaching_license_no: "",
    address: "",
  });
  const [image, setImage] = useState(null);

  const onFileChange = (files) => {
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.readAsBinaryString(file);

      reader.onload = () => {
        const binaryString = reader.result;
        setFormData((prev) => ({ ...prev, file: binaryString }));
      };

      reader.onerror = (error) => {
        console.error("File reading error: ", error);
      };

      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    } else {
      setImage(null);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = moment(date).format("DD/MM/YYYY");
      setFormData((prev) => ({ ...prev, birthday: formattedDate }));
    }
  };
  //Options
  const options = [
    { value: "B11", label: "B11" },
    { value: "B1", label: "B1" },
    { value: "B2", label: "B2" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "FB2", label: "FB2" },
    { value: "FC", label: "FC" },
    { value: "FD", label: "FD" },
    { value: "FE", label: "FE" },
  ];
  const handleSubmit = async () => {
    // try {
    //   await postDat(formData);
    //   closeModal();
    // } catch (error) {
    //   console.error("Error posting data:", error);
    // }
    console.log(formData);
  };

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Thêm giáo viên</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody>
            <EuiPanel>
              <EuiFlexGroup>
                <EuiPanel className="w-40">
                  <EuiFilePicker
                    name="file"
                    initialPromptText="Chọn một tệp hình ảnh"
                    onChange={onFileChange}
                    display="default"
                    aria-label="Chọn tệp để tải lên"
                  />
                  {image && (
                    <div className="mt-2">
                      <img src={image} alt="Selected" className="mt-2 w-full h-auto" />
                    </div>
                  )}
                </EuiPanel>
                <EuiFlexItem>
                  <EuiFormRow label="Họ và tên">
                    <EuiFieldText
                      name="name"
                      value={formData.name}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="CMT">
                    <EuiFieldText
                      name="id_card"
                      value={formData.id_card}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Giới tính">
                    <EuiFieldText
                      name="gender"
                      value={formData.gender}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Ngày sinh">
                    <EuiDatePicker
                      name="birthday"
                      selected={formData.birthday ? moment(formData.birthday, "DD/MM/YYYY") : null}
                      dateFormat="DD/MM/YYYY"
                      onChange={handleDateChange}
                      aria-label="Chọn ngày sinh"
                    />
                  </EuiFormRow>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiFormRow label="Địa chỉ">
                    <EuiFieldText
                      name="address"
                      value={formData.address}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Hạng tập huấn giáo viên">
                    <EuiSelect
                      options={options}
                      name="level"
                      value={formData.level}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Giấy phép lái xe">
                    <EuiFieldText
                      name="driving_license_no"
                      value={formData.driving_license_no}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                  <EuiFormRow label="Số GCN">
                    <EuiFieldText
                      name="teaching_license_no"
                      value={formData.teaching_license_no}
                      onChange={onChange}
                    />
                  </EuiFormRow>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
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

export default TeacherAddNew;
