// src/app/(main-page)/sections/HeroSection.tsx (예시)
"use client";
import React from 'react';
import Image from 'next/image'; // 이미지 배경 시
// import Video from 'next/video'; // 영상 배경 시 (Next.js 14부터 지원 예정 또는 커스텀)

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-mm-navy" style={{ backgroundColor: '#1A202C' }}>
            {/* 배경 이미지/영상 (고품질, 추상적, 또는 팀워크) */}
            <Image
                src="/images/modern-marketing-bg.jpg" // 실제 이미지 경로로 변경
                alt="명문 마케팅 배경"
                layout="fill"
                objectFit="cover"
                className="z-0 opacity-30" // 투명도 조절
                priority
            />
            {/* 오버레이 (배경색과 동일하게, 투명도 조절) */}
            <div className="absolute inset-0 bg-mm-navy opacity-70 z-10" style={{ backgroundColor: '#1A202C' }}></div>

            {/* 콘텐츠 */}
            <div className="relative z-20 p-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    학생이 몰리는 학원 뒤에<br className="hidden md:block"/> <span className="text-mm-gold">명문 마케팅</span>이 있습니다.
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8">
                    학원 전문 마케팅, <span className="font-semibold text-mm-green">실적으로 이야기합니다.</span>
                </p>
                <button className="px-8 py-4 bg-mm-gold text-mm-navy font-bold rounded-lg shadow-lg hover:bg-yellow-500 transition-colors text-lg">
                    지금 바로 문의하기
                </button>
            </div>
        </section>
    );
};
export default HeroSection;