// src/app/(main-page)/sections/ClientSuccessSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';

const ClientSuccessSection: React.FC = () => {
    const successStories = [
        {
            id: 'case1',
            title: '사례 1. K수학학원',
            quote: '광고비는 줄이고, 문의는 늘었어요!',
            image: 'https://cdn.imweb.me/thumbnail/20250704/example-chart1.png', // 실제 이미지 경로로 변경
            description: '6개월 후 신규 등록 학생 50% 증가!'
        },
        {
            id: 'case2',
            title: '사례 2. S영어학원',
            quote: '학부모님들의 신뢰가 높아졌습니다!',
            image: 'https://cdn.imweb.me/thumbnail/20250704/example-chart2.png', // 실제 이미지 경로로 변경
            description: '전환율 25% 상승, 재등록률 80% 달성!'
        },
        {
            id: 'case3',
            title: '사례 3. B미술학원',
            quote: '애드리절트 덕분에 원생이 폭발적으로 늘었어요!',
            image: 'https://cdn.imweb.me/thumbnail/20250704/example-chart3.png', // 실제 이미지 경로로 변경
            description: '온라인 노출 300% 증가, 브랜드 인지도 급상승!'
        },
    ];

    return (
        <section className="container mx-auto py-20 px-4 bg-white"> {/* 배경색 및 패딩 변경 */}
            <h2 className="text-5xl font-bold text-center text-mm-navy mb-16" data-aos="fade-up"> {/* 폰트 및 색상 변경 */}
                고객사 성공 사례
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> {/* 간격 조정 */}
                {successStories.map((story, index) => (
                    <div
                        key={story.id}
                        className="bg-mm-light-bg rounded-xl shadow-xl overflow-hidden border border-mm-border-gray transform hover:scale-105 transition-transform duration-300" // 스타일 변경
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                    >
                        <div className="p-8"> {/* 패딩 조정 */}
                            <h3 className="text-2xl font-bold text-mm-navy mb-3">{story.title}</h3> {/* 폰트 및 색상 변경 */}
                            <p className="text-xl text-mm-gold font-semibold italic mb-6">"{story.quote}"</p> {/* 폰트 및 색상 변경 */}
                            {story.image && (
                                <div className="relative w-full h-72 mb-6 rounded-md overflow-hidden"> {/* 이미지 컨테이너 스타일 변경 */}
                                    <Image src={story.image} alt={story.title} layout="fill" objectFit="contain" unoptimized={true} />
                                </div>
                            )}
                            <p className="text-lg text-mm-gray">{story.description}</p> {/* 폰트 및 색상 변경 */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientSuccessSection;