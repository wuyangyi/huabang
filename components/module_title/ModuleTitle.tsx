import React from "react";
import styles from './module_title.module.scss';

interface IModuleTitle {
    title: string,
    link: string,
    image?: string,
}

const ModuleTitle = (props: IModuleTitle) => {
    return <div className={styles.titleContent}>
        <div className={styles.leftBorder} />
        <span className={styles.title} style={{ backgroundImage: props.image == null ? "" : "url(" + props.image + ")" }}>{props.title}</span>
        {
            props.link && <a className={styles.more} href={props.link}>更多</a>
        }
    </div>
}

export default ModuleTitle;