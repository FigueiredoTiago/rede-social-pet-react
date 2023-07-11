import createAsyncSlice from '../helper/createAsyncSlice';
import { TOKEN_POST } from '../../Components/Hooks/Api';

const token  = createAsyncSlice({
    name: 'token',
    initialState: {
        data: {
            token: window.localStorage.getItem('token') || null,
        },
    },
    fetchConfig: (user) => TOKEN_POST(user),
});

export const fetchToken = token.asyncAction;

export default token.reducer;

export const {resetState: resetTokenState} = token.actions;