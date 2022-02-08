import type { NextPage } from 'next'
import HomeContentItem from "../contentItem/HomeContentItem";
import type { HelperItemData } from '../../../store/services/helper';

export interface IMenuItem {
    id: number;
    title: string;
    image: string;
    list: HelperItemData[]
}

interface IMenu {
    data: IMenuItem[];
}

const HomeCenter: NextPage<IMenu> = (props) => {
    return (
        <>
            {
                props.data.map((item, index) => {
                    return <HomeContentItem key={item.id} {...item} />
                })
            }
        </>
    );
}
export default HomeCenter;