// src/components/ComparisonTable.tsx
"use client";

import React from 'react';

const ComparisonTable: React.FC = () => {
    const data = [
        {
            category: "전문성",
            general: "모든 업종 전부 진행 (전문성 부족)",
            premium: "학원 업종만 진행 (깊이 있는 전략)"
        },
        {
            category: "광고 메시지",
            general: "일반적인 문구",
            premium: "학원 전용 설득 문구"
        },
        {
            category: "콘텐츠 방향",
            general: "브랜딩 없이 단순 홍보",
            premium: "학원의 강점 및 철학까지 설계"
        },
        {
            category: "관리",
            general: "하청 인계 및 부실 관리",
            premium: "대표가 모든 부분 직접 관여"
        }
    ];

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200" data-aos="fade-up" data-aos-delay="200">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-mm-navy text-white" style={{ backgroundColor: '#1A202C' }}> {/* 헤더 배경색과 텍스트 색상 수정 */}
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider w-1/4">구분</th>
                    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider w-1/3 border-l border-mm-gray">일반 광고 대행사</th>
                    <th className="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider w-1/3 border-l border-mm-gray">명문 마케팅</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-mm-border-gray">
                {data.map((row, index) => (
                    <tr key={row.category}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-mm-gray bg-mm-light-bg">{row.category}</td>
                        <td className="px-6 py-4 text-sm text-mm-gray border-l border-mm-border-gray">{row.general}</td>
                        <td className="px-6 py-4 text-sm text-mm-gold font-medium border-l border-mm-border-gray">{row.premium}</td> {/* 명문 마케팅 강조 */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;