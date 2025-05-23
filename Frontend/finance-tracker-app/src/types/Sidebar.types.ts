export type SidebarItem = {
    text: string;
    path: string;
  };  

export interface SidebarProps {
    topnav: SidebarItem[];
    botnav: SidebarItem[];
}