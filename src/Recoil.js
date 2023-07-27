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

//all the headers in userData
export const userDataHeadersSelector = selector({
  key: 'userDataHeaders',
  get: ({ get }) => {
    const userData = get(userDataAtom);

    //filtering
    return Object.keys(userData[0]);
  }
});

//headers that should be active
export const activeColumnsAtom = atom({
  key: 'activeColumns',
  default: [
    "id", "first_name", "last_name", "email", "phone", "city", "country", "dob"
  ]
});

//combining previous 2 functions to get the active headers in order.
export const activeHeadersSelector = selector({
  key: 'activeHeaders',
  get: ({ get }) => {
    const allHeaders = get(userDataHeadersSelector);
    const activeHeaders = get(activeColumnsAtom);

    //filtering
    return allHeaders.filter(header => activeHeaders.includes(header));
  }
})

//global search
export const globalSearchFilterAtom = atom({
  key: 'globalSearchFilter',
  default: ''
});

//remove the inactive headers, and global filter the remaining data
export const filteredUserDataSelector = selector({
  key: 'filteredUserDataSelector',
  get: ({ get }) => {
    const userData = get(userDataAtom);
    const search = get(globalSearchFilterAtom);
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

//object containing the field: text
export const localSearchFiltersAtom = atom({
  key: 'localSearchFilters',
  default: {}
});

//returns search field for given field or undefined if not exists
export const localSearchFilterSelector = selectorFamily({
  key: 'localSearchFilter',
  get: (field) => ({ get }) => {
    const allFilters = get(localSearchFiltersAtom);
    if(allFilters[field]) return allFilters[field];
    else return '';
  }
});

//Again filter the data based on local col filter.
export const fieldFilteredUserDataSelector = selector({
  key: 'fieldFilteredUserData',
  get: ({ get }) => {
    const userData = get(filteredUserDataSelector);
    const filters = get(localSearchFiltersAtom);
    const headers = get(activeHeadersSelector);

    //filter
    return userData.filter((item) => {
      let valid = true;
      // console.log(headers, filters);
      headers.forEach(header => {
          if(!filters[header] || !valid) return;
          const searchLowerCase = filters[header].toLowerCase();
          valid = searchLowerCase === '' || item[header].toLowerCase().includes(searchLowerCase);
      })
      return valid;
    });
  }
});

//toggle the column hider menu
export const enableColumnHiderAtom = atom({
  key: 'enableColumnHider',
  default: false
});