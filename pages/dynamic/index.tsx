import { NextPage } from "next";
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Layout from '../../layout/Layout'
import HelperListContent from "../../components/helper/HelperListContent";
import styles from '../../styles/Home.module.scss'

const HelperPage: NextPage = () => {

    return <Layout className={styles.body}>
        <Header page={2} />
        <HelperListContent />
        <Footer />
    </Layout>
}

export default HelperPage;