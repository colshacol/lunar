import * as React from "react";
import { useImmer } from "use-immer";
import move from "array-move";
import deepmerge from "deepmerge";

export const useList = (props: any) => {
  const { elements, getIdentifier } = props;
  const [list, setList] = useImmer(elements);

  function getIndex(identifier: string, target: Array<any>): number {
    return target.reduce((final, item, index) => {
      if (final > -1) return final;
      if (getIdentifier(item) === identifier) return index;
      return final;
    }, -1);
  }

  function findItemByIdentifier(target: Array<any>, identifier: any) {
    return target.find((item) => getIdentifier(item) === identifier);
  }

  function insertItemAtIndex(item: any, index: number) {
    setList((draft) => {
      const before = draft.slice(0, index);
      const after = draft.slice(index);
      return [...before, item, ...after];
    });
  }

  function appendItem(item: any) {
    setList((draft) => {
      draft.unshift(item);
    });
  }

  function prependItem(item: any) {
    setList((draft) => {
      draft.push(item);
    });
  }

  function removeItem(identifier: any) {
    setList((draft) => {
      return draft.filter((item: any) => {
        const itemIdentifier = getIdentifier(item);
        return itemIdentifier !== identifier;
      });
    });
  }

  function reorderItem(identifier: string, newIndex: number) {
    setList((draft) => {
      // const item = findItemByIdentifier(draft, identifier)
      const oldIndex = getIndex(identifier, draft);
      return move(draft, oldIndex, newIndex);
    });
  }

  function updateItem(identifier: any, updates: any) {
    setList((draft) => {
      const index = getIndex(identifier, draft);
      const item = draft[index];
      draft[index] = deepmerge(item, updates);
    });
  }

  return {
    list,
    setList,
    findItemByIdentifier,
    insertItemAtIndex,
    appendItem,
    prependItem,
    removeItem,
    updateItem,
    reorderItem,
    getIndex
  };
};
