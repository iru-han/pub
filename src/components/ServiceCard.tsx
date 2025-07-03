// src/components/ServiceCard.tsx
"use client";

import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
    iconSrc: string; // 아이콘 이미지 경로
    title: string;
    description: string;
    aosDelay?: number; // AOS 애니메이션 딜레이 (선택 사항)
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description, aosDelay = 0 }) => {
    return (
        <div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            data-aos="fade-up" // 스크롤 시 위로 나타나는 애니메이션
            data-aos-delay={aosDelay.toString()} // 딜레이 적용
        >
            <Image src={iconSrc} alt={`${title} 아이콘`} width={64} height={64} className="mb-4 mx-auto" unoptimized={true} />
            <h3 className="text-xl font-bold text-blue-600 mb-2 text-center">{title}</h3>
            <p className="text-gray-700 text-center">{description}</p>
        </div>
    );
};

export default ServiceCard;