import arrayMove from "array-move";

const array = (() => {
  function findByKeyValue(target: Array<any>, key, value) {
    return target.reduce(
      (final, item, index) => {
        if (final[1] > -1) return final;
        if (item[key] === value) return [item, index];
        return final;
      },
      [undefined, -1]
    );
  }

  function filterByKeyValue(target: Array<any>, key, value) {
    return target.filter((item, index) => {
      return item[key] === value;
    });
  }

  function findById(target, id) {
    return findByKeyValue(target, "id", id);
  }

  function findByUid(target, uid) {
    return findByKeyValue(target, "uid", uid);
  }

  function getIndex(uid: string, target: Array<any>): number {
    return target.reduce((final, item, index) => {
      if (final > -1) return final;
      if (item.uid === uid) return index;
      return final;
    }, -1);
  }

  function move(target, oldIndex, newIndex) {
    return arrayMove(target, oldIndex, newIndex);
  }

  return {
    findByKeyValue,
    filterByKeyValue,
    findById,
    findByUid,
    getIndex,
    move
  };
})();
