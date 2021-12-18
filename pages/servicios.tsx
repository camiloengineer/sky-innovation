import React from 'react'
import type { NextPage } from 'next';

import { ContainerBlock } from '../components/ContainerBlock';
import { Services } from "../components/Services";

const services: NextPage = () => {
    return (
        <ContainerBlock
            title="Servicios"
            description="Haz que la innovación comience"
        >
            <Services />
        </ContainerBlock>
    )
}

export default services;
