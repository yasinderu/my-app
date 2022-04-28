import { ActionType } from "../action-types";
import { CategoriesAction } from "../actions/categories";

interface Categories {
    categories: any[] | null,
    error?: string | null
}

const initialState: Categories = {
    categories: null,
    error: null
}

const reducer = (state = initialState, action: CategoriesAction) => {
    switch(action.type) {
        case ActionType.GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ActionType.GET_CATEGORIES_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: return state
    }
}

export default reducer