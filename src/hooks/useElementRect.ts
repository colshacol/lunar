import * as React from "react";

export const useElementRect = (selector: string) => {
  const [state, setState] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    function setRect() {
      const element = document.querySelector(selector);
      const rect = element && element.getBoundingClientRect();
      setState(rect);
    }

    setRect();
    window.addEventListener("resize", setRect);
    return () => window.removeEventListener("resize", setRect);
  }, []);

  return state;
};
