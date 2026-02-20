export interface IYearsOfExperience {
  years_of_experience: number;
}

export interface IMenuItem {
  label: string;
  href: string;
}

export interface IMobileMenuProps {
  menuItems: IMenuItem[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGoToTopButtonProps {
  scrollToTop: () => void;
  showScrollTop: boolean;
}

export interface ISectionProps {
  id: string;
  children: React.ReactNode;
}
