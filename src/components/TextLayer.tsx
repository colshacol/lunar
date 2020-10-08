import * as React from "react";
import { Text } from "react-konva";
import { AppN } from "../global";
import { useLayerProps } from "../hooks/useLayerProps";

export const TextLayer = (props: AppN.LayerPropsT) => {
  const layerProps = useLayerProps(props);
  return <Text {...layerProps} />;
};
