import React from "react";

const Categories = (props) => {
    //console.log(props)
    return(
            <div>
                {props.categories.map(category => <div id={category.id}><li key={category.id}>{category.attributes.name}
                <ul>
                {category.attributes.videos.map(video => <li key={video.id}>{video.title}</li>)}
                </ul>
                </li> </div>)}
            </div>
    )
    
}

export default Categories