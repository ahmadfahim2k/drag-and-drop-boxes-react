import { atom, selectorFamily } from "recoil";

export const dragBoxInputAtom = atom({
  key: 'dragBoxInput',
  default: ''
});

export const dragDataAtom = atom({
  key: 'dragData',
  default: {
    'red': [{
      name: 'Apple'
    },
    {
      name: 'Banana'
    },
    {
      name: 'Cat'
    },
    ],
    'blue': [
      {
        name: 'Dog'
      },
      {
        name: 'Elephant'
      },
      {
        name: 'Fruits'
      }
    ],
    'green': [],
    'yellow': [],
    // 'orange': []
  }
});

export const filteredDragDataSelector = selectorFamily({
  key: 'filteredDragDataSelector',
  get: (color) => ({ get }) => {
    const dragData = get(dragDataAtom);

    //filtering
    return dragData[color];
  }
});