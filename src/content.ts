export type Locale = "ko" | "en";

export type GuideItem = {
  id: string;
  icon: string;
  chapter: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  keywords: string[];
};

export const guideItems: GuideItem[] = [
  {
    id: "basics",
    icon: "→",
    chapter: "01",
    title: { ko: "운전 시작하기", en: "Getting started" },
    description: {
      ko: "우측통행, km/h, 차량 조작과 출발 전 확인",
      en: "Right-side traffic, km/h, controls and pre-drive checks",
    },
    keywords: ["우측통행", "좌핸들", "km/h", "기본", "right side", "left hand drive"],
  },
  {
    id: "signs",
    icon: "△",
    chapter: "02",
    title: { ko: "표지판과 신호", en: "Signs & signals" },
    description: {
      ko: "STOP부터 점멸 신호, 노면 표시까지 그림으로",
      en: "From STOP signs to flashing signals and road markings",
    },
    keywords: ["표지판", "신호등", "stop", "yield", "flashing green", "사인"],
  },
  {
    id: "intersections",
    icon: "＋",
    chapter: "03",
    title: { ko: "교차로와 회전", en: "Intersections & turns" },
    description: {
      ko: "4-way stop, 비보호 좌회전, 우회전과 U턴",
      en: "4-way stops, unprotected lefts, right turns and U-turns",
    },
    keywords: ["비보호 좌회전", "좌회전", "우회전", "유턴", "u-turn", "4-way stop"],
  },
  {
    id: "parking",
    icon: "P",
    chapter: "04",
    title: { ko: "주차 완전정복", en: "Parking decoded" },
    description: {
      ko: "스트리트 파킹 표지판, 소화전과 겨울 주차금지",
      en: "Street parking signs, hydrants and winter parking bans",
    },
    keywords: ["주차", "스트릿파킹", "소화전", "견인", "parking", "hydrant", "towing"],
  },
  {
    id: "winter",
    icon: "✳",
    chapter: "05",
    title: { ko: "겨울과 고속도로", en: "Winter & highways" },
    description: {
      ko: "블랙아이스, 눈길 제동, 합류와 제설차",
      en: "Black ice, snow braking, merging and snowplows",
    },
    keywords: ["겨울", "블랙아이스", "눈", "고속도로", "합류", "winter", "merge", "snow"],
  },
  {
    id: "emergency",
    icon: "!",
    chapter: "06",
    title: { ko: "긴급상황", en: "Emergencies" },
    description: {
      ko: "사이렌, 스쿨버스, 사고·고장과 견인 대응",
      en: "Sirens, school buses, collisions, breakdowns and towing",
    },
    keywords: ["사고", "고장", "구급차", "경찰", "스쿨버스", "견인", "collision", "siren", "school bus"],
  },
];

export const quickTopics = [
  { ko: "비보호 좌회전", en: "Unprotected left turn" },
  { ko: "4-way stop 순서", en: "4-way stop order" },
  { ko: "스트리트 파킹", en: "Street parking" },
  { ko: "스쿨버스 빨간불", en: "School bus red lights" },
  { ko: "사이렌이 들릴 때", en: "When you hear a siren" },
  { ko: "차가 견인됐어요", en: "My car was towed" },
];
