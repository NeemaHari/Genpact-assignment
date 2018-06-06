import { takeEvery, call, put } from 'redux-saga/effects';
import { saveUserDetails } from '../actions/action';

export function* getUserDetails(action) {
  try {
    const requestParams = {
        method: 'GET',
        headers: {'Content-Type': 'application/json',},
    };
    const url = `https://reqres.in/api/users/${action.userId}`;
    const response = yield call(fetch, url, requestParams);
    const data = yield call([response, response.json]);
    yield put(saveUserDetails(data.data));
  } catch (error) {
    console.log(error);
  }
}

export default function* saga() {
  yield takeEvery('GET_USER_DETAILS', getUserDetails);
}
