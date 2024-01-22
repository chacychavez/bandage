import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cardOneSrc from '@/assets/card-cover-1.jpg';
import cardTwoSrc from '@/assets/card-cover-2.jpg';
import cardThreeSrc from '@/assets/card-cover-3.jpg';
import cardFourSrc from '@/assets/card-cover-4.jpg';
import Image from 'next/image';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function CardInfo() {
	return (
		<Box position="absolute" p={3}>
			<Typography color="#2DC071" fontSize={14} fontWeight={700}>
				5 Items
			</Typography>
			<Typography color="#252B42" fontWeight={700} fontSize={40}>
				FURNITURE
			</Typography>
			<Typography color="#252B42" fontSize={14} fontWeight={700}>
				Read More
			</Typography>
		</Box>
	);
}

export default function CardsHeader() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return isDesktop ? (
		<Box display="flex" gap="16px" justifyContent="center" my={10}>
			<Box>
				<CardInfo />
				<Image src={cardOneSrc} alt="card-1" />
			</Box>
			<Box display="flex" flexDirection="column" gap="16px">
				<Box>
					<CardInfo />
					<Image src={cardTwoSrc} alt="card-2" />
				</Box>
				<Box display="flex" gap="16px">
					<Box>
						<CardInfo />
						<Image src={cardThreeSrc} alt="card-3" />
					</Box>
					<Box>
						<CardInfo />
						<Image src={cardFourSrc} alt="card-4" />
					</Box>
				</Box>
			</Box>
		</Box>
	) : (
		<Box
			display="flex"
			flexDirection="column"
			gap="16px"
			alignItems="center"
			my={10}
		>
			<Box>
				<CardInfo />
				<Image
					src={cardOneSrc}
					alt="card-1"
					width={330}
					height={300}
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<Box>
				<CardInfo />
				<Image
					src={cardTwoSrc}
					alt="card-2"
					width={330}
					height={300}
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<Box>
				<CardInfo />
				<Image
					src={cardThreeSrc}
					alt="card-3"
					width={330}
					height={300}
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<Box>
				<CardInfo />
				<Image
					src={cardFourSrc}
					alt="card-4"
					width={330}
					height={300}
					style={{ objectFit: 'cover' }}
				/>
			</Box>
		</Box>
	);
}
