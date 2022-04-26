import React, { useEffect, useState } from "react";
import styles from './home_content.module.scss';
import HomeBanner from "./banner/HomeBanner";
import ModuleTitle from "../module_title/ModuleTitle";
import HomeCenter from "./homeCenter/HomeCenter";
import type { HelperItemData } from "../../store/services/helper";
import type { CircleBean, ListPageBean } from "../../store/services/circle";
import CircleItem from '../item/circle/CircleItem';
import { NextPage } from "next";
import LeftMenuWidget, { LeftMenuBean } from "../widget/LeftMenuWidget";
import RecommendCircle from "../circle/recommend_circle/RecommendCircle";
const staticPath = process.env.STATIC_PATH;

interface HomeData {
    recommendData: HelperItemData[],
    likeData: HelperItemData[],
    nearbyData: HelperItemData[],
    hortData: HelperItemData[],
    recommendCircle: ListPageBean<CircleBean>,
}

interface HomeLeftMenu extends LeftMenuBean {
    list
}

var isDown = 0;

const HomeContent: NextPage<HomeData> = (props) => {

    const menuList: HomeLeftMenu[] = [
        {
            "id": 0,
            "title": "合适推荐",
            "image": `${staticPath}/images/ico_comment.png`,
            "num": 0,
            "list": props.recommendData
        },
        {
            "id": 1,
            "title": "我的关注",
            "image": `${staticPath}/images/ico_like.png`,
            "num": 0,
            "list": props.likeData
        },
        {
            "id": 2,
            "title": "在我身边",
            "image": `${staticPath}/images/ico_address.png`,
            "num": 0,
            "list": props.nearbyData
        },
        {
            "id": 3,
            "title": "紧急求助",
            "image": `${staticPath}/images/ico_hot.png`,
            "num": 0,
            "list": props.hortData
        }
    ];


    const hotNews = [
        {
            id: 0,
            title: "互帮原来可以这么简单",
            link: "",
        },
        {
            id: 1,
            title: "博主教你接单途中遇到危险该怎么做",
            link: "",
        },
        {
            id: 2,
            title: "防诈骗需要这些小技巧",
            link: "",
        },
        {
            id: 3,
            title: "保证金的作用是什么？如何合理设置保证金？",
            link: "",
        },
        {
            id: 4,
            title: "接单的正确流程是怎样的？",
            link: "",
        },
    ];

    var timerID;

    const menuLocationlist: number[] = [];

    const [selectIndex, setSelectIndex] = useState(0);

    useEffect(() => {
        window.onscroll = bindHandleScroll;
        initMenuLocationList();
        setMenuLocation();
        doScroll();
        return () => {
            // 组件卸载函数
            clearInterval(timerID)
        }
    }, []);

    function initMenuLocationList() {
        for (let index = 0; index < menuList.length; index++) {
            let child = document.getElementById('n' + menuList[index].id);
            if (child != null) {
                menuLocationlist[index] = child.offsetTop + child.offsetHeight - 80;
            }
        }
    }

    function menuItemClick(index: number) {
        if (index !== selectIndex) {
            setSelectIndex(index);
            const tesNode = document.getElementById('n' + menuList[index].id);
            if (tesNode != null) {
                isDown++;
                timerID = setInterval(() => {
                    isDown--;
                    clearTimeout(timerID);
                }, 700);
                const elOffset = tesNode.offsetTop - 80;
                window.scrollTo({
                    top: elOffset,
                    behavior: 'smooth',
                });
            }
        }
    }

    const bindHandleScroll = (event: any) => {
        doScroll();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    // 左边菜单导航栏位置及滚动
    function doScroll() {
        let leftMenu = document.getElementById('leftMenu');
        if (leftMenu === null) {
            return;
        }
        if (window.pageYOffset > 381) {
            leftMenu.style.top = "80px";
            const pageWidth = document.documentElement.clientWidth;
            if (pageWidth < 1300) {
                leftMenu.style.left = (50 - window.pageXOffset) + "px";
            } else {
                leftMenu.style.left = pageWidth / 2 + window.pageXOffset - 600 + "px";
            }
            leftMenu.style.position = "fixed";
        } else {
            leftMenu.style.top = "0px";
            leftMenu.style.left = "0px";
            leftMenu.style.position = "relative";
        }

        if (isDown > 0) {
            return;
        }
        setMenuLocation();
    }

    function setMenuLocation() {
        for (let index = 0; index < menuLocationlist.length; index++) {
            if (window.pageYOffset < menuLocationlist[index]) {
                setSelectIndex(index);
                return;
            }
        }
    }

    return (
        <div className={styles.content}>
            <HomeBanner />
            <div className={styles.contentBody}>
                <div className={styles.contentLeft}>
                    <LeftMenuWidget id="leftMenu" selectIndex={selectIndex} menuList={menuList} menuItemClick={menuItemClick} />
                </div>
                <div className={styles.contentCenter}>
                    <HomeCenter data={menuList} />
                </div>
                <div className={styles.contentRight}>
                    <div className={styles.hotNews}>
                        <ModuleTitle title="互帮头条" image={`${staticPath}/images/ico_hot.png`} link="/" />
                        <ul className={styles.hotNewsContent}>
                            {
                                hotNews.map((item, index) => {
                                    return <li key={item.id} className={styles.hotNewsItem}  >
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>

                    {
                        props.recommendCircle && <RecommendCircle {...props.recommendCircle} />
                    }
                </div>
            </div>
        </div>
    );
}

export default HomeContent;