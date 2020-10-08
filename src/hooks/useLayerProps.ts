import * as React from "react";
import { AppN } from "../global";

export function useLayerProps(props: AppN.LayerPropsT) {
  const { elements, element } = props;

  function onMouseEnter() {
    elements.setHoveredState(element.uid, true);
  }

  function onMouseLeave() {
    elements.setHoveredState(element.uid, false);
  }

  function getStroke() {
    return {
      stroke: element.isHovered ? "red" : element.style.stroke,
      strokeWidth: element.isHovered ? 2 : element.style.strokeWidth
    };
  }

  const style = {
    ...element.style,
    ...getStroke()
  };

  return {
    ...style,
    onMouseEnter,
    onMouseLeave,
    text: element.text
  };
}
