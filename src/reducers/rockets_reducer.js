export default function(state=[], action){
  switch(action.type){
    case 'GET_ROCKETS':
      return action.payload;
    default:
      return state;
  }
}