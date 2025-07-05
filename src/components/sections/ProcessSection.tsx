// src/app/(main-page)/sections/ProcessSection.tsx
"use client";

import React from 'react';
import ProcessStep from '@/components/ProcessStep';

const ProcessSection: React.FC = () => {
    const steps = [
        { title: '상황을 파악합니다.', description: '상세한 설문 작성을 통해 학원의 세부적인 상황을 파악합니다.' },
        { title: '고민합니다.', description: '현재 학원 상황에 맞춰 맞춤형 전략을 고민합니다.' },
        { title: '제안합니다.', description: '맞춤형 제안서를 브리핑합니다.' },
        { title: '계약합니다.', description: '제안서 내용에 맞춰 계약서를 작성합니다.' },
        { title: '성장합니다.', description: '이제 매출이 올라갑니다.' },
    ];

    return (
        <section className="container mx-auto py-20 px-4 bg-mm-light-bg"> {/* 배경색 및 패딩 변경 */}
            <h2 className="text-5xl font-bold text-center text-mm-navy mb-16" data-aos="fade-up"> {/* 폰트 및 색상 변경 */}
                명문 마케팅의 진행 과정
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* 간격 조정 */}
                {steps.map((step, index) => (
                    <ProcessStep
                        key={index}
                        stepNumber={index + 1}
                        title={step.title}
                        description={step.description}
                        aosDelay={index * 150}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;