import { Input } from "../input/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { placeBidSchema } from "./BidSchema";
import { Button } from "../button/Button";
import { createBid } from "../../features/bidSlice";
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
    await dispatch(createBid({ ...data }));

  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        label="Quantity"
        type="number"
        {...register("quantity")}
        inputClass="w-full"
        errorMessage={errors?.quantity?.message}
      />

      <Input
        label="Start date"
        type="datetime-local"
        {...register("start_time")}
        inputClass="w-full"
        errorMessage={errors?.start_time?.message}
      />

      <Input
        label="Close date"
        type="datetime-local"
        {...register("close_time")}
        inputClass="w-full"
        errorMessage={errors?.close_time?.message}
      />
      <Input
        label="Price"
        type="number"
        {...register("price")}
        inputClass="w-full"
        errorMessage={errors?.price?.message}
      />
      <div className="text-right">
          <Button
            text="Place Bid"
            className="bg-green-800 text-white px-5 py-2 rounded hover:bg-green-300 mt-5"
          />
      </div>
     
    </form>
  );
}
