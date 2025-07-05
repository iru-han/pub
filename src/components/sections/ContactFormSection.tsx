// src/app/(main-page)/sections/ContactFormSection.tsx
"use client";

import React from 'react';

const ContactFormSection: React.FC = () => {
    return (
        <section className="container mx-auto py-20 px-4 bg-white rounded-lg shadow-inner"> {/* 배경색 및 패딩 변경 */}
            <h2 className="text-5xl font-bold text-center text-mm-navy mb-16" data-aos="fade-up"> {/* 폰트 및 색상 변경 */}
                문의하기
            </h2>
            <form className="max-w-2xl mx-auto p-10 bg-mm-light-bg rounded-xl shadow-xl border border-mm-border-gray" data-aos="fade-up" data-aos-delay="100"> {/* 스타일 변경 */}
                <div className="mb-6"> {/* 간격 조정 */}
                    <label htmlFor="companyName" className="block text-mm-navy text-lg font-semibold mb-3"> {/* 폰트 및 색상 변경 */}
                        상호 (회사 또는 학원명)
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="shadow appearance-none border border-mm-border-gray rounded w-full py-3 px-4 text-mm-navy leading-tight focus:outline-none focus:ring-2 focus:ring-mm-gold focus:border-transparent" // 스타일 변경
                        placeholder="예: 명문학원"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="userName" className="block text-mm-navy text-lg font-semibold mb-3">
                        성함 (담당자 성함)
                    </label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        className="shadow appearance-none border border-mm-border-gray rounded w-full py-3 px-4 text-mm-navy leading-tight focus:outline-none focus:ring-2 focus:ring-mm-gold focus:border-transparent"
                        placeholder="예: 홍길동"
                    />
                </div>
                <div className="mb-8">
                    <label htmlFor="phoneNumber" className="block text-mm-navy text-lg font-semibold mb-3">
                        연락처 (전화번호)
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        className="shadow appearance-none border border-mm-border-gray rounded w-full py-3 px-4 text-mm-navy mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-mm-gold focus:border-transparent"
                        placeholder="예: 010-1234-5678"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-mm-gold hover:bg-yellow-500 text-mm-navy font-bold py-4 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors text-xl shadow-lg" // 스타일 변경
                    >
                        문의 제출
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactFormSection;