import type { NextPage } from 'next'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Layout from '../layout/Layout'
import HomeContent from '../components/home/HomeContent'
import styles from '../styles/Home.module.scss'
import wrapper, { useAppSelector } from '../store/store'
import { fetchRecommendList, fetchLikeList, fetchNearbyList, fetchHortList, fetchRecommendCircleList } from '../store/slices/homeSlice';

const Home: NextPage = () => {

  const { recommendData, likeData, nearbyData, hortData, recommendCircleData } = useAppSelector((state) => state.home);

  return (
    <Layout className={styles.body}>
      <Header page={0} />
      <HomeContent recommendData={recommendData} likeData={likeData} nearbyData={nearbyData} hortData={hortData} recommendCircle={recommendCircleData} />
      <Footer />
    </Layout>
  );
}


Home.getInitialProps = wrapper.getInitialPageProps((store) => async ({ req }) => {
  if (!store.getState().home.isLoad) {
    await Promise.all([
      store.dispatch(
        fetchRecommendList({
          limit: 20,
          page: 1,
          type: "recommend"
        }),
      ),
      store.dispatch(
        fetchLikeList({
          limit: 20,
          page: 1,
          type: "attention"
        }),
      ),
      store.dispatch(
        fetchNearbyList({
          limit: 20,
          page: 1,
          type: "nearby"
        }),
      ),
      store.dispatch(
        fetchHortList({
          limit: 20,
          page: 1,
          type: "urgent"
        }),
      ),
      store.dispatch(
        fetchRecommendCircleList({
          limit: 8,
          page: 1,
          type: "recommend"
        }),
      )
    ]);
  }
  return {};
});

export default Home;
