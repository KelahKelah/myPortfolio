import { DetailedHTMLProps, FC, SVGProps } from 'react';

export const Logo: FC<
    DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>
> = () => (
    <svg height="50" width="100">
        <line x1="0" y1="0" x2="0" y2="35" stroke="#D6FB41" strokeWidth="5" />
        <text x="10" y="25" fill="white">KELECHI</text>
        <line x1="0" y1="0" x2="40" y2="0" stroke="#D6FB41" strokeWidth="5" />
    </svg>
);