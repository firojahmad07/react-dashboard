import { KeenIcon } from '@/components/keenicons';
import { useContext } from 'react';
import { Demo4LayoutContext } from '@/layouts/demo4/Demo4LayoutProvider';

import {
  Menu,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuToggle
} from '@/components/menu';
import { useLanguage } from '@/i18n';

interface IDropdownItem {
  title: string;
  path: string;
  icon: string;
  active?: boolean;
}

interface IMenuItem {
  title: string;
  path?: string;
  active?: boolean;
  children?: IMenuItem[];
}

const SidebarMenuDashboard = () => {
  const dropdownItems: IDropdownItem[] = [
    {
      title: 'Client API',
      path: '/account/home/user-profile',
      icon: 'calendar',
      active: true
    },
    {
      title: 'Profile',
      path: '/public-profile/profiles/company',
      icon: 'profile-circle'
    },
    {
      title: 'My Account',
      path: '/account/integrations',
      icon: 'setting-2'
    },
    {
      title: 'Projects',
      path: '/public-profile/projects/3-columns',
      icon: 'questionnaire-tablet'
    },
    {
      title: 'Personal info',
      path: '/public-profile/profiles/creator',
      icon: 'badge'
    }
  ];
  const { isRTL } = useLanguage();

  const { sidebarData } =  useContext(Demo4LayoutContext);
  // const menuItems: IMenuItem[] = sidebarData;

  const buildDropdown = () => {
    return (
      <Menu highlight={true} className="menu-default p-0 w-full px-2">
        <MenuItem
          className="w-full px-0.5"
          toggle="dropdown"
          trigger="hover"
          dropdownProps={{
            placement: isRTL() ? 'bottom-start' : 'bottom-end',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: isRTL() ? [4, 0] : [-4, 0] // [skid, distance]
                }
              }
            ]
          }}
        >
          <MenuToggle className="w-full btn btn-light btn-sm justify-between flex-nowrap">
            <span className="flex items-center gap-1.5">
              <KeenIcon icon="code" className="!text-md" />
              Client API
            </span>
            <span className="flex items-center lg:ms-4">
              <KeenIcon icon="down" className="!text-xs" />
            </span>
          </MenuToggle>

          <MenuSub className="menu-default w-[170px] py-2">
            {dropdownItems.map((item, index) => (
              <MenuItem key={index} className={item.active ? 'active' : ''}>
                <MenuLink path={item.path}>
                  <MenuIcon>
                    <KeenIcon icon={item.icon} />
                  </MenuIcon>
                  <MenuTitle>{item.title}</MenuTitle>
                </MenuLink>
              </MenuItem>
            ))}
          </MenuSub>
        </MenuItem>
      </Menu>
    );
  };

  const buildMenu = () => {
    return (
      <Menu highlight={true} className="flex-col gap-5">
        {sidebarData.map((heading, index) => {
          return (
            <div className="flex flex-col gap-px" key={index}>
              <MenuItem>
                <div className="px-2.5 text-xs font-medium text-gray-600 mb-1 uppercase">
                  {heading.title}
                </div>
              </MenuItem>
              {heading.children?.map((item, index) => {
                return (
                  <MenuItem key={index} className={item.active ? 'active' : ''}>
                    <MenuLink
                      path={item.title}
                      className="py-2 px-2.5 rounded-md border border-transparent menu-item-active:border-gray-200 menu-item-active:bg-light menu-link-hover:bg-light menu-link-hover:border-gray-200 "
                    >
                      <MenuIcon>
                        <KeenIcon icon="" />
                      </MenuIcon>
                      <MenuTitle className="text-2sm text-gray-800 menu-item-active:font-medium menu-item-active:text-primary menu-link-hover:text-primary">
                        {item.title}
                      </MenuTitle>
                    </MenuLink>
                  </MenuItem>
                );
              })}
            </div>
          );
        })}
      </Menu>
    );
  };

  return (
    <div className="flex flex-col gap-7.5 px-2">
      {buildDropdown()}
      {buildMenu()}
    </div>
  );
};

export { SidebarMenuDashboard };
