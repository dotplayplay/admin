import { configureStore } from '@reduxjs/toolkit';

// Define initial state and reducer
const initialState = {
  showSidebar: true,
  reportPage: false,
  memberSidebar: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
        ...state,
        showSidebar: action.payload,
      };
    case 'IS_REPORT_PAGE':
      return {
        ...state,
        reportPage: action.payload,
      };
    case 'IS_MEMBER_SIDEBAR':
      return {
        ...state,
        showMemberSidebar: action.payload,
      };
    default:
      return state;
  }
};

// Create Redux store 
const store = configureStore({
  reducer: rootReducer,
});

export default store;