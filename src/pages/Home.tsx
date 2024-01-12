import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../features/store';
import { fetchBids } from '../features/bidSlice';
import { BidList } from '../components/bids/BidList';
import { BidForm } from '../components/bids/BidForm';
// src/hooks/useAuth.js
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../features/authSlice';
import useAuth from '../utils/useAuth';

function Home() {
    useAuth();
 const user = useSelector(selectUser);

//   useEffect(() => {console.log('Before fetchBids, user:', user);
//     dispatch(fetchBids());
//   }, [dispatch, user]);

  return (
    <div>
      <BidForm />
      <BidList />
    </div>
  );
}

export default Home;




