import { ActionType } from "../action-types";

interface GetCategories {
    type: ActionType.GET_CATEGORIES,
    payload: any[]
}

interface GetCategoeiesFailed {
    type: ActionType.GET_CATEGORIES_FAILED,
    payload: string
}

export type CategoriesAction = GetCategories | GetCategoeiesFailed