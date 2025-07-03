// src/components/CustomerStoriesSection.tsx
"use client"; // 클라이언트 컴포넌트

import React, { useState } from 'react';
import CustomerStoryCard from './CustomerStoryCard'; // 카드 컴포넌트 임포트
import VideoModal from './VideoModal'; // 비디오 모달 컴포넌트 (아래에 생성)

interface CustomerStory {
    id: string;
    title: string;
    subtitle: string;
    imageSrc: string;
    videoUrl: string;
}

const customerStories: CustomerStory[] = [
    {
        id: 'story1',
        title: 'HWISA H정형외과',
        subtitle: '회사명는 단점이 없습니다.',
        imageSrc: 'https://cdn.imweb.me/thumbnail/20250530/31bf7d83ab41a.jpg',
        videoUrl: 'https://www.youtube.com/embed/5vHN19gB6RjI', // YouTube embed URL
    },
    {
        id: 'story2',
        title: 'HWISA G한의원',
        subtitle: '매일 밀착케어 받는 느낌이에요.',
        imageSrc: 'https://cdn.imweb.me/thumbnail/20250530/76a2fc09659e1.png',
        videoUrl: 'https://www.youtube.com/embed/YdXFiI83Dw4',
    },
    {
        id: 'story3',
        title: 'HWISA D정형외과',
        subtitle: '회사명와 하려면 병원이 준비되어 있어야해요',
        imageSrc: 'https://cdn.imweb.me/thumbnail/20250530/83d247c329703.png',
        videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3', // 실제 비디오 ID로 변경
    },
    {
        id: 'story4',
        title: 'HWISA Y한의원',
        subtitle: '제 신념을 한번에 이해하는 대행사는 처음이었어요.',
        imageSrc: 'https://cdn.imweb.me/thumbnail/20250530/2d0e96b51b1bc.png',
        videoUrl: 'https://www.youtube.com/embed/-tuAQIfpLW4',
    },
// 더 많은 스토리들을 여기에 추가할 수 있습니다.
];

const CustomerStoriesSection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState('');

    const handleCardClick = (videoUrl: string) => {
        setCurrentVideoUrl(videoUrl);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setCurrentVideoUrl(''); // 모달 닫을 때 비디오 URL 초기화 (비디오 정지)
    };

    return (
        // container, mx-auto, px-4, py-16은 그대로 둠 (섹션의 전체적인 여백)
        <section className="container mx-auto py-16 px-0"> {/* px-0으로 좌우 패딩 제거 */}
            {/* <h2 className="text-4xl font-bold text-center mb-12">카테고리2 성공사례</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 md:gap-0"> {/* 그리드 설정 수정 */}
                {customerStories.map((story) => (
                    <CustomerStoryCard key={story.id} story={story} onClick={handleCardClick} />
                ))}
            </div>
            <VideoModal isOpen={isModalOpen} onClose={handleModalClose} videoUrl={currentVideoUrl} />
        </section>
    );
};

export default CustomerStoriesSection;