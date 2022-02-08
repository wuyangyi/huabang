import { NextPage } from "next";
import EmptyView from "../../../../widget/EmptyView";
import styles from './personal_dynamic.module.scss';

const PersonalDynamic: NextPage<{ isSelf: boolean, userId: string }> = ({
    isSelf, userId
}) => {
    return <div className={styles.personalContent}>
        <EmptyView />
    </div>
}
export default PersonalDynamic;