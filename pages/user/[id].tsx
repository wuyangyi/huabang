import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MineCenterContent from "../../components/mine/center/MineCenterContent";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Layout from "../../layout/Layout";

import { fetchUserCircleList } from "../../store/slices/circleSlice";
import { fetchMineRecommendCircleList, fetchUserInfo, switchUserPageSelectIndex } from "../../store/slices/mineSlice";
import wrapper, { useAppSelector } from '../../store/store'
import styles from '../../styles/Mine.module.scss'

const MineCenter: NextPage = () => {
    const router = useRouter();
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useDispatch();

    function isSelf(): boolean {
        return userInfo && user && user.id == userInfo.id ? true : false;
    }

    function getUserId(): string {
        const userId = router.query.id;
        if (!userId) {
            return "";
        }
        return userId?.toString();
    }

    const { userInfo } = useAppSelector((state) => state.mine);
    const selectIndex = useAppSelector((state) => {
        const id = getUserId();
        if (id && id in state.mine.userPageSelectIndex) {
            return state.mine.userPageSelectIndex[getUserId()];
        }
        return 0;
    });


    useEffect(() => {
        return () => {
            dispatch(switchUserPageSelectIndex({ key: getUserId(), index: 0 }));
        }
    }, [])


    const userCenterPageChange = (index: number) => {
        if (selectIndex != index && userInfo) {
            // setSelectIndex(index);
            dispatch(switchUserPageSelectIndex({ key: userInfo.id, index: index }));
        }
    }

    return <Layout className={styles.body}>
        <Header page={-1} userCenterChange={isSelf() ? userCenterPageChange : undefined} />
        {
            userInfo && <MineCenterContent userInfo={userInfo} isSelf={isSelf()} selectIndex={selectIndex} pageChange={userCenterPageChange} />
        }
        <Footer />
    </Layout>
}

MineCenter.getInitialProps = wrapper.getInitialPageProps((store) => async (context) => {
    await Promise.all([
        store.dispatch(
            fetchUserInfo({
                id: context.query.id
            }),
        ),
        store.dispatch(
            fetchMineRecommendCircleList({
                limit: 8,
                page: 1,
                type: "recommend"
            }),
        ),

        store.dispatch(fetchUserCircleList({
            page: 1,
            limit: 20,
            id: context.query.id
        }))
    ]);
    return {};
});
export default MineCenter;