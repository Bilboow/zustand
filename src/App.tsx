import OtherComponent from "./OtherComponent";
import { useCounter } from "./store"


const App = () => {

  // first way of declaring
  //const count = useCounter((state)=> state.count);

  //second way of declaring
  //const {count,increment,decrement} = useCounter();

  //third way of declaring
  const {count} = useCounter();

  return (
    <div className="flex flex-col items-center justify-center text-2xl">
      <h1>
        Count:{count}
      </h1>
      
      {/*<button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>*/}
      <OtherComponent/>
    </div>
  )
}

export default App