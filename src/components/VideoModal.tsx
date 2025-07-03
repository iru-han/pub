// src/components/VideoModal.tsx
"use client"; // 클라이언트 컴포넌트

import React, { useEffect } from 'react';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
    // 모달 열림/닫힘 시 body 스크롤 방지
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[2000]" // 더 높은 z-index
            onClick={onClose} // 배경 클릭 시 닫기
        >
            <div
                className="relative w-11/12 max-w-4xl bg-white p-4 rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 배경 클릭 이벤트 방지
            >
                {/* 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-3xl font-bold z-[2001]"
                >
                    &times;
                </button>

                {/* 비디오 플레이어 (유튜브 임베드) */}
                {videoUrl && (
                    <div className="relative pt-[56.25%] bg-black rounded-md"> {/* 16:9 비율 유지 */}
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VideoModal;