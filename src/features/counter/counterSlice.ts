import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // it's okay to do this because immer makes it immutable
    // under the hood
    incremented(state) {
      state.value++;
    },
    //decrement
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    //reset
  },
});

export const { incremented, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
