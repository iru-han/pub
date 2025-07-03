// src/types/common.d.ts (또는 CustomerStoriesSection.tsx 상단)

interface CustomerStory {
    id: string; // 고유 ID
    title: string; // "HWISA H정형외과"
    subtitle: string; // "“회사명는 단점이 없습니다.”"
    imageSrc: string; // 썸네일 이미지 URL
    videoUrl: string; // 유튜브 등 동영상 URL
}