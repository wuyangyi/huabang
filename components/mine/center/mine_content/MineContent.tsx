import { NextPage } from "next";
import { useState } from "react";
import MyCircle from "../../../circle/list_content/my_circle/MyCircle";
import { IMineCenter } from "../MineCenterContent";
import styles from './mine_content.module.scss';
import MineHelper from "./mine_helper/MineHelper";
import PersonalDynamic from "./personal_dynamic/PersonalDynamic";

const MineContent: NextPage<{ isSelf: boolean, userId: string, selectIndex: number, pageChange?: (index: number) => void }> = ({ isSelf, userId, selectIndex, pageChange }) => {

    const tabs = [
        {
            id: 0,
            title: isSelf ? "个人动态" : "他的动态",
            type: "center"
        },
        {
            id: 1,
            title: isSelf ? "我的求助" : "他的求助",
            type: "helper"
        },
        {
            id: 2,
            title: isSelf ? "我的帮圈" : "他的帮圈",
            type: "circle"
        },
    ];

    if (isSelf) {
        tabs.push({
            id: 3,
            title: "内容收藏",
            type: "collect"
        });
    }

    return <div className={styles.centerContent}>
        <div className={styles.mineTab}>
            {
                tabs.map((item, index) => {
                    return <span
                        key={item.id}
                        className={styles.tabItem}
                        style={{ color: index == selectIndex ? "#363951" : "#676D84", fontWeight: index == selectIndex ? "bold" : "normal" }}
                        onClick={() => { pageChange && pageChange(index) }}>{item.title}</span>
                })
            }
            <div className={styles.indicator} style={{ left: selectIndex * 120 + 20 + 'px' }} />
        </div>
        {
            selectIndex == 0 ? <PersonalDynamic isSelf={isSelf} userId={userId} />
                : selectIndex == 1 ? <MineHelper isSelf={isSelf} userId={userId} />
                    : selectIndex == 2 ? <MyCircle id={userId} /> : <PersonalDynamic isSelf={isSelf} userId={userId} />
        }
    </div>
}
export default MineContent;