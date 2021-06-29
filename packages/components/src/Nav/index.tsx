import styled from 'styled-components';
import { lightTheme } from '../theme';

export interface NavProps {
  /**
   * Children DOM
   */
  children?: any;
}
export interface NavLeftProps {
  /**
   * Children DOM
   */
  children?: any;
}
export interface NavRightProps {
  /**
   * Children DOM
   */
  children?: any;
}
export interface NavItemProps {
  /**
   * Children DOM
   */
  children?: any;
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  font-family: ${lightTheme.fontFamily};
  padding: 15px;
  height: 60px;
`;

const StyledNavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavRight = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavItem = styled.span`
  padding: 0 16px;
`

/**
 * Nav components
 */
export const Nav = ({
  ...props
}: NavProps) => {
  return (
    <StyledNav {...props}>
      {props.children}
    </StyledNav>
  );
};

export const NavLeft = ({
  ...props
}: NavLeftProps) => {
  return (
    <StyledNavLeft>
      {props.children}
    </StyledNavLeft>
  );
};

export const NavRight = ({
  ...props
}: NavRightProps) => {
  return (
    <StyledNavRight>
      {props.children}
    </StyledNavRight>
  );
};

export const NavItem = ({
  ...props
}: NavItemProps) => {
  return (
    <StyledNavItem>
      {props.children}
    </StyledNavItem>
  );
};
