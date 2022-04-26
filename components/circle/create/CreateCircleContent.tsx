import { NextPage } from "next";
import { useState } from "react";
import ActionButton from "../../widget/ActionButton";
import InputWidget from "../../widget/InputWidget";
import styles from './create_circle_content.module.scss';
const staticPath = process.env.STATIC_PATH;


const CreateCircleContent: NextPage = () => {

    const [desc, setDesc] = useState("圈主很懒什么都没留下~");
    const [circleBg, setCircleBg] = useState("http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_circle_bg.png");


    return <div className={styles.contentBody}>
        <div className={styles.titleContent}>
            <span className={styles.title}>创建圈子</span>

            <div className={styles.submitView}>提交</div>
        </div>
        <div className={styles.circleContent}>

            <div className={styles.circleHead}>
                <span className={styles.name}>头&emsp;&emsp;像：</span>
                <img className={styles.upHeader} src={`${staticPath}/images/up_header.png`} alt="" />
            </div>
            <div className={styles.circleName}>
                <span className={styles.name}>帮圈名称：</span>
                <div className={styles.nameInput}>
                    <InputWidget
                        hintText="起个名字吧~"
                        inputType="text"
                        maxLength={25}
                    />
                </div>
            </div>

            <div className={styles.circleMember}>
                <span className={styles.name}>添加成员：</span>
                <div className={styles.members}>
                    <img className={styles.memberAdd} src={`${staticPath}/images/ico_group_add.png`} alt="" />
                </div>
            </div>

            <div className={styles.circleBg}>
                <span className={styles.name}>圈子背景：</span>
                <div className={styles.bg} style={{ outline: circleBg ? "none" : "1px dashed #ccc" }}>
                    {
                        circleBg && <img src={circleBg} alt="" width="100%" height="100%" />
                    }
                    <div className={styles.maskBg}>
                        <div className={styles.maskBg1}>
                        </div>
                        <div className={styles.maskBg2}>
                        </div>
                        <ActionButton value="上传背景" className={styles.reloadBg} />
                    </div>
                </div>
            </div>

            <div className={styles.circleDesc}>
                <span className={styles.name}>帮圈简介：</span>
                <div className={styles.descInput}>
                    <textarea className={styles.input} value={desc} maxLength={255} placeholder="说点什么吧~" onChange={(e) => {
                        setDesc(e.target.value)
                    }} />
                    <span className={styles.descNumber}>{desc.length}/255</span>
                </div>
            </div>
        </div>
    </div>
}

export default CreateCircleContent;