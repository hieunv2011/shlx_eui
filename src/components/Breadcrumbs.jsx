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
  } else if (currentPath === "/trainningcar") {
    headerLogoText = "DANH SÁCH XE TẬP LÁI";
  } else if (currentPath === "/outdoor") {
    headerLogoText = "GIÁM SÁT THỰC HÀNH";
  } else if (currentPath === "/trainees/:course_id") {
    headerLogoText = "Trainees Detail";
  } else if (currentPath ==="/learn"){
    headerLogoText = "HỌC LÁI XE";
  }
   else {
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
    {
      label: "Học lái xe",
      onClick: () => navigate("/learn"),
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




// import React, { useState } from 'react';
// import {
//   EuiAvatar,
//   EuiBreadcrumbs,
//   EuiButton,
//   EuiFlexGroup,
//   EuiFlexItem,
//   EuiHeader,
//   EuiHeaderBreadcrumbs,
//   EuiHeaderLogo,
//   EuiHeaderSection,
//   EuiHeaderSectionItem,
//   EuiHeaderSectionItemButton,
//   EuiIcon,
//   EuiKeyPadMenu,
//   EuiKeyPadMenuItem,
//   EuiLink,
//   EuiPopover,
//   EuiPopoverFooter,
//   EuiPopoverTitle,
//   EuiSelectable,
//   EuiSelectableMessage,
//   EuiSpacer,
//   EuiText,
//   useGeneratedHtmlId,
// } from '@elastic/eui';
// import { Link } from 'react-router-dom';

// const Breadcrumbs = () => {
//   const renderLogo = () => (
//     <EuiHeaderLogo
//       iconType="logoElastic"
//       href="#"
//       onClick={(e) => e.preventDefault()}
//       aria-label="Go to home page"
//     />
//   );

//   const renderBreadcrumbs = () => {
//     const breadcrumbs = [
//       {
//         text: 'Management',
//         href: '#',
//         onClick: (e) => {
//           e.preventDefault();
//         },
//         'data-test-subj': 'breadcrumbsAnimals',
//         className: 'customClass',
//       },
//       {
//         text: 'Truncation test is here for a really long item',
//         href: '#',
//         onClick: (e) => {
//           e.preventDefault();
//         },
//       },
//       {
//         text: 'Hidden',
//         href: '#',
//         onClick: (e) => {
//           e.preventDefault();
//         },
//       },
//       {
//         text: 'Users',
//         href: '#',
//         onClick: (e) => {
//           e.preventDefault();
//         },
//       },
//       {
//         text: 'Create',
//       },
//     ];

//     return (
//       <EuiHeaderBreadcrumbs
//         aria-label="Header breadcrumbs example"
//         breadcrumbs={breadcrumbs}
//       />
//     );
//   };

//   const search = (
//     <EuiSelectable
//       options={[]}
//       searchProps={{
//         compressed: true,
//       }}
//       popoverButton={
//         <EuiHeaderSectionItemButton aria-label="Sitewide search">
//           <EuiIcon type="search" size="m" />
//         </EuiHeaderSectionItemButton>
//       }
//       emptyMessage={
//         <EuiSelectableMessage style={{ minHeight: 300 }}>
//           <p>
//             Please see the component page for{' '}
//             <Link to="/forms/selectable">
//               <strong>EuiSelectableTemplateSitewide</strong>
//             </Link>{' '}
//             on how to configure your sitewide search.
//           </p>
//         </EuiSelectableMessage>
//       }
//     />
//   );

//   return (
//     <EuiHeader>
//       <EuiHeaderSection>
//         <EuiHeaderSectionItem>{renderLogo()}</EuiHeaderSectionItem>
//         <EuiHeaderSectionItem>
//           <HeaderSpacesMenu />
//         </EuiHeaderSectionItem>
//       </EuiHeaderSection>
//       {renderBreadcrumbs()}
//       <EuiHeaderSection side="right">
//         <EuiHeaderSectionItem>{search}</EuiHeaderSectionItem>
//         <EuiHeaderSectionItem>
//           <HeaderUserMenu />
//         </EuiHeaderSectionItem>
//         <EuiHeaderSectionItem>
//           <HeaderAppMenu />
//         </EuiHeaderSectionItem>
//       </EuiHeaderSection>
//     </EuiHeader>
//   );
// };

// const HeaderUserMenu = () => {
//   const headerUserPopoverId = useGeneratedHtmlId({
//     prefix: 'headerUserPopover',
//   });
//   const [isOpen, setIsOpen] = useState(false);
//   const onMenuButtonClick = () => {
//     setIsOpen(!isOpen);
//   };
//   const closeMenu = () => {
//     setIsOpen(false);
//   };
//   const button = (
//     <EuiHeaderSectionItemButton
//       aria-controls={headerUserPopoverId}
//       aria-expanded={isOpen}
//       aria-haspopup="true"
//       aria-label="Account menu"
//       onClick={onMenuButtonClick}
//     >
//       <EuiAvatar name="John Username" size="s" />
//     </EuiHeaderSectionItemButton>
//   );

//   return (
//     <EuiPopover
//       id={headerUserPopoverId}
//       button={button}
//       isOpen={isOpen}
//       anchorPosition="downRight"
//       closePopover={closeMenu}
//       panelPaddingSize="m"
//     >
//       <div style={{ width: 300 }}>
//         <EuiFlexGroup gutterSize="m" responsive={false}>
//           <EuiFlexItem grow={false}>
//             <EuiAvatar name="John Username" size="xl" />
//           </EuiFlexItem>
//           <EuiFlexItem>
//             <EuiText>
//               <p>John Username</p>
//             </EuiText>
//             <EuiSpacer size="m" />
//             <EuiFlexGroup>
//               <EuiFlexItem>
//                 <EuiFlexGroup justifyContent="spaceBetween">
//                   <EuiFlexItem grow={false}>
//                     <EuiLink>Edit profile</EuiLink>
//                   </EuiFlexItem>
//                   <EuiFlexItem grow={false}>
//                     <EuiLink>Log out</EuiLink>
//                   </EuiFlexItem>
//                 </EuiFlexGroup>
//               </EuiFlexItem>
//             </EuiFlexGroup>
//           </EuiFlexItem>
//         </EuiFlexGroup>
//       </div>
//     </EuiPopover>
//   );
// };

// const HeaderSpacesMenu = () => {
//   const headerSpacesPopoverId = useGeneratedHtmlId({
//     prefix: 'headerSpacesPopover',
//   });
//   const spacesValues = [
//     {
//       label: 'Sales team',
//       prepend: <EuiAvatar type="space" name="Sales Team" size="s" />,
//       checked: 'on',
//     },
//     {
//       label: 'Engineering',
//       prepend: <EuiAvatar type="space" name="Engineering" size="s" />,
//     },
//     {
//       label: 'Security',
//       prepend: <EuiAvatar type="space" name="Security" size="s" />,
//     },
//     {
//       label: 'Default',
//       prepend: <EuiAvatar type="space" name="Default" size="s" />,
//     },
//   ];

//   const additionalSpaces = [
//     {
//       label: 'Sales team 2',
//       prepend: <EuiAvatar type="space" name="Sales Team 2" size="s" />,
//     },
//     {
//       label: 'Engineering 2',
//       prepend: <EuiAvatar type="space" name="Engineering 2" size="s" />,
//     },
//     {
//       label: 'Security 2',
//       prepend: <EuiAvatar type="space" name="Security 2" size="s" />,
//     },
//     {
//       label: 'Default 2',
//       prepend: <EuiAvatar type="space" name="Default 2" size="s" />,
//     },
//   ];

//   const [spaces, setSpaces] = useState(spacesValues);
//   const [selectedSpace, setSelectedSpace] = useState(
//     spaces.filter((option) => option.checked)[0]
//   );
//   const [isOpen, setIsOpen] = useState(false);

//   const isListExtended = () => spaces.length > 4;

//   const onMenuButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const closePopover = () => {
//     setIsOpen(false);
//   };

//   const onChange = (options) => {
//     setSpaces(options);
//     setSelectedSpace(options.filter((option) => option.checked)[0]);
//     setIsOpen(false);
//   };

//   const addMoreSpaces = () => {
//     setSpaces(spaces.concat(additionalSpaces));
//   };

//   const button = (
//     <EuiHeaderSectionItemButton
//       aria-controls={headerSpacesPopoverId}
//       aria-expanded={isOpen}
//       aria-haspopup="true"
//       aria-label="Spaces menu"
//       onClick={onMenuButtonClick}
//     >
//       {selectedSpace.prepend}
//     </EuiHeaderSectionItemButton>
//   );

//   return (
//     <EuiPopover
//       id={headerSpacesPopoverId}
//       button={button}
//       isOpen={isOpen}
//       anchorPosition="downLeft"
//       closePopover={closePopover}
//       panelPaddingSize="none"
//     >
//       <EuiSelectable
//         searchable={isListExtended()}
//         searchProps={{
//           placeholder: 'Find a space',
//           compressed: true,
//         }}
//         options={spaces}
//         singleSelection="always"
//         style={{ width: 300 }}
//         onChange={onChange}
//         listProps={{
//           rowHeight: 40,
//           showIcons: false,
//         }}
//       >
//         {(list, search) => (
//           <>
//             <EuiPopoverTitle paddingSize="s">
//               {search || 'Your spaces'}
//             </EuiPopoverTitle>
//             {list}
//             <EuiPopoverFooter paddingSize="s">
//               <EuiButton
//                 size="s"
//                 fullWidth
//                 onClick={addMoreSpaces}
//                 disabled={isListExtended()}
//               >
//                 Add more spaces
//               </EuiButton>
//             </EuiPopoverFooter>
//           </>
//         )}
//       </EuiSelectable>
//     </EuiPopover>
//   );
// };

// const HeaderAppMenu = () => {
//   const headerAppPopoverId = useGeneratedHtmlId({ prefix: 'headerAppPopover' });
//   const headerAppKeyPadMenuId = useGeneratedHtmlId({
//     prefix: 'headerAppKeyPadMenu',
//   });
//   const [isOpen, setIsOpen] = useState(false);

//   const onMenuButtonClick = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const button = (
//     <EuiHeaderSectionItemButton
//       aria-controls={headerAppKeyPadMenuId}
//       aria-expanded={isOpen}
//       aria-haspopup="true"
//       aria-label="Apps menu with 1 new app"
//       notification="1"
//       onClick={onMenuButtonClick}
//     >
//       <EuiIcon type="apps" size="m" />
//     </EuiHeaderSectionItemButton>
//   );

//   return (
//     <EuiPopover
//       id={headerAppPopoverId}
//       button={button}
//       isOpen={isOpen}
//       anchorPosition="downRight"
//       closePopover={closeMenu}
//     >
//       <EuiKeyPadMenu id={headerAppKeyPadMenuId} style={{ width: 288 }}>
//         <EuiKeyPadMenuItem label="Discover">
//           <EuiIcon type="discoverApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Dashboard">
//           <EuiIcon type="dashboardApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Dev Tools">
//           <EuiIcon type="devToolsApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Machine Learning">
//           <EuiIcon type="machineLearningApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Graph">
//           <EuiIcon type="graphApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Visualize">
//           <EuiIcon type="visualizeApp" size="l" />
//         </EuiKeyPadMenuItem>
//         <EuiKeyPadMenuItem label="Timelion" betaBadgeLabel="Beta">
//           <EuiIcon type="timelionApp" size="l" />
//         </EuiKeyPadMenuItem>
//       </EuiKeyPadMenu>
//     </EuiPopover>
//   );
// };

// // export { Breadcrumbs, HeaderUserMenu, HeaderSpacesMenu, HeaderAppMenu };
// export default Breadcrumbs;
