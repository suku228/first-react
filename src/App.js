import logo from "./logo.svg";
import "./App.scss";
import H3 from "./components/SideList";
import UpdateComponent from "./components/UpdateComponent";
import React, { useRef } from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import Cntr from "./components/Cntr";
import AddRedFont from "./components/FHOC";
import useList from "./components/hooks/useList";
import ChildComponents from "./components/ChildComponents";
import FChildComponent from "./components/FChildComponent";
import RefForm from "./components/RefForm";
import FetchLoc from "./components/FetchLoc";
import usePrevious from "./components/hooks/usePrevious";
import ForLayoutEffect from "./components/hooks/ForLayoutEffect";
import {BrowserRouter, Route} from 'react-router-dom';
import HeadingCom from './components/routingcomponents/HeadingCom'
import caxios from './caxios'
//import axiosInterceptor from './caxios'

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
function App() {
  // console.log(hname);

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

  const fNameRef = React.useRef(null);
  const lNameRef = React.useRef(null);
  const submitRef = React.useRef(null);
  const [age, setAge] = React.useState(21);
  const prevAge = usePrevious(age);

  const youngerHandler = ()=>{
    setAge(age - 1)
  }
  React.useEffect(() => {
    // const axiosInstance = axios.create();
    // axiosInstance.interceptors.response.use((response) => {
    //   console.log('usde',response)
    //   if (response.status === 401) {
    //     console.log("You are not authorized");
    //     //redirect
    //   }
    //   return response;
    // }, (error) => {
    //   if (error.response && error.response.data) {
    //     return Promise.reject(error.response.data);
    //   }
    //   return Promise.reject(error.message);
    // });
    // fNameRef.current.focus();
    caxios(
      {
        url:'/users',
        method:'GET'
      })
  });

  const keyDownHandler = (event) => {
    console.log("key", event.keyCode, event.key);
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

  const nameRef = useRef(null);

  const onChangeName = ()=>{
    console.log('on change name', nameRef.current.value)
  }

  const [val, setVal] = React.useState(20);
  const valRef = React.useRef(null);
  // const {width, height} = ForLayoutEffect(valRef, val)
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1 className="heading">Headers</h1> */}
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
        <input type="text" onChange={(e)=>setVal(e.target.value)} />
         <RefForm id="fName" placeholder="enter first name" keyDownHandler={keyDownHandler} ref={fNameRef}></RefForm>
        <RefForm id="lName" placeholder="enter last name" keyDownHandler={keyDownHandler}  ref={lNameRef}></RefForm>
      <button ref={submitRef}>submit</button> 
      {/* <FetchLoc /> */}
      {/* <h3>Age:{age}</h3>
      <button onClick={()=>youngerHandler()}>make me younger</button>
      <h3>prev age: {prevAge}</h3>
      <input type="text" ref={nameRef} onChange={onChangeName}/> */}
        {/* <h1>Height:{height}, Widht:{width}</h1>
        <div ref={valRef}>{val}</div>
        <button onClick={()=>setVal(val*10)}>10*</button> */}
        <BrowserRouter>
          <Route exact path="/" render={()=><h1>hey this is my Login page</h1>}></Route>

          {/* <Route exact path="/user/:firstname" render={({match})=>{
            return <h1>user page {match.params.firstname}</h1>
          }}></Route> */}
          <Route path="/users/:firstname" component={HeadingCom}></Route>          
        </BrowserRouter>
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
