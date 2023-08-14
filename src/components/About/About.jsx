import React from "react";
import FotoAKSinFondo from '../../images/FotoAKSinFondo.png'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textAbout}>
        <h2>Sobre mi</h2>
        <p>¡Hola! Mi nombre es Agustina Kravsiuk y soy Desarrolladora Web Full Stack. <br/> Soy profesora de Nivel Inicial. Empecé a interesarme por el mundo IT luego de la pandemia, así que muy curiosa comencé a aprender de manera autodidacta sobre programación. Me gustó tanto que decidí salir de mi zona de confort y realizar el bootcamp de Henry para mejorar mis habilidades y avanzar en la carrera.</p>
        <p>Mi experiencia en la docencia fortaleció mis habilidades en gestión del tiempo, comunicación eficaz, organización y resolución de problemas. Mi entusiasmo por el trabajo en equipo y mi sed de aprendizaje me impulsan a contribuir activamente en proyectos destacados. Mi compromiso y responsabilidad me impulsan a superar expectativas y a aportar una perspectiva fresca en cada desafío que enfrento. Creo en la importancia de seguir aprendiendo y evolucionando constantemente como profesional y, por ende, siempre estoy ansiosa por aprender de mis colegas y compartir conocimientos para crecer juntos.</p>
        <p>Estoy emocionada por seguir desarrollando mi carrera en el campo del desarrollo y utilizar mi combinación única de habilidades para contribuir al éxito y crecimiento de futuros proyectos y equipos con los que trabaje.</p>
      </div>
      <div className={styles.photo} >
        <img src={FotoAKSinFondo} alt="Agustina Kravsiuk" />
      </div>
    </div>
  )
};

export default About