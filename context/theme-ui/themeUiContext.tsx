import { createContext } from "react";

import { Theme } from "@mui/material";


interface ContextProps {
	theme: Theme;


	// Methods
	setChangeTheme: (theme: Theme) => void;
}

export const ThemeUiContext = createContext({} as ContextProps);
