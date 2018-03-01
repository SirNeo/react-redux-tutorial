import * as CONSTS from '../constants/action-types';

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTS.ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        default:
            return state;
      }
};

export default rootReducer;