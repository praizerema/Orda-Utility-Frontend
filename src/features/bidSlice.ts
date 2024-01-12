import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Bid {
  quantity: number;
  startTime: string;
  closeTime: string;
  price: number;
}

interface BidState {
  bids: Bid[];
}

export const fetchBids: AsyncThunk<Bid[], void, {}> = createAsyncThunk('bid/fetchBids', async () => {
  const response = await axios.get('/bids');
  return response.data.bids;
});

const initialState: BidState = {
  bids: [],
};

const bidSlice = createSlice({
  name: 'bid',
  initialState,
  reducers: {
    setBids: (state, action: PayloadAction<Bid[]>) => {
      state.bids = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBids.fulfilled, (state, action) => {
        state.bids = action.payload;
      });
  },
});

export const { setBids } = bidSlice.actions;

export default bidSlice.reducer;