import React from "react"
import Secondcomponent from "./Secondcomponent"

function Firstcomponent(props){
    return(
        <>
          <Secondcomponent/>
            <h1>here is our first {props.name}comopnent</h1>
        </>
    )
}
export default Firstcomponent;
