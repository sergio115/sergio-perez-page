import { FC, useEffect, useReducer } from 'react';

import { createTheme, Theme } from "@mui/material";

import { lightTheme, darkTheme } from '../../themes';
import { ThemeUiContext, themeUiReducer } from './';


export interface ThemeUiState {
	theme: Theme;
};

const UI_INITIAL_STATE: ThemeUiState = {
	theme: createTheme(lightTheme),
};

export const ThemeUiProvider: FC = ({ children }) => {

	useEffect(() => {

		if (localStorage.getItem("themeUi") === darkTheme.palette.mode) {

			dispatch({
				type: 'change-theme',
				payload: darkTheme,
			});
		}
		else {
			dispatch({
				type: 'change-theme',
				payload: lightTheme,
			});
		}
	}, []);

	const [state, dispatch] = useReducer(themeUiReducer, UI_INITIAL_STATE);

	const setChangeTheme = (currentTheme: Theme) => {

		dispatch({ type: 'change-theme', payload: currentTheme });
		localStorage.setItem('themeUi', currentTheme.palette.mode);
	};

	return (
		<ThemeUiContext.Provider value={{
			...state,


			//  Methods
			setChangeTheme,
		}}>
			{children}
		</ThemeUiContext.Provider>
	);
};
