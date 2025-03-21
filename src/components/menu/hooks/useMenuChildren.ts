import { matchPath } from 'react-router';
// import { TMenuConfig } from '../types.d';
import { MENU_ROOT, MENU_SIDEBAR } from '@/config';

import { type TMenuConfig } from '@/components/menu';

const useMenuChildren = (
  pathname: string,
  items: TMenuConfig,
  level: number
): TMenuConfig | null => {

  // let rootMenuData = MENU_ROOT.find((item) => item.path === pathname);

  // return MENU_SIDEBAR.find((sideBarItemItem, index) => index === rootMenuData?.childrenIndex);
  const hasActiveChild = (items: TMenuConfig): boolean => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.path && matchPath(pathname, item.path)) {
        return true;
      } else if (item.children) {
        if (hasActiveChild(item.children as TMenuConfig)) {
          return true;
        }
      }
    }

    return false;
  };

  const getChildren = (
    items: TMenuConfig,
    level: number = 0,
    currentLevel: number = 0
  ): TMenuConfig | null => {
    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      if (item.children) {
        // Check if we're at the desired level and if any child is active
        if (level === currentLevel && hasActiveChild(item.children)) {
          return item.children;
        }

        // Recursively check the children, incrementing the current level
        const children = getChildren(item.children, level, currentLevel + 1);

        // If valid children were found, return them
        if (children) {
          return children;
        }
      } else if (level === currentLevel && item.path && matchPath(pathname, item.path)) {
        // If it's a leaf node and matches the path, return the current items
        return items;
      }
    }

    // Return null if no match was found at this level
    return null;
  };

  return getChildren(items, level);
};

export { useMenuChildren };
