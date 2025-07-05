// src/app/(main-page)/sections/PerformanceSection.tsx
"use client";

import React from 'react';
import StatCard from '@/components/StatCard'; // StatCard 컴포넌트 임포트

const PerformanceSection: React.FC = () => {
    return (
        <section className="container mx-auto py-20 px-4 bg-mm-light-bg">
            <h2 className="text-5xl font-bold text-center text-mm-navy mb-16" data-aos="fade-up">
                실제 성과 중심 구성
            </h2>
            <div className="grid grid-cols-1 justify-items-center"> {/* md:grid-cols-2 제거하여 1열 고정 */}
                {/* '광고비 20% 줄이고도 매출 2배 증가!'만 남김 */}
                <StatCard
                    title="광고비 절감 및 매출 증가 효과" // 타이틀을 더 포괄적으로 변경
                    beforeValue={2800} // 예시 값 (기획서에 따라 변경)
                    afterValue={1000} // 예시 값 (기획서에 따라 변경)
                    unit="만원"
                    diffText="광고비 20% 줄이고도 매출 2배 증가!" // 이 문구를 직접 전달
                    diffColorClass="text-mm-gold"
                    barColorBefore="bg-gray-400"
                    barColorAfter="bg-mm-gold"
                    barHeightBefore="h-64"
                    barHeightAfter="h-32"
                    aosDelay={0}
                />
                {/* 다른 StatCard는 제거 */}
            </div>
        </section>
    );
};

export default PerformanceSection;