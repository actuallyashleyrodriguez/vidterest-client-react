export const fetchCategories = () => {
   
    return (dispatch) => {
        dispatch({type: "LOADING_CATEGORIES"});
        fetch("http://localhost:3000/api/v2/videos")
        .then(resp => resp.json())
        .then(response => {
            dispatch({type: "FETCH_CATEGORIES", payload: response.data})
        })
    }

 

}