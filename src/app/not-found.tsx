// src/app/not-found.tsx
import Link from 'next/link';
import React from 'react'; // React를 명시적으로 임포트하는 것이 좋습니다.

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">페이지를 찾을 수 없습니다.</h2>
            <p className="text-lg text-center mb-8">
                요청하신 페이지가 존재하지 않거나,<br />
                더 이상 제공되지 않는 페이지일 수 있습니다.
            </p>
            <Link href="/" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
                홈으로 돌아가기
            </Link>
        </div>
    );
}