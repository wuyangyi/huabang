
import React, { useEffect, useState } from "react";
import styles from './home_banner.module.scss';
import LeftUserCard from "../../widget/LeftUserCard";
import { NextPage } from "next";
import { useAppSelector } from "../../../store/store";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
import { useDispatch } from "react-redux";
import { showOrHideLogin } from "../../../store/slices/loginSlice";
import { switchUserPageSelectIndex } from "../../../store/slices/mineSlice";
const staticPath = process.env.STATIC_PATH;

var stop = false;
var timerID;
var timerIDMove;
var realIndex = 0;

const HomeBanner: NextPage = () => {
    const { isLogin, user } = useAppSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const data = [
        {
            "id": 1,
            "url": "https://cdn6.haitou.cc/homepage/1632813394.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
            "link": "http://sxh.haitou.cc/1024xzh",
            "bg": '#3899FF',
            "title": "科大讯飞1024校招会"
        },
        {
            "id": 2,
            "url": "https://cdn6.haitou.cc/homepage/1632815809.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
            "link": "http://xyzp.haitou.cc/article/2261376.html",
            "bg": '#1E73F2',
            "title": "ATL新能源集团"
        },
        {
            "id": 3,
            "url": "https://cdn6.haitou.cc/homepage/1629100479.png?x-oss-process=image/resize,m_fixed,w_695,h_378",
            "link": "http://xyzp.haitou.cc/article/2152379.html",
            "bg": '#8DCDF1',
            "title": "德邦快递"
        },
    ];

    const menus = [
        {
            "id": 0,
            "image": `${staticPath}/images/ico_helper.png`,
            "title": "我的求助",
            "link": "/user/" + user?.id
        },
        {
            "id": 1,
            "image": `${staticPath}/images/ico_order.png`,
            "title": "我的订单",
            "link": ""
        },
        {
            "id": 2,
            "image": `${staticPath}/images/ico_notify.png`,
            "title": "系统通知",
            "link": ""
        },
        {
            "id": 3,
            "image": `${staticPath}/images/ico_contract.png`,
            "title": "联系人",
            "link": ""
        },
        {
            "id": 4,
            "image": `${staticPath}/images/ico_group.png`,
            "title": "我的群聊",
            "link": ""
        },
        {
            "id": 5,
            "image": `${staticPath}/images/ico_circle.png`,
            "title": "我的帮圈",
            "link": "/user/" + user?.id
        },
        {
            "id": 6,
            "image": `${staticPath}/images/ico_rz.png`,
            "title": "实名认证",
            "link": ""
        },
        {
            "id": 7,
            "image": `${staticPath}/images/ico_sc.png`,
            "title": "积分商城",
            "link": ""
        },
        {
            "id": 8,
            "image": `${staticPath}/images/ico_work.png`,
            "title": "招聘兼职",
            "link": ""
        }
    ];
    const [selectIndex, setSelectIndex] = useState(0)

    useEffect(() => {
        startTime();

        return () => {
            clearInterval(timerIDMove);
            clearInterval(timerID);
        }
    }, [])



    function startTime() {
        timerID = setInterval(
            () => {
                switchBanner(realIndex + 1);
            },
            5000
        );
    }

    function switchBanner(index: number) {
        if (stop) {
            return;
        }
        index = index % data.length;
        if (realIndex != index) {
            realIndex = index;
            setSelectIndex(index);
        }
    }

    // banner item点击事件
    function itemClick(index: number) {
        doLongStopClick(index);
    }

    function onMyMouseEnter(index: number) {
        // 在一个控件上停留n秒触发长时间停留事件
        timerIDMove = setInterval(
            () => {
                doLongStopClick(index);
            },
            1000
        );
    }

    function onMyMouseLeave() {
        // 清除判定是否长时间停留的定时器
        clearInterval(timerIDMove);
        if (stop) {
            stop = false;
            // 为stop时，表示在某个上面长时间停留了，移开时，需重启自动切换定时器
            startTime();
        }
    }

    // 长时间停留事件
    function doLongStopClick(index: number) {
        // 停止自己
        clearInterval(timerIDMove);
        stop = true;
        // 长时间停留停止自动切换的定时器
        clearInterval(timerID);
        if (realIndex != index) {
            realIndex = index;
            setSelectIndex(index);
        }
    }

    // 更多功能item点击事件
    const dealClick = (index: number) => {
        if (isLogin && user) {
            if (index == 0) {
                dispatch(switchUserPageSelectIndex({ key: user.id, index: 1 }))
            } else if (index == 5) {
                dispatch(switchUserPageSelectIndex({ key: user.id, index: 2 }))
            }
            router.push({
                pathname: menus[index].link,
            })
        } else {
            showLogin();
        }
    }

    const showLogin = () => {
        dispatch(showOrHideLogin(true));
    }

    return (
        <div className={styles.banner}>
            <ul>
                {
                    data.map((item, index) => {
                        return <li className={[styles.bannerItem, index == selectIndex ? styles.itemShow : styles.itemHide].join(' ')} key={item.id} style={{ backgroundColor: item.bg }}>
                            <a className={styles.itemImg} href={item.link}>
                                <img src={item.url} title={item.title} width="700px" alt="" />
                            </a>
                        </li>
                    })
                }
            </ul>

            <div className={styles.bannerIndicator}>
                <div className={styles.indicatorContent}>
                    <div className={styles.menuLeft}>
                        <LeftUserCard className={styles.userCard} />
                    </div>
                    <div className={styles.indicator}>
                        <ul>
                            {
                                data.map((item, index) => {
                                    return <li key={item.id}
                                        className={[styles.indicatorItem, index === selectIndex ? styles.indicatorItemCheck : ""].join(' ')}
                                        onMouseEnter={() => { onMyMouseEnter(index) }}
                                        onMouseLeave={() => { onMyMouseLeave() }}
                                        onClick={() => itemClick(index)}>
                                        {item.title}
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.menuRight}>
                        <h3 className={styles.menuRightTitle}>更多功能</h3>
                        <ul className={styles.menuContent}>
                            {
                                menus.map((item, index) => {
                                    return <li key={item.id} className={styles.menuItem} onClick={() => { dealClick(index) }}>
                                        <div className={styles.menuImgDiv} style={{ backgroundImage: 'url(' + item.image + ')' }}>
                                            {/* <img className={styles.menuImg} src={item.image} alt="" /> */}
                                        </div>
                                        <span>{item.title}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;