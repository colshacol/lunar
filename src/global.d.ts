export namespace AppN {
  export type StylesT = {
    position?: string;
    x?: number;
    y?: number;
    fill?: string;
    width?: number;
    height?: number;
    color?: string;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
    letterSpacing?: string;
    opacity?: number;
    stroke?: string;
    strokeWidth?: number;
    scale?: any;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    offset?: number;
  };

  export type ElementT = {
    uid: string;
    type: string;
    title: string;
    text?: string;
    url?: string;
    style: StylesT;
    isHovered: boolean;
    isSelected: boolean;
  };

  export type LayerPropsT = {
    element: ElementT;
    elements: any;
  };
}
