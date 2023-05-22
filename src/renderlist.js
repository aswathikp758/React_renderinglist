import React, { Component } from "react";
class RenderList extends Component {

    constructor(props){
        super(props);
        this.state={
            items:["apple","orange","pineapple","grapes"],
            // create array like object
            users:[
                {name:"john",age:29},
                {name:"sam",age:24},
                {name:"peter",age:23}
            ]
        };
    }
    render(){
        var lis=this.state.items.map(function(itm,k){
            return <li>{itm}</li>
        })
        return (
            <div>
                <ul>

                    {lis}
                     {/* OR directly put the printing code into it.with out using variable. */}

                    {this.state.items.map(function(itm,k){
                    return <li> {itm} </li>})}

                    
                    {/* OR directly put the printing code using arrow function */}
                   
                    {this.state.items.map((itm,k)=><li key={k}>{itm}</li>)} 
                    {/* set key=k for remove missing key warning */}
                    </ul>

                    <table>
                        <tr>
                            <td>Name</td>
                            <td>Age</td>
                        </tr>
                        {
                            this.state.users.map((itm,k)=>{
                                return(
                                    <tr>
                                        <td>{itm.name}</td>
                                        <td>{itm.age}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                
            </div>
        )
    }
    

}
export default RenderList;