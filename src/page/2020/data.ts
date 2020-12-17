import {
    pic02,
    pic07,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    al,
    baidu,
    huawei,
    ql,
    sf,
    zs
} from './image';

export const title = '开放原子开源基金会 2020 年度峰会';
export const subtitle = '一源初始 开放共创';

export const place = '北京·丽亭华苑酒店';
export const address = '北京市海淀区知春路 25 号';
export const coordinate = [116.345045, 39.977223];

export const guests = [
    {
        avatar: pic15,
        name: '堵俊平',
        title: '开放原子开源基金会TOC主席'
    },
    {
        avatar: pic07,
        name: '高树磊',
        title: '腾讯云高级生态产品经理'
    },
    {
        avatar: pic20,
        name: '黄之鹏',
        title: '华为计算开源开发与运营部\n副总监'
    },
    {
        avatar: pic16,
        name: '姜宁',
        title: '华为开源能力中心技术专家'
    },
    {
        avatar: pic17,
        name: '李建盛',
        title: ''
    },
    {
        avatar: pic18,
        name: '马全一',
        title: ''
    },
    {
        avatar: pic19,
        name: '谭中意',
        title: '开放原子开源基金会TOC副主席'
    },
    {
        avatar: pic02,
        name: '张育明',
        title: '招商银行区块链负责人\n金融科技资深架构师'
    }
];

export const agenda = [
    {
        startTime: '2020-12-27T01:00:00Z',
        endTime: '2020-12-27T04:00:00Z',
        title: '论坛：开源运营治理 - 上午场',
        mentor: '姜宁'
    },
    {
        startTime: '2020-12-27T01:00:00Z',
        endTime: '2020-12-27T04:00:00Z',
        title: '论坛：开放原子可信账本项目组工作汇报路演',
        mentor: '出品人（待更新）'
    },
    {
        startTime: '2020-12-27T01:00:00Z',
        endTime: '2020-12-27T04:00:00Z',
        title: '论坛：开源教育与公益分论坛',
        mentor: '出品人（待更新）'
    },
    {
        startTime: '2020-12-27T04:00:00Z',
        endTime: '2020-12-27T06:00:00Z',
        title: '午餐',
        mentor: ''
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T10:00:00Z',
        title: '论坛：开源项目和基金会实践及经验分享',
        mentor: '侯正鹏，主持人：杨芳'
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T06:10:00Z',
        title: '致欢迎词',
        mentor: ''
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T06:30:00Z',
        title: '《主题演讲》',
        mentor: 'ZTE 孟伟'
    },
    {
        startTime: '2020-12-27T06:30:00Z',
        endTime: '2020-12-27T06:50:00Z',
        title: '《主题演讲》',
        mentor: '展锐 任庚'
    },
    {
        startTime: '2020-12-27T06:50:00Z',
        endTime: '2020-12-27T07:10:00Z',
        title: '《主题演讲》',
        mentor: '微众银行 范瑞彬'
    },
    {
        startTime: '2020-12-27T07:10:00Z',
        endTime: '2020-12-27T07:30:00Z',
        title: '《主题演讲》',
        mentor: '中电科 李海龙'
    },
    {
        startTime: '2020-12-27T07:30:00Z',
        endTime: '2020-12-27T07:50:00Z',
        title: '《主题演讲》',
        mentor: '李震宁 中标软'
    },
    {
        startTime: '2020-12-27T07:50:00Z',
        endTime: '2020-12-27T08:10:00Z',
        title: '《主题演讲》',
        mentor: '滴滴 王蕴博'
    },
    {
        startTime: '2020-12-27T08:10:00Z',
        endTime: '2020-12-27T08:30:00Z',
        title: '《主题演讲》',
        mentor: '计算所  包云岗'
    },
    {
        startTime: '2020-12-27T08:30:00Z',
        endTime: '2020-12-27T08:50:00Z',
        title: '茶歇/交流',
        mentor: ''
    },
    {
        startTime: '2020-12-27T08:50:00Z',
        endTime: '2020-12-27T10:00:00Z',
        title: '圆桌论坛',
        mentor: ''
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T10:00:00Z',
        title: '论坛：技术监督委员会专场',
        mentor: '堵俊平/谭中意'
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T10:00:00Z',
        title: '论坛：开源运营治理(下午场)',
        mentor: '江波'
    },
    {
        startTime: '2020-12-27T06:00:00Z',
        endTime: '2020-12-27T10:00:00Z',
        title: '论坛：OpenHarmony项目组工作汇报路演',
        mentor: '待更新'
    },
    {
        startTime: '2020-12-27T11:00:00Z',
        endTime: '2020-12-27T13:00:00Z',
        title: '慈善晚宴',
        mentor: ''
    }
].sort(
    ({ startTime: A_0, endTime: A_1 }, { startTime: B_0, endTime: B_1 }) =>
        +new Date(A_0) - +new Date(B_0) || +new Date(A_1) - +new Date(B_1)
);

export const partners = [
    { name: '阿里巴巴', logo: al },
    { name: '百度', logo: baidu },
    { name: '华为', logo: huawei },
    { name: '趋链科技', logo: ql },
    { name: 'SegmentFault', logo: sf },
    { name: '招商银行', logo: zs }
];
