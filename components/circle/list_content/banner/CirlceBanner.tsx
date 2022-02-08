import { NextPage } from "next";
import React from "react";
import { Component, ReactNode } from "react";
import styles from './circle_banner.module.scss';

export interface BannerBannerBean {
    image: string,
    link: string
}

interface ICircleBanner {
    step?: number,
    animationStep?: number
}

class CircleBanner extends Component<ICircleBanner> {

    static defaultProps = {
        step: 5000,
        animationStep: 1
    }
    state = {
        currentCarousel: 0,
        translateList: [],
        animationStep: 0,
    }
    timerID;
    children = React.Children.toArray(this.props.children);


    constructor(props) {
        super(props)
        this.handleCarouselBodyMouseOver = this.handleCarouselBodyMouseOver.bind(this);
        this.handleCarouselBodyMouseOut = this.handleCarouselBodyMouseOut.bind(this);
        this.handleCarouselFooterMouseOver = this.handleCarouselFooterMouseOver.bind(this);
        this.renderIndicators = this.renderIndicators.bind(this);
        this.getIndicatorsActive = this.getIndicatorsActive.bind(this);
        this.handlerNext = this.handlerNext.bind(this);
        this.handlerTransitionEnd = this.handlerTransitionEnd.bind(this);
        this.handlerPre = this.handlerPre.bind(this);
    }

    componentWillUnmount() {
        this.stopCarousel();
    }

    componentDidMount() {
        this.setState({
            animationStep: this.props.animationStep
        });
        this.startCarousel();

    }

    /**
     * @description 开始轮播
     */
    startCarousel() {
        this.stopCarousel()
        this.timerID = setInterval(() => {
            this.handlerCarousel('right')
        },
            this.props.step
        );
    }

    /**
     * @description 更改当前循环到的轮播下标
     * @param {String} type 运动的方向类型
     */
    handlerCarousel(type) {
        let direction = 1;
        if (type === 'left') {  // 向做运动 下标减1
            direction = -1;
        }

        if (this.state.currentCarousel % (this.children.length + 1) !== this.children.length && this.state.currentCarousel >= 0) { // 下标不为-1 或者最后一项的情况下正常 递增或者递减
            this.setState({
                currentCarousel: (this.state.currentCarousel + direction) % (this.children.length + 1),
                animationStep: this.props.animationStep  // 运动动画 设置值  因为 当坐标在边界的时候 会取消动画时间 所以在不为边界的时候 要恢复动画时间 不然切换无轮播动画
            })
        }

    }

    /**
     * @description 监听动画结束 在下标为边界时 并且切换的动画结束 取消动画 并调整轮播位置
     */
    handlerTransitionEnd() {
        // 当在最末端的时候 取消动画 并将坐标重制为0
        if (this.state.currentCarousel % (this.children.length + 1) === this.children.length) {
            this.setState(pre => {
                return {
                    animationStep: 0,
                    currentCarousel: 0,
                }
            })
        }
        // 当在最前端的时候 取消动画 并将坐标重制为最大
        else if (this.state.currentCarousel < 0) {
            this.setState(pre => {
                return {
                    animationStep: 0,
                    currentCarousel: this.children.length - 1,
                }
            })
        }
    }

    /**
     * @description  停止轮播
     */
    stopCarousel() {
        clearInterval(this.timerID);
    }


    /**
     * @description 指示按钮的mouseover事件
     */
    handleCarouselFooterMouseOver(currentIndex) {
        this.setState({
            animationStep: this.props.animationStep,
            currentCarousel: currentIndex
        });
    }

    /**
     * @description 轮播的mouseover事件
     */
    handleCarouselBodyMouseOver() {
        this.stopCarousel();
    }

    /**
     * @description 轮播的mouseout事件
     */
    handleCarouselBodyMouseOut() {
        this.startCarousel();
    }

    /**
     * @description 轮播的mouseout事件
     */
    handlerNext() {
        this.handlerCarousel('right');
    }

    handlerPre() {
        this.handlerCarousel('left');
    }

    getIndicatorsActive(index) {
        // 边界判断 使在轮播在边界的时候 导航下面的小标 也能正常的添加active状态
        if (this.state.currentCarousel === index || this.state.currentCarousel === index + this.children.length || (this.state.currentCarousel < 0 && index === this.children.length - 1)) {
            return styles.active;
        }
        return ''
    }

    /**
     * @description 导航的指示按钮
     */
    renderIndicators() {

        return (
            <div className={styles.carouselFooter}>
                <ul className={styles.indicatorsContainer}>
                    {this.children.map((item, index) => {
                        let active = this.getIndicatorsActive(index)
                        return <li onMouseOver={() => this.handleCarouselFooterMouseOver(index)} className={[styles.indicatorsItem, active].join(' ')} key={index} ></li>
                    })}
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div className={styles.carouselContainer} onMouseOver={this.handleCarouselBodyMouseOver} onMouseOut={this.handleCarouselBodyMouseOut}>
                <div className={styles.carouselBody}
                    onTransitionEnd={this.handlerTransitionEnd}
                    style={{
                        transition: 'transform ' + this.state.animationStep + 's',
                        width: (this.children.length + 2) * 100 + "%",
                        transform: 'translateX(' + (-100 / (this.children.length + 2) * (this.state.currentCarousel + 1)) + '%)'
                    }}>
                    <div
                        className={styles.carouselItem}
                        style={{ width: 100 / (this.children.length + 2) + '%' }}
                        key={'strat'} >
                        {this.children[this.children.length - 1]}
                    </div>
                    {this.children.map((item, index) => {
                        return <div className={styles.carouselItem} style={{ width: 100 / (this.children.length + 2) + '%' }} key={index} >{item}</div>
                    })}
                    <div className={styles.carouselItem} style={{ width: 100 / (this.children.length + 2) + '%' }} key={'end'} >{this.children[0]}</div>
                </div>
                {this.renderIndicators()}
                <div className={styles.btnContainer}>
                    <div className={[styles.btnDirection, styles.pre].join(" ")} onClick={this.handlerPre}></div>
                    <div className={[styles.btnDirection, styles.next].join(" ")} onClick={this.handlerNext}></div>
                </div>
            </div>
        )
    }
}

export default CircleBanner;