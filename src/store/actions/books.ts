import { ActionType } from "../action-types";

interface GetBooksStart {
    type: ActionType.GET_BOOKS_START,
}

interface GetBooks {
    type: ActionType.GET_BOOKS,
    payload: any[],
}

interface GetBooksFailed {
    type: ActionType.GET_BOOKS_FAILED,
    payload: string
}

interface SaveBook {
    type: ActionType.SAVE_BOOK,
    payload: object
}

export type BooksAction = GetBooks | GetBooksFailed | GetBooksStart | SaveBook;