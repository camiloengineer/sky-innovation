import React from 'react'
import type { NextPage } from 'next';

import { ContainerBlock } from '../components/ContainerBlock';
import { Contact } from "../components/Contact";

export const contact: NextPage = () => {
    return (
        <ContainerBlock
        title="Contacto"
        description="Haz que la innovación comience"
        >
            <Contact />
        </ContainerBlock>
    )
}

export default contact;
