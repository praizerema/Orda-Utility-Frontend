import { Input } from "../input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { placeBidSchema } from "./BidSchema";
import { Button } from "../button/Button";
import { createBid } from "../../features/bidSlice";
import { Bid } from "../../react-app-env";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../features/store";

export function BidForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(placeBidSchema) });
      const dispatch: AppDispatch = useDispatch();
      
  const onSubmitHandler = async (data:any) => {
    console.log(data);
    await dispatch(createBid({ ...data }));

  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        label="Quantity"
        type="number"
        {...register("quantity")}
        inputClass="w-full"
      />

      <Input
        label="Start date"
        type="date"
        {...register("start_time")}
        inputClass="w-full"
      />

      <Input
        label="Close date"
        type="date"
        {...register("close_time")}
        inputClass="w-full"
      />
      <Input
        label="Price"
        type="number"
        {...register("price")}
        inputClass="w-full"
      />
       <Button
            text="Place Bid"
            className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-300"
          />
    </form>
  );
}
