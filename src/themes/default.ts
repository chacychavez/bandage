import { defaultTheme } from '@mui/material-next';
import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
	typography: {
		fontFamily: 'inherit',
	},
});

export default customTheme;
