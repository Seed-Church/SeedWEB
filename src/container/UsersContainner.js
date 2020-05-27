import { connect } from "react-redux";
import Forms from "../components/Forms";
import Board from "../components/Board";
import { addUser, editUser, deleteUser,  fetchUsers } from "../actions/Users";
import { fetchStatus } from "../actions/Statuses";
import { fetchGroups } from "../actions/Groups";

const mapStateToProps = (state) => {
  return {
    error: state.Users.error,
    items: state.Users.items,
    pending: state.Users.pending,
    editing: state.Users.editing,
    statuses : state.Statuses.statuses,
    groups : state.Groups.groups,
    statusAPI: state.Users.statusAPI
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchUsers: () => {
      dispatch(fetchUsers());
    },
<<<<<<< Updated upstream
    dispatchAddUser: (data) => {
=======
    dispatchAddUsers: (data) => {
>>>>>>> Stashed changes
      dispatch(addUser(data));
    },
    dispatchEditUser: (id) => {
      dispatch(editUser(id));
    },
    dispatchFetchStatuses: () => {
      dispatch(fetchStatus());
    },
    dispatchFetchGroups: () => {
      dispatch(fetchGroups());
    },
    dispatchDeleteUser: (id) => {
      dispatch(deleteUser(id));
    },
  };
};

const FormsWithLogic = connect(mapStateToProps, mapDispatchToProps)(Forms);
const BoardWithLogic = connect(mapStateToProps, mapDispatchToProps)(Board);

export default {
  FormsWithLogic,
  BoardWithLogic,
};
