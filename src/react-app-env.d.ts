/// <reference types="react-scripts" />

export interface Bid {
    _id: string;
    quantity: number;
    startTime: string;
    closeTime: string;
    price: number;
  }
  
  export interface BidState {
    bids: Bid[];
  }

  export interface LoginFormData {
    email: string;
    password: string;
  }
  export interface RegisterFormData {
    first_name?: string;
    last_name?: string;
    email: string;
    password: string;
    confirm_password: string;

  }