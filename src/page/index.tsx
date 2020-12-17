import { createCell, Fragment } from 'web-cell';
import { CellRouter } from 'cell-router/source';
import { NavBar } from 'boot-cell/source/Navigator/NavBar';
import { NavLink } from 'boot-cell/source/Navigator/Nav';

import { history } from '../model';
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

export function PageFrame() {
    return (
        <>
            <NavBar
                narrow
                menuAlign="end"
                background="primary"
                brand={
                    <img
                        alt="WebCell scaffold"
                        src={logo}
                        style={{ height: '2rem' }}
                    />
                }
            >
                {menu.map(({ title, ...props }) => (
                    <NavLink className="text-white" {...props}>
                        {title}
                    </NavLink>
                ))}
            </NavBar>

            <CellRouter
                style={{ minHeight: '60vh' }}
                history={history}
                routes={[
                    {
                        paths: [''],
                        component: HomePage
                    }
                ]}
            />
            <footer className="text-center bg-light py-5">
                <p>
                    Copyright 2020 OPENATOM. All Rights Reserved
                    <br />
                    开放原子开源基金会版权所有
                </p>
                <p>
                    Proudly developed with
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://web-cell.dev/"
                    >
                        WebCell v2
                    </a>
                    &amp;
                    <a
                        className="mx-1"
                        target="_blank"
                        href="https://bootstrap.web-cell.dev/"
                    >
                        BootCell v1
                    </a>
                </p>
            </footer>
        </>
    );
}
