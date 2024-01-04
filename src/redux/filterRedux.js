
// Action 
const createActionName = name => `app/filter/${name}`;
const FILTER = createActionName('FILTER');

export const updateFilter = payload => ({type: FILTER, payload});

const filterReducer = (statePart = '', action) => {
  switch(action.type){
    case FILTER:
      return action.payload;
    default:
      return statePart;
    }
  }
  
export default filterReducer;