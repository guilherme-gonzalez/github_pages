import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Integrantes',
    Svg: require('@site/static/img/undraw_engineering_team_a7n2.svg').default,
    description: (
      <>
        1. <code>Juan da Silva</code> <br/>
        2. <code>Nestor Rolon</code> <br/>
        3. <code>Carlos Martínez</code> <br/>
        4. <code>Guilherme Gonzalez</code>
      </>
    ),
  },
  {
    title: '8. ⁠Diseño de interfaces de usuario adaptables para niños con dificultades de aprendizajes',
    Svg: require('@site/static/img/undraw_responsiveness_re_cuv5.svg').default,
    description: (
      <>
        Explorar técnicas de diseño de interfaces de usuario adaptables que puedan ajustarse a las necesidades individuales de los niños con dificultades de aprendizaje, utilizando el modelo MVC como base para la implementación
      </>
    ),
  },
  {
    title: '9. Visualización de Resultados de Imágenes Médicas',
    Svg: require('@site/static/img/undraw_medicine_b-1-ol.svg').default,
    description: (
      <>
        Explorar técnicas de visualización avanzada utilizando programación gráfica para mejorar la interpretación de resultados de imágenes médicas, como resonancias magnéticas y tomografías computarizadas
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
        <Heading as="h3">{title}</Heading>
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
