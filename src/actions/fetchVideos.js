export const fetchVideos = () => {
   
    return (dispatch) => {
        dispatch({type: "LOADING_VIDEOS"});
        fetch("http://localhost:3000/api/v2/videos")
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "FETCH_VIDEOS", payload: response.data})
        })
    }

 

}