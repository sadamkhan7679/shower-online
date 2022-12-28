import React from "react";
import Layout from "../components/MyLayout";
import H1Header from "../components/H1Header";
import Head from "next/head";

const manual = () => (
  <div>
    <Layout>
      <Head>
        <title>Shower Online | Handleiding</title>
        <meta
          name="description"
          content="webshop belgisch maatwerk douchebak douchewand"
        />
        <meta
          name="keywords"
          content="Shower Online, Maatwerk, douchewanden, douchebakken"
        />
      </Head>
      <div className="container">
        <H1Header title="Handleiding" />

        <ul>
          <li>
            <a
              className="view-pdf"
              href="/pdf/Handleiding-Cossolid.pdf"
              target="_blank"
            >
              Cossolid
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  </div>
);
export default manual;
