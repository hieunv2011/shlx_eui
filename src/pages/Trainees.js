import React, { useState, useEffect } from "react";
import {
  EuiContext,
  EuiSpacer,
  EuiBasicTable,
  EuiCollapsibleNavGroup,
  EuiShowFor,
  EuiHideFor,
  EuiProvider,
  EuiText,
  EuiPanel,
  EuiSplitPanel,
  EuiResizableContainer,
  EuiButton,
} from "@elastic/eui";
import { useTrainees } from "../hooks/get";
import { columns } from "../columns/trainees";
import TraineesSearch from "../components/Trainees/TraineesSearch";
import TraineesModal from "../components/Trainees/TraineesModal";
import TraineesCard from "../components/Trainees/TraineesCard";
import { createColumns } from "../columns/trainees";
import { useParams } from "react-router-dom";

const textPart1 = (
  <>
    <p>Đây là nội dung phần 1.</p>
  </>
);

const textPart2 = (
  <>
    <p>Đây là nội dung phần 2.</p>
  </>
);

const Trainees = () => {
  // const { data } = useTrainees();
  // const trainees = data?.items || [];
  //test
  const { course_id } = useParams();
  console.log(course_id);

  const [searchParams, setSearchParams] = useState({});
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  useEffect(() => {
    if (course_id) {
      setSearchParams((prevParams) => ({
        ...prevParams,
        course_id: course_id, // Thêm course_id vào searchParams
      }));
    }
  }, [course_id]);
  const { data: traineesData, error, isLoading } = useTrainees(searchParams);
  // if (isLoading) {
  //   return <EuiText color="danger">Loading</EuiText>;
  // }
  // if (error) {
  //   return <EuiText color="danger">Error loading </EuiText>;
  // }
  const trainees = Array.isArray(traineesData?.items) ? traineesData.items : [];
  //Mở Modal,Card modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState("");
  const [selectedTraineeId, setSelectedTraineeId] = useState("");

  const closeModal = () => setIsModalVisible(false);
  const closeCard = () => setIsCardVisible(false);

  const showModal = (trainee) => {
    setSelectedTrainee(trainee);
    setSelectedTraineeId(trainee.id);
    setIsModalVisible(true);
  };
  const showCard = (trainee) => {
    setIsCardVisible(true);
  };

  //Logic Table
  const columns = createColumns(showModal, showCard);
  const onTableChange = ({ page }) => {
    if (page) {
      const { index, size } = page;
      setPageIndex(index);
      setPageSize(size);
    }
  };

  const togglePerPageOptions = () => setShowPerPageOptions(!showPerPageOptions);
  const paginatedTrainees = trainees.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount: trainees.length,
    pageSizeOptions: [10, 20, 30],
    showPerPageOptions,
  };
  //i18n
  const mappings = {
    en: {
      "euiTablePagination.rowsPerPageOption": "{rowsPerPage} dòng",
      "euiTablePagination.rowsPerPage": "Số dòng của một trang",
      "euiBasicTable.noItemsMessage": "Đang tải dữ liệu ... ",
    },
  };

  return (
    <EuiContext
      i18n={{
        mapping: mappings.en,
        formatNumber: (value) => new Intl.NumberFormat("en").format(value),
      }}
    >
      <EuiPanel paddingSize="m">
        <EuiShowFor sizes={["xs", "s", "m", "l"]}>
          <EuiCollapsibleNavGroup
            title="Tìm kiếm"
            iconType="logoGCPMono"
            iconSize="l"
            titleSize="s"
            isCollapsible={true}
            initialIsOpen={false}
          >
            <TraineesSearch
              onSearch={(params) => setSearchParams(params)}
              className=""
            />
          </EuiCollapsibleNavGroup>
        </EuiShowFor>
        <EuiHideFor sizes={["xs", "s", "m", "l"]}>
          <TraineesSearch
            onSearch={(params) => setSearchParams(params)}
            className=""
          />
        </EuiHideFor>
      </EuiPanel>
      <EuiSpacer size="m" />
      <EuiPanel paddingSize="m">
        <EuiBasicTable
          items={paginatedTrainees}
          itemId="id"
          columns={columns}
          pagination={pagination}
          onChange={onTableChange}
          className="overflow-x-auto px-4"
          tableLayout="fixed"
        />
      </EuiPanel>
      <TraineesModal
        trainee={selectedTrainee}
        isModalVisible={isModalVisible}
        traineeId={selectedTraineeId}
        closeModal={closeModal}
      />
      <TraineesCard
        trainee={selectedTrainee}
        traineeId={selectedTraineeId}
        isModalVisible={isCardVisible}
        closeModal={closeCard}
      />
      {/* <EuiSplitPanel.Outer direction="row">
        <EuiSplitPanel.Inner color="danger">1</EuiSplitPanel.Inner>
        <EuiSplitPanel.Inner color="success">2</EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
      <>
        {!showPart2 ? (
          // Hiển thị chỉ phần 1 nếu chưa có phần 2
          <div style={{ height: "200px" }} className="bg-red-400">
            <EuiText>
              <div>{textPart1}</div>
              <EuiButton onClick={togglePart2}>Hiển Thị Phần 2</EuiButton>
            </EuiText>
          </div>
        ) : (
          // Khi phần 2 hiển thị, dùng EuiResizableContainer
          <EuiResizableContainer style={{ height: "200px" }}>
            {(EuiResizablePanel, EuiResizableButton) => (
              <>
                <EuiResizablePanel initialSize={50} minSize="30%" tabIndex={0}>
                  <EuiText>
                    <div>{textPart1}</div>
                  </EuiText>
                </EuiResizablePanel>
                <EuiResizableButton />
                <EuiResizablePanel
                  initialSize={50}
                  minSize="200px"
                  tabIndex={0}
                >
                  <EuiText>{textPart2}</EuiText>
                  <EuiButton
                    onClick={togglePart2}
                    style={{ marginTop: "10px" }}
                  >
                    Ẩn Phần 2
                  </EuiButton>
                </EuiResizablePanel>
              </>
            )}
          </EuiResizableContainer>
        )}
      </> */}
    </EuiContext>
  );
};

export default Trainees;
