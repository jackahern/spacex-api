export default function(state=[], action){
  switch(action.type){
    case 'GET_UPCOMING_LAUNCHES':
      return action.payload;
    default:
      return state;
  }
}