export default function categoryReducer(state= {categories: []}, action) {
 switch(action.type) {
     case "FETCH_CATEGORIES":
         return {tasks: action.payload}
    default:
        return state;
 }
}