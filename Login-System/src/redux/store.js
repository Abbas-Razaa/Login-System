import { createStore } from "redux";
import userReducer from "./reducers/UseReducer";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Could not load state from localStorage:", error);
    return undefined; 
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Could not save state to localStorage:", error);
  }
};

const persistedState = loadState(); 
const store = createStore(userReducer, persistedState);


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
