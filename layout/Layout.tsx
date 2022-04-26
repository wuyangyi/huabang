
import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode, useEffect } from 'react';
import styles from '../styles/layout.module.scss';
const staticPath = process.env.STATIC_HOST;

const Layout: NextPage<{
    title?: string;
    description?: string;
    keywords?: string;
    className?: string;
    children: ReactNode | ReactNode[];
}> = ({ title, description, keywords, className, children }) => {

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let toTop = document.getElementById('toTop');
            if (toTop != null) {
                if (window.pageYOffset > 1000) {
                    toTop.style.visibility = "visible";
                } else {
                    toTop.style.visibility = "hidden";
                }


                if (document.documentElement.clientWidth < 1300) {
                    toTop.style.right = (document.documentElement.clientWidth - 1300 + window.pageXOffset) + "px";
                } else {
                    toTop.style.right = "calc((100% - 1300px) / 2 - 50px + " + window.pageXOffset + ")";
                }
            }
        })
    }, []);

    return <>
        <Head>
            <title>{title || '互帮'}</title>
            <meta name="keywords" content={keywords || ''} />
            <meta name="description" content={description || ''} />
            <meta property="og:description" content={description || ''} />
            <meta property="og:image" content="" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <main className={className}>{children}</main>

        <img id="toTop" className={styles.toTop} src={`${staticPath}/images/ico_go_top.png`} width="40px" title="返回顶部" alt="" onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }} />
    </>
};
export default Layout;