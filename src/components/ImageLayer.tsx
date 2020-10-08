import * as React from "react";
import { Image } from "react-konva";
import useImage from "use-image";
import { AppN } from "../global";
import { useLayerProps } from "../hooks/useLayerProps";

export const ImageLayer = (props: AppN.LayerPropsT) => {
  const [image] = useImage(props.element.url || "");
  const layerProps = useLayerProps(props);
  return <Image image={image} {...layerProps} />;
};
