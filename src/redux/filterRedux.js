
const filterReducer = (statePart = '', action) => {
  switch(action.type){
    case 'FILTER':
      return action.payload;
    default:
      return statePart;
    }
  }
  
export default filterReducer;