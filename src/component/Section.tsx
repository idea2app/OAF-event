import { TextColor } from 'boot-cell';
import { FC, WebCellProps } from 'web-cell';

import * as style from './Section.module.less';

export interface SectionProps extends WebCellProps {
    subtitle?: string;
    color?: TextColor;
}

export const Section: FC<SectionProps> = ({
    color = 'transparent',
    title,
    subtitle,
    children
}) => (
    <section className={`bg-${color}`} id={subtitle}>
        <div className="container py-4">
            <h2 className={style.title}>
                {title}
                <div className="text-warning text-uppercase">{subtitle}</div>
            </h2>
            {children}
        </div>
    </section>
);
