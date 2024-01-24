export interface MenuItemType {
  name: string;
  to: string;
  icon: React.ElementType;
  subMenuItems?: SubMenuItemType[];
}

export interface SubMenuItemType {
  name: string;
  to: string;
}
