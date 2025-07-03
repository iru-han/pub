// src/components/IntroSection.tsx
"use client";

import React from 'react';
import AnimatedGifDisplay from '../AnimatedGifDisplay'; // 새로 만든 컴포넌트 임포트

const IntroSection: React.FC = () => {
    return (
        <section className="container mx-auto py-16 px-4 text-center">
            <p
                className="text-red-600 text-sm font-semibold tracking-widest mb-2"
                data-aos="fade-up"
            >
                서브타이틀
            </p>
            <h2
                className="text-3xl md:text-4xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                "텍스트1"<br />
                <span className="text-blue-600">텍스트2</span> 입니다.
            </h2>

            {/* 여기에 GIF 이미지 컴포넌트 추가 */}
            <div className="mt-12"> {/* 여백 추가 */}
                <AnimatedGifDisplay
                    src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDY5bGhwcDd4MWxnczJubHU3cTg3ZjZ3dDF3amZrNm40dmxyeWhoZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdWa2sp0V67CLqU/giphy.webp" // GIF 이미지 경로
                    alt="회사명 서비스 그래픽"
                    width={650} // 원본 이미지의 너비
                    height={527} // 원본 이미지의 높이
                    aosDelay={200} // 나타나는 딜레이
                />
            </div>
        </section>
    );
};

export default IntroSection;