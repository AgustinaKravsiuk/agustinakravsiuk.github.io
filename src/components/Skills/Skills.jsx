import styles from './Skills.module.css'

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1>Habilidades técnicas</h1>
      <div>
        <h3>Front end</h3>
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Tailwind</li>
            <li>React</li>
            <li>Redux</li>
            <li>Redux Toolkit</li>
            <li>Next.JS</li>
          </ul>
        </div>
        <h3>Back end</h3>
        <div>
          <ul>
            <li>NodeJs</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>Sequelize</li>
          </ul>
        </div>
        <h3>Tecnologías y software</h3>
        <div>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <h1>Idiomas</h1>
      <div>
        <ul>
          <li>Español nativo</li>
          <li>Inglés intermedio</li>
        </ul>
      </div>
    </div>
  )
};

export default Skills