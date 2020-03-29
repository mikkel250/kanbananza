import { connect } from "react-redux";
import Card from "../components/Card";

const mapStateToProps = (state, ownProps) => {
  return { card: state.cards.entities[ownProps.listId] };
};

export default connect(mapStateToProps)(Card);
