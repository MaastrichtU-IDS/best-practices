import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../css/styles.module.css';

const features = [
  {
    title: 'Publish FAIR data',
    imageUrl: 'img/undraw_data.svg',
    description: (
      <>
        Concrete tools and methods to improve your software and data FAIRness
      </>
    ),
  },
  {
    title: 'Distribute your code',
    imageUrl: 'img/undraw_Container_ship.svg',
    description: (
      <>
        Use package managers and docker containers to easily distribute your softwares or services.
      </>
    ),
  },
  {
    title: 'Share tips and good practices',
    imageUrl: 'img/undraw_shared_workspace.svg',
    // imageUrl: 'img/undraw_collaborators.svg',
    description: (
      <>
        Learn and discuss about new methods and technologies to help with doing better Data Science.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Data Science Research Infrastructure at Maastricht University">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          {/* <Logo img_src={`${baseUrl}img/dsri_logo.png`} /> */}
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
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
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





