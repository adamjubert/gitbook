import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';


export const fetchUser = username => dispatch => (
  UserApiUtil.fetchUser(username).then(user => dispatch(receiveUser(user)))
);


const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});
