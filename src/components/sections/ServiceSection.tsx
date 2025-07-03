// src/components/ServiceSection.tsx
"use client"; // 자식 컴포넌트(ServiceCard)에서 "use client"를 사용하고, 부모도 DOM 조작이나 Hooks가 없어도 안전하게 "use client" 사용

import React from 'react';
import ServiceCard from '../ServiceCard'; // ServiceCard 컴포넌트 임포트

const ServiceSection: React.FC = () => {
    let logo = "https://cdn.pixabay.com/photo/2021/11/07/09/10/meta-6775086_960_720.jpg 1x, https://cdn.pixabay.com/photo/2021/11/07/09/10/meta-6775086_1280.jpg 2x";
    const services = [
        {
            icon: logo, // 실제 아이콘 경로로 변경
            title: "타이틀1",
            description: "설명입니다.",
        },
        {
            icon: logo, // 실제 아이콘 경로로 변경
            title: "타이틀2",
            description: "설명입니다.",
        },
        {
            icon: logo,
            title: "타이틀3",
            description: "설명입니다.",
        },
        {
            icon: logo,
            title: "타이틀4",
            description: "설명입니다.",
        },
    ];

    return (
        <section className="container mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-12">우리의 핵심 서비스</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        iconSrc={service.icon}
                        title={service.title}
                        description={service.description}
                        aosDelay={index * 100} // 카드마다 딜레이를 줘서 순차적으로 나타나게 함
                    />
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;