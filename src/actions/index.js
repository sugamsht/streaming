import streams from "../apis/streams";

export const signIn = (userId) => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT',
    };
}

// export const createStream = (formValues) => async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await streams.post('/', { ...formValues, userId });
//     dispatch({ type: 'CREATE_STREAM', payload: response.data });
// }

export const createStream = (formValues) => async dispatch => {
    const response = await streams.post('/', formValues);
    dispatch({ type: 'CREATE_STREAM', payload: response.data });
};
