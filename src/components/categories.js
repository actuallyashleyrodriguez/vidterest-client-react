import React from "react";

const Categories = (props) => {
    console.log(props)
    return(
            <div>
                {props.categories.map(category => <li id={category.id}>{category.attributes.name}</li>)}
            </div>
    )
    
}

export default Categories