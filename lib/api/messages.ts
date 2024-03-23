interface ColorSchemeMsg {
  type: "color-scheme";
  value: "dark" | "light";
}

interface SizingConnectMsg {
  type: "sizing.connect";
}

interface SizingHeightMsg {
  height: number;
  type: "sizing.height";
}

export type DownwardMessage = SizingConnectMsg | ColorSchemeMsg;

export type UpwardMessage = SizingHeightMsg;
