import { Theme } from '@mui/material';

import { ThemeUiState } from './';


type ThemeUiType =
	| { type: 'change-theme', payload: Theme };

export const themeUiReducer = (state: ThemeUiState, action: ThemeUiType): ThemeUiState => {

	switch (action.type) {
		case 'change-theme':
			return {
				...state,
				theme: action.payload,
			};

		default:
			return state;
	}
};
