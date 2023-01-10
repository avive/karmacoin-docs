import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'The coin we all need',
    imageUrl: 'screen1.png',
    description: (
      <>
        The world needs a global decentralized cryptocurrency that is actually used by millions of everyday people to fulfill the full potential of crypto as an alternative to national currencies.
      </>
    ),
  },
  {
    title: 'The social graph we need',
    imageUrl: 'screen2.png',
    description: (
      <>The world needs a global, objective and decentralized social graph of core relationships between people and between people and orgs in order to create meaningful digital decentralized identities. The identities are critical for creating an impactful web3 future.
      </>
    ),
  },
  {
    title: 'Introducing KarmaCoin',
    imageUrl: 'screen3.png',
    description: (
      <>
         A cryptocurrency designed for giving first and payments later. Provides a first-rate mobile-native user experience for the rest of us. Becomes valuable out of real-world value created by usage and not by speculation and hype.
      </>
    ),
  },
  {
    title: 'Hello Karma Score',
    imageUrl: 'screen4.png',
    description: (
      <>
        Karma score is a measure of a person's positive character traits. It is created by real people appreciating other people using the KarmaCoin mobile app.
      </>
    ),
  },
  {
    title: 'A coin for all of us',
    imageUrl: 'screen5.png',
    description: (
      <>
        People use one simple, mobile native wallet app and don't have to deal with any crypto keys.
      </>
    ),
  },
  {
    title: 'A solid open source blockchain',
    imageUrl: 'screen6.png',
    description: (
      <>
        KarmaCoin is maintained by a permissioned and decentralized modern blockchain technology.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4')}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className="padding--sm">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="The coin for positive humanity">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.bannerLogo} src={'logo_400x400.png'}/>

        </div>
      </header>
      <main>
        <div className="container">
          <p className={clsx(styles.titleBanner)}>Welcome to Karma Coin</p>
          <p className={clsx(styles.subtitleBanner)}>Karma Coin is an easy-to-use cryptocurrency and app designed for appreciation, tipping and communities.</p>
          <div className={styles.buttons}>
            <Link
                className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                )}
                to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container, text--center">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

    </Layout>
  );
}

export default Home;
