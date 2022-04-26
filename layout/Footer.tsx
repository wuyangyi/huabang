import React from "react";
import styles from "../styles/footer.module.scss";
const staticPath = process.env.STATIC_PATH;


const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <img src={`${staticPath}/images/footer.png`} width="100%" alt="" />
                <div className={styles.content}>
                    <ul>
                        <li>关于我们</li>
                        <li><a href="">网站介绍</a></li>
                        <li><a href="">免责声明</a></li>
                        <li><a href="">友情链接</a></li>
                    </ul>

                    <ul>
                        <li>产品服务</li>
                        <li><a href="">帮圈</a></li>
                        <li><a href="">实名认证</a></li>
                        <li><a href="">求职招聘</a></li>
                        <li><a href="">曝光台</a></li>
                    </ul>

                    <ul>
                        <li>帮助中心</li>
                        <li><a href="">常见问题</a></li>
                        <li><a href="">服务介绍</a></li>
                        <li><a href="">联系我们</a></li>
                    </ul>

                    <div className={styles.down}>
                        <div className={styles.downOther}>
                            <img src={`${staticPath}/images/app_down.png`} width="80px" alt="" />
                            APP下载
                        </div>
                        <div className={styles.downOther}>
                            <img src={`${staticPath}/images/app_down.png`} width="80px" alt="" />
                            手机网页版
                        </div>
                        <div className={styles.downOther}>
                            <img src={`${staticPath}/images/app_down.png`} width="80px" alt="" />
                            微信小程序
                        </div>
                    </div>
                </div>
                <p className={styles.copy}> © Copyright 2021. 吴洋毅
                    <a className={styles.copyLink} href="http://beian.miit.gov.cn/" target="blank" rel="nofollow">鄂ICP备2021002418号</a>
                </p>
            </footer>
        </>
    );
}

export default Footer;