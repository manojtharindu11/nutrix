// store.ts
import { createStore } from "redux";

// Define action types
const SET_FORM_DATA = "SET_FORM_DATA";

// Define action creator
export const setFormData = (formData: {
  name: string;
  email: string;
  password: string;
}) => ({
  type: SET_FORM_DATA,
  payload: formData,
});

// Define initial state
const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
  },
};

// Define reducer
const formReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return { ...state, formData: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(formReducer);

export default store;
