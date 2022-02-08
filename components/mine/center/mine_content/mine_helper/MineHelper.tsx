import { NextPage } from "next";
import EmptyView from "../../../../widget/EmptyView";
import styles from './mine_helper.module.scss';
import { useAppDispatch, useAppSelector } from '../../../../../store/store';
import { useEffect, useState } from "react";
import { fetchMineHelperList } from "../../../../../store/slices/mineSlice";
import HelperItem from "../../../../home/helperItem/HelperItem";
import MyPagination from "../../../../widget/MyPagination";

const MineHelper: NextPage<{ isSelf: boolean, userId: string }> = ({
    isSelf, userId
}) => {
    const { mineHelperData } = useAppSelector((state) => state.mine);

    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        loadData(currentPage, 20);
    }, []);

    const pageChange = (page, pageSize) => {
        setCurrentPage(page);
        loadData(page, pageSize);
    }


    // 获取数据
    function loadData(page: number, pageSize: number) {
        dispatch(fetchMineHelperList({
            id: userId,
            page: page,
            limit: pageSize
        }))
    }

    return <div className={styles.mineHelpContent}>
        {
            mineHelperData.list.length == 0 ? <EmptyView /> :
                mineHelperData.list.map(item => {
                    return <HelperItem key={item.id} {...item} />
                })
        }
        <MyPagination total={mineHelperData.total} pageSize={20} showSizeChanger={false} current={currentPage} onChange={pageChange} />
    </div>
}


export default MineHelper;