export interface INavItem {
  id: number;
  label: string;
  router: string;
}
export interface NavBarProps {
  data: INavItem[];
  indexSelect?: number;
}
