// src/components/CustomerStoryCard.tsx
"use client"; // 클라이언트 컴포넌트

import React from 'react';
import Image from 'next/image';
import { BsPlayCircleFill } from 'react-icons/bs'; // 재생 아이콘 (react-icons 설치 필요)

// react-icons 설치: npm install react-icons

interface CustomerStoryCardProps {
    story: CustomerStory;
    onClick: (videoUrl: string) => void; // 클릭 시 비디오 URL을 넘겨주는 함수
}

const CustomerStoryCard: React.FC<CustomerStoryCardProps> = ({ story, onClick }) => {
    return (
        <div
            // aspect-square (1:1 비율) 또는 aspect-video (16:9) 중 적절한 것을 선택
            className="relative w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg group cursor-pointer"
            data-aos="fade-up"
            onClick={() => onClick(story.videoUrl)}
        >
            {/* 배경 이미지 */}
            <Image
                src={story.imageSrc}
                alt={story.title}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-105"
                unoptimized={true}
            />
            {/* 오버레이 (마우스 오버 시 나타남) */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2">
                    {story.title.split('<br>').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            {index < story.title.split('<br>').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </h3>
                <p className="text-sm md:text-base font-medium">{story.subtitle}</p>
                {/* 재생 아이콘 */}
                <BsPlayCircleFill className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
    );
};

export default CustomerStoryCard;