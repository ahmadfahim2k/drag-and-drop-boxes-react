import { atom, selectorFamily } from "recoil";

export const dataAtom = atom({
  key: 'data',
  default: {
    'red': [{
      name: 'A'
    },
    {
      name: 'B'
    },
    {
      name: 'C'
    },
    ],
    'blue': [
      {
        name: 'D'
      },
      {
        name: 'E'
      },
      {
        name: 'F'
      }
    ],
    'green': [],
    // 'yellow': [],
    // 'orange': []
  }
});

export const filteredDataSelector = selectorFamily({
  key: 'filteredDataSelector',
  get: (color) => ({ get }) => {
    const data = get(dataAtom);

    //filtering
    return data[color];
  }
});