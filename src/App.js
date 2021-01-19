import logo from "./logo.svg";
import "./App.scss";
import H3 from "./components/SideList"

const makeGreen = BaseComponent => props => {
  const addProps = {
    style:{
      color:"red"
    }
  }
  
  const newProps = {
    ...props, ...addProps
  }
  console.log({...newProps})
  return <BaseComponent {...newProps}/>
}
const GreenNameTag = makeGreen(H3);
function App() {
const sampleStyles =[];
const listNames = ["a","aa","aaa"]
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Headers</h1>
        {listNames.map((name)=><GreenNameTag name={name}></GreenNameTag>)}
      </header>
    </div>
  );
}

export default App;
