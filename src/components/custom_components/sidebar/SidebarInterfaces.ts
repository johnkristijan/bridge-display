export interface SidebarElementI {
  label: string;
  open: boolean;
  isChild: boolean;
  warningcount?: number;
  warningcolor?: string;
}
export interface SidebarElementSceneSelectI {
  multiple: boolean;
  scene: SidebarElementI;
  index?: Number;
}
