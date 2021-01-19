import React from 'react'
import Search20 from "@carbon/icons-react/lib/search/20";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Fade16 from "@carbon/icons-react/lib/fade/16";
import {
      Header,
      HeaderMenuButton,
      HeaderName,
      HeaderNavigation,
      HeaderMenu,
      HeaderMenuItem,
      HeaderGlobalBar,
      HeaderGlobalAction,
      HeaderSideNavItems,
      SkipToContent,
      SideNav,
      SideNavItems,
      SideNavLink,
      SideNavMenu,
      SideNavMenuItem,
        HeaderContainer,
} from 'carbon-components-react'




function TheNavigation(){


    return (
        <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <>

        <Header aria-label="IBM Platform Name">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="#" prefix="">
            [StockTrends]
          </HeaderName>
          <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Search">

              <Search20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="Notifications">

              <Notification20 />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher">

              <AppSwitcher20 />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
          <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
            <SideNavItems>
              <HeaderSideNavItems hasDivider={true}>
                <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
                <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
                <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
                  <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
                </HeaderMenu>
              </HeaderSideNavItems>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu renderIcon={Fade16} title="Category title">
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavMenu
                renderIcon={Fade16}
                title="Category title"
                isActive={true}>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem aria-current="page" href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
                <SideNavMenuItem href="javascript:void(0)">
                  Link
                </SideNavMenuItem>
              </SideNavMenu>
              <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                Link
              </SideNavLink>
              <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
                Link
              </SideNavLink>
            </SideNavItems>
          </SideNav>
        </Header>
          </>
    )}
  />
    )
}

export default TheNavigation