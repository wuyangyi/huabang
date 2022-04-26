
import styles from '../styles/header.module.scss';
import wrapper, { useAppDispatch, useAppSelector } from '../store/store';
import { showOrHideLogin } from '../store/slices/loginSlice';
import { useDispatch } from "react-redux";
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getScrollbarWidth } from '../utils/util';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { switchUserPageSelectIndex } from '../store/slices/mineSlice';
import { outLogin } from '../store/slices/userSlice';
const staticPath = process.env.STATIC_PATH;

interface IHeader {
    page: number,
    userCenterChange?: (index: number) => void
}

const Header: NextPage<IHeader> = (props) => {
    const dispatch = useDispatch();
    const isShowLogin = useAppSelector((state) => state.login.isShowLogin);
    const { isLogin, user } = useAppSelector((state) => state.user);
    const router = useRouter();

    const userCenterList = [
        {
            id: 0,
            image: `${staticPath}/images/ico_my_center.png`,
            title: "我的主页",
            link: "/user/" + user?.id
        },
        {
            id: 1,
            image: `${staticPath}/images/ico_my_circle.png`,
            title: "我的帮圈",
            link: "/user/" + user?.id
        },
        {
            id: 2,
            image: `${staticPath}/images/ico_collect.png`,
            title: "我的收藏",
            link: "/user/" + user?.id
        },
        {
            id: 3,
            image: `${staticPath}/images/ico_setting.png`,
            title: "系统设置",
            link: ""
        },
        {
            id: 4,
            image: `${staticPath}/images/ico_out_login.png`,
            title: "退出登录",
            link: ""
        }
    ];

    const sendList = [
        {
            id: 0,
            image: `${staticPath}/images/ico_release_help.png`,
            title: "发求助"
        },
        {
            id: 1,
            image: `${staticPath}/images/ico_release_dynamic.png`,
            title: "发动态"
        },
        {
            id: 2,
            image: `${staticPath}/images/ico_release_wz.png`,
            title: "发文章"
        }
    ];

    const [isShowUserCenter, setShowUserCenter] = useState(false);
    const [isShowSendDynamic, setShowSendDynamic] = useState(false);

    // 渲染完成回调
    useEffect(() => {
        document.addEventListener('click', hideDialog);
    }, [])

    const hideDialog = (ev: any) => {
        let target = ev.target || ev.srcElement;
        let id = target.id;
        if (id !== "userHead") {
            setShowUserCenter(false);
        }
        if (id !== "sendDynamic") {
            setShowSendDynamic(false);
        }
    }

    function userCenterShow() {
        setShowUserCenter(!isShowUserCenter);
    };

    function sendShow() {
        setShowSendDynamic(!isShowSendDynamic)
    }

    const userCenterItemClick = (index: number) => {
        if (index < 3) {
            if (props.userCenterChange) {
                props.userCenterChange(index == 0 ? 0 : index + 1)

            } else {
                if (user) {
                    dispatch(switchUserPageSelectIndex({ key: user.id, index: index == 0 ? 0 : index + 1 }))
                }
                router.push({
                    pathname: userCenterList[index].link
                })
            }
        } else if (index == 3) {
            router.push({
                pathname: userCenterList[index].link
            })
        } else if (index == 4) {
            // 退出登录
            dispatch(outLogin())
        }
    }

    const sendDynamicItemClick = (ev: any) => {
        console.log("点击了");
    }

    const showLogin = () => {
        dispatch(showOrHideLogin(true));
    }

    return (
        <header className={styles.header} style={{ paddingRight: isShowLogin ? (getScrollbarWidth() + 'px') : '0px' }}>
            <div className={styles.content}>
                <a href="../"><img className={styles.logo} src={`${staticPath}/images/logo.png`} title="互帮" alt="" /></a>
                <ul className={styles.menu}>
                    <li className={props.page === 0 ? styles.menuSelect : ''}>
                        <Link href="/"><a className={styles.menuAHome}>首页</a></Link>
                    </li>
                    <li className={props.page === 1 ? styles.menuSelect : ''}>
                        <Link href="/helper/list"><a className={styles.menuAHelp}>求助</a></Link>
                    </li>
                    <li className={props.page === 2 ? styles.menuSelect : ''}>
                        <Link href="/dynamic"><a className={styles.menuADynamic}>动态</a></Link>
                    </li>
                    <li className={props.page === 3 ? styles.menuSelect : ''}>
                        <Link href="/circle"><a className={styles.menuACircle}>帮圈</a></Link>
                    </li>
                </ul>

                <div className={styles.search}>
                    <input type="text" placeholder="搜索 求助/动态/圈子/文章" />
                    <span className={styles.searchIcon}></span>
                </div>

                <div className={styles.userInfo}>
                    {
                        isLogin ? (
                            <ul className={styles.userMenu}>
                                <li className={styles.user}>
                                    <img id="userHead" src={user?.avatar ? user?.avatar : `${staticPath}/images/default_user.png`} onClick={() => { userCenterShow() }} alt="" />
                                    <div className={styles.userCenter}
                                        style={{ visibility: isShowUserCenter ? 'visible' : 'hidden' }}>
                                        <ul>
                                            <li className={styles.userCenterName}>{user?.nickname ? user?.nickname : '未登录'}</li>
                                            {
                                                userCenterList.map((item, index) => {
                                                    return <li
                                                        key={item.id}
                                                        className={styles.userCenterItem}
                                                        style={{ backgroundImage: "url(" + item.image + ")" }}
                                                        onClick={() => { userCenterItemClick(index) }}>
                                                        {item.title}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <img src={`${staticPath}/images/header_message.png`} alt="" />
                                    <span className={styles.messageHint}>9</span>
                                </li>
                                <li>
                                    <img id="sendDynamic" src={`${staticPath}/images/header_send.png`} onClick={() => { sendShow() }} alt="" />
                                    <div className={styles.sendDynamic}
                                        style={{ visibility: isShowSendDynamic ? 'visible' : 'hidden' }}>
                                        <ul>
                                            {
                                                sendList.map((item, index) => {
                                                    return <li key={item.id} className={styles.sendDnamicItem} onClick={sendDynamicItemClick}>
                                                        <img src={item.image} width="40px" height="40px" alt="" />
                                                        <span>{item.title}</span>
                                                    </li>;
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        ) : (
                            <span className={styles.downLogin} onClick={showLogin}>点击登录</span>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;