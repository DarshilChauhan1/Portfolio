import React from 'react'
import projects from '../../data/projects.json';
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.css"

 export default function Projects() {
    return (
        <section className={styles.container} id='projects'>
            <h1 className={styles.title}>PROJECTS</h1>
            <div className={styles.subcontainer} >
                {projects.map((elem, id) => {
                    return (
                        <ProjectCard key={id} project={elem}/>
                    )   
                })}
            </div>
        </section>
    )
}

