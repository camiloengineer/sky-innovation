import type { NextPage } from 'next';
import '../styles/Home.module.scss';

import { ContainerBlock } from '../components/ContainerBlock';
import { Index } from '../components/Index';

const Home: NextPage = () => {
	return (
		<ContainerBlock
			title="Sky Innovation"
			description="Haz que la innovación comience">
			<Index />
		</ContainerBlock>
	);
};

export default Home;
