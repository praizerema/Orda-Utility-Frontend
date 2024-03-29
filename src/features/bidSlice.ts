import { createSlice, PayloadAction, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
  const response = await axios.get('/bids');
  return response.data.bids;
});

export const createBid: AsyncThunk<Bid, Bid, {}> = createAsyncThunk('bid/createBid', async (newBid: Bid) => {
    console.log('one is working');
    
const response = await axios.post('http://localhost:4000/auth/bids/create', newBid);
    console.log('sdkjdskjsd');
    
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