import { 
    configureStore
} from '@reduxjs/toolkit'

import counterSlice from './reducers/counterSlice'

const store = configureStore({
    reducer: {
        [counterSlice.name]: counterSlice.reducer
    }
})

export type AppState = ReturnType<typeof store.getState>

export default store;
