export type PageType = 'home' | 'businesses' | 'events';

export interface NavigationItem {
  id: PageType;
  label: string;
  href?: string;
}

export interface NavigationProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}
