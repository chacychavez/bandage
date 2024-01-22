import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import post1src from '@/assets/post-1.png';
import post2src from '@/assets/post-2.png';
import post3src from '@/assets/post-3.png';
import ChevRightIcon from '@/assets/chev-right.svg';
import AlarmIcon from '@/assets/alarm.svg';
import GraphIcon from '@/assets/graph.svg';
import Image, { StaticImageData } from 'next/image';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type FeaturePostProps = {
	thumbnail: StaticImageData;
};

function FeaturePost({ thumbnail }: FeaturePostProps) {
	return (
		<Box display="flex" flexDirection="column" alignItems="center" width={348}>
			<Box position="relative">
				<Image src={thumbnail} alt="post" />
				<Typography
					bgcolor="#E74040"
					px="10px"
					color="white"
					fontSize={14}
					fontWeight={700}
					position="absolute"
					top={20}
					left={30}
				>
					NEW
				</Typography>
			</Box>
			<Box p="25px" display="flex" flexDirection="column" gap="10px">
				<Typography color="#737373" fontSize={12}>
					<span style={{ color: '#8EC2F2' }}>Google</span>
					<span style={{ margin: '0 15px' }}>Trending</span>
					<span>New</span>
				</Typography>
				<Typography color="#252B42" fontSize={20} lineHeight="30px">
					Loudest à la Madison #1 (L'integral)
				</Typography>
				<Typography color="#737373" fontSize={14} lineHeight="20px">
					We focus on ergonomics and meeting you where you work. It's only a
					keystroke away.
				</Typography>
				<Box display="flex" justifyContent="space-between" py="15px">
					<Typography
						fontSize={12}
						color="#737373"
						display="flex"
						alignItems="center"
					>
						<AlarmIcon style={{ marginRight: 5 }} />
						22 April 2021
					</Typography>
					<Typography
						fontSize={12}
						color="#737373"
						display="flex"
						alignItems="center"
					>
						<GraphIcon style={{ marginRight: 5 }} />
						10 comments
					</Typography>
				</Box>
				<Button
					sx={{
						fontSize: 14,
						fontWeight: 700,
						color: '#737373',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					Learn More
					<ChevRightIcon style={{ marginLeft: 10 }} />
				</Button>
			</Box>
		</Box>
	);
}

export default function FeaturedPosts() {
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			my={10}
		>
			<Typography color="#23A6F0" fontSize={14}>
				Featured Products
			</Typography>
			<Typography color="#252B42" fontSize={40} fontWeight={700}>
				Featured Posts
			</Typography>
			<Box
				display="flex"
				flexDirection={isDesktop ? 'row' : 'column'}
				gap="10px"
				justifyContent="center"
				mt={10}
			>
				<FeaturePost thumbnail={post1src} />
				<FeaturePost thumbnail={post2src} />
				<FeaturePost thumbnail={post3src} />
			</Box>
		</Box>
	);
}
