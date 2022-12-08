export interface INavItem {
  id: number;
  label: string;
  router: string;
  onClick?: () => void;
}
export interface NavBarProps {
  data: INavItem[];
  indexSelect?: number;
}
