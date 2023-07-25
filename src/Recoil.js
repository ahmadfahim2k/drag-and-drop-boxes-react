import { atom, selector, selectorFamily } from "recoil";

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

export const userDataAtom = atom({
  key: 'userData',
  default: [
    {
      "id": 1,
      "first_name": "Waverley",
      "last_name": "Goodricke",
      "email": "wgoodricke0@umn.edu",
      "phone": "+86 578 553 6318",
      "city": "Zalantun",
      "country": "China",
      "dob": "20/12/2000"
  }
  ]
});

export const userDataHeadersSelector = selector({
  key: 'userDataHeaders',
  get: ({ get }) => {
    const userData = get(userDataAtom);

    //filtering
    return Object.keys(userData[0]);
  }
});

export const userDataSearchAtom = atom({
  key: 'userDataSearch',
  default: ''
});

export const filteredUserDataSelector = selector({
  key: 'filteredUserDataSelector',
  get: ({ get }) => {
    const userData = get(userDataAtom);
    const search = get(userDataSearchAtom);
    //filtering
    return userData.filter((item) => {
      const searchLowerCase = search.toLowerCase();
      return (
        searchLowerCase === '' ||
        item.id.toString().includes(searchLowerCase) ||
        item.first_name.toLowerCase().includes(searchLowerCase) ||
        item.last_name.toLowerCase().includes(searchLowerCase) ||
        item.email.toLowerCase().includes(searchLowerCase) ||
        item.phone.toLowerCase().includes(searchLowerCase) ||
        item.city.toLowerCase().includes(searchLowerCase) ||
        item.country.toLowerCase().includes(searchLowerCase) ||
        item.dob.toLowerCase().includes(searchLowerCase)
      );
    });
    
  }
});