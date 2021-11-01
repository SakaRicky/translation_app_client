import {  User } from "../types";
import { State } from './state';

export type Action = 
        {
            type: "SET_USER",
            payload: User
        }

export const setUser = (user: User): Action => {
    return { type: "SET_USER", payload: user };
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {

        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};
