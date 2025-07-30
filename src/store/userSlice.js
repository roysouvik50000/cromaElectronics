import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    onAuthStateChanged
} from "firebase/auth";

export const signUpUser = createAsyncThunk('user/signUpUser',
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user
            updateProfile(user, {
                displayName: name,
            })
            return userCredential.user.toJSON();
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message || 'Network error');

        }
    }
)

export const logInUser = createAsyncThunk('user/logInUser',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            return userCredential.user.toJSON();
        } catch (error) {
            console.log(error.message);
            return rejectWithValue(error.message);
        }
    }
)

export const logOutUser = createAsyncThunk('user/logOutUser',
    async (_, { rejectedWithValue }) => {
        try {
            await signOut(auth);
            return true;
        } catch (error) {
            return rejectedWithValue(error.message)
        }
    }
)

export const observeAuth = createAsyncThunk(
    'user/observeAuth',
    async (_, { dispatch }) => {
        return new Promise((resolve) => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch(userSlice.actions.setUser(user.toJSON()));
                } else {
                    dispatch(userSlice.actions.clearUser());
                }
                resolve(); // Resolve promise after initial observation
            });
        });
    }
);

export const userSlice = createSlice(
    {
        name: 'user',
        initialState: {
            user: null,
            isAuthenticted: false,
            loading: true,
            error: null
        },
        reducers: {
            setUser: (state, action) => {
                state.user = action.payload;
                state.isAuthenticted = true;
                state.loading = false;
                state.error = null;
            },
            clearUser: (state) => {
                state.user = null;
                state.isAuthenticted = false;
                state.loading = false;
                state.error = null;
            },
        },
        extraReducers: builder =>
            builder.
                addCase(signUpUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(signUpUser.fulfilled, (state, action) => {
                    state.user = action.payload;
                    state.loading = false;
                    state.error = null;
                    state.isAuthenticted = true;
                })
                .addCase(signUpUser.rejected, (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                    state.isAuthenticted = false;
                    state.user = null;
                })
                .addCase(logInUser.pending, (state, action) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(logInUser.fulfilled, (state, action) => {
                    state.user = action.payload;
                    state.loading = false;
                    state.isAuthenticted = true;
                })
                .addCase(logInUser.rejected, (state, action) => {
                    state.error = action.payload;
                    state.isAuthenticted = false;
                    state.user = null;
                })
                .addCase(logOutUser.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                })
                .addCase(logOutUser.fulfilled, (state) => {
                    state.user = null;
                    state.isAuthenticted = false;
                    state.loading = false;
                    state.error = null;
                })
                .addCase(logOutUser.rejected, (state, action) => {
                    state.error = action.payload;
                    state.loading = false;
                })
    }
)

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
