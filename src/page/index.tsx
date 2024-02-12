import { FC } from 'web-cell';
import { Nav, OffcanvasNavbar, NavLink } from 'boot-cell';

import logo from '../image/logo.png';
import { HomePage } from './Home';

const menu = [
    {
        title: '首页',
        href: 'https://www.openatom.org/'
    },
    {
        title: '峰会介绍',
        href: '#about'
    },
    {
        title: '与会嘉宾',
        href: '#guest'
    },
    {
        title: '日程安排',
        href: '#agenda'
    },
    //  {
    //      title: '大会指引',
    //      href: '#register'
    //  },
    {
        title: '鸣谢',
        href: '#thanks'
    }
];

export const PageFrame: FC = () => (
    <>
        <OffcanvasNavbar
            variant="dark"
            bg="primary"
            expand="md"
            sticky="top"
            fluid="lg"
            brand={
                <img
                    alt="WebCell scaffold"
                    src={logo}
                    style={{ height: '2rem' }}
                />
            }
        >
            <Nav className="justify-content-end flex-fill gap-3">
                {menu.map(({ title, ...props }) => (
                    <NavLink key={title} className="text-white" {...props}>
                        {title}
                    </NavLink>
                ))}
            </Nav>
        </OffcanvasNavbar>

        <HomePage />

        <footer className="text-center bg-light py-5">
            <p>
                Copyright 2020 OPENATOM. All Rights Reserved
                <br />
                开放原子开源基金会版权所有
            </p>
            <p className="m-0">
                Proudly developed with
                <a
                    className="mx-1"
                    target="_blank"
                    href="https://web-cell.dev/"
                >
                    WebCell v3
                </a>
                &amp;
                <a
                    className="mx-1"
                    target="_blank"
                    href="https://bootstrap.web-cell.dev/"
                >
                    BootCell v2
                </a>
            </p>
        </footer>
    </>
);
