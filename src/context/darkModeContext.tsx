import React, { createContext, useReducer, ReactNode } from "react";
import darkModeReducer from "./darkModeReducer";

interface DarkModeState {
    darkMode: boolean;
}

interface DarkModeContextType {
    darkMode: boolean;
    dispatch: React.Dispatch<any>;
}

const INITIAL_STATE: DarkModeState = {
    darkMode: false
};

export const DarkModeContext = createContext<DarkModeContextType>({
    darkMode: INITIAL_STATE.darkMode,
    dispatch: () => {}
});

interface DarkModeContextProviderProps {
    children: ReactNode;
}

export const DarkModeContextProvider: React.FC<DarkModeContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(darkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
};
