// src/app/(main-page)/sections/ServicesSection.tsx
"use client";

import React from 'react';
import ServiceItem from '@/components/ServiceItem';

const ServicesSection: React.FC = () => {
    const servicesData = [
        { icon: '🔍', title: '검색 노출 최적화', description: '학원 관련 검색 시 상위 노출되도록 최적화합니다.' },
        { icon: '✍️', title: '블로그', description: '학원의 전문성과 교육 철학을 담은 블로그 콘텐츠를 제작합니다.' },
        { icon: '📍', title: '플레이스', description: '네이버/카카오 플레이스 정보를 최적화하여 지역 학부모 유입을 늘립니다.' },
        { icon: '👩‍👧‍👦', title: '맘카페 침투', description: '지역 맘카페 내에서 학원의 긍정적 입소문을 형성합니다.' },
        { icon: '📱', title: 'SNS 관리', description: '인스타그램, 유튜브, 틱톡, 쓰레드 등 주요 SNS 채널을 전문적으로 관리합니다.' },
        { icon: '📸', title: '영상 촬영 디렉팅', description: '학원의 강점을 부각할 수 있는 영상 콘텐츠 기획 및 촬영을 돕습니다.' },
        { icon: '👍', title: '학부모 신뢰 확보용 콘텐츠', description: '학부모가 신뢰할 수 있는 교육 정보 및 성공 사례 콘텐츠를 제작합니다.' },
    ];

    return (
        <section className="container mx-auto py-20 px-4 bg-white"> {/* 배경색 및 패딩 변경 */}
            <h2 className="text-5xl font-bold text-center text-mm-navy mb-16" data-aos="fade-up"> {/* 폰트 및 색상 변경 */}
                명문 마케팅의 서비스
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* 간격 조정 */}
                {servicesData.map((service, index) => (
                    <ServiceItem
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        aosDelay={index * 100}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;