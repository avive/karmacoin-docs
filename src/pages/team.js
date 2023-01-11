import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


const TeamMembers = [
    {
        name: 'Rachel Kiner',
        title: 'Head of Communities',
        link: 'https://www.instagram.com/lovepriestesss/',
        image: require('@site/static/r_profile.png').default,
        description: (
            <>
            <p>Meet Rachel, a driven and dynamic professional determined to create a better world.
                With over a decade of expertise in both the business and nonprofit sectors, she is a master of strategic planning, project management, and organizational development.</p>
            <p>As a true believer in the power of individual potential, Rachel is dedicated to inspiring and empowering people to bring meaningful and lasting change to their lives and communities. An active member of the professional community, she is always seeking out opportunities to connect with peers and continue her own growth.</p>
            <p>In addition to her professional accomplishments, Rachel is also an advocate for social good and is eager to use her skills to make a positive impact. As Head of Communities for the KarmaCoin team, she is excited to be a part of a platform that enables anyone to show appreciation and support their favorite causes.</p>
            </>
        ),
    },
    {
        name: 'Oriya Pollak',
        title: 'Head of Partnerships',
        link: 'https://www.linkedin.com/in/oriya/',
        image: require('@site/static/o_profile.png').default,
        description: (
            <>
                <p>Meet Oriya Pollak, a seasoned technology professional with 20 years of experience building and managing global teams, product development, research, and sales.</p>
                <p>As a founder and CTO of one of the first broadband providers in the United States, Oriya played a key role in the successful acquisition and merger of the company with a nationwide network. Most recently, he served as the Product Manager of a next-generation blockchain, bringing his reliable expertise to Karma Coin.</p>
                <p>In addition to his professional accomplishments, Oriya has also dedicated nearly a decade to researching consciousness with psychedelics and indigenous technologies for self-exploration, developing products and educational curriculum for personal development and growth.</p>
            </>
        ),
    },
    {
        title: 'Founder and CEO',
        name: 'Aviv Eyal',
        link: 'https://linktr.ee/avive',
        image: require('@site/static/ae_profile.png').default,
        description: (
            <>
                <p>Meet Aviv, a crypto-enthusiast and visionary entrepreneur. As the Founder of SM, a coin for the digital age, and a skilled software developer and digital product designer, he brings a wealth of experience to the table. His passion for building consumer-friendly digital products that are innovative, easy-to-use, and have a great user experience makes him the perfect candidate to lead the Karma Coin team.</p>
                <p>With over 23 years of experience in Co-Founder/CTO roles in innovative start-ups, Aviv brings expertise in hands-on product and technology contributions, driving higher-level strategic technology decisions, team-building, and IP management. He has also successfully founded and run two consumer media companies in San Francisco and New York City.</p>
                <p>As the CEO of Karma Coin, Aviv is dedicated to creating a platform that empowers people to show appreciation and support their favorite causes, no matter their financial status or connections to traditional financial institutions. Join him and the Karma Coin team in building a more generous and connected world.</p>
            </>
        ),
    },
];

function Member({image, link, name, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} className={styles.featureImage} role="img" />
            </div>
            <div className="text--center padding-horiz--md padding-vert--md">
                <h3><a href={link}>{name}</a></h3>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function TeamPage() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Team KarmaCoin`}
            description="Team members bios">
            <main>
                <h1 className={clsx('text--center', 'hero__title', 'padding--sm')}>
                    Karma Coin Founding Team
                </h1>
                <h2 className={clsx('text--center', 'hero__subtitle, padding--sm')}>
                    Committed to empowering generosity and to connecting communities
                </h2>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row" style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'top',
                        }}>
                            {TeamMembers.map((props, idx) => (
                                <Member key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
}

