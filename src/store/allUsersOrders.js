import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection , getDocs , query } from "firebase/firestore";
import { db } from '../firebase';
export const addUsersOrders = createAsyncThunk('allUsersOrders/addUsersOrders',
    async (UsersOrders, { rejectWithValue }) => {
        try {
            const allUsersOrdersCollectionsRef = collection(db, 'allUsersOrders')
            const docRef = await addDoc(allUsersOrdersCollectionsRef, UsersOrders)
            return UsersOrders;
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
)

export const getUsersOrders = createAsyncThunk('allUsersOrders/getUsersOrders',
    async (_, { rejectWithValue }) => {
        try {
            const allUsersOrdersCollectionsRef = collection(db, 'allUsersOrders')
            const q = query(allUsersOrdersCollectionsRef);
            const querySnapshot = await getDocs(q);
            const orders = querySnapshot.docs.map(doc => ({...doc.data()}));
            return orders;
        } catch (error) {
            console.log(error.message);
            rejectWithValue(error.message)
        }
    }
)

export const allUsersOrdersSlice = createSlice({
    name: 'allUsersOrders',
    initialState: {
        ordersDetails: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(addUsersOrders.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addUsersOrders.fulfilled, (state, action) => {
                state.ordersDetails.push(action.payload);
                state.loading = false;
            })
            .addCase(addUsersOrders.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(getUsersOrders.pending,(state , action)=>{
                state.error=null;
                state.loading=true;
            })
            .addCase(getUsersOrders.fulfilled,(state , action)=>{
                state.ordersDetails = action.payload;
                state.loading=false;
            })
            .addCase(getUsersOrders.rejected , (state ,action)=>{
                state.error=action.payload;
                state.loading=false;
                state.ordersDetails=[];
            })
})

export const { completeOrderSubmit } = allUsersOrdersSlice.actions;
export default allUsersOrdersSlice.reducer;