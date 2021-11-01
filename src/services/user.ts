import axios from "axios";
import { User, NewUser } from "../types";


const baseURL = process.env.REACT_APP_HOST;

export const saveUser = async (newUser: NewUser) => {
    const res = await axios.post(`${baseURL}users`, newUser)
    return res.data;
}

// For now we get 1 and the same teacher the time to implement auth
interface LoginUser {
    email: string,
    password: string
}
export const getUser = async (user: LoginUser): Promise<User> => {
    const {data: receivedUser} = await axios.get<User>(`${baseURL}users/${1}`)       
    return receivedUser;
}