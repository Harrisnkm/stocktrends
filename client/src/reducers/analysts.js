import {createSlice} from '@reduxjs/toolkit'

const {actions, reducer} = createSlice({
    name: 'analysts',
    initialState: {
        activeAnalyst: ''
    },
    reducers: {
        //sets active_analyst
        setActiveAnalyst: (state, action) => {
            state.activeAnalyst(action.payload)
        }

    }
});

export {actions, reducer}