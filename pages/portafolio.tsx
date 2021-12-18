import React from 'react';
import type { NextPage } from 'next';

import { ContainerBlock } from '../components/ContainerBlock';
import { Portfolio } from "../components/Portfolio";

const portfolio: NextPage = () => {
    return (
        <ContainerBlock
            title="Portafolio"
            description="Haz que la innovación comience"
        >
            <Portfolio />
        </ContainerBlock>
    )
}

export default portfolio;
