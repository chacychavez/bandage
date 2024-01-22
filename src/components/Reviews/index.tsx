import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import userSrc from '@/assets/user.jpg';
import splash1Src from '@/assets/splash-1.png';
import splash2Src from '@/assets/splash-2.png';
import splash3Src from '@/assets/splash-3.png';
import splash4Src from '@/assets/splash-4.png';
import splash5Src from '@/assets/splash-5.png';
import splash6Src from '@/assets/splash-6.png';
import splash7Src from '@/assets/splash-7.png';
import splash8Src from '@/assets/splash-8.png';
import splash9Src from '@/assets/splash-9.png';
import StarsIcon from '@/assets/stars.svg';
import Image from 'next/image';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Reviews() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			display="flex"
			flexDirection={isDesktop ? 'row' : 'column'}
			gap="128px"
			my={10}
			justifyContent="center"
		>
			<Box
				px="40px"
				py="35px"
				width="464px"
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Typography fontSize={24} fontWeight={700} color="#252B42">
					What they say about us
				</Typography>
				<Box
					gap="20px"
					display="flex"
					flexDirection="column"
					alignItems="center"
					mt="28px"
					py="30px"
				>
					<Image src={userSrc} alt="user" />
					<StarsIcon />
					<Typography color="#737373" fontSize={14} textAlign="center">
						Slate helps you see how many more days you need to work to reach
						your financial goal.
					</Typography>
					<Typography
						color="#23A6F0"
						fontSize={14}
						fontWeight={700}
						textAlign="center"
					>
						Regina Miles
					</Typography>
					<Typography
						color="#252B42"
						fontSize={14}
						fontWeight={700}
						textAlign="center"
					>
						Designer
					</Typography>
				</Box>
			</Box>
			<Box
				width="464px"
				display="grid"
				gridTemplateColumns="1fr 1fr 1fr"
				gap={2}
			>
				<Image src={splash1Src} alt="splash" />
				<Image src={splash2Src} alt="splash" />
				<Image src={splash3Src} alt="splash" />
				<Image src={splash4Src} alt="splash" />
				<Image src={splash5Src} alt="splash" />
				<Image src={splash6Src} alt="splash" />
				<Image src={splash7Src} alt="splash" />
				<Image src={splash8Src} alt="splash" />
				<Image src={splash9Src} alt="splash" />
			</Box>
		</Box>
	);
}
