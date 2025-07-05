// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // --- 명문 마케팅 세련된 팔레트 ---
                'mm-navy': '#1A202C',            // 미드나잇 블루 (주요 배경, 텍스트)
                'mm-gray': '#4A5568',            // 쿨 그레이 (본문 텍스트, 서브 헤더)
                'mm-gold': '#FBBF24',            // 골드/앰버 (주요 강조, CTA)
                'mm-green': '#34D399',           // 소프트 그린 (보조 강조)
                'mm-light-bg': '#F7FAFC',        // 밝은 배경 (섹션 배경)
                'mm-border-gray': '#E2E8F0',     // 테두리 그레이
            },
            // ... 폰트, 간격 등 추가적인 테마 확장 가능
        },
    },
    plugins: [],
};
export default config;