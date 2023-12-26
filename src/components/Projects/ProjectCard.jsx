import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './ProjectCard.module.css'

export default function ProjectCard({project}) {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(project.imgSrc)} className={styles.image}></img>
            <h2 className={styles.title}>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.subcontainer}>
                <ul className={styles.skills}>
                    {project.skills.map((elem, id) => {
                        return <li key={id}>{elem}</li>
                    })}
                </ul>
            </div>
            <a className={styles.links} href={project.github}>Github Link of Project</a>
        </div>
    )
}
