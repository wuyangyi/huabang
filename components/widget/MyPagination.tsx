import { Pagination, PaginationProps } from "antd";
import { NextPage } from "next";
import styles from '../../styles/components/widget/my_pagination.module.scss';

const MyPagination: NextPage<PaginationProps> = (props) => {

    function getItemRender(current, type, originalElement): React.ReactNode {
        if (type === 'prev') {
            return <span>上一页</span>;
        } else if (type === 'next') {
            return <span>下一页</span>;
        }
        return originalElement;
    }

    return <div className={styles.pagination}>
        <Pagination {...props} />
    </div>
}

export default MyPagination;