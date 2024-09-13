import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    items: [],
    count: 0
}
const wishListSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        addToWishList: (state: any, action: any) => {
            const itemExist = state.items.some((item: any) => item.id === action.payload.id);
            if (!itemExist) {
                state.items.push(action.payload);
                state.count += 1
            }},
        removeWishList: (state: any, action: any) => {
            state.items = state.items.filter((item: any) => item.id !== action.payload);
            state.count -= 1
        }

    }
})

export const { addToWishList, removeWishList } = wishListSlice.actions;
export const selectedWishList = (state: any) => state.wish.items;
export const selectWishCount = (state: any) => state.wish.count;
export default wishListSlice.reducer;