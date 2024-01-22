import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FacbookIcon from '@/assets/facebook.svg';
import TwitterIcon from '@/assets/twitter.svg';
import YoutubeIcon from '@/assets/youtube.svg';
import InstagramIcon from '@/assets/instagram.svg';
import PhoneIcon from '@/assets/phone.svg';
import EmailIcon from '@/assets/email.svg';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function DiscountHeader() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Stack
			bgcolor="#23856D"
			flexDirection="row"
			alignItems="center"
			justifyContent="space-between"
			color="white"
			px={3}
			pt="9px"
			pb="3px"
			display={isDesktop ? 'flex' : 'none'}
		>
			<Box display="flex" gap="10px">
				<Box p="10px" display="flex" alignItems="center">
					<PhoneIcon style={{ marginRight: '5px' }} />
					<Typography fontWeight={700} fontSize={14}>
						(225) 555-0118
					</Typography>
				</Box>
				<Box p="10px" display="flex" alignItems="center">
					<EmailIcon style={{ marginRight: '5px' }} />
					<Typography fontWeight={700} fontSize={14}>
						michelle.rivera@example.com
					</Typography>
				</Box>
			</Box>
			<Typography fontWeight={700} fontSize={14}>
				Follow Us and get a chance to win 80% off
			</Typography>
			<Box display="flex" alignItems="center" gap="10px" p="10px">
				<Typography fontWeight={700} fontSize={14}>
					Follow Us :
				</Typography>
				<Box display="flex" alignItems="center" gap="4px">
					<InstagramIcon style={{ margin: '5px' }} fill="white" />
					<YoutubeIcon style={{ margin: '5px' }} />
					<FacbookIcon style={{ margin: '5px' }} fill="white" />
					<TwitterIcon style={{ margin: '5px' }} fill="white" />
				</Box>
			</Box>
		</Stack>
	);
}
