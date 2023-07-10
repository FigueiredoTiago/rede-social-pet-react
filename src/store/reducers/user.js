import createAsyncSlice from '../helper/createAsyncSlice';
import { USER_GET } from '../../Components/Hooks/Api';
import { fetchToken } from './token';

const user = createAsyncSlice({
    name: 'user',
    fetchConfig: (token) => USER_GET(token),
});

export const fetchUser = user.asyncAction;

export default user.reducer;

export const userLogin = (user) => async (dispatch) => {
    const { payload } = await dispatch(fetchToken(user));
    if( payload.token !== undefined) {
        await dispatch(fetchUser(payload.token));
    }
};