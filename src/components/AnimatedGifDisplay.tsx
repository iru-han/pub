// src/components/AnimatedGifDisplay.tsx
"use client"; // 클라이언트 컴포넌트로 지정 (애니메이션, 이미지 최적화 관련 로직 사용 시)

import React from 'react';
import Image from 'next/image';

interface AnimatedGifDisplayProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string; // 추가적인 Tailwind 클래스를 받을 때
    aosDelay?: number; // AOS 애니메이션 딜레이
}

const AnimatedGifDisplay: React.FC<AnimatedGifDisplayProps> = ({
                                                                   src,
                                                                   alt,
                                                                   width,
                                                                   height,
                                                                   className = '',
                                                                   aosDelay = 0,
                                                               }) => {
    return (
        <div
            className={`flex justify-center items-center p-4 ${className}`} // 중앙 정렬을 위한 flex 컨테이너
            data-aos="fade-up" // 스크롤 시 위로 나타나는 애니메이션
            data-aos-delay={aosDelay.toString()} // 딜레이 적용
        >
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                // inline-block과 mx-auto (margin-left: auto; margin-right: auto;)는 flex 컨테이너에서 justify-center로 대체
                className="h-auto max-w-full" // width, height props를 직접 Image 컴포넌트에 전달하고, h-auto와 max-w-full로 반응형 대응
                style={{ imageRendering: '-webkit-optimize-contrast' }} // WebKit 특정 스타일 (Tailwind에 직접적인 유틸리티 없음)
                unoptimized={true} // GitHub Pages 배포 시 next/image 최적화 비활성화
            />
        </div>
    );
};

export default AnimatedGifDisplay;