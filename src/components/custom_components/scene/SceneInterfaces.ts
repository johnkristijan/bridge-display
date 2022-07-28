export interface ScenesConfigI {
  type: "single" | "multiple";
  multipleSceneList: Array<SceneI>;
  singleScene: SceneI;
}
export interface SceneI {
  iframeUrl?: string;
  option: string;
  iframesOptions?: unknown;
  isIframe: Boolean;
  isHDMI: Boolean;
  HDMIUrl?: string;
}
