import { Light, Moon } from "@carbon/icons-react";
import {
  Header,
  HeaderContainer,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  SideNav,
  SideNavItems,
  SideNavLink,
} from "@carbon/react";

const MOBILE_NAV_ID = "wfm-site-mobile-navigation";

const primaryItems = [
  ["Product", "#product"],
  ["Features", "#features"],
  ["Install", "#install"],
  ["Architecture", "#architecture"],
];

export function SiteHeader({ theme, onToggleTheme }) {
  const isDark = theme === "g90" || theme === "g100";
  const ThemeIcon = isDark ? Light : Moon;
  const targetTheme = isDark ? "light" : "dark";

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="wFileManager">
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? "Close navigation" : "Open navigation"}
              aria-expanded={isSideNavExpanded}
              aria-controls={MOBILE_NAV_ID}
              isActive={isSideNavExpanded}
              onClick={onClickSideNavExpand}
            />
            <HeaderName href="#top" prefix="">
              wFileManager
            </HeaderName>
            <HeaderNavigation aria-label="Primary navigation">
              {primaryItems.map(([label, href]) => (
                <HeaderMenuItem key={href} href={href}>
                  {label}
                </HeaderMenuItem>
              ))}
              <HeaderMenuItem href="https://kmerhosting.com/docs">Docs</HeaderMenuItem>
              <HeaderMenuItem href="https://github.com/KmerHosting/wfilemanager">GitHub</HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label={`Switch to ${targetTheme} theme`}
                tooltipAlignment="end"
                onClick={onToggleTheme}
              >
                <ThemeIcon size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
          </Header>

          <SideNav
            id={MOBILE_NAV_ID}
            aria-label="Mobile navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
            onOverlayClick={onClickSideNavExpand}
          >
            <SideNavItems>
              {primaryItems.map(([label, href]) => (
                <SideNavLink key={href} href={href} onClick={onClickSideNavExpand}>
                  {label}
                </SideNavLink>
              ))}
              <SideNavLink href="https://kmerhosting.com/docs">Documentation</SideNavLink>
              <SideNavLink href="https://github.com/KmerHosting/wfilemanager">GitHub</SideNavLink>
            </SideNavItems>
          </SideNav>
        </>
      )}
    />
  );
}
