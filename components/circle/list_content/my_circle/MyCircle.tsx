import { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchUserCircleList } from "../../../../store/slices/circleSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import styles from './my_circle.module.scss';
import BigCircleItem from "../../../item/circle/BigCircleItem";
import EmptyView from "../../../widget/EmptyView";
import MyPagination from "../../../widget/MyPagination";

const MyCircle: NextPage<{ id: string | undefined, showTitle?: boolean }> = ({ id, showTitle }) => {
    const { myCircleList } = useAppSelector((state) => state.circle);
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);


    // useEffect(() => {
    //     loadMyCircle(1, 20);
    // }, [])

    function loadMyCircle(page: number, limit: number) {
        if (id) {
            dispatch(fetchUserCircleList({
                page: page,
                limit: limit,
                id: id
            }))
        }
    }


    const pageChange = (page, pageSize) => {
        setCurrentPage(page);
        loadMyCircle(page, pageSize);
    }

    return <div>
        {
            showTitle && <div className={styles.content_title}>我的帮圈</div>
        }
        <div className={styles.my_cirlce_content}>
            {
                myCircleList.list.length > 0 ?
                    myCircleList.list.map(item => {
                        return <BigCircleItem key={item.id} {...item} />
                    }) :
                    <EmptyView type={0} />
            }
            <div className={styles.no_more} style={{ display: myCircleList.list.length > 0 && myCircleList.list.length < 20 ? 'block' : 'none' }}>没有更多了~</div>
        </div>
        <MyPagination total={myCircleList.total} pageSize={20} showSizeChanger={false} current={currentPage} onChange={pageChange} />
    </div>
}

export default MyCircle;