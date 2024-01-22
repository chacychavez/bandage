import Image from 'next/image';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bannerSrc from '@/assets/banner.jpeg';

export default function Banner() {
	return (
		<Box position="relative" width="100vw" height="640px">
			<Image src={bannerSrc} alt="banner" objectFit="cover" fill />
			<Box
				position="absolute"
				width="100vw"
				height="100%"
				display="flex"
				justifyContent="center"
				alignItems="center"
				top={0}
			>
				<Box
					width="571px"
					display="flex"
					flexDirection="column"
					justifyContent="center"
					alignItems="center"
					gap="30px"
				>
					<Typography fontWeight={700} fontSize={14} color="#23A6F0">
						Designing Better Experience
					</Typography>
					<Typography
						fontWeight={700}
						fontSize={40}
						color="#252B42"
						textAlign="center"
					>
						Problems trying to resolve the conflict between{' '}
					</Typography>
					<Typography
						fontSize={14}
						color="#737373"
						width={447}
						textAlign="center"
					>
						Problems trying to resolve the conflict between the two major realms
						of Classical physics:{' '}
					</Typography>
					<Typography color="#23856D" fontSize={24} fontWeight={700}>
						$16.48
					</Typography>
					<Button
						sx={{
							px: 5,
							py: '15px',
							backgroundColor: '#23A6F0',
							color: 'white',
						}}
					>
						ADD YOUR CALL TO ACTION
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
