import logo from "./logo.svg";
import "./App.scss";
import H3 from "./components/SideList";
import UpdateComponent from "./components/UpdateComponent";
import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Cntr from "./components/Cntr";
import AddRedFont from "./components/FHOC";
import useList from "./components/hooks/useList";
import ChildComponents from "./components/ChildComponents";
import FChildComponent from "./components/FChildComponent";
import RefForm from "./components/RefForm";

const makeGreen = (BaseComponent) => (props) => {
  const addProps = {
    style: {
      color: "red",
    },
  };

  const newProps = {
    ...props,
    ...addProps,
  };
  console.log({ ...newProps });
  return <BaseComponent {...newProps} />;
};
// const GreenNameTag = makeGreen(H3);
// const cntr = AddRedFont(ClickCounter);
function App({ hname }) {
  console.log(hname);

  // const [listNames, setList] = React.useState([
  //   { name: "tomato", price: 20,isEditable:false },
  //   { name: "rice", price: 50,isEditable:false },
  //   { name: "curd", price: 100,isEditable:false },
  // ]);
  const items = useList([
    { name: "tomato", price: 20, isEditable: false },
    { name: "rice", price: 50, isEditable: false },
    { name: "curd", price: 100, isEditable: false },
  ]);
  // const[isEditable, setEditable] = React.useState(false);

  const fNameRef = React.useRef();
  const lNameRef = React.useRef();
  const submitRef = React.useRef();
  // React.useEffect(() => {
  //   fNameRef.current.focus();
  // }, []);

  const keyDownHandler = (event) => {
    console.log("key", event.keyCode);
    if (event.keyCode === 13) {
      switch (event.target.id) {
        case 'fName':
          lNameRef.current.focus()
          break;
        case 'lName':
          submitRef.current.focus()
          break;
      }
    }
  };
  const removeItemHandler = (e) => {
    // setList([...listNames.filter((val, k) => e.target.name !== val.name)]);
    items.removeItem(e.target.name);
  };

  const ondblClickHandler = (e, index) => {
    // const dummyList = [...listNames];
    //   dummyList[index].isEditable = !dummyList[index].isEditable;
    //   setList([...dummyList])
    items.toggler(index);
  };
  const keyPressHandler = (e, index) => {
    // if(e.key==='Enter'){
    //   const dummyList = [...listNames];
    //   dummyList[index].isEditable = !dummyList[index].isEditable;
    //   dummyList[index].name = e.target.value;
    //   setList([...dummyList])
    // }
    items.changeName(e.key, e.target.value, index);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Headers</h1>
        {/* <ClickCounter />
        <HoverCounter /> */}
        {/* <Cntr /> */}
        {/* {items.list.map((val, key) => (
          <H3
          key={key}
            name={val.name}
            removeItem={removeItemHandler}
            isEditable={val.isEditable}
            ondblClickHandler= {ondblClickHandler}
            index={key}
            onKeyPress = {keyPressHandler}
          />
        ))} */}
        {/* <ChildComponents />
        <FChildComponent /> */}
        {/* first name :{" "}
        <input
          type="text"
          id="fName"
          ref={fNameRef}
          onKeyDown={keyDownHandler}
        />{" "}
        <br />
        last name :{" "}
        <input
          type="text"
          id="lName"
          ref={lNameRef}
          onKeyDown={keyDownHandler}
        />
        <button ref={submitRef}>submit</button> */}
        <RefForm ref={fNameRef}></RefForm>
      </header>
    </div>
  );
}

// class App extends React.Component{
//   render(){
//     const {name} = {...this.props}
//     console.log("this is class log", {...this.props}, name)
//     return(
//       <div>
//         <h1>this one is class components </h1>
//       </div>
//     )
//   }
// }

export default App;
