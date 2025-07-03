// src/app/(main-page)/sections/HeroSection.tsx
"use client";

import React from 'react';
// import Image from 'next/image'; // 배경 영상으로 대체되었으므로 필요 없을 수 있음
import Link from 'next/link';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen flex flex-col overflow-hidden">
            {/* 배경 영상 */}
            <video
                className="absolute inset-0 w-full h-full object-cover z-0"
                src="https://videos.pexels.com/video-files/32087220/13677834_2730_1440_30fps.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                Your browser does not support the video tag.
            </video>

            {/* 오버레이 (텍스트 가독성을 높이기 위해) */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* 메인 타이틀 영역 - 절대 위치 지정 */}
            <div className="absolute inset-0 flex items-end pb-24 md:pb-32 px-4 md:px-12 z-20">
                <h1
                    className="text-4xl md:text-6xl font-extrabold leading-tight text-white text-left"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <strong>첫번째줄</strong><br/>
                    <strong>두번째줄입니다.</strong>
                </h1>
            </div>
        </section>
    );
};

export default HeroSection;