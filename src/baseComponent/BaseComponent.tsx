import React from "react";

const BaseComponent:React.FC<
{   title: string,
    name:string,
    age:number
}>=(props)=>{

   const {title,name,age}=props;
    return(

        <div>
            hello{title}
        </div>
    )
}

export default BaseComponent;