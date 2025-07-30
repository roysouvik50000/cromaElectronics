import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc ,query ,getDocs, doc, deleteDoc  } from "firebase/firestore";
import { db } from '../firebase';
export const addProductToStore = createAsyncThunk('allProduct/addProductToStore',
    async (product, { rejectWithValue }) => {
        try {
            const allProductCollectionsRef = collection(db, 'allProduct')
            const docRef = await addDoc(allProductCollectionsRef, product)
            console.log({ id: docRef.id, ...product });
            return { id: docRef.id, ...product };
        } catch (error) {
            console.log('error', error.message)
            return rejectWithValue(error.message)
        }
    }
)

export const getAllProduct = createAsyncThunk('allProduct/getAllProduct',
    async (_, { rejectWithValue }) => {
        try {
            const allProductCollectionsRef = collection(db, 'allProduct')
            const q = query(allProductCollectionsRef);
            const querySnapshot = await getDocs(q);
            const products = querySnapshot.docs.map(doc => ({id:doc.id , ...doc.data() }));
            return products;
        } catch (error) {
            console.log(error.message)
            return rejectWithValue(error.message);
        }
    }
)

export const removeProductFromStore = createAsyncThunk('allProduct/removeProductFromStore',
    async(productId , {rejectWithValue})=>{
        try {
            const productDocRef = doc(db , 'allProduct' , productId);
            await deleteDoc(productDocRef);
            return productId ;
        } catch (error) {
            console.log(error.message);
           return rejectWithValue(error.message);
        }
    }
)

export const allProductSlice = createSlice({
    name: 'allProduct',
    initialState: {
        allProduct:[],
        isLoading: true,
        error: null
    },
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(addProductToStore.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(addProductToStore.fulfilled, (state, action) => {
                state.allProduct.push(action.payload);
                state.isLoading = false;
            })
            .addCase(addProductToStore.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllProduct.pending,(state , action) =>{
                state.isLoading=true;
                state.error=null;
            })
            .addCase(getAllProduct.fulfilled,(state , action) =>{
                state.allProduct = action.payload;
                state.isLoading=false;
            })
            .addCase(getAllProduct.rejected ,(state , action) =>{
                state.error=action.payload;
                state.isLoading=false;
            })
            .addCase(removeProductFromStore.fulfilled,(state , action) =>{
                state.allProduct = state.allProduct.filter(product => product.id !== action.payload)
                state.error=null;
            })
            .addCase(removeProductFromStore.rejected ,(state , action)=>{
                state.error = action.payload;
            })

})

export default allProductSlice.reducer;