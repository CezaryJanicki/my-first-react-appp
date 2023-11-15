import shortid from 'shortid';

const createActionName = actionName => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');

export const addCard = payload => ({ type: ADD_CARD, payload });
export const toggleIsFavorite =(id) => ({ type: 'TOGGLE_IS_FAVORITE', payload: id });
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId &&
  card.title && searchString &&
  card.title.toLowerCase().includes(searchString.toString().toLowerCase()));
export const getFavoriteCards = ({ cards }, isFavorite) => cards.filter(card => card.isFavorite === isFavorite);

const cardsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

export default cardsReducer;