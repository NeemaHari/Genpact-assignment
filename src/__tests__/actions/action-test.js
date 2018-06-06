import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/action';

const mockStore = configureMockStore([]);

describe('actions', () => {
    it('should dispatch an action  GET_USER_DETAILS', () => {
        const store = mockStore({});
        const userId = '2';
        const expectedActions = {
            type: 'GET_USER_DETAILS',
            userId,
        };
        store.dispatch(actions.getUserDetails(userId));

        expect(store.getActions()).toEqual([expectedActions]);
    });

    it('should dispatch an action  SAVE_USER_DETAILS', () => {
        const store = mockStore({});
        const userDetails = {id: '2'};
        const expectedActions = {
            type: 'SAVE_USER_DETAILS',
            userDetails,
        };
        store.dispatch(actions.saveUserDetails(userDetails));

        expect(store.getActions()).toEqual([expectedActions]);
    });
});