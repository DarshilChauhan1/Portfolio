import React from 'react';
import styles from './Technical.module.css';
import { getImageUrl } from '../../utils'
import { useEffect, useState } from 'react';

function Technical() {
    
    return (
        <section className={styles.container} id='technicalskills'>
            <h1 className={styles.title}>Technical Skills</h1>
            <div className={styles.subContainer}>
                <div className={styles.skillslist}>
                    <div><h3 className={styles.title}>HTML</h3><img src={getImageUrl('skills/html.png')}></img></div>
                    <div><h3 className={styles.title}>CSS</h3><img src={getImageUrl('skills/css.png')}></img></div>
                    <div><h3 className={styles.title}>MONGODB</h3><img src={getImageUrl('skills/mongodb.png')}></img></div>
                    <div><h3 className={styles.title}>NODEJS</h3><img src={getImageUrl('skills/node.png')}></img></div>
                   <div><h3 className={styles.title}>REACTJS</h3><img src={getImageUrl('skills/react.png')}></img></div>
                   <div><h3 className={styles.title}>TAILWIND CSS</h3><img src={getImageUrl('skills/Tailwindcss.png')} style={ {width: "95px", height : "75px"}}></img></div>
                </div>
            </div>
        </section>
    )
}

export default Technical