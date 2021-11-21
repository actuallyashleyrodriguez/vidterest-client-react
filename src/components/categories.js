import React from "react";
import VideosContainer from "../containers/videosContainer.js";

const Categories = (props) => {
    //console.log(props)
    return(
            <div>
                {props.categories.map(category => <div id={category.id}><li key={category.id}>{category.attributes.name}
                <ul>
                {category.attributes.videos.map(video => <li key={video.id}>{video.title}</li>)}
                </ul>
                
                </li> 
                <VideosContainer/>
                </div>)}
            </div>
    )
    
}

export default Categories