import { NextPage } from "next";
import Footer from '../../../layout/Footer'
import Header from '../../../layout/Header'
import Layout from '../../../layout/Layout'
import styles from '../../../styles/Home.module.scss'
import { useRouter } from "next/router";
import CreateCircleContent from "../../../components/circle/create/CreateCircleContent";

const CreateCirclePage: NextPage = () => {
    return <Layout className={styles.body}>
        <Header page={3} />
        <CreateCircleContent />
        <Footer />
    </Layout>
}

export default CreateCirclePage;