import { createReducer, on } from "@ngrx/store";
import { Appstate } from "./appstate";
import { setAPIStatus } from "./appaction";

export const initiateState: Appstate = {
    apiStatus: '',
    apiResponseMessage: ''
};

export const appReducer = createReducer(
    initiateState,
    on(setAPIStatus, (state, { apiStatus }) => {
        return apiStatus;
    })
)