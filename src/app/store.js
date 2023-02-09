import { configureStore  } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice"
export default configureStore({
    reducer: {
        user: userReducer,
        movie:movieReducer, 
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    }),
});

//************NOTE we have import user reducer directly instead of {userReducer}because that will pose an error so imprt directly.