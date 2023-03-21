export interface ISideBar {
  isNonMobile: boolean;
  drawerWidth: string;
  isOpen: boolean;
  setIsOpen: (e: boolean) => void;
}
