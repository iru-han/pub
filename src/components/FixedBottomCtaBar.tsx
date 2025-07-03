// src/components/FixedBottomCtaBar.tsx
"use client"; // 클라이언트 컴포넌트

import React from 'react';
import Link from 'next/link';

const FixedBottomCtaBar: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-red-600 py-4 text-center flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 z-[999]">
            <p className="text-xl md:text-2xl font-bold text-white mb-0">하단입니다</p>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <Link href="/contact" className="px-6 py-2 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
                    버튼1
                </Link>
                <Link href="/company/introduce" className="px-6 py-2 border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
                    버튼2
                </Link>
            </div>
        </div>
    );
};

export default FixedBottomCtaBar;