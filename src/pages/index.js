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

      <main>
        <div className="container">
          <div className={clsx(styles.titleBanner)}>Hello Karma Coin</div>
          <div className={clsx(styles.subtitleBanner)}>Karma Coin is an easy-to-use cryptocurrency and app designed for appreciation, tipping and communities.</div>
          <div className={clsx(styles.titleBanner)}>
          <iframe className={clsx(styles.titleBanner, styles.youtubeVideo)} src="https://www.youtube-nocookie.com/embed/M-okhsTEa1s?controls=0"
                  title="Karma Coin App Demo" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
          </iframe>

          </div>
          </div>
          <div className={styles.buttons}>
            <Link className={clsx(
                    'button button--outline button--secondary button--lg'
                )} target='_blank'
                to='/testnet'>
              Try it Now (Testnet)
            </Link>
            <Link className={clsx(
                'button button--outline button--secondary button--lg'
            )} target='_blank'
                  to='https://getwaitlist.com/waitlist/4912'>
              Join Waiting List (Mainnet)
            </Link>
          </div>

        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>


        <p className={clsx(styles.titleBanner)}>Karma Coin Vision</p>

        <div className={clsx(styles.subtitleBanner)}>
          Bring a positive change in the world by empowering people to appreciate anyone and perform positive actions.</div>

        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>

        <p className={clsx(styles.titleBanner)}>Karma Coin Mission</p>
        <div className={clsx(styles.subtitleBanner)}>Our mission is to create a global token of appreciation that is used by millions of everyday people to appreciate, give and share on a daily basis with an economic model that distributes value to all who participate in good actions.</div>

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
        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>

        <p className={clsx(styles.titleBanner)}>Karma Coin Testnet</p>
        <div className={clsx(styles.subtitleBanner)}>
          Run the Karma Coin App on our open, public <a href='/testnet'>Testnet</a>
        </div>
      </main>

    </Layout>
  );
}

const features = [
  {
    title: 'Easy to use App',
    imageUrl: 'main.png',
    description: (
        <>Joining Karma Coin is simple and easy, all you need is a mobile phone. Karma Coin easy to use app revolutionizes the way we tip and appreciate. It is available for iOS, Android and Desktop devices.
        </>
    ),
  },
  {
    title: 'A Universal Token of Appreciation',
    imageUrl: 'appreciate.png',
    description: (
        <>
          Tipping and appreciation just got easier and more meaningful. You can tip anyone with a mobile number with just few taps.
        </>
    ),
  },
  {
    title: 'Universal',
    imageUrl: 'android_main.png',
    description: (
        <>
          Available this summer for Android, Web and iOS.
        </>
    ),
  },
  {
    title: 'A Coin For All of Us',
    imageUrl: 'send.png',
    description: (
        <>
          Send Karma Coin to anyone with a phone number with just few taps.
        </>
    ),
  },
  {
    title: 'A solid open source blockchain',
    imageUrl: 'appreciation.png',
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
