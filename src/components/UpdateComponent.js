import React,{useState} from 'react'

const UpdateComponent = OriginalComponent =>{
    function NewComponent(props){
        const [count, setCount] = useState(10);
        const clickHandler = () =>{
            console.log("this is functional component,", count)
            setCount(count+1)
        }
        return <OriginalComponent countHandler = {() =>clickHandler()} {...props} count={count} />
    }
    // class NewComponent extends React.Component{
    //     constructor(props) {
    //         super(props)
        
    //         this.state = {
    //              name:"sukesh",
    //              count:10 
    //         }            
    //         this.clickHandler = this.clickHandler.bind(this)
    //     }
    //     count = 10;
    //     clickHandler(){
    //         this.setState(prevState=>{
    //             return{ count:prevState.count + 1 }
    //         })

    //     }
        
        // render(){
            // return <OriginalComponent countHandler = {this.clickHandler} {...this.props} {...this.state}/>
        // }
    // }
    return NewComponent;
}
export default UpdateComponent;