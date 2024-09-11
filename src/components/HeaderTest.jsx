import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  EuiAvatar,
  EuiBreadcrumbs,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderLogo,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiKeyPadMenu,
  EuiKeyPadMenuItem,
  EuiLink,
  EuiPopover,
  EuiPopoverFooter,
  EuiPopoverTitle,
  EuiSelectable,
  EuiSelectableMessage,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,
  useEuiTheme,
  EuiBadge,
  EuiPortal,
  EuiFlyoutBody,
  EuiHeaderAlert,
  EuiFlyoutFooter,
  EuiButtonEmpty,
  EuiFlyout,
  EuiFlyoutHeader,
  EuiTitle,
  EuiButtonIcon,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMe } from "../hooks/get";
import Breadcrumbs from "./Breadcrumbs";

const HeaderTest = ({ darkMode, setDarkMode, toggleSide }) => {
  const { data: meData, isLoading, error } = useMe();
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

  const [showHeaderText, setShowHeaderText] = useState(true);
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

  const renderLogo = () => (
    <>
      <EuiAvatar
        size="m"
        name="Your Logo Description"
        imageUrl={logo}
        className="mx-2"
      />
      <EuiButtonIcon
        iconType="menu"
        aria-label="Menu"
        size="m"
        color="black"
        onClick={toggleSide}
      />
    </>
  );

  const renderBreadcrumbs = () => {
    // const breadcrumbs = [
    //   {
    //     text: "Trang chủ",
    //     href: "#",
    //     onClick: (e) => {
    //       e.preventDefault();
    //     },
    //     "data-test-subj": "breadcrumbsAnimals",
    //     className: "customClass",
    //   },
    //   {
    //     text: "Học viên",
    //     href: "#",
    //     onClick: (e) => {
    //       e.preventDefault();
    //     },
    //   },
    //   {
    //     text: "Users",
    //     href: "#",
    //     onClick: (e) => {
    //       e.preventDefault();
    //     },
    //   },
    //   {
    //     text: "Hidden",
    //     href: "#",
    //     onClick: (e) => {
    //       e.preventDefault();
    //     },
    //   },
    //   {
    //     text: "Create",
    //   },
    // ];
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
      <EuiHeaderBreadcrumbs
        aria-label="Header breadcrumbs example"
        breadcrumbs={breadcrumbs}
      />
    );
  };

  const HeaderUserMenu = () => {
    const headerUserPopoverId = useGeneratedHtmlId({
      prefix: "headerUserPopover",
    });
    const [isOpen, setIsOpen] = useState(false);
    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };
    const closeMenu = () => {
      setIsOpen(false);
    };
    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerUserPopoverId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={onMenuButtonClick}
      >
        <EuiAvatar
          size="m"
          name="Klee"
          imageUrl="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/klee/image.png?strip=all&quality=75&w=256"
        />
      </EuiHeaderSectionItemButton>
    );

    return (
      <EuiPopover
        id={headerUserPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
        panelPaddingSize="m"
      >
        <div style={{ width: 300 }}>
          <EuiFlexGroup gutterSize="m" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiAvatar
                size="xl"
                name="Klee"
                imageUrl="https://i2.wp.com/genshinbuilds.aipurrjects.com/genshin/characters/klee/image.png?strip=all&quality=75&w=256"
              />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText>
                <p>Boom boom Bakudan</p>
              </EuiText>
              <EuiSpacer size="m" />
              <EuiFlexGroup>
                <EuiFlexItem>
                  <EuiFlexGroup justifyContent="spaceBetween">
                    <EuiFlexItem grow={false}>
                      <EuiLink>Chỉnh sửa hồ sơ</EuiLink>
                    </EuiFlexItem>
                    <EuiFlexItem grow={false}>
                      <EuiLink>Đăng xuất</EuiLink>
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </EuiPopover>
    );
  };

  const HeaderSpacesMenu = () => {
    const headerSpacesPopoverId = useGeneratedHtmlId({
      prefix: "headerSpacesPopover",
    });
    const spacesValues = [
      {
        label: "Sales team",
        prepend: <EuiAvatar type="space" name="Sales Team" size="s" />,
        checked: "on",
      },
      {
        label: "Engineering",
        prepend: <EuiAvatar type="space" name="Engineering" size="s" />,
      },
      {
        label: "Security",
        prepend: <EuiAvatar type="space" name="Security" size="s" />,
      },
      {
        label: "Default",
        prepend: <EuiAvatar type="space" name="Default" size="s" />,
      },
    ];

    const additionalSpaces = [
      {
        label: "Sales team 2",
        prepend: <EuiAvatar type="space" name="Sales Team 2" size="s" />,
      },
      {
        label: "Engineering 2",
        prepend: <EuiAvatar type="space" name="Engineering 2" size="s" />,
      },
      {
        label: "Security 2",
        prepend: <EuiAvatar type="space" name="Security 2" size="s" />,
      },
      {
        label: "Default 2",
        prepend: <EuiAvatar type="space" name="Default 2" size="s" />,
      },
    ];

    const [spaces, setSpaces] = useState(spacesValues);
    const [selectedSpace, setSelectedSpace] = useState(
      spaces.filter((option) => option.checked)[0]
    );
    const [isOpen, setIsOpen] = useState(false);

    const isListExtended = () => spaces.length > 4;

    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };

    const closePopover = () => {
      setIsOpen(false);
    };

    const onChange = (options) => {
      setSpaces(options);
      setSelectedSpace(options.filter((option) => option.checked)[0]);
      setIsOpen(false);
    };

    const addMoreSpaces = () => {
      setSpaces(spaces.concat(additionalSpaces));
    };

    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerSpacesPopoverId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Spaces menu"
        onClick={onMenuButtonClick}
      >
        {selectedSpace.prepend}
      </EuiHeaderSectionItemButton>
    );

    return (
      <EuiPopover
        id={headerSpacesPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downLeft"
        closePopover={closePopover}
        panelPaddingSize="none"
      >
        <EuiSelectable
          searchable={isListExtended()}
          searchProps={{
            placeholder: "Find a space",
            compressed: true,
          }}
          options={spaces}
          singleSelection="always"
          style={{ width: 300 }}
          onChange={onChange}
          listProps={{
            rowHeight: 40,
            showIcons: false,
          }}
        >
          {(list, search) => (
            <>
              <EuiPopoverTitle paddingSize="s">
                {search || "Your spaces"}
              </EuiPopoverTitle>
              {list}
              <EuiPopoverFooter paddingSize="s">
                <EuiButton
                  size="s"
                  fullWidth
                  onClick={addMoreSpaces}
                  disabled={isListExtended()}
                >
                  Add more spaces
                </EuiButton>
              </EuiPopoverFooter>
            </>
          )}
        </EuiSelectable>
      </EuiPopover>
    );
  };

  const HeaderAppMenu = () => {
    const headerAppPopoverId = useGeneratedHtmlId({
      prefix: "headerAppPopover",
    });
    const headerAppKeyPadMenuId = useGeneratedHtmlId({
      prefix: "headerAppKeyPadMenu",
    });
    const [isOpen, setIsOpen] = useState(false);

    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };

    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerAppKeyPadMenuId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Apps menu with 1 new app"
        notification="1"
        onClick={onMenuButtonClick}
      >
        <EuiIcon type="apps" size="m" />
      </EuiHeaderSectionItemButton>
    );

    return (
      <EuiPopover
        id={headerAppPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
      >
        <EuiKeyPadMenu id={headerAppKeyPadMenuId} style={{ width: 288 }}>
          <EuiKeyPadMenuItem label="Discover">
            <EuiIcon type="discoverApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Dashboard">
            <EuiIcon type="dashboardApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Dev Tools">
            <EuiIcon type="devToolsApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Machine Learning">
            <EuiIcon type="machineLearningApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Graph">
            <EuiIcon type="graphApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Visualize">
            <EuiIcon type="visualizeApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Timelion" betaBadgeLabel="Beta">
            <EuiIcon type="timelionApp" size="l" />
          </EuiKeyPadMenuItem>
        </EuiKeyPadMenu>
      </EuiPopover>
    );
  };
  const HeaderUpdates = () => {
    const { euiTheme } = useEuiTheme();
    const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);
    const newsFeedFlyoutId = useGeneratedHtmlId({ prefix: "newsFeedFlyout" });
    const newsFeedFlyoutTitleId = useGeneratedHtmlId({
      prefix: "newsFeedFlyoutTitle",
    });
    const newsFeedPopoverId = useGeneratedHtmlId({ prefix: "newsFeedPopover" });

    const alerts = [
      {
        title: "Control access to features",
        text: "Show or hide applications and features per space in Kibana.",
        action: <EuiLink href="">Learn about feature controls</EuiLink>,
        date: "1 May 2019",
        badge: <EuiBadge>7.1</EuiBadge>,
      },
      {
        title: "Kibana 7.0 is turning heads",
        text: "Simplified navigation, responsive dashboards, dark mode… pick your favorite.",
        action: (
          <EuiLink
            target="_blank"
            external
            href="https://www.elastic.co/blog/kibana-7-0-0-released"
          >
            Read the blog
          </EuiLink>
        ),
        date: "10 April 2019",
        badge: <EuiBadge color="hollow">7.0</EuiBadge>,
      },
      {
        title: "Enter dark mode",
        text: "Kibana now supports the easy-on-the-eyes theme across the entire UI.",
        action: <EuiLink href="">Go to Advanced Settings</EuiLink>,
        date: "10 April 2019",
        badge: <EuiBadge color="hollow">7.0</EuiBadge>,
      },
      {
        title: "Pixel-perfect Canvas is production ready",
        text: "Your creative space for visualizing data awaits.",
        action: (
          <EuiLink
            target="_blank"
            external
            href="https://www.elastic.co/webinars/intro-to-canvas-a-new-way-to-tell-visual-stories-in-kibana"
          >
            Watch the webinar
          </EuiLink>
        ),
        date: "26 March 2019",
        badge: <EuiBadge color="hollow">6.7</EuiBadge>,
      },
      {
        title: "6.7 release notes",
        text: "Stay up-to-date on the latest and greatest features.",
        action: (
          <EuiLink
            target="_blank"
            external
            href="https://www.elastic.co/guide/en/kibana/6.7/release-notes-6.7.0.html"
          >
            Check out the docs
          </EuiLink>
        ),
        date: "26 March 2019",
        badge: <EuiBadge color="hollow">6.7</EuiBadge>,
      },
      {
        title: "Rollups made simple in Kibana",
        text: "Save space and preserve the integrity of your data directly in the UI.",
        action: (
          <EuiLink
            target="_blank"
            external
            href="https://www.elastic.co/blog/how-to-create-manage-and-visualize-elasticsearch-rollup-data-in-kibana"
          >
            Read the blog
          </EuiLink>
        ),
        date: "10 January 2019",
        badge: <EuiBadge color="hollow">6.5</EuiBadge>,
      },
    ];

    const closeFlyout = () => {
      setIsFlyoutVisible(false);
    };

    const closePopover = () => {
      setIsPopoverVisible(false);
    };

    const showFlyout = () => {
      setIsFlyoutVisible(!isFlyoutVisible);
    };

    const showPopover = () => {
      setIsPopoverVisible(!isPopoverVisible);
    };

    const bellButton = (
      <EuiHeaderSectionItemButton
        aria-controls="headerFlyoutNewsFeed"
        aria-expanded={isFlyoutVisible}
        aria-haspopup="true"
        aria-label={"Alerts feed: Updates available"}
        onClick={() => showFlyout()}
        notification={true}
      >
        <EuiIcon type="bell" />
      </EuiHeaderSectionItemButton>
    );

    const cheerButton = (
      <EuiHeaderSectionItemButton
        aria-controls="headerPopoverNewsFeed"
        aria-expanded={isPopoverVisible}
        aria-haspopup="true"
        aria-label={"News feed: Updates available'"}
        onClick={showPopover}
        notification={6}
      >
        <EuiIcon type="editorComment" size="l" />
      </EuiHeaderSectionItemButton>
    );

    const flyout = (
      <EuiPortal>
        <EuiFlyout
          onClose={closeFlyout}
          size="s"
          id={newsFeedFlyoutId}
          aria-labelledby={newsFeedFlyoutTitleId}
        >
          <EuiFlyoutHeader hasBorder>
            <EuiTitle size="s">
              <h2 id={newsFeedFlyoutTitleId}>What&apos;s new</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            {alerts.map((alert, i) => (
              <EuiHeaderAlert
                key={`alert-${i}`}
                title={alert.title}
                action={alert.action}
                text={alert.text}
                date={alert.date}
                badge={alert.badge}
              />
            ))}
          </EuiFlyoutBody>
          <EuiFlyoutFooter>
            <EuiFlexGroup justifyContent="spaceBetween" alignItems="center">
              <EuiFlexItem grow={false}>
                <EuiButtonEmpty
                  iconType="cross"
                  onClick={closeFlyout}
                  flush="left"
                >
                  Close
                </EuiButtonEmpty>
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiText color="subdued" size="s">
                  <p>Version 7.0</p>
                </EuiText>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlyoutFooter>
        </EuiFlyout>
      </EuiPortal>
    );

    const popover = (
      <EuiPopover
        id={newsFeedPopoverId}
        ownFocus
        repositionOnScroll
        button={cheerButton}
        isOpen={isPopoverVisible}
        closePopover={closePopover}
        panelPaddingSize="none"
      >
        <EuiPopoverTitle paddingSize="s">What&apos;s new</EuiPopoverTitle>
        <div
          style={{
            maxHeight: "40vh",
            overflowY: "auto",
            padding: euiTheme.size.s,
          }}
        >
          <EuiSpacer size="s" />
          {alerts.map((alert, i) => (
            <EuiHeaderAlert
              key={`alert-${i}`}
              title={alert.title}
              action={alert.action}
              text={alert.text}
              date={alert.date}
              badge={alert.badge}
            />
          ))}
        </div>
        <EuiPopoverFooter paddingSize="s">
          <EuiText color="subdued" size="s">
            <p>Version 7.0</p>
          </EuiText>
        </EuiPopoverFooter>
      </EuiPopover>
    );

    return (
      <>
        {bellButton}
        {popover}
        {isFlyoutVisible && flyout}
      </>
    );
  };

  return (
    <EuiHeader className="w-full">
      <EuiHeaderSection>
        <EuiHeaderSectionItem>{renderLogo()}</EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <HeaderSpacesMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
      {renderBreadcrumbs()}
      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem>
          <HeaderUpdates />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <HeaderUserMenu />
        </EuiHeaderSectionItem>
        <EuiHeaderSectionItem>
          <HeaderAppMenu />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};

export default HeaderTest;
