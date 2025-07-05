// src/components/ProcessStep.tsx
"use client";

import React from 'react';

interface ProcessStepProps {
    stepNumber: number;
    title: string;
    description: string;
    aosDelay?: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, description, aosDelay = 0 }) => {
    return (
        <div
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-xl border border-mm-border-gray" // 스타일 변경
            data-aos="fade-up"
            data-aos-delay={aosDelay.toString()}
        >
            <div className="w-20 h-20 bg-mm-gold text-mm-navy rounded-full flex items-center justify-center text-4xl font-extrabold mb-6"> {/* 크기, 색상, 폰트 변경 */}
                {stepNumber}
            </div>
            <h3 className="text-2xl font-bold text-mm-navy mb-3">{title}</h3> {/* 폰트 및 색상 변경 */}
            <p className="text-lg text-mm-gray">{description}</p> {/* 폰트 및 색상 변경 */}
        </div>
    );
};

export default ProcessStep;