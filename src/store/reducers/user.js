import createAsyncSlice from '../helper/createAsyncSlice';
import { USER_GET } from '../../Components/Hooks/Api';
import { fetchToken } from './token';
import { resetTokenState } from './token';

const user = createAsyncSlice({
    name: 'user',
    fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = user.asyncAction;

export default user.reducer;

export const userLogin = (user) => async (dispatch) => {
    const { payload } = await dispatch(fetchToken(user));
    if( payload.token !== undefined) {
        window.localStorage.setItem('token', payload.token);
        await dispatch(fetchUser(payload.token));
    }
};

const {resetState: resetUserState, fetchError} = user.actions;

export const userLogout = () => async (dispatch) => {
    dispatch(resetUserState());
    dispatch(resetTokenState());
    window.localStorage.removeItem('token');
};

export const autoLogin = () => async (dispatch, getState) => {
    const { token } = getState();
    if(token?.data?.token) {
        const { type } = await dispatch(fetchUser(token.data.token));
        if(type === fetchError.type) {
            dispatch(userLogout());
        }
    }
}