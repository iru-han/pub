"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaYoutube, FaBloggerB, FaInstagram, FaComment } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const FixedRightSidebar: React.FC = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollToTop(true);
            } else {
                setShowScrollToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-[999] flex flex-col space-y-3">
            <Link href="https://www.youtube.com" target="_blank" className="bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors flex justify-center items-center w-12 h-12">
                <FaYoutube className="text-2xl" />
            </Link>
            <Link href="https://blog.naver.com" target="_blank" className="bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors flex justify-center items-center w-12 h-12">
                <FaBloggerB className="text-2xl" />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors flex justify-center items-center w-12 h-12">
                <FaInstagram className="text-2xl" />
            </Link>
            <Link href="https://pf.kakao.com" target="_blank" className="bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition-colors flex justify-center items-center w-12 h-12">
                <FaComment className="text-2xl" />
            </Link>
            {showScrollToTop && (
                <button
                    onClick={scrollToTop}
                    className="bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-800 transition-colors flex justify-center items-center w-12 h-12"
                >
                    <FiArrowUp className="text-2xl" />
                </button>
            )}
        </div>
    );
};

export default FixedRightSidebar;