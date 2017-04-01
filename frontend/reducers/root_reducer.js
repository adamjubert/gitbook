import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import ReposReducer from './repos_reducer';
import IssuesReducer from './issues_reducer';



const RootReducer = combineReducers({
  repos: ReposReducer,
  user: UserReducer,
  issues: IssuesReducer
});

export default RootReducer;
