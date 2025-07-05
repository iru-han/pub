// src/app/(main-page)/sections/HomepageCreationSection.tsx
"use client";

import React from 'react';

const HomepageCreationSection: React.FC = () => {
    const features = [
        { icon: '💡', text: '교육업에 최적화된 UI/UX 디자인' },
        { icon: '🎥', text: '영상 촬영 디렉팅 및 제작 지원' },
        { icon: '🤝', text: '학부모 신뢰 확보용 콘텐츠 기획' },
    ];

    return (
        <section className="container mx-auto py-20 px-4 bg-mm-light-bg"> {/* 배경색 및 패딩 변경 */}
            <h2 className="text-5xl font-bold text-mm-navy text-center mb-16" data-aos="fade-up"> {/* 폰트 및 색상 변경 */}
                홈페이지 제작
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12"> {/* 간격 조정 */}
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center p-8 bg-white rounded-xl shadow-xl border border-mm-border-gray" // 스타일 변경
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <span className="text-5xl mb-6 text-mm-gold">{feature.icon}</span> {/* 아이콘 크기 및 색상 변경 */}
                        <p className="text-xl font-semibold text-mm-navy">{feature.text}</p> {/* 폰트 및 색상 변경 */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HomepageCreationSection;