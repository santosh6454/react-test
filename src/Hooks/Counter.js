import React, { Component, useEffect, useState } from "react";
// class Counter extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             count :0
//         }
//     }
//     incrementCount =()=>{
//         this.setState({
//             count:this.state.count+1

//         })
        
//     }
//     render(){
//         return(
//             <div>
//                 <h1>
//                     welcome to class componenet
//                 </h1>
//                 <button onClick={this.incrementCount}>count :{this.state.count}</button>
//             </div>
//         )
//     }
// }
const Counter =()=>{
    const [count ,setCount] = useState({gold:1,silver:2})
    let gold=count.gold
    let silver= count.silver
    useEffect(() => {
        document.title = `You clicked ${gold} times and ${silver}`;
      });
    const increseGold=()=>{
        setCount({gold: gold+1,silver: silver});
    }
    const increseSilver=()=>{
        setCount({silver:silver+1,gold:gold})
    }
    return(
        <div>
            <h1> gold:{gold} silver:{silver}</h1>
            <button onClick={increseGold}>count</button>
            <button onClick={increseSilver}>count</button>
        </div>
    )
}
export default Counter;