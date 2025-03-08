import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build Your Record',
    Svg: styles.image1,
    description: (
      <>
        In Our Drag-and-Drop No Code Creator
      </>
    ),
  },
  {
    title: 'Connect Your Hardware',
    Svg: styles.image2,
    description: (
      <>
        Make Your Favorite BLE Board A Medical Device
      </>
    ),
  },
  {
    title: 'Test With Your Users',
    Svg: styles.image3,
    description: (
      <>
        Connect and Manage Everything on the App
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')} style={{justifyContent: 'center', alignItems: 'center', }}>
      <div className="text--center padding-vert--md" style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: 300}}>
        <img className={Svg} style={{margin:'auto'}} />
      </div>
      <div className="text--center padding-horiz--md" style={{display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: "column"}}>
        <Heading as="h2" className="heading__title" style={{width: 250, fontSize: 32}}>{title}</Heading>
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
