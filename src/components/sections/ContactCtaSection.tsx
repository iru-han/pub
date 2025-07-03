// src/components/ContactCtaSection.tsx
"use client";

import React from 'react';
import Link from 'next/link';

const ContactCtaSection: React.FC = () => {
    return (
        <section
            className="bg-red-600 py-12 text-center text-white flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <p className="text-xl md:text-2xl font-bold mb-0">질문입니다.</p>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                <Link href="/contact" className="px-8 py-3 bg-white text-red-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
                    문의하기
                </Link>
                <Link href="/company/introduce" className="px-8 py-3 border-2 border-white text-white font-bold rounded-full shadow-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
                    소개
                </Link>
            </div>
        </section>
    );
};

export default ContactCtaSection;