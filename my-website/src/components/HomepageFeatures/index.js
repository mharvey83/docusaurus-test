import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Seamless Project Setup',
    Svg: require('@site/static/img/Seamless-project-setup.svg').default,
    description: (
      <>
       We offer technology that easily integrates into existing tools, personalised project setup, and robust training.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Robust-identificationtools.svg').default,
    description: (
      <>
      We build tools designed to work in the world’s toughest settings. Our technology is created for and by users.
      </>
    ),
  },
  {
    title: 'Powered by the Open Source Community',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We want your help to power this product. Your contributions matter!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
