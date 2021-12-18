import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { IProps } from "../models/";
import Navbar from "./Navbar";
import "animate.css";


export const ContainerBlock: FC<IProps> = ({ children, ...customMeta }) => {
  const router = useRouter();

  const meta = {
    title: "Sky Innovation",
    description: `Haz que la innovación comience`,
    type: "website",
    ...customMeta,
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
      </Head>
      <header>
        <Navbar />
      </header>
      <main role="main" className="animate__animated animate__fadeIn">
        {children}
      </main>
    </>
  );
}
