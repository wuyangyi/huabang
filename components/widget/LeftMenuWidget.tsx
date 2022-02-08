import { NextPage } from "next";
import styles from '../../styles/components/widget/left_menu_widget.module.scss';

export interface LeftMenuBean {
    id: number,
    image: string,
    title: string,
    num: number,
}

interface ILeftMenuWidget {
    id?: string,
    menuList: LeftMenuBean[],
    selectIndex: number,
    menuItemClick?: (index: number) => void
}


const LeftMenuWidget: NextPage<ILeftMenuWidget> = (
    {
        id,
        menuList = [],
        selectIndex = 0,
        menuItemClick
    }
) => {
    return <div id={id} className={styles.contentLeftP}>
        <div className={styles.leftMenuListCheck} style={{ top: 5 + selectIndex * 40 + "px" }}></div>
        <ul className={styles.leftMenuList}>
            {
                menuList.map((item, index) => {
                    return <li key={item.id} onClick={() => { menuItemClick && menuItemClick(index) }}>
                        <span className={styles.menuItem} style={{ backgroundImage: 'url(' + item.image + ')' }}>{item.title}</span>
                        <span className={styles.message} style={{ visibility: item.num <= 0 ? "hidden" : "visible" }}>{item.num}</span>
                    </li>
                })
            }
        </ul>
    </div>
}

export default LeftMenuWidget;