import type { NextPage } from 'next'
import styles from './home_content_item.module.scss';
import HelperItem from '../helperItem/HelperItem';
import { IMenuItem } from '../homeCenter/HomeCenter';

const HomeContentItem: NextPage<IMenuItem> = (props) => {
    return (
        <div id={'n' + props.id} className={styles.itemContent}>
            <div className={styles.contentTitle}>
                <span>{props.title}</span>
                <span className={styles.lookMore}>查看更多</span>
            </div>
            {
                props.list.map((item, index) => {
                    return <HelperItem key={item.id} {...item} />;
                })
            }
        </div>
    );
}

export default HomeContentItem;