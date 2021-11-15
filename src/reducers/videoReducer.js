export default function videoReducer(state= {videos: []}, action) {
    switch(action.type) {
        case "FETCH_VIDEOS":
            return {videos: action.payload}
       default:
           return state;
    }
   }