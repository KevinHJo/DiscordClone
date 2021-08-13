import ServerIndex from "./server_index";
import { connect } from "react-redux";

const mSTP = (state, ownProps) => ({
    userServers: ownProps.userServers,
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(ServerIndex)