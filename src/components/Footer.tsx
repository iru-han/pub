// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} 회사명 클론. All rights reserved.</p>
                <p className="text-sm mt-2">이 사이트는 포트폴리오 목적으로 제작되었습니다.</p>
            </div>
        </footer>
    );
};

export default Footer;