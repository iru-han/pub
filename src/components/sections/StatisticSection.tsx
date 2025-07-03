// src/components/StatisticSection.tsx
"use client";

import React from 'react';
import StatCard from '../StatCard'; // StatCard 컴포넌트 임포트
import { useSpring, animated } from '@react-spring/web'; // react-spring 사용 시 필요

// react-spring 설치 필요: npm install @react-spring/web

const StatisticSection: React.FC = () => {
    return (
        <section className="container mx-auto py-16 px-4 bg-gray-50">
            <h2 className="text-4xl font-bold text-center mb-12">111</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <StatCard
                    title="타이틀1"
                    beforeValue={1000}
                    afterValue={1000}
                    unit="만원"
                    diffText="설명입니다."
                    diffColorClass="text-red-600"
                    barColorBefore="bg-gray-400"
                    barColorAfter="bg-orange-500"
                    barHeightBefore="h-50"
                    barHeightAfter="h-50"
                    aosDelay={0}
                />
                {/* 첫 번째 통계 카드: 광고비 절감 */}

                {/* 두 번째 통계 카드: 신규 환자 증가 */}
                <StatCard
                    title="타이틀2"
                    beforeValue={30}
                    afterValue={40}
                    unit="%"
                    diffText="설명입니다.2"
                    diffColorClass="text-red-600"
                    barColorBefore="bg-gray-400"
                    barColorAfter="bg-red-600"
                    barHeightBefore="h-48"
                    barHeightAfter="h-64"
                    aosDelay={200}
                />
            </div>
        </section>
    );
};

export default StatisticSection;