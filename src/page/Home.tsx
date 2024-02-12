import { FC } from 'web-cell';
import { formatDate } from 'web-utility';
import {
    Jumbotron,
    Button,
    Ratio,
    Icon,
    Card,
    CardBody,
    CardTitle,
    CardImg,
    Table,
    Image
} from 'boot-cell';

import { Section } from '../component/Section';
import * as style from './Home.module.less';
import * as data from './2020/data';

export const HomePage: FC = () => (
    <>
        <Jumbotron
            className={style.banner}
            rounded={0}
            title={data.subtitle}
            description={data.title}
        >
            <p>
                <time dateTime="2020-12-27">2020.12.27</time>{' '}
                <time dateTime="9:00">9:00</time> ~{' '}
                <time dateTime="21:00">21:00</time>
                <address>
                    {data.place}（{data.address}）
                </address>
            </p>
            <nav>
                <Button
                    variant="outline-light"
                    className="me-3"
                    href="https://www.bagevent.com/event/1491264"
                >
                    马上报名
                </Button>
                <Button variant="outline-light">观看直播</Button>
            </nav>
        </Jumbotron>

        <Section title="峰会介绍" subtitle="about">
            <p style={{ textIndent: '2rem' }}>
                在广大开发者的支持下，在全体理事单位的共同努力下，开放原子开源基金会作为唯一一个立足中国、面向全球的开源基金会，已走过半年的初创阶段。
                为进一步梳理基金会重点工作及业务发展方向，展示开源事业的落地成果，我们诚挚地邀请开源项目方代表和开发者们，于
                2020 年 12 月 27 日上午 9:00 参与开放原子开源基金会 2020
                年度峰会。
            </p>
            <div className="row">
                <h3 className="h6 col-9 offset-md-3 mb-2">
                    本次峰会共有 6 场分论坛：
                </h3>
                <ul className="col-6 col-md-3 offset-md-3">
                    <li>技术监督委员会专场</li>
                    <li>开放原子可信账本项目组路演</li>
                    <li>开源教育与公益论坛</li>
                </ul>
                <ul className="col-6 col-md-3">
                    <li>开源运营治理论坛（上、下午场）</li>
                    <li>OpenHarmony 项目组路演</li>
                    <li>开源项目和基金会实践及经验分享</li>
                </ul>
                <p className="col-12 my-3 text-center">
                    一切为了开发者，一切为了全世界！
                </p>
            </div>
            <div className="row g-0">
                <div className="col-12 col-md-8">
                    <Ratio aspectRatio="21x9" className="h-100">
                        <iframe
                            loading="lazy"
                            src={`//uri.amap.com/marker?src=oaf&callnative=1&position=${data.coordinate}&name=${data.title}`}
                        />
                    </Ratio>
                </div>
                <div
                    className="col-12 col-md-4 text-white p-5"
                    style={{ background: 'orange' }}
                >
                    <h3>{data.place}</h3>
                    <address>
                        <Icon name="geo-alt" />
                        {data.address}
                    </address>
                    <h4 className="mt-5">乘车路线</h4>
                    <ul className="list-unstyled">
                        <li>地铁：地铁 10 号线（知春路 F 出口）</li>
                        <li>
                            公交：知春路站（304 路、386 路、579 路、601 路、653
                            路、671 路、快速直达专线 38 路、夜 9 路）
                        </li>
                    </ul>
                </div>
            </div>
        </Section>

        <Section title="与会嘉宾" subtitle="guest" color="light">
            （排名不分先后，按汉语拼音顺序排列）
            <ul className="list-unstyled row">
                {data.guests.map(({ avatar, name, title }) => (
                    <li key={name} className="col-12 col-sm-6 col-md-3 mt-3">
                        <Card className="h-100 border-0 bg-primary text-white">
                            <CardImg src={avatar} />
                            <CardBody>
                                <CardTitle>{name}</CardTitle>
                                {title}
                            </CardBody>
                        </Card>
                    </li>
                ))}
            </ul>
        </Section>

        <Section title="日程安排" subtitle="agenda">
            <Table responsive>
                <thead>
                    <tr className="table-primary">
                        <th>时间</th>
                        <th>主题</th>
                        <th>主持</th>
                    </tr>
                </thead>
                <tbody>
                    {data.agenda.map(
                        ({ startTime, endTime, title, mentor }) => (
                            <tr key={title}>
                                <td className="text-nowrap">
                                    {formatDate(startTime, 'HH:mm')} ~{' '}
                                    {formatDate(endTime, 'HH:mm')}
                                </td>
                                <td>{title}</td>
                                <td className="text-nowrap">{mentor}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </Table>
        </Section>

        <Section title="鸣谢" subtitle="thanks">
            <p>
                感谢以下企业及个人为 “开放原子开源基金会 2020 年度”
                峰会所做出的筹备组织、公益布道、媒体传播等支持与贡献。
            </p>
            （排名不分先后，按汉语拼音顺序排列）
            <div className="row">
                {data.partners.map(({ name, logo }) => (
                    <Image
                        className="col-12 col-sm-4"
                        title={name}
                        src={logo}
                    />
                ))}
            </div>
        </Section>
    </>
);
