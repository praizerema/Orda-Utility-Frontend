import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../features/store';
import { fetchBids } from '../features/bidSlice';
import { BidList } from '../components/bids/BidList';
import { BidForm } from '../components/bids/BidForm';

function Home() {
    const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(fetchBids());
  }, [dispatch]);

  return (
    <div>
      <BidForm />
      <BidList />
    </div>
  );
}

export default Home;
