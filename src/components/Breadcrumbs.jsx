// import React, { useState } from "react";
// import {
//   EuiPopoverTitle,
//   EuiPopoverFooter,
//   EuiContextMenuPanel,
//   EuiSelectable,
//   EuiButton,
//   EuiContextMenuItem,
//   EuiAvatar,
//   EuiBreadcrumbs,
// } from "@elastic/eui";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// const Breadcrumbs = () => {
//   const navigate = useNavigate(); // Initialize useNavigate
//   const currentPath = window.location.pathname;
//   let headerLogoText;

//   // Logic xác định headerLogoText dựa trên currentPath
//   if (currentPath === "/trainees") {
//     headerLogoText = "HỌC VIÊN";
//   } else if (currentPath === "/another-path") {
//     headerLogoText = "Another Page";
//   } else if (currentPath === "/card") {
//     headerLogoText = "DANH SÁCH THẺ";
//   } else if (currentPath === "/course") {
//     headerLogoText = "DANH SÁCH KHOÁ HỌC";
//   } else if (currentPath === "/dat") {
//     headerLogoText = "THIẾT BỊ DAT";
//   } else if (currentPath === "/session") {
//     headerLogoText = "DANH SÁCH PHIÊN HỌC";
//   } else if (currentPath === "/teacher") {
//     headerLogoText = "DANH SÁCH GIÁO VIÊN";
//   } else if (currentPath === "/trainningcar") {
//     headerLogoText = "DANH SÁCH XE TẬP LÁI";
//   } else if (currentPath === "/outdoor") {
//     headerLogoText = "GIÁM SÁT THỰC HÀNH";
//   } else if (currentPath === "/trainees/:course_id") {
//     headerLogoText = "Trainees Detail";
//   } else {
//     headerLogoText = "Default Header Text";
//   }

//   const [spaces, setSpaces] = useState([
//     {
//       label: "Dashboard",
//       checked: "on",
//       prepend: (
//         <EuiAvatar type="space" size="s" name="Jim" iconType="dashboardApp" />
//       ),
//     },
//     {
//       label: "Tài khoản",
//       prepend: <EuiAvatar type="space" size="s" name="Jim" iconType="user" />,
//     },
//     {
//       label: "Cài đặt",
//       prepend: <EuiAvatar type="space" size="s" name="Pam" iconType="gear" />,
//     },
//     {
//       label: "Hệ thống",
//       prepend: (
//         <EuiAvatar
//           type="space"
//           size="s"
//           name="Michael"
//           iconType="managementApp"
//         />
//       ),
//     },
//     {
//       label: "Học viên",
//       prepend: (
//         <EuiAvatar type="space" size="s" name="Dwight" iconType="users" />
//       ),
//     },
//   ]);

//   const [showHeaderText, setShowHeaderText] = useState(true);

//   const handleSpaceChange = (newOptions) => {
//     setSpaces(newOptions);
//     const selectedSpace = newOptions.find((space) => space.checked === "on");

//     if (selectedSpace) {
//       if (["Dashboard", "Tài khoản", "Cài đặt"].includes(selectedSpace.label)) {
//         setShowHeaderText(false);
//       } else {
//         setShowHeaderText(true);
//         if (selectedSpace.label === "Hệ thống") {
//           navigate("/dat"); // Sử dụng navigate để điều hướng
//         } else if (selectedSpace.label === "Học viên") {
//           navigate("/course"); // Sử dụng navigate để điều hướng
//         }
//       }
//     }
//   };

//   const breadcrumbs = [
//     {
//       text: "Trang chủ",
//     },
//     {
//       text: spaces.find((space) => space.checked === "on")?.label,
//       popoverContent: (
//         <EuiSelectable
//           singleSelection="always"
//           options={spaces}
//           onChange={handleSpaceChange}
//           searchable
//           searchProps={{ placeholder: "Filter spaces", compressed: true }}
//           aria-label="Space switcher"
//           emptyMessage="No spaces available"
//           noMatchesMessage="No spaces found"
//         >
//           {(list, search) => (
//             <>
//               <EuiPopoverTitle paddingSize="s">Tìm kiếm</EuiPopoverTitle>
//               <EuiPopoverTitle paddingSize="s">{search}</EuiPopoverTitle>
//               {list}
//               <EuiPopoverFooter paddingSize="s">
//                 <EuiButton fullWidth size="s" iconType="gear"></EuiButton>
//               </EuiPopoverFooter>
//             </>
//           )}
//         </EuiSelectable>
//       ),
//       popoverProps: { panelPaddingSize: "none" },
//     },
//   ];

//   if (showHeaderText) {
//     breadcrumbs.push({
//       text: headerLogoText,
//     });
//   }

//   return (
//     <>
//       <EuiBreadcrumbs
//         breadcrumbs={breadcrumbs}
//         truncate={false}
//         aria-label="An example of EuiBreadcrumbs"
//       />
//     </>
//   );
// };

// export default Breadcrumbs;

