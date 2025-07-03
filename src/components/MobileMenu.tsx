// src/components/MobileMenu.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface MenuItem {
    name: string;
    path: string;
    subItems?: MenuItem[];
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
        {
            name: '회사소개', path: '/company', subItems: [
                { name: 'ABOUT', path: '/company/introduce' },
                { name: 'HISTORY', path: '/company/history' },
                { name: 'CEO', path: '/company/ceo' },
                { name: 'PEOPLE', path: '/company/people' },
            ],
        },
        {
            name: '카테고리2', path: '/marketing', subItems: [
                { name: '서브카테고리', path: '/marketing/departments' },
                { name: '서브카테고리2', path: '/marketing/restoration' },
                { name: '서브카테고리3', path: '/marketing/seo' },
                { name: '서브카테고리4', path: '/marketing/video' },
            ],
        },
        {
            name: '카테고리3', path: '/success', subItems: [
                { name: '서브카테고리3', path: '/success/adresult' },
            ],
        },
        {
            name: '공지사항', path: '/notice', subItems: [
                { name: '공지사항', path: '/notice/announcements' },
                { name: '공지사항2', path: '/notice/column' },
                { name: '공지사항3', path: '/notice/media' },
            ],
        },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setOpenSubmenuIndex(null);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleSubmenuToggle = (index: number) => {
        setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {/* 메뉴 오버레이 (배경) */}
            <div
                className={`fixed inset-0 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'} z-[1000]`}
                onClick={handleBackdropClick}
            ></div>

            {/* 모바일 메뉴 패널 */}
            <div
                // 이 부분만 수정합니다: right-0, 그리고 transform 클래스 순서
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 transform
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-[1001] overflow-y-auto pb-4`}
                style={{ scrollbarWidth: 'none' }}
            >
                <style jsx global>{`
                    .mobile-menu-panel::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
                <div className="mobile-menu-panel h-full overflow-y-auto">
                    {/* 상단 닫기 버튼 + 로고/텍스트 */}
                    <div className="p-4 flex justify-between items-center border-b border-gray-200">
                        <Link href="/" className="flex items-center text-red-600 font-bold text-xl" onClick={onClose}>
                            <Image src="https://test.png" alt="회사명 로고" width={120} height={30} unoptimized={true}/>
                        </Link>
                        <button
                            onClick={onClose}
                            className="text-gray-600 hover:text-gray-800 text-3xl"
                            aria-label="메뉴 닫기"
                        >
                            <FiX />
                        </button>
                    </div>

                    {/* 프로필/로그인 영역 */}
                    <div className="bg-gray-800 text-white p-4">
                        <p className="text-sm">로그인이 필요합니다.</p>
                        <div className="flex justify-between items-center mt-2">
                            <Link href="/login" className="text-white hover:underline" onClick={onClose}>로그인</Link>
                            <Link href="/signup" className="text-white hover:underline" onClick={onClose}>회원가입</Link>
                        </div>
                    </div>

                    {/* 메뉴 목록 */}
                    <nav className="py-2">
                        <ul>
                            {menuItems.map((item, index) => (
                                <li key={item.name} className="border-b border-gray-200 last:border-b-0">
                                    <div className="flex justify-between items-center px-4 py-3 text-gray-700 text-base font-semibold">
                                        <Link href={item.path} onClick={onClose} className="flex-grow hover:text-blue-600">
                                            {item.name}
                                        </Link>
                                        {item.subItems && (
                                            <button
                                                onClick={() => handleSubmenuToggle(index)}
                                                className="p-2 text-gray-500 hover:text-gray-700 transition-transform duration-200"
                                            >
                                                {openSubmenuIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                            </button>
                                        )}
                                    </div>
                                    {item.subItems && (
                                        <ul
                                            className={`bg-gray-50 border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out
                        ${openSubmenuIndex === index ? 'max-h-96 opacity-100 py-2' : 'max-h-0 opacity-0'}`}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link href={subItem.path} onClick={onClose} className="block px-6 py-2 text-gray-600 hover:bg-gray-100 text-sm">
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 푸터 영역 */}
                    <div className="im-mobile-slide-footer p-4 text-center text-gray-600 text-sm">
                        {/* 여기에 추가적인 모바일 푸터 내용 */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;