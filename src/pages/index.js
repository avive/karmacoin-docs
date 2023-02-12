import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The coin for positive humanity">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <img className={styles.bannerLogo} src={'logo_400x400.png'}/>
        </div>
      </header>
      <main>
        <div className="container">
          <div className={clsx(styles.titleBanner)}>Hello Karma Coin</div>
          <div className={clsx(styles.subtitleBanner)}>Karma Coin is an easy-to-use cryptocurrency and app designed for appreciation, tipping and communities.</div>
          <div className={styles.buttons}>
            <Link className={clsx(
                    'button button--outline button--secondary button--lg'
                )} target='_blank'
                to='https://bit.ly/3K0vyn2'>
              Launch Demo
            </Link>
            <Link className={clsx(
                'button button--outline button--secondary button--lg'
            )} target='_blank'
                  to='https://getwaitlist.com/waitlist/4912'>
              Join Waiting List
            </Link>
          </div>
        </div>
        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className={clsx('container', 'text--center')}>
              <div className={clsx('row', styles.centerRow)}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>
        <p className={clsx(styles.titleBanner)}>Karma Coin for Validators</p>
        <div className={clsx(styles.subtitleBanner)}> Karma Coin is a new permissionless cryptocurrency enabled by the Karma Coin blockchain - an open and decentralized blockchain network.
          As a validator, you play a vital role in maintaining and securing the Karma Coin permissionless blockchain, and in return, you are rewarded for your contributions with Karma Coin. <a href='/validators'> Learn more...</a></div>
        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>
        <p className={clsx(styles.titleBanner)}>Karma Coin for Community Managers</p>
        <div className={clsx(styles.subtitleBanner)}>
          Grow your community stronger. Give your members real-world membership benefits. Enable your members to appreciate each-other according to your community values, and reward them according to their contribution to your community. <a href='/communities'> Learn more...</a>
        </div>
      </main>

    </Layout>
  );
}

const features = [
  {
    title: 'Easy to use App',
    imageUrl: 'screen1.png',
    description: (
        <>Joining Karma Coin is simple and easy, all you need is a mobile phone. Karma Coin easy to use app revolutionizes the way we tip and appreciate. It is available for iOS, Android and Desktop devices.
        </>
    ),
  },
  {
    title: 'A Universal Token of Appreciation',
    imageUrl: 'screen3.png',
    description: (
        <>
          Tipping and appreciation just got easier and more meaningful. You can tip anyone with a mobile number with just few taps.
        </>
    ),
  },
  {
    title: 'Hello Karma Score',
    imageUrl: 'screen4.png',
    description: (
        <>
          Karma Score gives meaning and insight into people's positive character traits and personality, as perceived by others. Karma Score is the new crypto like.
        </>
    ),
  },
  {
    title: 'A Coin For All of Us',
    imageUrl: 'screen5.png',
    description: (
        <>
          Send Karma Coin to anyone with a phone number with just few taps.
        </>
    ),
  },
  {
    title: 'A solid open source blockchain',
    imageUrl: 'screen6.png',
    description: (
        <>
          Karma Coin is maintained by a dedicated permissionless and modern blockchain which provides security and transparency.
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
              <img className={clsx(styles.featureImage)} src={imgUrl} alt={title} />
            </div>
        )}
        <h3 className={clsx(styles.subTitle)}>{title}</h3>
        <p className={clsx('padding--sm', styles.smallText)}>{description}</p>
      </div>
  );
}

export default Home;
