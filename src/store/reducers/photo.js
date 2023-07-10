import createAsyncSlice from '../helper/createAsyncSlice';
const API_URL = "https://dogsapi.origamid.dev/json";

const photo = createAsyncSlice({
    name: 'photo',
    fetchConfig: (id) => ({
        url: `${API_URL}/api/photo/${id}`,
        options: {
            method: 'GET',
            cache: 'no-store',
        },
    }),
});

export default photo.reducer;

const photoGet = photo.asyncAction;


export const fetchPhoto = (id) => async (dispatch) => {
    dispatch(photoGet(id));
};