import { connect } from "react-redux";
import createCard from "../components/CreateCard";

const defaultCardData = {
  title: "",
  description: "",
  assignedTo: ""
};

const mapDispatchToProps = dispatch => {
  return {
    createCard(listId, cardData) {
      const cardId = Date.now().toString();
      const card = {
        id: cardId,
        ...defaultCardData,
        // the cardData overrides any default data, which is why it comes last
        ...cardData
      };
      dispatch({
        type: "CARD_CREATE",
        payload: { card, listId, cardId }
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(createCard);
