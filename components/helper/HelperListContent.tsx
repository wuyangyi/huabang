import { NextPage } from "next";
import styles from './helper_list_content.module.scss';


const HelperListContent: NextPage = () => {
    return <div className={styles.contentBody}>
        <div className={styles.left}></div>
        <div className={styles.center}></div>
        <div className={styles.right}></div>
    </div>
}

export default HelperListContent;