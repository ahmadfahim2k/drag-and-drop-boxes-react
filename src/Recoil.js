import { atom, selector, selectorFamily } from "recoil";

//drag drop atoms & selectors
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

//table search data atoms & selectors
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

export const activeColumnsAtom = atom({
  key: 'activeColumns',
  default: [
    "id", "first_name", "last_name", "email", "phone", "city", "country","dob"
  ]
});

export const activeHeadersSelector = selector({
  key: 'activeHeaders',
  get: ({ get }) => {
    const allHeaders = get(userDataHeadersSelector);
    const activeHeaders = get(activeColumnsAtom);

    //filtering
    return allHeaders.filter(header => activeHeaders.includes(header));
  }
})

export const userDataSearchAtom = atom({
  key: 'userDataSearch',
  default: ''
});

export const filteredUserDataSelector = selector({
  key: 'filteredUserDataSelector',
  get: ({ get }) => {
    const userData = get(userDataAtom);
    const search = get(userDataSearchAtom);
    const headers = get(activeHeadersSelector);
    //filtering
    return userData.filter((item) => {
      const searchLowerCase = search.toLowerCase();
      if (searchLowerCase === '') return true;
      let res = false;
      headers.forEach(header => {
        if (item[header].toString().toLowerCase().includes(searchLowerCase)) res = true;
      });
      return res;
    });

  }
});

export const searchFieldAtom = atom({
  key: 'searchField',
  default: ''
});

export const searchTextAtom = atom({
  key: 'searchText',
  default: ''
});

export const fieldFilteredUserDataSelector = selector({
  key: 'fieldFilteredUserData',
  get: ({ get }) => {
    const userData = get(filteredUserDataSelector);
    const field = get(searchFieldAtom);
    const search = get(searchTextAtom);

    //filter
    return userData.filter((item) => {
      const searchLowerCase = search.toLowerCase();
      return searchLowerCase === '' || item[field].toLowerCase().includes(searchLowerCase);
    })
  }
});

export const enableColumnHiderAtom = atom({
  key: 'enableColumnHider',
  default: false
});