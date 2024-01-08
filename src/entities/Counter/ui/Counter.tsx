import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slice/CounterSlice";
import {getCounterValue} from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps{
  className?: string;
}

export const Counter = ({ className }: CounterProps) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.incremented());
  };

  const decrement = () => {
	  dispatch(counterActions.decremented());
  };

  return (
    <div>
      <h1>
        value:
        {counterValue}
      </h1>
      <Button onClick={increment}>increment</Button>
      <Button onClick={decrement}>decrement</Button>
    </div>
  );
};
