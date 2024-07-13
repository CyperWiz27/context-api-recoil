import { useContext, useMemo, useState,memo } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  const [count,setCount]= useState(0);

  return (
    <div>
      {/* <RecoilRoot>
        <Count />
      </RecoilRoot> */}
      <CountContext.Provider value={{
        count : count,
        setCount : setCount,
        }}>
         <Count />
      </CountContext.Provider>
    </div>
  )
}

const Count = memo(() => {
  console.log("re-render");

  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
});

function CountRenderer() {
  // const count = useRecoilValue(countAtom);
  const {count} = useContext(CountContext);
  
  return <div>
    <b>
      {count}
    </b>
    {/* <EvenCountRenderer /> */}
  </div>
}

// function EvenCountRenderer() {
//   const isEven = useRecoilValue(evenSelector);

//   return <div>
//     {isEven ? "It is even" : null}
//   </div>
// }

function Buttons() {
  // const setCount = useSetRecoilState(countAtom);
  // console.log("buttons re-rendererd");
  const {setCount} = useContext(CountContext);

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App
