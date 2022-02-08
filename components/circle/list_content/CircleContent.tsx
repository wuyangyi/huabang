import { NextPage } from "next";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showLogin } from "../../../store/slices/loginSlice";
import { useAppSelector } from "../../../store/store";
import LeftMenuWidget, { LeftMenuBean } from "../../widget/LeftMenuWidget";
import LeftUserCard from "../../widget/LeftUserCard";
import AllCircle from "./all_circle/AllCircle";
import CircleBanner, { BannerBannerBean } from "./banner/CirlceBanner";
import styles from './circle_content.module.scss';
import MyCircle from "./my_circle/MyCircle";
import RankCircle from "./rank_circle/RankCircle";

const CircleContent: NextPage = () => {
    const { user, isLogin } = useAppSelector((state) => state.user)

    const banners: BannerBannerBean[] = [
        {
            image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner1.png",
            link: "/"
        },
        {
            image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner2.png",
            link: "/"
        },
        {
            image: "http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_banner3.png",
            link: "/"
        },
    ];

    const menuList: LeftMenuBean[] = [
        {
            "id": 0,
            "title": "全部圈子",
            "image": "/static/images/ico_circle_all.png",
            "num": 0,
        },
        {
            "id": 1,
            "title": "我的帮圈",
            "image": "/static/images/ico_circle_my.png",
            "num": 0,
        },
        {
            "id": 2,
            "title": "排行榜",
            "image": "/static/images/ico_circle_rank.png",
            "num": 0,
        },
    ];

    const dispatch = useDispatch()
    const [selectIndex, setSelectIndex] = useState(0);
    const [topSelectIndex, setTopSelectIndex] = useState(0);

    const route = useRouter();
    const menuItemChick = (index) => {
        if (selectIndex !== index) {
            setSelectIndex(index)
        }
        // route.push({
        //     pathname: "/circle",
        //     query: {
        //         index: index
        //     }
        // })

    }

    const topItemClick = (index) => {
        setTopSelectIndex(index);
    }

    const createCircle = () => {
        if (isLogin) {
            route.push("/circle/create")
        } else {
            dispatch(showLogin())
        }
    }


    return <div className={styles.contentBody}>
        <div className={styles.left}>
            <LeftUserCard descMaxLine={2} className={styles.userCard} />
            <div className={styles.leftMenu}>
                <LeftMenuWidget menuList={menuList} selectIndex={selectIndex} menuItemClick={menuItemChick} />
            </div>
        </div>
        <div className={styles.center}>
            <div className={styles.banner}>
                <CircleBanner>
                    {
                        banners.map((item, index) => {
                            return <a key={index} href={item.link}>
                                <img src={item.image} width="100%" height="100%" alt="" />
                            </a>
                        })
                    }
                </CircleBanner>
            </div>
            <div className={styles.content}>
                {
                    selectIndex == 1 ? <MyCircle id={user?.id} showTitle={true} /> :
                        selectIndex == 2 ? <RankCircle /> :
                            <AllCircle selectIndex={topSelectIndex} itemClick={topItemClick} />
                }
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.joinCircle}>
                <img src="/static/images/ico_join_circle_bg.png" width="100%" alt="" />
                <span className={styles.joinHint1}>更多<span className={styles.hot}>热门</span>帮圈等你加入！</span>
                <span className={styles.joinHint}>快来创建自己的圈子吧~</span>
                <div className={styles.createCircle} onClick={createCircle}>
                    <span className={styles.createText}>创建圈子</span>
                </div>
            </div>
        </div>
    </div>
}

export default CircleContent;