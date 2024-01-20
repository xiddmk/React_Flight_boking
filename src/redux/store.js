// Importing the `createStore` function from the "redux" library
import { createStore } from "redux";

// Importing your custom reducer (assuming it's defined in the "bookingReducer" file)
import bookingReducer from "./bookingReducer";

// Creating the Redux store by passing the reducer to the createStore function
const store = createStore(bookingReducer);

// Exporting the created store so it can be used in other parts of your application
export default store;
