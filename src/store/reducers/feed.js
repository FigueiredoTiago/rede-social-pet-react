import createAsyncSlice from '../helper/createAsyncSlice';
const API_URL = "https://dogsapi.origamid.dev/json";
import { PHOTOS_GET } from '../../Components/Hooks/Api';

const feed = createAsyncSlice({
    name: 'feed',
    initialState: {
        list: [],
        pages: 1,
        infinite: true,
    },
    reducers: {
        addPhotos(state, action) {
            state.list.push(...action.payload);
            if (action.payload.length === 0) state.infinite = false;
        },
        addPage(state) {
            state.pages++;
        },
        resetState(state) {
            state.list = [];
            state.pages = 1;
            state.infinite = true;
            state.loading = false;
            state.error = null;
            state.data = null;
        },
    },
    fetchConfig: ({ page, total, user }) => PHOTOS_GET({ page, total, user }),
});

export default feed.reducer;

export const fetchFeed = feed.asyncAction;
export const { addPhotos, addPage, resetState: resetFeedState } = feed.actions;

export const loadNewPhotos = ({ total = 6, user }) => async (
    dispatch,
    getState,
) => {
    const { feed } = getState();
    dispatch(addPage());
    const { payload } = await dispatch(
        fetchFeed({ page: feed.pages, total, user }),
    );
    dispatch(addPhotos(payload));
};