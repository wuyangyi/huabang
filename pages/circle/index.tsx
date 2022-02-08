import { NextPage } from "next";
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Layout from '../../layout/Layout'
import CircleContent from "../../components/circle/list_content/CircleContent";
import styles from '../../styles/Home.module.scss'
import { fetchCircleType } from "../../store/slices/commonSlice";
import wrapper, { useAppSelector } from '../../store/store'
import { fetchAllCircleList, fetchUserCircleList } from "../../store/slices/circleSlice";
import { useRouter } from "next/router";

const CirclePage: NextPage = () => {
    return <Layout className={styles.body}>
        <Header page={3} />
        <CircleContent />
        <Footer />
    </Layout>
}

CirclePage.getInitialProps = wrapper.getInitialPageProps((store) => async ({ req }) => {


    await Promise.all([
        store.dispatch(
            fetchCircleType({}),
        ),

        store.dispatch(
            fetchAllCircleList({
                type: 1,
                page: 1,
                limit: 20
            })
        ),
        store.dispatch(fetchUserCircleList({
            page: 1,
            limit: 20,
            id: store.getState().user.user?.id
        }))
    ]);
    return {};
});

export default CirclePage;