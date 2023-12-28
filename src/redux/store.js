import { createStore } from 'redux';
import initialState from './initailState';
import shortid from 'shortid';
import strContains from '../utils/strContains';
// selectors
export const getFilteredCards = ({cards, filter}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, filter));

export const getAllColumns = state => state.columns;

// create actions
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateFilter = payload => ({type: 'FILTER', payload});

// reducer
const reducer = (state, action) => {
  switch(action.type){
    case 'FILTER':
      return {...state, filter: action.payload}
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]}
    default:
      return state;
  }
};

// store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;