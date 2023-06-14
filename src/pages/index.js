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

            <div className={clsx(styles.subtitleBanner)}>The Karma Coin App is available for web and for mobile worldwide.</div>
            <div className={styles.buttons}>
                <a href='https://apps.apple.com/app/karma-coin/id6446460911'>
                    <img className={clsx(styles.playStoreBadge)} alt='Get it on the App Store'
                         src='app_store_badge.png'/>
                </a>

                <a href='https://play.google.com/store/apps/dev?id=6466740538833388014&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                  <img className={clsx(styles.playStoreBadge)} alt='Get it on Google Play'
                       src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/>
              </a>

                <Link className={clsx(
                    'button button--outline button--secondary button--lg'
                )} target='_blank'
                      to='https://app.karmaco.in'>
                    Launch Web App
                </Link>
            </div>

        </div>
         <div className={clsx(styles.subtitleBanner)}>
              <iframe className={clsx(styles.titleBanner, styles.youtubeVideo)} src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&amp;list=PLF4zx8ioKJTshuDCUO8nnRRnsX3_a1Z8l"
                  title="Hello Karma Coiמ" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
          </iframe>
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

        <div className={clsx(styles.smallIconSection)}>
          <img className={clsx(styles.karmaIcon)} src={'logo_400x400.png'}/>
        </div>

        <p className={clsx(styles.titleBanner)}>The Karma Coin Mobile App</p>
        <div className={clsx(styles.subtitleBanner)}>The App is not available yet in app stores. You can get the beta app via Testflight or via a direct download.</div>
        <div className={styles.buttons}>
          <Link className={clsx(
              'button button--outline button--secondary button--lg'
          )} target='_blank'
                to='https://apple.co/3LUannD'>
            Karma Coin for iPhone
          </Link>
          <Link className={clsx(
              'button button--outline button--secondary button--lg'
          )} target='_blank'
                to='https://bit.ly/3FPWRxE'>
            Karma Coin for Android
          </Link>
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
        <div className={clsx(styles.subtitleBanner)}>Karma Coin is a new cryptocurrency powered by <a href="/karmachain">Karmachain</a> - an open, dedicated and permissionless blockchain network.
          As a validator, you play a vital role in maintaining and securing Karmachain, and in return, you are rewarded for your contributions with Karma Coin. <a href='/validators'> Learn more...</a></div>
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
      </main>

    </Layout>
  );
}

const features = [
  {
    title: 'Easy to use',
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
    title: 'A Coin For All of Us',
    imageUrl: 'send.png',
    description: (
        <>
          Send Karma Coin to anyone with a phone number with just few taps.
        </>
    ),
  },
  {
    title: 'Universal',
    imageUrl: 'android_main.png',
    description: (
        <>
          Available for Android, Web and iOS.
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
