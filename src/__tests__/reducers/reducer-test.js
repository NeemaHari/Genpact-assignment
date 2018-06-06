import reducer from '../../reducers/reducer';

describe('reducers', () => {
  const initialState = {
    userDetails: {},
  };

  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle SAVE_USER_DETAILS', () => {
    const userDetails = {id: '2'};
    const expectedState = { userDetails };

    expect(
      reducer(initialState, {
        type: 'SAVE_USER_DETAILS',
        userDetails
      })
    ).toEqual(expectedState);
  });
});
