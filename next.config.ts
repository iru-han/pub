import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export', // 이 줄을 추가합니다.
    images: { // GitHub Pages는 Image 최적화에 필요한 서버 기능을 지원하지 않으므로, 이 설정을 추가합니다.
        unoptimized: true,
    },
};

export default nextConfig;
