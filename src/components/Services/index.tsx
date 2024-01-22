import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ReaderIcon from '@/assets/reader.svg';
import BookIcon from '@/assets/book.svg';
import GrowthIcon from '@/assets/growth.svg';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Services() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box display="flex" flexDirection="column" alignItems="center" my={10}>
			<Typography color="#737373" fontSize={20}>
				Featured Products
			</Typography>
			<Typography color="#252B42" fontSize={24} fontWeight={700}>
				THE BEST SERVICES
			</Typography>
			<Typography color="#737373" fontSize={14}>
				Problems trying to resolve the conflict between{' '}
			</Typography>
			<Box
				display="flex"
				gap="30px"
				flexDirection={isDesktop ? 'row' : 'column'}
				justifyContent="center"
				alignItems="center"
				mt={10}
			>
				<Box
					px="40px"
					py="35px"
					width="315px"
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<ReaderIcon />
					<Typography color="#252B42" fontSize={24} fontWeight={700} my="20px">
						Easy Wins
					</Typography>
					<Typography color="#737373" fontSize={14} textAlign="center">
						Get your best looking smile now!
					</Typography>
				</Box>
				<Box
					px="40px"
					py="35px"
					width="315px"
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<BookIcon />
					<Typography color="#252B42" fontSize={24} fontWeight={700} my="20px">
						Concrete
					</Typography>
					<Typography color="#737373" fontSize={14} textAlign="center">
						Defalcate is most focused in helping you discover your most
						beautiful smile
					</Typography>
				</Box>
				<Box
					px="40px"
					py="35px"
					width="315px"
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<GrowthIcon />
					<Typography color="#252B42" fontSize={24} fontWeight={700} my="20px">
						Hack Growth
					</Typography>
					<Typography color="#737373" fontSize={14} textAlign="center">
						Overcame any hurdle or any other problem.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
