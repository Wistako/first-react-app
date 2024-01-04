import shortid from 'shortid';
// selectors
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllLists = state => state.lists;

// actions
const createActionName = name => `app/lists/${name}`;
const ADD_LIST = createActionName('ADD_LIST');

// action creators
export const addList = payload => ({type: ADD_LIST, payload});


// subreducer
const listsReducer = (statePart = [], action) => {
  switch(action.type){
    case ADD_LIST:
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
}
export default listsReducer;