import { ActionType } from "../action-types"
import { BooksAction } from "../actions/books"

interface Books {
    books: any[] | null
    savedBook: any[]
    error?: string | null
    loading?: boolean
}

const initialState: Books = {
    books: null,
    savedBook: [],
    error: null,
    loading: false,
}

const reducer = (state = initialState, action: BooksAction) => {
    switch(action.type) {
        case ActionType.GET_BOOKS_START:
            return {
                ...state,
                books: null,
                loading: true
            }
        case ActionType.GET_BOOKS:
            return {
                ...state,
                books: action.payload,
                loading: false
            }
        case ActionType.GET_BOOKS_FAILED:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        case ActionType.SAVE_BOOK:
            return {
                ...state,
                savedBook: [action.payload].concat(state.savedBook)
            }
        default: return state
    }
}

export default reducer