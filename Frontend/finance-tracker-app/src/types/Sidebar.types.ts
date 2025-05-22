export type SidebarItem = {
    text: string;
    path: string;
  };  

export interface SidebarProps {
    items: SidebarItem[];
}