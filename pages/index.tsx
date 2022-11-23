import { css } from "@emotion/react";
import { headline, text } from "@guardian/source-foundations";
import { Button } from "@guardian/source-react-components";
import Head from "next/head";

const pageTitleStyles = css`
  width: 100%;
  margin: 0;

  ${headline.small({ fontWeight: "bold" })}
  font-size: 28px;

  color: ${text.primary};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Guardian poll project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 css={pageTitleStyles}>Hello world!!!!</h1>
      <Button>Begin poll??</Button>
    </>
  );
}
