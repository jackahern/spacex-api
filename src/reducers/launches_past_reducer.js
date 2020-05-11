export default function(state=[], action){
  switch(action.type){
    case 'GET_PAST_LAUNCHES':
      return action.payload;
    default:
      return state;
  }
}