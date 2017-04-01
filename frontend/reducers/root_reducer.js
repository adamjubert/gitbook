import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ReposReducer from './repos_reducer';



const RootReducer = combineReducers({
  repos: ReposReducer,
  user: UserReducer,
});

export default RootReducer;
