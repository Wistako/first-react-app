import shortid from 'shortid';

const cardsReducer = (statePart = [], action) => {
  switch(action.type){
    case 'ADD_CARD':
      return [...statePart, {...action.payload, id: shortid(), favorite: false}];
    case 'TOGGLE_FAVORITE':
      return statePart.map(card => card.id === action.payload.id ? {...card, favorite: !card.favorite}: card);
    default:
      return statePart;
  }
}
export default cardsReducer;