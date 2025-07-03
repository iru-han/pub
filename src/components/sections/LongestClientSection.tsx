// src/components/LongestClientSection.tsx
"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // 숫자 애니메이션을 위해 react-spring 사용

const LongestClientSection: React.FC = () => {
    const years = 3333;

    const { number: animatedYears } = useSpring({
        from: { number: 0 },
        to: { number: years },
        config: { duration: 2000 }, // 2초간 카운트
        delay: 500, // 섹션 로드 후 0.5초 딜레이
    });

    return (
        <section className="container mx-auto py-16 px-4 text-center">
            <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-4"
                data-aos="fade-up"
            >
                1111
            </h2>
            <p
                className="text-lg text-gray-700 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                2222<br className="md:hidden" /> 222
            </p>
            <div
                className="flex items-baseline justify-center"
                data-aos="zoom-in"
                data-aos-delay="300"
            >
                <animated.span className="text-6xl md:text-8xl font-black text-blue-600">
                    {animatedYears.to(n => Math.floor(n))}
                </animated.span>
                <span className="text-4xl md:text-6xl font-black text-blue-600 ml-2">3333</span>
            </div>
        </section>
    );
};

export default LongestClientSection;