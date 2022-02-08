import { NextPage } from "next";
import { getColorByString } from "../../../../utils/util";
import style from './circle_tag_item.module.scss';

type ICircleTagItem = {
    title: string
}

const CircleTagItem: NextPage<ICircleTagItem> = ({
    title
}) => {


    return <div className={style.circle_tag} style={{ backgroundColor: getColorByString(title) + 'BB' }}>
        {title}
    </div>
}

export default CircleTagItem;