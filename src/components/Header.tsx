// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

interface MenuItem {
    name: string;
    path: string;
    subItems?: MenuItem[];
}
interface HeaderProps {
    logoNormalSrc?: string;
    logoScrolledSrc?: string;
    logoAltText?: string;
    menuItems?: MenuItem[];
    loginButtonText?: string;
    signupButtonText?: string;
    initialBgColor?: string;
    scrolledBgColor?: string;
    isFixed?: boolean;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
                                           logoNormalSrc = "https://test.png",
                                           logoScrolledSrc = "https://test.png",
                                           logoAltText = "카테고리2 주치의 회사명",
                                           menuItems: propMenuItems,
                                           loginButtonText = "로그인",
                                           signupButtonText = "회원가입",
                                           initialBgColor = "bg-transparent", // 초기 배경색 투명
                                           scrolledBgColor = "bg-white",     // 스크롤 후 배경색 흰색
                                           isFixed = true,
                                           className = "",
                                       }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const defaultMenuItems: MenuItem[] = [
        {
            name: '회사소개', path: '/company', subItems: [
                { name: 'ABOUT', path: '/introduce' },
                { name: 'HISTORY', path: '/history' },
                { name: 'CEO', path: '/ceo' },
                { name: 'PEOPLE', path: '/people' },
            ],
        },
        {
            name: '카테고리2', path: '/marketing', subItems: [
                { name: '서브카테고리', path: '/departments' },
                { name: '서브카테고리2', path: '/restoration' },
                { name: '서브카테고리3', path: '/seo' },
                { name: '서브카테고리4', path: '/video' },
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

    const currentMenuItems = propMenuItems || defaultMenuItems;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        if (isFixed) {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [isFixed]);

    return (
        <header className={`${isFixed ? 'fixed' : ''} w-full z-50 transition-colors duration-300 ${scrolled ? scrolledBgColor + ' shadow-md' : initialBgColor} ${className}`}>
            <div className="container mx-auto flex justify-between items-center h-20 px-4 md:px-0">
                {/* 로고 영역 */}
                <Link href="/">
                    <Image
                        src={scrolled ? logoScrolledSrc : logoNormalSrc}
                        alt={logoAltText}
                        width={212}
                        height={86}
                        className="h-auto"
                        unoptimized={true}
                    />
                </Link>

                {/* 데스크탑 메뉴 & 로그인/회원가입 & 햄버거 버튼 그룹 */}
                <div className="flex items-center space-x-6"> {/* 이 div로 전체 우측 그룹을 묶음 */}
                    {/* 데스크탑 메인 메뉴 (모바일에서는 hidden) */}
                    <nav className="hidden md:flex items-center space-x-6"> {/* md 미만에서 숨김 */}
                        {currentMenuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link href={item.path} className={`font-semibold text-lg hover:text-blue-600 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                                    {item.name}
                                </Link>
                                {item.subItems && (
                                    <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible z-10 py-2">
                                        {item.subItems.map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link href={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600">
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* 데스크탑 로그인/회원가입 텍스트 링크 (모바일에서는 hidden) */}
                    <div className="hidden md:flex items-center space-x-2"> {/* md 미만에서 숨김 */}
                        <Link href="/login" className={`text-sm ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600`}>
                            로그인
                        </Link>
                        <span className={`text-gray-400 ${scrolled ? 'text-gray-400' : 'text-white'}`}>|</span> {/* 구분자 */}
                        <Link href="/signup" className={`text-sm ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600`}>
                            회원가입
                        </Link>
                    </div>

                    {/* 햄버거 메뉴 버튼 (항상 보임, md:hidden 제거) */}
                    <button
                        className={`text-gray-700 text-3xl transition-colors duration-300 ml-4 ${scrolled ? 'text-gray-700' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="메뉴 열기"
                    >
                        ☰
                    </button>
                </div>
            </div>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                // menuItems={currentMenuItems}
                // showLoginArea={true} // 예시: MobileMenu가 로그인 영역을 보여줄지 말지 결정하는 prop
            />
        </header>
    );
};

export default Header;