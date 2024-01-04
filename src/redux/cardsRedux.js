import shortid from 'shortid';
import strContains from '../utils/strContains';

// selectors
export const getFilteredCards = ({cards, filter}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, filter));
export const getFavoriteCards = ({cards}) => cards.filter(card => card.favorite);

// actions
const createActionName = name => `app/lists/${name}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = payload => ({type: ADD_CARD, payload});
export const toggleFavorite = payload => ({type: TOGGLE_FAVORITE, payload});
export const removeCard = payload => ({type: REMOVE_CARD, payload});


const cardsReducer = (statePart = [], action) => {
  switch(action.type){
    case ADD_CARD:
      return [...statePart, {...action.payload, id: shortid(), favorite: false}];
    case TOGGLE_FAVORITE:
      return statePart.map(card => card.id === action.payload.id ? {...card, favorite: !card.favorite}: card);
    case REMOVE_CARD:
      return statePart.filter(card => card.id !== action.payload.id)
    default:
      return statePart;
  }
}
export default cardsReducer;