// src/app/(main-page)/sections/QuoteSection.tsx
"use client";

import React from 'react';

const QuoteSection: React.FC = () => {
    return (
        <section className="bg-blue-800 text-white py-16 px-4 text-center">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-4" data-aos="fade-up">
                "모든 걸 다 하는 대행사는, 결국 아무것도 제대로 못합니다."
            </p>
            <p className="text-xl md:text-2xl font-semibold" data-aos="fade-up" data-aos-delay="100">
                "<span className="text-yellow-300">명문 마케팅은 학원만 합니다</span> = 다른 결과가 나옵니다."
            </p>
        </section>
    );
};

export default QuoteSection;