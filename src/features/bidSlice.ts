import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../utils/api';

interface Bid {
  quantity: number;
  start_time: string;
  close_time: string;
  price: number;
}

interface BidState {
  bids: Bid[];
}

export const fetchBids: AsyncThunk<Bid[], void, {}> = createAsyncThunk('bid/fetchBids', async () => {
  const response = await api.get('auth/bids');
  return response.data.bids;
});

export const createBid: AsyncThunk<Bid, Bid, {}> = createAsyncThunk('bid/createBid', async (newBid: Bid) => {
    
const response = await api.post('auth/bids/create', newBid);
    
    return response.data; 
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