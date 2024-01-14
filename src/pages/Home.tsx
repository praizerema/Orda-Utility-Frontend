import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../features/store";
import { fetchBids } from "../features/bidSlice";
import { BidList } from "../components/bids/BidList";
import { BidForm } from "../components/bids/BidForm";
// src/hooks/useAuth.js
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/authSlice";
import useAuth from "../utils/useAuth";

function Home() {
  useAuth();
  const user = useSelector(selectUser);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBids());
  }, [dispatch, user]);

  return (
    <div className="p-5">
      <div className="border w-1/2 rounded-2xl p-8">
        <h2 className="font-bold text-3xl mb-4 text-green-800">Place Bid</h2>
        <BidForm />
      </div>

      <BidList />
    </div>
  );
}

export default Home;
