import { useContext, useMemo, useState,memo } from "react"
import { CountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {

  // const [count,setCount]= useState(0);

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
      {/* <CountContext.Provider value={{
        count : count,
        setCount : setCount,
        }}> */}
         {/* <Count /> */}
      {/* </CountContext.Provider> */}
    </div>
  )
}

function Count () {
  console.log("re-render");

  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
};

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  // const {count} = useContext(CountContext);
  
  return <div>
    <b>
      {count}
    </b><br>
    </br>
    <EvenCountRenderer />
  </div>
}

//we use selector if it is completly derived from an atom 
function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? null: "It is even" }
  </div>
}

// function EvenCountRenderer() {
//   const  count = useRecoilValue(countAtom);

//   return (<>
//       {(count%2==0)?"it is even " : null}
//   </>)
// }


function Buttons() {
  // const setCount = useSetRecoilState(countAtom);
  // console.log("buttons re-rendererd");
  // const {setCount} = useContext(CountContext);

  // const[count,setCount]= useRecoilState(countAtom);
  const setCount= useSetRecoilState(countAtom);

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
