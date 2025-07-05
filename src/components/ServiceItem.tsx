// src/components/ServiceItem.tsx
"use client";

import React from 'react';
// 아이콘이 이미지라면 Image from 'next/image';
// 아이콘이 react-icons 라면 { IconName } from 'react-icons/fi' 등

interface ServiceItemProps {
    icon: string | React.ReactNode;
    title: string;
    description: string;
    aosDelay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, aosDelay = 0 }) => {
    const isEmoji = typeof icon === 'string' && (icon.length === 1 || /\p{Emoji}/u.test(icon));

    return (
        <div
            className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border border-mm-border-gray" // 스타일 변경
            data-aos="fade-up"
            data-aos-delay={aosDelay.toString()}
        >
            <div className="mb-6 text-mm-gold" style={{ fontSize: isEmoji ? '4.5rem' : 'inherit' }}> {/* 아이콘 크기 및 색상 변경 */}
                {isEmoji ? icon : (typeof icon === 'string' ? <img src={icon} alt={title} width={80} height={80} /> : icon)}
            </div>
            <h3 className="text-2xl font-bold text-mm-navy mb-3">{title}</h3> {/* 폰트 및 색상 변경 */}
            <p className="text-lg text-mm-gray">{description}</p> {/* 폰트 및 색상 변경 */}
        </div>
    );
};

export default ServiceItem;