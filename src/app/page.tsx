// src/app/page.tsx (홈 페이지)
"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 기존 컴포넌트들
import HeroSection from '@/components/sections/HeroSection';

// 새로 추가할 컴포넌트 임포트
import FixedRightSidebar from "@/components/FixedRightSidebar";
import FixedBottomCtaBar from "@/components/FixedBottomCtaBar";
import Footer from "@/components/Footer";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import PerformanceSection from "@/components/sections/PerformanceSection";
import ServicesSection from "@/components/sections/ServiceSection";
import HomepageCreationSection from "@/components/sections/HomepageCreationSection";
import ClientSuccessSection from "@/components/sections/ClientSuccessSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ContactFormSection from "@/components/sections/ContactFormSection";
import Header from "@/components/Header";

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
            <WhyChooseUsSection />
            {/* 기존 QuoteSection은 WhyChooseUsSection 내부에 포함되거나, 별도 컴포넌트로 만들 수 있습니다. */}
            <PerformanceSection />
            <ServicesSection />
            <HomepageCreationSection />
            <ClientSuccessSection />
            <ProcessSection />
            <ContactFormSection />

            {/* 고정될 요소들 (필요시) */}
            <FixedRightSidebar />
            <FixedBottomCtaBar />

            <Footer />
        </div>
    );
}