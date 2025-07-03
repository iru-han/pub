// src/app/page.tsx (홈 페이지)
"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 기존 컴포넌트들
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import ServiceSection from '@/components/sections/ServiceSection';
import StatisticSection from '@/components/sections/StatisticSection';
import LongestClientSection from '@/components/sections/LongestClientSection';

// 새로 추가할 컴포넌트 임포트
import FixedRightSidebar from "@/components/FixedRightSidebar";
import FixedBottomCtaBar from "@/components/FixedBottomCtaBar";
import Footer from "@/components/Footer";

export default function HomePage() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            mirror: false,
        });
    }, []);

    return (
        <div className="relative">
            <HeroSection />
            <IntroSection />
            <ServiceSection />
            <StatisticSection />
            <LongestClientSection />

            {/* Fixed 컴포넌트들은 페이지 최하단에 배치해도 괜찮습니다. */}
            <FixedRightSidebar />
            <FixedBottomCtaBar />

            {/* 푸터는 페이지의 마지막 내용으로, FixedBottomCtaBar의 위에 위치하게 됩니다. */}
            <Footer />
        </div>
    );
}