export default function(state=[], action){
  switch(action.type){
    case 'GET_LATEST_LAUNCH':
      return action.payload;
    default:
      return state;
  }
}