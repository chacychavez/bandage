import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@/assets/twitter.svg';
import InstagramIcon from '@/assets/instagram.svg';
import FacbookIcon from '@/assets/facebook.svg';
import { InputBase } from '@mui/material-next';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box>
			<Box
				px={isDesktop ? '195px' : '46px'}
				py="40px"
				display="flex"
				flexDirection={isDesktop ? 'row' : 'column'}
				justifyContent="space-between"
				alignItems={isDesktop ? 'center' : 'start'}
			>
				<Typography fontSize={24} fontWeight={700}>
					Bandage
				</Typography>
				<Box display="flex" gap="20px" mt={isDesktop ? 0 : 3}>
					<InstagramIcon style={{ margin: '5px' }} fill="#23A6F0" />
					<FacbookIcon style={{ margin: '5px' }} fill="#23A6F0" />
					<TwitterIcon style={{ margin: '5px' }} fill="#23A6F0" />
				</Box>
			</Box>
			<Box
				px={isDesktop ? '195px' : '46px'}
				py="50px"
				display="flex"
				flexDirection={isDesktop ? 'row' : 'column'}
				justifyContent="space-between"
			>
				<Box mt={isDesktop ? 0 : 3}>
					<Typography fontSize={16} fontWeight={700} color="#252B42" mb="20px">
						Company Info
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						About Us
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Carrier
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						We are hiring
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373">
						Blog
					</Typography>
				</Box>
				<Box mt={isDesktop ? 0 : 3}>
					<Typography fontSize={16} fontWeight={700} color="#252B42" mb="20px">
						Legal
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						About Us
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Carrier
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						We are hiring
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373">
						Blog
					</Typography>
				</Box>
				<Box mt={isDesktop ? 0 : 3}>
					<Typography fontSize={16} fontWeight={700} color="#252B42" mb="20px">
						Features
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Business Marketing
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						User Analytic
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Live Chat
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373">
						Unlimited Support
					</Typography>
				</Box>
				<Box mt={isDesktop ? 0 : 3}>
					<Typography fontSize={16} fontWeight={700} color="#252B42" mb="20px">
						Resources
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						IOS & Android
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Watch a Demo
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373" mb="10px">
						Customers
					</Typography>
					<Typography fontSize={14} fontWeight={700} color="#737373">
						API
					</Typography>
				</Box>
				<Box mt={isDesktop ? 0 : 3}>
					<Typography fontSize={16} fontWeight={700} color="#252B42" mb="20px">
						Get In Touch
					</Typography>
					<Box display="flex" mb="10px">
						<InputBase
							sx={{
								borderRadius: '5px 0 0 5px',
								background: '#F9F9F9',
								border: '1px solid #E6E6E6',
								px: '22px',
								py: '15px',
								fontFamily: 'inherit',
							}}
						/>
						<Button
							sx={{
								borderRadius: '0 5px 5px 0',
								fontSize: 14,
								px: '22px',
								py: '15px',
								background: '#23A6F0',
								color: 'white',
							}}
						>
							Subscribe
						</Button>
					</Box>
					<Typography fontSize={12} color="#737373">
						Lore imp sum dolor Amit
					</Typography>
				</Box>
			</Box>
			<Box px={isDesktop ? '195px' : 0} py="25px">
				<Typography
					fontSize={14}
					fontWeight={700}
					color="#737373"
					textAlign={isDesktop ? 'left' : 'center'}
				>
					Made With Love By Finland All Right Reserved{' '}
				</Typography>
			</Box>
		</Box>
	);
}
