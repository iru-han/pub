// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
    // content는 Tailwind가 어떤 파일에서 CSS 클래스를 스캔할지 지정합니다.
    // Next.js App Router를 사용하고, src/ 폴더 안에 app/과 components/가 있다면 이 경로들이 맞습니다.
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // src/app/ 대신 바로 app/을 쓰는 경우 (next.config.js에 srcDir: true 없으면)
        './pages/**/*.{js,ts,jsx,tsx,mdx}', // Next.js Pages Router (사용하지 않더라도 포함)
        './components/**/*.{js,ts,jsx,tsx,mdx}', // src/components/ 대신 바로 components/을 쓰는 경우
        // 만약 여러분의 프로젝트가 src 폴더 안에 있다면 (src/app, src/components), 아래 경로를 사용해야 합니다.
        './src/**/*.{js,ts,jsx,tsx,mdx}', // src 폴더 안의 모든 .js/.ts/.jsx/.tsx/.mdx 파일
    ],
    theme: {
        extend: {
            // 여기에 커스텀 색상, 폰트, 간격 등을 정의할 수 있습니다.
            // 예를 들어:
            // colors: {
            //   primary: '#ff0000',
            //   secondary: '#00ff00',
            // },
            // spacing: {
            //   '72': '18rem',
            //   '84': '21rem',
            // },
            // backgroundImage: {
            //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //   'gradient-conic':
            //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            // },
        },
    },
    plugins: [],
};
export default config;