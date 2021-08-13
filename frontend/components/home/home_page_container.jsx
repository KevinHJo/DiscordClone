import { connect } from "react-redux";
import HomePage from "./home_page";
import { fetchUserServers, fetchServer } from "../../actions/server_actions";
import { logout } from "../../util/session_api_util";

const mSTP = state => ({
    userServers: Object.values(state.entities.servers),
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    fetchUserServers: userId => dispatch(fetchUserServers(userId)),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(HomePage)