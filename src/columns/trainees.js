import React from "react";
import {
  EuiHealth,
  EuiButtonIcon,
  EuiToolTip,
  EuiAvatar,
  EuiText,
  EuiLink,
  EuiProvider,
} from "@elastic/eui";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
// Chỉnh sửa để nhận hàm `showModal` từ component cha
export const createColumns = (showModal,showCard,showInfo,showFinger,showFace) => [
  // {
  //   field: "so_tt",
  //   name: "STT",
  //   mobileOptions: {
  //     header: true,
  //   },
  //   width: "50px",
  //   align: "center",
  // },
  {
    field: "anh_chan_dung",
    name: "",
    render: (cellValue) => {
      return <EuiAvatar size="l" name="Cat" imageUrl={cellValue} />;
    },
    mobileOptions: {
      header: true,
    },
    width: "50px",
  },
  {
    field: "ho_va_ten",
    name: "Họ và tên",
    render: (trainee, item) => (
      <EuiLink onClick={() => showModal(item)}>{trainee}</EuiLink>
    ),
    mobileOptions: {
      header: true,
    },
    width: "170px",
  },
  {
    field: "ma_dk",
    name: "Mã ĐK",
    mobileOptions: {
      header: true,
    },
    width: "180px",
  },
  {
    field: "hang_daotao",
    name: "Hạng ĐT",
    mobileOptions: {
      header: true,
    },
    align:"center"
  },
  {
    field: "ngay_sinh",
    name: "Ngày sinh",
    render: (item) => format(new Date(item), "dd/MM/yyyy"),
    mobileOptions: {
      header: true,
    },
    width:"100px"
  },
  {
    field: "gioi_tinh",
    name: "Giới tính",
    render: (cellValue) => {
      if (cellValue === "F") return <EuiText>Nữ</EuiText>;
      if (cellValue === "M") return <EuiText>Nam</EuiText>;
    },
    mobileOptions: {
      header: true,
    },
    align:"center"
  },
  {
    field: "so_cmt",
    name: "Số CMT",
    align: "center",
    mobileOptions: {
      header: true,
    },
    width:"100px"
  },
  {
    field: "rfid_card_name",
    name: "ID thẻ",
    align: "center",
    render: (trainee, item) => (
      <EuiLink onClick={() => showCard(item)}>{trainee}</EuiLink>
    ),
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "rfid_card",
    name: "Số thẻ",
    align: "center",
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "synced",
    name: "Đồng bộ",
    align: "center",
    render: (cellValue) => {
      if (cellValue === true) {
        return (
          <EuiButtonIcon
            iconType="check"
            aria-label="Đồng bộ"
            size="l"
            color="success"
          />
        );
      }
      if (cellValue === false) {
        return (
          <EuiButtonIcon
            iconType="cross"
            aria-label="Không đồng bộ"
            size="l"
            color="danger"
          />
        );
      }
      return null;
    },
    mobileOptions: {
      header: true,
    },
  },
  {
    field: "actions",
    name: "Thao tác",
    align: "center",
    render: (trainee,item) => (
      <EuiProvider className="flex">
        <EuiToolTip position="top" content={`Chỉnh sửa thông tin`}>
          <EuiButtonIcon
            iconType="documentEdit"
            aria-label="Chỉnh sửa"
            size="s"
            color="primary"
            className="mx-2"
            onClick={() => showInfo(item)}
          />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Đăng ký vân tay`}>
          <EuiButtonIcon
            iconType="userAvatar"
            aria-label="Đồng bộ"
            size="s"
            color="danger"
            className="mx-2"
            onClick={() => showFinger(item)}
          />
        </EuiToolTip>
        <EuiToolTip position="top" content={`Xoá khoá học`}>
          <EuiButtonIcon
            iconType="cross"
            aria-label="Xoá"
            size="s"
            color="success"
            className="mx-2"
            onClick={() => showFace(item)}
          />
        </EuiToolTip>
      </EuiProvider>
    ),
    mobileOptions: {
      header: true,
    },
    width: "120px",
    className: "sticky right-0",
  },
];