import React, { useState } from "react";
import {
  EuiPopoverTitle,
  EuiPopoverFooter,
  EuiContextMenuPanel,
  EuiSelectable,
  EuiButton,
  EuiContextMenuItem,
  EuiAvatar,
  EuiBreadcrumbs,
} from "@elastic/eui";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  let headerLogoText;
  if (currentPath === "/trainees") {
    headerLogoText = "HỌC VIÊN";
  } else if (currentPath === "/another-path") {
    headerLogoText = "Another Page";
  } else if (currentPath === "/card") {
    headerLogoText = "DANH SÁCH THẺ";
  } else if (currentPath === "/course") {
    headerLogoText = "DANH SÁCH KHOÁ HỌC";
  } else if (currentPath === "/dat") {
    headerLogoText = "THIẾT BỊ DAT";
  } else if (currentPath === "/session") {
    headerLogoText = "DANH SÁCH PHIÊN HỌC";
  } else if (currentPath === "/teacher") {
    headerLogoText = "DANH SÁCH GIÁO VIÊN";
  } else if (currentPath === "/trainningcar") {
    headerLogoText = "DANH SÁCH XE TẬP LÁI";
  } else if (currentPath === "/outdoor") {
    headerLogoText = "GIÁM SÁT THỰC HÀNH";
  } else if (currentPath === "/trainees/:course_id") {
    headerLogoText = "Trainees Detail";
  } else {
    headerLogoText = "Default Header Text";
  }

  const [spaces, setSpaces] = useState([
    {
      label: "Dashboard",
      prepend: (
        <EuiAvatar type="space" size="s" name="Jim" iconType="dashboardApp" />
      ),
    },
    {
      label: "Tài khoản",
      prepend: <EuiAvatar type="space" size="s" name="Jim" iconType="user" />,
    },
    {
      label: "Cài đặt",
      prepend: <EuiAvatar type="space" size="s" name="Pam" iconType="gear" />,
    },
    {
      label: "Hệ thống",
      prepend: (
        <EuiAvatar
          type="space"
          size="s"
          name="Michael"
          iconType="managementApp"
        />
      ),
    },
    {
      label: "Học viên",
      checked: "on",
      prepend: (
        <EuiAvatar type="space" size="s" name="Dwight" iconType="users" />
      ),
    },
  ]);

  const [showHeaderText, setShowHeaderText] = useState(true);

  const handleSpaceChange = (newOptions) => {
    setSpaces(newOptions);
    const selectedSpace = newOptions.find((space) => space.checked === "on");

    if (selectedSpace) {
      if (["Dashboard", "Tài khoản", "Cài đặt"].includes(selectedSpace.label)) {
        setShowHeaderText(false);
      } else {
        setShowHeaderText(true);
        if (selectedSpace.label === "Hệ thống") {
          navigate("/dat");
        } else if (selectedSpace.label === "Học viên") {
          navigate("/course");
        }
      }
    }
  };

  const systemItems = [
    {
      label: "Thiết bị DAT",
      onClick: () => navigate("/dat"),
    },
    {
      label: "Xe tập lái",
      onClick: () => navigate("/trainningcar"),
    },
    {
      label: "Danh sách thẻ",
      onClick: () => navigate("/card"),
    },
    {
      label: "Danh sách giáo viên",
      onClick: () => navigate("/teacher"),
    },
  ];

  const traineeItems = [
    {
      label: "Danh sách khoá học",
      onClick: () => navigate("/course"),
    },
    {
      label: "Danh sách học viên",
      onClick: () => navigate("/trainees"),
    },
    {
      label: "Danh sách phiên học",
      onClick: () => navigate("/session"),
    },
    {
      label: "Giám sát thực hành",
      onClick: () => navigate("/outdoor"),
    },
    {
      label: "Xem dữ liệu",
      onClick: () => navigate("/data"),
    },
  ];

  const breadcrumbs = [
    {
      text: "Trang chủ",
    },
    {
      text: spaces.find((space) => space.checked === "on")?.label,
      popoverContent: (
        <EuiSelectable
          singleSelection="always"
          options={spaces}
          onChange={handleSpaceChange}
          searchable
          searchProps={{ placeholder: "Filter spaces", compressed: true }}
          aria-label="Space switcher"
          emptyMessage="No spaces available"
          noMatchesMessage="No spaces found"
        >
          {(list, search) => (
            <>
              <EuiPopoverTitle paddingSize="s">Tìm kiếm</EuiPopoverTitle>
              <EuiPopoverTitle paddingSize="s">{search}</EuiPopoverTitle>
              {list}
              <EuiPopoverFooter paddingSize="s">
                <EuiButton fullWidth size="s" iconType="gear"></EuiButton>
              </EuiPopoverFooter>
            </>
          )}
        </EuiSelectable>
      ),
      popoverProps: { panelPaddingSize: "none" },
    },
  ];

  if (showHeaderText) {
    breadcrumbs.push({
      text: headerLogoText,
  popoverContent: (
    <EuiSelectable
      singleSelection="always"
      options={currentPath.startsWith("/dat") || currentPath.startsWith("/trainningcar") || currentPath.startsWith("/card") || currentPath.startsWith("/teacher") ? systemItems : traineeItems}
      onChange={(newOptions) => {
        const selectedOption = newOptions.find(option => option.checked === "on");
        if (selectedOption) selectedOption.onClick();
      }}
      aria-label="Chọn danh mục"
      className="w-60"
    >
      {(list) => (
        <>
          <EuiPopoverTitle paddingSize="s">Tìm kiếm</EuiPopoverTitle>
          {list}
        </>
      )}
    </EuiSelectable>
  ),
  popoverProps: { 
    panelPaddingSize: "100", 
  },
    });
  }

  return (
    <>
      <EuiBreadcrumbs
        breadcrumbs={breadcrumbs}
        truncate={false}
        aria-label="An example of EuiBreadcrumbs"
      />
    </>
  );
};

export default Breadcrumbs;
