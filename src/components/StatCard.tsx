// src/components/StatCard.tsx
"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

interface StatCardProps {
    title: string;
    beforeValue: number;
    afterValue: number;
    unit: string;
    diffText: string;
    diffColorClass: string;
    barColorBefore: string;
    barColorAfter: string;
    barHeightBefore: string;
    barHeightAfter: string;
    aosDelay?: number;
}

const StatCard: React.FC<StatCardProps> = ({
                                               title,
                                               beforeValue,
                                               afterValue,
                                               unit,
                                               diffText,
                                               diffColorClass,
                                               barColorBefore,
                                               barColorAfter,
                                               barHeightBefore,
                                               barHeightAfter,
                                               aosDelay = 0,
                                           }) => {
    const { number: animatedBeforeValue } = useSpring({
        from: { number: 0 },
        to: { number: beforeValue },
        delay: aosDelay,
        config: { duration: 1000 },
    });
    const { number: animatedAfterValue } = useSpring({
        from: { number: 0 },
        to: { number: afterValue },
        delay: aosDelay + 200,
        config: { duration: 1000 },
    });

    return (
        <div
            className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center border border-mm-border-gray" // border와 shadow 스타일 변경
            data-aos="fade-up"
            data-aos-delay={aosDelay.toString()}
        >
            <h3 className="text-2xl font-bold text-mm-navy mb-6 text-center">{title}</h3> {/* 텍스트 색상 변경 */}

            {/* 차트 영역 */}
            <div className="flex items-end space-x-6 h-72 mb-8"> {/* 간격 및 높이 조정 */}
                {/* 이전 값 바 */}
                <div className={`relative w-20 ${barHeightBefore} ${barColorBefore} rounded-t-lg flex flex-col items-center justify-end p-2`}>
                    <animated.span className="text-base font-semibold text-white mb-1">
                        {animatedBeforeValue.to(n => `${Math.floor(n).toLocaleString()}${unit}`)}
                    </animated.span>
                    <span className="text-xs text-white">광고 전</span>
                </div>

                {/* 이후 값 바 */}
                <div className={`relative w-20 ${barHeightAfter} ${barColorAfter} rounded-t-lg flex flex-col items-center justify-end p-2`}>
                    <animated.span className="text-base font-semibold text-white mb-1">
                        {animatedAfterValue.to(n => `${Math.floor(n).toLocaleString()}${unit}`)}
                    </animated.span>
                    <span className="text-xs text-white">광고 3개월 후</span>
                </div>
            </div>

            {/* 변화 텍스트 */}
            <p className={`text-3xl font-extrabold mb-2 ${diffColorClass}`} data-aos="fade-in" data-aos-delay={(aosDelay + 400).toString()}>
                {diffText}
            </p>
        </div>
    );
};

export default StatCard;