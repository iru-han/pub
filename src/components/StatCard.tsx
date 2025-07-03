// src/components/StatCard.tsx
"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // 숫자 애니메이션을 위해 react-spring 사용

interface StatCardProps {
    title: string;
    beforeValue: number;
    afterValue: number;
    unit: string;
    diffText: string;
    diffColorClass: string; // 예: text-red-600
    barColorBefore: string; // 예: bg-gray-400
    barColorAfter: string; // 예: bg-orange-500
    barHeightBefore: string; // 예: 'h-64' (Tailwind height class)
    barHeightAfter: string; // 예: 'h-40'
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
    // 숫자 카운트 애니메이션
    const { number: animatedBeforeValue } = useSpring({
        from: { number: 0 },
        to: { number: beforeValue },
        delay: aosDelay,
        config: { duration: 1000 },
    });
    const { number: animatedAfterValue } = useSpring({
        from: { number: 0 },
        to: { number: afterValue },
        delay: aosDelay + 200, // 살짝 딜레이 줘서 순차적으로
        config: { duration: 1000 },
    });

    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center border border-gray-200"
            data-aos="fade-up"
            data-aos-delay={aosDelay.toString()}
        >
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{title}</h3>

            {/* 차트 영역 */}
            <div className="flex items-end space-x-4 h-72 mb-4"> {/* 높이 고정 */}
                {/* 이전 값 바 */}
                <div className={`relative w-16 ${barHeightBefore} ${barColorBefore} rounded-t-lg flex items-end justify-center`}>
                    <animated.span className="absolute top-2 text-sm font-semibold text-white">
                        {animatedBeforeValue.to(n => `${Math.floor(n).toLocaleString()}${unit}`)}
                    </animated.span>
                    <span className="absolute bottom-2 text-xs text-white">11</span>
                </div>

                {/* 이후 값 바 */}
                <div className={`relative w-16 ${barHeightAfter} ${barColorAfter} rounded-t-lg flex items-end justify-center`}>
                    <animated.span className="absolute top-2 text-sm font-semibold text-white">
                        {animatedAfterValue.to(n => `${Math.floor(n).toLocaleString()}${unit}`)}
                    </animated.span>
                    <span className="absolute bottom-2 text-xs text-white">22</span>
                </div>
            </div>

            {/* 변화 텍스트 */}
            <p className={`text-2xl font-bold mb-2 ${diffColorClass}`} data-aos="fade-in" data-aos-delay={(aosDelay + 400).toString()}>
                {diffText}
            </p>
        </div>
    );
};

export default StatCard;