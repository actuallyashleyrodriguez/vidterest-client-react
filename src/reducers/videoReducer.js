export default function videoReducer(state= {videos: []}, action) {
    switch(action.type) {
        case "FETCH_VIDEOS":
            return {videos: console.log(action.payload)}
       default:
           return state;
    }
   }