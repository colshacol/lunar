import { nanoid } from "nanoid";

export function text() {
  return {
    uid: nanoid(),
    isHovered: false,
    isSelected: false,
    type: "text",
    title: "Text",
    text: "Lorem ipsum...",
    style: {
      fill: "red",
      x: 0,
      y: 0,
      width: 500,
      fontSize: 32,
      fontWeight: "bold",
      align: "center"
    }
  };
}

export function box() {
  return {
    uid: nanoid(),
    isHovered: false,
    isSelected: false,
    type: "box",
    title: "Box",
    style: {
      fill: "rgba(0,0,0,0.5)",
      x: 0,
      y: 100,
      width: 500,
      height: 200
    }
  };
}

export function image() {
  return {
    uid: nanoid(),
    isHovered: false,
    isSelected: false,
    type: "image",
    title: "Bread Image",
    url: "https://i.imgur.com/Wl6U71R.jpg",
    style: {
      x: 0,
      y: 0,
      width: 200,
      height: 500
    }
  };
}
