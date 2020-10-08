import React from "react";
import { Stage, Layer } from "react-konva";
import { ElementsProvider, useElements } from "./hooks/useElements";
import { BoxLayer } from "./components/BoxLayer";
import { TextLayer } from "./components/TextLayer";
import { ImageLayer } from "./components/ImageLayer";
import { useElementRect } from "./hooks/useElementRect";

import { DEFAULT_ELEMENTS } from "./consts/DEFAULT_ELEMENTS";
import "./styles/App.css";

export default () => {
  return (
    <ElementsProvider elements={DEFAULT_ELEMENTS}>
      <div id="canvasRoot" style={{ width: "8.25in", height: "11.75in" }}>
        <InnerApp />
      </div>
    </ElementsProvider>
  );
};

function InnerApp(props: any) {
  const parentRect = useElementRect("#canvasRoot");
  const elements = useElements();

  React.useEffect(() => {
    setTimeout(() => {
      const uid = elements.list[1].uid;
      elements.reorderItem(uid, 0);
    }, 2000);
  }, []);

  return (
    <Stage width={parentRect.width} height={parentRect.height}>
      <Layer>
        {elements.list.map((element: any) => (
          <Element key={element.uid} elements={elements} element={element} />
        ))}
      </Layer>
    </Stage>
  );
}

type ElementPropsT = {
  elements: any;
  element: any;
};

function Element(props: ElementPropsT) {
  if (props.element.type === "text") {
    return <TextLayer elements={props.elements} element={props.element} />;
  }

  if (props.element.type === "image") {
    return <ImageLayer elements={props.elements} element={props.element} />;
  }

  if (props.element.type === "box") {
    return <BoxLayer elements={props.elements} element={props.element} />;
  }

  return null;
}
