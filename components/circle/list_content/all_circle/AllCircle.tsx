import { NextPage } from "next";
import { useEffect, useState } from "react";
import { fetchAllCircleList } from "../../../../store/slices/circleSlice";
import wrapper, { useAppDispatch, useAppSelector } from "../../../../store/store";
import BigCircleItem from "../../../item/circle/BigCircleItem";
import EmptyView from "../../../widget/EmptyView";
import MyPagination from "../../../widget/MyPagination";
import styles from './all_circle.module.scss';


const AllCircle: NextPage<{ selectIndex: number, itemClick: (index: number) => void }> = ({ selectIndex, itemClick }) => {
    const { allCircleData } = useAppSelector((state) => state.circle);

    const dispatch = useAppDispatch();

    const { circleType } = useAppSelector((state) => state.common);
    const [currentPage, setCurrentPage] = useState(1);
    const [tabKey, setTabKey] = useState(circleType[selectIndex]?.id ?? 0);



    useEffect(() => {
        // loadData(tabKey, currentPage, 20);
        let titleScroll = document.getElementById("titleScroll");
        if (titleScroll != null) {
            dealViewScroll(titleScroll);
        }
    }, []);

    const switchPage = (index: number) => {
        if (selectIndex != index) {
            setCurrentPage(1);
            setTabKey(circleType[index].id);
            loadData(circleType[index].id, 1, 20);
            itemClick && itemClick(index);
        }
    }

    // 获取数据
    function loadData(key: number, page: number, pageSize: number) {
        dispatch(
            fetchAllCircleList({
                type: key,
                page: page,
                limit: pageSize
            })
        );
    }

    const titleScroll = (event) => {
        dealViewScroll(event.target);
    }

    function dealViewScroll(target) {
        let leftElement = document.getElementById("left");
        let rightElement = document.getElementById("right");
        if (leftElement != null) {
            leftElement.style.visibility = target.scrollLeft <= 10 ? 'hidden' : 'visible';
        }
        if (rightElement != null) {
            let show = target.scrollLeft + target.clientWidth + 10 >= target.scrollWidth;
            rightElement.style.visibility = show ? 'hidden' : 'visible';
        }
    }

    function titleScrollClick(isLeft: boolean) {
        let titleScroll = document.getElementById("titleScroll");
        if (titleScroll == null) {
            return;
        }
        titleScroll.scrollBy({
            left: isLeft ? -300 : 300,
            behavior: 'smooth',
        });
    }

    const pageChange = (page, pageSize) => {
        setCurrentPage(page);
        loadData(tabKey, page, pageSize);
    }

    return <div className={styles.contentBody}>
        <div className={styles.header}>
            <div id="titleScroll" onScroll={titleScroll} className={styles.contentHeader}>
                {
                    circleType.map((item, index) => {
                        return <span key={index}
                            className={styles.titleItem}
                            style={{
                                borderBottomColor: selectIndex === index ? "#3388FF" : 'transparent',
                                fontWeight: selectIndex === index ? "bold" : 'normal',
                                color: selectIndex === index ? "#3388FF" : "#637080"
                            }}
                            onClick={() => { switchPage(index) }}>{item.type}</span>
                    })
                }
            </div>
            <div id="left" className={[styles.scroolIcon, styles.left].join(" ")} onClick={() => { titleScrollClick(true) }} />
            <div id="right" className={[styles.scroolIcon, styles.right].join(" ")} onClick={() => { titleScrollClick(false) }} />
        </div>

        <div className={styles.all_content}>
            {
                allCircleData.list.length > 0 ?
                    allCircleData.list.map(item => {
                        return <BigCircleItem key={item.id} {...item} />
                    }) :
                    <EmptyView type={0} />
            }
            <div className={styles.no_more} style={{ display: allCircleData.list.length > 0 && allCircleData.list.length < 20 ? 'block' : 'none' }}>没有更多了~</div>
        </div>
        <MyPagination total={allCircleData.total} pageSize={20} showSizeChanger={false} current={currentPage} onChange={pageChange} />
    </div>
}

export default AllCircle;