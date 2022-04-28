import { ActionType } from "../action-types";
import { BooksAction } from "../actions/books";
import { Dispatch } from "react";

export const getBooks = (categoryId: number, page: number, size: number) => {
    return async (dispatch: Dispatch<BooksAction>) => {
        try {
            dispatch({type: ActionType.GET_BOOKS_START})
            const res = await fetch(`/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`);
            const data = await res.json();
            if(res.status === 200) {
                dispatch({type: ActionType.GET_BOOKS, payload: data})
            } else {
                dispatch({type: ActionType.GET_BOOKS_FAILED, payload: "Something went wrong"})
            }
            
        } catch (err) {
            dispatch({type: ActionType.GET_BOOKS_FAILED, payload: err instanceof Error ? err.message : "something went wrong"})
        }
    }
}

export const saveBook = (book: object) => {
    return (dispatch: Dispatch<BooksAction>) => {
        dispatch({type: ActionType.SAVE_BOOK, payload: book})
    }
}