import styled from 'styled-components';
import { forwardRef } from 'react';
import { BookOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';

export type NavItemId = 'search' | 'bookmarks' | 'settings';

type NavItemProps = {
  activeItem: NavItemId;
  setActiveItem: (item: NavItemId) => void;
};

const BottomNavigation = forwardRef<HTMLElement, NavItemProps>(
  ({ setActiveItem, activeItem }, bottomNavRef) => {
    const NavItem = ({
      id,
      Icon,
      label,
    }: {
      id: NavItemId;
      Icon: React.ElementType;
      label: string;
    }) => (
      <NavItemContainer
        $active={activeItem === id}
        onClick={() => setActiveItem(id)}
      >
        <Icon size={20} />
        <Label>{label}</Label>
      </NavItemContainer>
    );

    return (
      <NavBar ref={bottomNavRef}>
        <NavItem id="search" Icon={SearchOutlined} label="Search" />
        <NavItem id="bookmarks" Icon={BookOutlined} label="Bookmarks" />
        <NavItem id="settings" Icon={SettingOutlined} label="Settings" />
      </NavBar>
    );
  }
);

export default BottomNavigation;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  z-index: 1000;
  width: 100%;
`;

type NavItemContainerProps = {
  $active: boolean;
};

const NavItemContainer = styled.div<NavItemContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $active }) =>
    $active ? 'rgb(25, 118, 210)' : 'rgba(0, 0, 0, 0.6)'};
  transition: color 0.3s ease;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: inherit;
  margin-top: 4px;
`;
