import React from 'react';
import type { NextPage } from 'next';

import { ContainerBlock } from '../components/ContainerBlock';
import { About } from '../components/About';

const about: NextPage = () => {
	return (
		<ContainerBlock
			title="Sobre mí"
			description="Haz que la innovación comience">
			<About />
		</ContainerBlock>
	);
};

export default about;
