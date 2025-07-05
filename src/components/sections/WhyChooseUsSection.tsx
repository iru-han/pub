// src/app/(main-page)/sections/WhyChooseUsSection.tsx
"use client";

import React from 'react';
import ComparisonTable from '@/components/ComparisonTable';

const WhyChooseUsSection: React.FC = () => {
    return (
        <section className="container mx-auto py-16 px-4 bg-white">
            <h2 className="text-4xl font-bold text-center text-mm-navy mb-12" data-aos="fade-up">
                명문 마케팅이 선택받는 이유
            </h2>
            <ComparisonTable />

            {/* 바로 이 부분에 인용구들이 있을 겁니다. */}
            <div className="mt-12 text-center">
                <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4 text-mm-navy" data-aos="fade-up"> {/* text-mm-navy 추가 */}
                    "모든 걸 하는 대행사는, 결국 아무것도 제대로 못합니다."
                </p>
                <p className="text-xl md:text-2xl font-semibold text-mm-navy" data-aos="fade-up" data-aos-delay="100"> {/* text-mm-navy 추가 */}
                    "<span className="text-mm-gold">명문 마케팅은 학원만 합니다</span> = 다른 결과가 나옵니다."
                </p>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;