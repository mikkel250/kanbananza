import { lists as defaultLists } from "../normalized-state";
import set from "lodash/fp/set"; // using lodash's functional programming 'set' function, see "updating nested state video for explanation"

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === "CARD_CREATE") {
    const { cardId, listId } = action.payload;
    const entities = { ...lists.entities };

    const cards = list.entities[listId].cards.concat(cardId); // gives back new arr with all the cardId's plus the new addition

    return set(["entities", listId, "cards"], cards, lists); // this replaces commented out code below

    // entities[listId] = {
    //   ...entities[listId],
    //   cards: entities[listId].cards.concat(cardId)
    // };
    // return { ...lists, entities };
  }

  return lists;
};

export default listsReducer;
