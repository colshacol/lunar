import * as React from "react";
import { Rect } from "react-konva";
import { useImmer } from "use-immer";
import { AppN } from "../global";
import { useLayerProps } from "../hooks/useLayerProps";

export const BoxLayer = (props: AppN.LayerPropsT) => {
  const layerProps = useLayerProps(props);
  return <Rect {...layerProps} />;
};
