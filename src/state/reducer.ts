import {  User } from "../types";
import { State, initialState } from './state';

export type Action = 
        {
            type: "SET_USER",
            payload: User
        }
        |{
            type: "INIT_USER"
        }

export const setUser = (user: User): Action => {
    return { type: "SET_USER", payload: user };
};

export const initUserState = (): Action => {
    return { type: "INIT_USER" };
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };
        
        case "INIT_USER":
            return initialState;

        default:
            return state;
    }
};
