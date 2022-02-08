import { NextPage } from "next";
import { UserBean } from "../../../store/services/user";
import { useAppSelector } from "../../../store/store";
import RecommendCircle from "../../circle/recommend_circle/RecommendCircle";
import ModuleTitle from "../../module_title/ModuleTitle";
import FollowFans from "./follow_fan/FollowFans";
import styles from './mine_center_content.module.scss';
import MineContent from "./mine_content/MineContent";
import TopUserInfo from "./top_info/TopUserInfo";

export interface IMineCenter {
    userInfo: UserBean,
    isSelf?: boolean,
}

export interface IUserCenter {
    userInfo: UserBean,
    isSelf: boolean,
    selectIndex: number,
    pageChange?: (index: number) => void
}

const MineCenterContent: NextPage<IUserCenter> = ({ userInfo, selectIndex, pageChange, isSelf }) => {

    const { recommendCircleData } = useAppSelector((state) => state.mine);

    return <div className={styles.contentBody}>
        <div className={styles.center}>
            <TopUserInfo userInfo={userInfo} isSelf={isSelf} />
            <MineContent userId={userInfo.id} isSelf={isSelf} selectIndex={selectIndex} pageChange={pageChange} />
        </div>
        <div className={styles.right}>
            <FollowFans userInfo={userInfo} isSelf={isSelf} />
            {
                !isSelf &&
                <div className={styles.about_me}>
                    <ModuleTitle title="与我相关" link="" />
                    <div className={styles.aboutContent}>暂无相关~</div>
                </div>
            }
            {
                recommendCircleData && <RecommendCircle {...recommendCircleData} />
            }

        </div>
    </div>
}

export default MineCenterContent;