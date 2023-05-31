import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Screen() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title='KarmaDivaChatGpt'
      description='Ask Karma Diva Anything'>
       <main>
        <div className="container">
          <div className={clsx(styles.titleBanner)}>Karma Diva ChatGPT</div>
          <div className={clsx(styles.subtitleBanner)}>Ask Karma Diva anything about Karma Coin!</div>
          <div className={clsx(styles.subtitleBanner)}>
              <div id="customgpt_chat">&nbsp;</div>
          </div>
          </div>
      </main>

    </Layout>
  );
}

export default Screen;
