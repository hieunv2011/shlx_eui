import React from "react";
import {
    EuiHealth,
    EuiButtonIcon,
    EuiToolTip,
    EuiAvatar,
    EuiLink,
    EuiProvider,
} from "@elastic/eui";
// Chỉnh sửa để nhận hàm `showModal` từ component cha
export const createColumns = (
    showModal,
) => [
        {
            field: "name",
            name: "Họ và tên",
            render: (trainee, item) => (
                <EuiLink onClick={() => showModal(item)}>{trainee}</EuiLink>
            ),
            mobileOptions: {
                header: true,
            },
            width: "150px",
        },
        {
            field: "image_path",
            name: "",
            render: (cellValue) => {
                return <EuiAvatar size="l" name="" imageUrl={cellValue} iconType="userAvatar" color="#0084D8" />;
            },
            mobileOptions: {
                header: true,
            },
            width: "80px",
        },
        // {
        //     field: "gender",
        //     name: "Giới tính",
        //     mobileOptions: {
        //         header: true,
        //     },
        //     render: (cellValue) => {
        //         return cellValue === 1 ? "Nam" : "Nữ";
        //     },
        //     width:"65px"
        // },
        // {
        //     field: "birthday",
        //     name: "Ngày sinh",
        //     mobileOptions: {
        //         header: true,
        //     },
        //     align: "center",
        //     width: "120px",
        //     render: (item) => format(new Date(item), "dd/MM/yyyy"),
        // },
        {
            field: "id_card",
            name: "CMT",
            mobileOptions: {
                header: true,
            },
            align: "center",
            width: "140px",
        },
        {
            field: "address",
            name: "Địa chỉ",
            mobileOptions: {
                header: true,
            },
            width: "140px",
            align: "center",
        },
        {
            field: "level",
            name: "Hạng",
            mobileOptions: {
                header: true,
            },
            align: "center",
            width: "120px"
        },
        {
            field: "driving_license_no",
            name: "GPLX",
            align: "center",
            mobileOptions: {
                header: true,
            },
            width: "80px",
        },
        {
            field: "teaching_license_no",
            name: "Số GCN",
            align: "center",
            mobileOptions: {
                header: true,
            },
            width: "80px",
        },
        {
            field: "rfid_card_name",
            name: "Tên thẻ",
            align: "center",
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
            mobileOptions: {
                header: true,
            },
            className: "sticky right-0",
            render: (cellValue) => {
                return cellValue ? (
                    <EuiHealth color="success"></EuiHealth>
                ) : (
                    <EuiHealth color="danger"></EuiHealth>
                );
            },
        },
        
        {
            field: "actions",
            name: "Thao tác",
            align: "center",
            render: (trainee, item) => (
                <EuiProvider className="flex">
                    <EuiToolTip position="top" content={`Chỉnh sửa thông tin`}>
                        <EuiButtonIcon
                            iconType="documentEdit"
                            aria-label="Chỉnh sửa"
                            size="s"
                            color="primary"
                            className="mx-2"
                            onClick={() => showModal(item)}
                        />
                    </EuiToolTip>
                </EuiProvider>
            ),
            mobileOptions: {
                header: true,
            },
            className: "sticky right-0",
        },
    ];
