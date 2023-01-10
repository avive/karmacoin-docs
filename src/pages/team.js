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
        link: 'https://twitter.com/rachelkelly',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily installed and
                used to get your website up and running quickly.
            </>
        ),
    },
    {
        name: 'Oriya Pollack',
        title: 'Head of Partnerships',
        link: 'https://www.linkedin.com/in/oriya/',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
                ahead and move your docs into the <code>docs</code> directory.
            </>
        ),
    },
    {
        title: 'Head of Product',
        name: 'Aviv Eyal',
        link: 'https://linktr.ee/avive',
        image: require('@site/static/icon1.png').default,
        description: (
            <>
                Extend or customize your website layout by reusing React. Docusaurus can
                be extended while reusing the same header and footer.
            </>
        ),
    },
];

function Member({image, link, name, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <img src={image} className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
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
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <main>
                <section className={styles.features}>
                    <div className="container">
                        <div className="row">
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

