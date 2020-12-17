import { WebCellProps, createCell } from 'web-cell';
import { BackgroundColors } from 'boot-cell/source/utility/constant';

import style from './Section.module.less';

export interface SectionProps extends WebCellProps {
    subtitle?: string;
    color?: BackgroundColors;
}

export function Section({
    color = 'transparent',
    title,
    subtitle,
    defaultSlot
}: SectionProps) {
    return (
        <section className={`bg-${color}`} id={subtitle}>
            <div className="container py-4">
                <h2 className={style.title}>
                    {title}
                    <div className="text-warning text-uppercase">
                        {subtitle}
                    </div>
                </h2>
                {defaultSlot}
            </div>
        </section>
    );
}
