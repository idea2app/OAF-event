import { createCell, Fragment } from 'web-cell';
import { Jumbotron } from 'boot-cell/source/Content/Jumbotron';
import { Button } from 'boot-cell/source/Form/Button';

import style from './Home.module.less';

export function HomePage() {
    return (
        <>
            <Jumbotron
                className={style.banner}
                fluid
                title="一源初始 开放共创"
                description="开放原子开源基金会 2020 年度峰会"
            >
                <p>
                    <time datetime="2020-12-27">2020.12.27</time>
                    <address className="d-inline ml-3">
                        北京·丽亭华苑酒店（海淀区知春路 25 号）
                    </address>
                </p>
                <nav>
                    <Button
                        outline
                        color="light"
                        className="mr-3"
                        href="https://www.bagevent.com/event/1491264"
                    >
                        马上报名
                    </Button>
                    <Button outline color="light">
                        观看直播
                    </Button>
                </nav>
            </Jumbotron>
        </>
    );
}
