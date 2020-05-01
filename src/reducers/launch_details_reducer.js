export default function(state=[], action){
  switch(action.type){
    case 'GET_LAUNCH':
      return action.payload;
    default:
      return state;
  }
}