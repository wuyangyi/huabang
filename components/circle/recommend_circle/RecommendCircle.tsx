import { NextPage } from "next";
import styles from './recommend_circle.module.scss';
import ModuleTitle from "../../module_title/ModuleTitle";
import CircleItem from "../../item/circle/CircleItem";
import { CircleBean, ListPageBean } from "../../../store/services/circle";

const RecommendCircle: NextPage<ListPageBean<CircleBean>> = (recommendCircle) => {
    return <div className={styles.recommendCircle}>
        <ModuleTitle title="推荐圈子" link="/circle" />
        <div className={styles.recommendCircleContent}>
            {
                recommendCircle.list.map((item, index) => {
                    return <CircleItem key={item.id} {...item} />
                })
            }
        </div>
    </div>
}

export default RecommendCircle;