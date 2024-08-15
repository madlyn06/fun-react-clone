'use client'
import { createContext, useState } from 'react';
import {getUser} from "@/utils/auth";

export const AppContext = createContext({});

export const AppContextProvider = ({children}) => {
    const [user, setUser] = useState(getUser);

    return (
        <AppContext.Provider value={{ user, setUser }} >
            {children}
        </AppContext.Provider>
    );
}
