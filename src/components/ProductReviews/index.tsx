import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import unsplashSrc from '@/assets/unsplash.png';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ProductReviews() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box mt="40px" display={isDesktop ? 'block' : 'none'}>
			<Box display="flex" justifyContent="center">
				<Typography p={3}>Description</Typography>
				<Typography p={3}>Additional Information</Typography>
				<Typography p={3}>Reviews (0)</Typography>
			</Box>
			<Box display="flex" gap="30px" justifyContent="center" mt="24px">
				<Box width={599} display="flex" flexDirection="column" gap="30px">
					<Typography fontSize={24} fontWeight={700}>
						the quick fox jumps over{' '}
					</Typography>
					<Typography fontSize={14} color="#737373" width={513}>
						Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
						RELIT official consequent door ENIM RELIT Mollie. Excitation venial
						consequent sent nostrum met.
					</Typography>
					<Typography
						fontSize={14}
						color="#737373"
						width={513}
						borderLeft="3px solid #23856D"
						pl={3}
					>
						Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
						RELIT official consequent door ENIM RELIT Mollie. Excitation venial
						consequent sent nostrum met.
					</Typography>
					<Typography fontSize={14} color="#737373" width={513}>
						Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
						RELIT official consequent door ENIM RELIT Mollie. Excitation venial
						consequent sent nostrum met.
					</Typography>
				</Box>
				<Box>
					<Image src={unsplashSrc} alt="unsplash" />
				</Box>
			</Box>
		</Box>
	);
}
