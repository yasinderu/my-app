import { ActionType } from "../action-types";
import { CategoriesAction } from "../actions/categories";
import { Dispatch } from "react";

export const getCategories = () => {
    return async (dispatch: Dispatch<CategoriesAction>) => {
        try {
            const res = await fetch("/fee-assessment-categories");
            const data = await res.json()
            if(res.status === 200) {
                dispatch({type: ActionType.GET_CATEGORIES, payload: data})
            } else {
                dispatch({type: ActionType.GET_CATEGORIES_FAILED, payload: "Something went wrong"})
            }
        } catch (err) {
            dispatch({type: ActionType.GET_CATEGORIES_FAILED, payload: err instanceof Error ? err.message : "something went wrong"})
            
        }
    }
}