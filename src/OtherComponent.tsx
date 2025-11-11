import { useCounter } from "./store"


const OtherComponent = () => {
    const {increment,decrement} = useCounter();
  return (
    <div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
    </div>
  )
}

export default OtherComponent