import { createStore, combineReducers } from 'redux';
import initialState from './initailState';
import strContains from '../utils/strContains';
// subreducers
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import filterReducer from './filterRedux';
// selectors
export const getColumnsByList =({columns}, listId) => columns.filter(column => column.listId === listId);
export const getFilteredCards = ({cards, filter}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, filter));
export const getFavoriteCards = ({cards}) => cards.filter(card => card.favorite);
export const getAllLists = state => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getAllColumns = state => state.columns;

// create actions
export const addList = payload => ({type: 'ADD_LIST', payload});
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const toggleFavorite = payload => ({type: 'TOGGLE_FAVORITE', payload});
export const updateFilter = payload => ({type: 'FILTER', payload});

// reducer
const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  filter: filterReducer,
};


const reducer = combineReducers(subreducers);

// store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
export default store;
// const reducer = (state, action) => {
//   switch(action.type){
//     case 'FILTER':
//       return {...state, filter: action.payload}
//     case 'TOGGLE_FAVORITE':
//       return {...state, cards: state.cards.map(card => card.id === action.payload.id ? {...card, favorite: !card.favorite}: card)}
//     case 'ADD_LIST':
//       return {...state, lists: [...state.lists, {...action.payload, id: shortid()}]}
//     case 'ADD_COLUMN':
//       return {...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
//     case 'ADD_CARD':
//       return {...state, cards: [...state.cards, {...action.payload, id: shortid(), favorites: false}]}
//     default:
//       return state;
//   }
// };

// CONCEPT SUBREDUCER
// const reducer = (state, action) => {
//   const newState = {
//     lists: listsReducer(state.lists, action),
//     columns: columnsReducer(state.columns, action),
//     cards: cardsReducer(state.cards, action),
//     filter: filterReducer(state.filter, action),
//   };
//   return newState;
// }