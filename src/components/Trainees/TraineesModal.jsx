import React, { useState } from "react";
import {
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiCodeBlock,
  EuiSpacer,
  EuiButton,
  useGeneratedHtmlId,
  EuiStat,
  EuiFlexItem,
  EuiFlexGroup,
  EuiPanel,
  EuiIcon,
  EuiSwitch,
  EuiTextColor,
  EuiTitle,
  EuiBasicTable,
} from "@elastic/eui";
import { format } from "date-fns";
import { useOutdoor } from "../../hooks/get";
function TraineesModal({ trainee, isModalVisible, closeModal, traineeId }) {
  const modalTitleId = useGeneratedHtmlId();

  //Data
  const [isLoading, setLoading] = useState("");
  const { data: outdoorData } = useOutdoor({ trainee_id: traineeId });
  // const outdoor = Array.isArray(outdoorData?.items) ? outdoorData.items : [];
  const onToggleChange = (e) => {
    setLoading(e.target.checked);
  };

  // Cài đặt phân trang
  const [pageIndex, setPageIndex] = useState(0); // Trang hiện tại
  const [pageSize, setPageSize] = useState(5); // Số dòng mỗi trang

  const handleTableChange = ({ page }) => {
    setPageIndex(page.index);
    setPageSize(page.size);
  };

  // Kiểm tra nếu outdoorData có giá trị, nếu không sử dụng mảng trống
  const paginatedOutdoorData = (outdoorData || []).slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  // Cấu hình phân trang, sử dụng giá trị mặc định nếu outdoorData không tồn tại
  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: outdoorData ? outdoorData.length : 0, // Tổng số mục dữ liệu hoặc 0 nếu không có dữ liệu
    pageSizeOptions: [5, 10, 20], // Tùy chọn số dòng mỗi trang
  };

  // Tạo cột cho bảng EuiBasicTable
  const columns = [
    {
      field: "created_date",
      name: "Ngày giờ",
      render: (item) => format(new Date(item), "dd/MM/yyyy HH:mm:ss"),
    },
    {
      field: "vehicle_plate",
      name: "Xe",
    },
    {
      field: "vehicle_hang",
      name: "Hạng",
      // render: (distance) => (distance / 1000).toFixed(2),
    },
    {
      field: "distance",
      name: "Quãng đường",
      render: (distance) => {
        return new Intl.NumberFormat("en-US", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }).format(distance / 1000);
      },
    },
    {
      field: "duration",
      name: "Thời gian",
      render: (duration) => {
        const hours = Math.floor(duration / 3600).toString().padStart(2, '0');  // Lấy số giờ và đảm bảo luôn có 2 chữ số
        const minutes = Math.floor((duration % 3600) / 60).toString().padStart(2, '0');  // Lấy số phút và đảm bảo luôn có 2 chữ số
        return `${hours}:${minutes}`;  // Hiển thị theo định dạng HH:mm
      }
    }
  ];

  return (
    <>
      {isModalVisible && (
        <EuiModal aria-labelledby={modalTitleId} onClose={closeModal}>
          <EuiModalHeader>
            <EuiModalHeaderTitle id={modalTitleId}>
              <p>Tên học viên: {trainee.ho_va_ten}</p>
              <p>ID học viên: {trainee.id}</p>
              <p>Ngày sinh: {trainee.ngay_sinh}</p>
            </EuiModalHeaderTitle>
          </EuiModalHeader>

          <EuiModalBody className="">
            Thông số thực hành:
            <EuiSpacer />
            <div>
              <EuiFlexGroup className="">
                <EuiFlexItem>
                  <EuiPanel hasBorder={true}>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiStat
                          title={trainee.outdoor_hour}
                          textAlign="left"
                          isLoading={isLoading}
                          titleColor="accent"
                          description="Giờ Thực hành"
                          titleSize="s"
                        >
                          <EuiTextColor color="accent">
                            <span>
                              <EuiIcon type="clock" color="accent" />
                            </span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiStat
                          title={trainee.outdoor_distance}
                          textAlign="left"
                          isLoading={isLoading}
                          titleColor="success"
                          description="Quãng đường"
                          titleSize="s"
                        >
                          <EuiTextColor color="success">
                            <span>
                              <EuiIcon type="check" color="success" />
                            </span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiPanel hasBorder={true}>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiStat
                          title={(
                            trainee.required_hour -
                            trainee.outdoor_hour / 3600
                          ).toFixed(2)}
                          textAlign="left"
                          isLoading={isLoading}
                          description="Thời gian thiếu"
                          titleSize="s"
                        >
                          <EuiTextColor color="success">
                            <span>
                              <EuiIcon type="check" color="success" />
                              {`${(
                                (trainee.outdoor_hour /
                                  3600 /
                                  trainee.required_hour) *
                                100
                              ).toFixed(2)}%`}
                            </span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiStat
                          title={(
                            trainee.required_distance -
                            trainee.outdoor_distance / 1000
                          ).toFixed(2)}
                          textAlign="left"
                          isLoading={isLoading}
                          titleColor="danger"
                          description="Quãng đường thiếu"
                          titleSize="s"
                        >
                          <EuiTextColor color="success">
                            <span>
                              <EuiIcon type="check" color="success" />
                              {`${(
                                (trainee.outdoor_distance /
                                  1000 /
                                  trainee.required_distance) *
                                100
                              ).toFixed(2)}%`}
                            </span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPanel>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiPanel hasBorder={true}>
                    <EuiFlexGroup>
                      <EuiFlexItem>
                        <EuiStat
                          title={trainee.night_duration}
                          textAlign="left"
                          isLoading={isLoading}
                          titleColor="danger"
                          description="Giờ đêm"
                          titleSize="s"
                        >
                          <EuiTextColor color="accent">
                            <span>Giờ đêm</span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                      <EuiFlexItem>
                        <EuiStat
                          title={trainee.auto_duration}
                          description="Giờ tự động"
                          textAlign="left"
                          isLoading={isLoading}
                          titleSize="s"
                        >
                          <EuiTextColor color="success">
                            <span>
                              <EuiIcon type="sortUp" /> 27,83%
                            </span>
                          </EuiTextColor>
                        </EuiStat>
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiPanel>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer />
              <EuiBasicTable
                items={paginatedOutdoorData} // Dữ liệu đã được phân trang
                columns={columns}
                pagination={pagination} // Cài đặt phân trang
                onChange={handleTableChange} // Hàm xử lý khi người dùng thay đổi trang
                tableLayout="fixed"
              />
              <EuiSwitch
                label="Show as loading"
                checked={isLoading}
                onChange={onToggleChange}
              />
            </div>
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

export default TraineesModal;
