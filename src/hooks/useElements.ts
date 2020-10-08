import * as React from "react";
import { nanoid } from "nanoid";

import { useList } from "./useList";
import * as create from "../utilities/createElement";
import { createContextStore } from "../utilities/createContextStore";
import deepmerge from "deepmerge";

export const [ElementsProvider, useElements] = createContextStore((props) => {
  const elements = useList({
    elements: props.elements,

    getIdentifier(item: any) {
      return item.uid;
    }
  });

  function setHoveredState(uid: string, isHovered: boolean) {
    elements.updateItem(uid, {
      isHovered
    });
  }

  function setSelectedState(uid: string, isSelected: boolean) {
    elements.updateItem(uid, {
      isSelected
    });
  }

  function createElement(specifics: { type: string; [key: string]: any }) {
    return deepmerge(create[specifics.type](), specifics);
  }

  return {
    ...elements,
    createElement,
    setHoveredState,
    setSelectedState
  };
});
