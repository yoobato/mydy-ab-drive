import { expandedArticles } from "./expandedContent";

export type Locale = "ko" | "en";
export type Localized = Record<Locale, string>;
export type CityId = "alberta" | "calgary" | "edmonton" | "red-deer";
export type SourceKind = "guide" | "alberta" | "municipal" | "canada" | "practical";
export type ParkingSignKind = "no-stopping" | "no-parking" | "time-limit" | "arrows" | "paid" | "loading" | "permit" | "accessible" | "reserved" | "snow-route";

export type ParkingSignExample = {
  kind: ParkingSignKind;
  signText: Localized;
  title: Localized;
  meaning: Localized;
  check: Localized;
};

export type GuideItem = {
  id: string;
  icon: string;
  chapter: string;
  title: Localized;
  description: Localized;
  keywords: string[];
};

export type Article = {
  id: string;
  chapterId: string;
  title: Localized;
  summary: Localized;
  takeaway: Localized;
  steps: Record<Locale, string[]>;
  caution: Localized;
  keywords: string[];
  visual: "road" | "speed" | "mirror" | "stop" | "signal" | "sign" | "intersection" | "turn" | "uturn" | "parking" | "hill" | "snow" | "merge" | "ice" | "plow" | "bus" | "siren" | "collision" | "pedestrian" | "roundabout" | "highway" | "skid" | "visibility" | "truck" | "rail" | "seatbelt" | "law" | "heater" | "insurance";
  cities?: Partial<Record<CityId, Localized>>;
  sourceUrl?: string;
  sourceKinds?: SourceKind[];
  parkingSigns?: ParkingSignExample[];
};

export const guideItems: GuideItem[] = [
  {
    id: "basics", icon: "→", chapter: "01",
    title: { ko: "운전 시작하기", en: "Getting started" },
    description: { ko: "우측통행, km/h와 도시별 기본 제한속도", en: "Right-side traffic, km/h and municipal default limits" },
    keywords: ["우측통행", "좌핸들", "km/h", "기본", "right side", "left hand drive"],
  },
  {
    id: "signs", icon: "△", chapter: "02",
    title: { ko: "표지판과 신호", en: "Signs & signals" },
    description: { ko: "STOP부터 점멸 신호, 노면 표시까지 그림으로", en: "From STOP signs to flashing signals and road markings" },
    keywords: ["표지판", "신호등", "stop", "yield", "flashing green", "사인"],
  },
  {
    id: "intersections", icon: "＋", chapter: "03",
    title: { ko: "교차로와 회전", en: "Intersections & turns" },
    description: { ko: "4-way stop, 비보호 좌회전, 우회전과 U턴", en: "4-way stops, unprotected lefts, right turns and U-turns" },
    keywords: ["비보호 좌회전", "좌회전", "우회전", "유턴", "u-turn", "4-way stop"],
  },
  {
    id: "parking", icon: "P", chapter: "04",
    title: { ko: "주차 완전정복", en: "Parking decoded" },
    description: { ko: "스트리트 파킹 표지판, 소화전과 겨울 주차금지", en: "Street parking signs, hydrants and winter parking bans" },
    keywords: ["주차", "스트릿파킹", "소화전", "견인", "parking", "hydrant", "towing"],
  },
  {
    id: "winter", icon: "✳", chapter: "05",
    title: { ko: "고속도로·제설 규칙", en: "Highway & snow rules" },
    description: { ko: "차로 사용, 갓길 금지와 제설차 추월 규정", en: "Lane use, shoulder prohibitions and snowplow passing rules" },
    keywords: ["고속도로", "추월", "갓길", "제설차", "highway", "passing", "shoulder", "snowplow"],
  },
  {
    id: "emergency", icon: "!", chapter: "06",
    title: { ko: "긴급상황", en: "Emergencies" },
    description: { ko: "스쿨버스·사이렌, 사고·고장과 견인 의무", en: "School buses, sirens, collisions, breakdowns and towing duties" },
    keywords: ["사고", "고장", "구급차", "경찰", "스쿨버스", "견인", "collision", "siren", "school bus"],
  },
  {
    id: "road-users", icon: "◎", chapter: "07",
    title: { ko: "함께 쓰는 도로", en: "Sharing the road" },
    description: { ko: "보행자·자전거·오토바이 우선권과 철도·LRT", en: "Right-of-way for vulnerable users, railways and LRT" },
    keywords: ["보행자", "자전거", "오토바이", "트럭", "철도", "lrt", "pedestrian", "cyclist", "truck"],
  },
  {
    id: "law", icon: "§", chapter: "08",
    title: { ko: "법규와 책임", en: "Law & responsibility" },
    description: { ko: "안전벨트, 주의산만·음주운전과 벌점", en: "Restraints, distraction, impairment and demerits" },
    keywords: ["법규", "카시트", "안전벨트", "휴대폰", "음주운전", "벌점", "law", "seat belt", "demerit"],
  },
  {
    id: "appendix", icon: "+", chapter: "09",
    title: { ko: "한국 운전자 부록", en: "Korean driver appendix" },
    description: { ko: "한국과 다른 도로 문화, 미러, 겨울 차량 생활과 보험", en: "Road culture, mirrors, winter car life and insurance for Korean drivers" },
    keywords: ["한국 차이", "사이드미러", "블록히터", "자동접이", "보험", "korea", "mirror", "block heater", "insurance"],
  },
];

const guideSource = "https://www.alberta.ca/driver-guides-overview-and-pdf-versions";

export const articles: Article[] = [
  {
    id: "keep-right", chapterId: "basics", visual: "road",
    title: { ko: "우측통행과 좌핸들", en: "Keep right, drive from the left seat" },
    summary: { ko: "한국과 마찬가지로 운전석은 왼쪽이지만, 차량은 도로의 오른쪽으로 주행합니다.", en: "The driver sits on the left and vehicles travel on the right side of the road." },
    takeaway: { ko: "회전 후에는 항상 진행 방향의 오른쪽 차로로 들어간다고 생각하세요.", en: "After a turn, think: enter the correct lane on the right side of the road." },
    steps: {
      ko: ["출발 전 운전석에서 중앙선이 왼쪽에 오는 모습을 익힙니다.", "우회전은 가까운 오른쪽 차로, 좌회전은 중앙선 오른쪽 차로로 진입합니다.", "주차장 출구와 일방통행 진입 시 진행 방향을 한 번 더 확인합니다."],
      en: ["Before moving, picture the centre line staying to your left.", "Turn right into the nearest right lane and left to the lane right of the centre line.", "Double-check your direction when leaving parking lots or entering one-way streets."],
    },
    caution: { ko: "회전하며 넓게 돌아 두 차로를 차지하거나 곧바로 다른 차로로 들어가지 마세요.", en: "Do not swing wide across two lanes or change lanes while completing the turn." },
    keywords: ["우측통행", "좌핸들", "오른쪽", "keep right", "right side", "left hand drive"], sourceUrl: guideSource,
  },
  {
    id: "speed-units", chapterId: "basics", visual: "speed",
    title: { ko: "km/h와 기본 제한속도", en: "km/h and default speed limits" },
    summary: { ko: "속도는 km/h, 거리는 km, 연료는 L 단위를 사용합니다. 표지판이 없을 때의 속도는 도로와 도시에 따라 달라집니다.", en: "Speed is shown in km/h, distance in km and fuel in litres. Unposted limits depend on the road and municipality." },
    takeaway: { ko: "제한속도는 이상적인 조건의 최대값입니다. 눈·비·시야가 나쁘면 더 느리게 달려야 합니다.", en: "The limit is the maximum for ideal conditions. Slow down for snow, rain or poor visibility." },
    steps: {
      ko: ["제한속도 표지판을 가장 먼저 따릅니다.", "표지판이 없다면 현재 도시와 도로 종류의 기본속도를 확인합니다.", "노면이나 날씨가 나쁘면 표시된 제한속도보다 낮춰 운전합니다."],
      en: ["Always follow the posted speed first.", "If no sign is present, use the default for that road and municipality.", "Drive below the posted maximum when road or weather conditions demand it."],
    },
    caution: { ko: "Alberta의 일반적인 도시 기본값 50km/h를 모든 도시에 적용하면 안 됩니다.", en: "Do not assume Alberta's general urban default of 50 km/h applies in every city." },
    cities: {
      calgary: { ko: "Calgary는 표지판 없는 도로의 기본 제한속도가 40km/h입니다.", en: "Calgary's default limit on unsigned roads is 40 km/h." },
      "red-deer": { ko: "Red Deer는 별도 표지가 없으면 도시 기본 제한속도가 50km/h입니다.", en: "Red Deer's citywide default is 50 km/h unless posted otherwise." },
    },
    keywords: ["속도", "제한속도", "40", "50", "km/h", "speed limit", "단위"], sourceUrl: guideSource, sourceKinds: ["guide", "municipal"],
  },
  {
    id: "shoulder-check", chapterId: "basics", visual: "mirror",
    title: { ko: "미러와 숄더 체크", en: "Mirrors and shoulder checks" },
    summary: { ko: "미러에 보이지 않는 사각지대는 고개를 직접 돌려 확인해야 합니다.", en: "Blind spots that mirrors cannot show must be checked by briefly turning your head." },
    takeaway: { ko: "미러 → 방향지시등 → 숄더 체크 → 이동 순서를 습관으로 만드세요.", en: "Build the habit: mirror → signal → shoulder check → move." },
    steps: {
      ko: ["룸미러와 이동 방향의 사이드미러를 확인합니다.", "충분히 일찍 방향지시등을 켭니다.", "이동 방향 어깨 너머 사각지대를 짧게 확인합니다.", "속도와 간격을 유지하며 부드럽게 차선을 옮깁니다."],
      en: ["Check the rear-view and side mirror in the direction you will move.", "Signal early enough to give others warning.", "Briefly look over your shoulder into the blind spot.", "Maintain speed and move smoothly when the space is clear."],
    },
    caution: { ko: "카메라나 경고등만 믿지 말고 자전거와 오토바이를 직접 확인하세요.", en: "Do not rely only on cameras or warning lights; look for cyclists and motorcycles yourself." },
    keywords: ["숄더 체크", "사각지대", "차선변경", "shoulder check", "blind spot", "mirror"], sourceUrl: guideSource,
  },
  {
    id: "stop-yield", chapterId: "signs", visual: "stop",
    title: { ko: "STOP과 YIELD", en: "STOP and YIELD" },
    summary: { ko: "STOP은 완전 정지, YIELD는 필요할 때 정지할 준비를 하며 통행 우선권을 양보하는 표지입니다.", en: "STOP requires a complete stop. YIELD requires you to give right-of-way and be ready to stop." },
    takeaway: { ko: "STOP에서는 정지선 앞에 바퀴를 완전히 멈춘 뒤 다시 안전을 판단합니다.", en: "At STOP, bring the wheels to a complete stop before the line, then reassess." },
    steps: {
      ko: ["정지선이 있으면 그 앞에서 멈춥니다.", "정지선이 없으면 횡단보도 앞, 둘 다 없으면 교차로 직전에서 멈춥니다.", "좌우 차량과 보행자를 확인한 뒤 안전할 때 진행합니다."],
      en: ["Stop before the stop line when one is present.", "Without a line, stop before the crosswalk; without either, stop before the intersection.", "Check vehicles and pedestrians in every direction before proceeding."],
    },
    caution: { ko: "속도만 줄이는 rolling stop은 완전 정지가 아닙니다.", en: "A rolling stop is not a complete stop." },
    keywords: ["stop", "yield", "스탑", "양보", "완전정지", "rolling stop"], sourceUrl: guideSource,
  },
  {
    id: "flashing-signals", chapterId: "signs", visual: "signal",
    title: { ko: "점멸 신호 읽기", en: "Reading flashing signals" },
    summary: { ko: "점멸 빨강은 STOP처럼, 점멸 노랑은 주의하며 진행합니다. Alberta의 점멸 초록은 맞은편이 빨간불이라는 뜻입니다.", en: "Flashing red works like STOP; flashing yellow means proceed cautiously. In Alberta, flashing green means opposing traffic faces red." },
    takeaway: { ko: "초록 점멸이어도 교차로 안의 보행자와 합법적으로 진입한 차량에는 양보해야 합니다.", en: "Even on flashing green, yield to pedestrians and vehicles already lawfully in the intersection." },
    steps: {
      ko: ["빨강 점멸: 완전 정지하고 안전할 때 진행합니다.", "모든 방향 빨강 점멸: 4-way stop으로 처리합니다.", "노랑 점멸: 보행자와 교차로 내 차량에 양보하며 주의해서 진행합니다.", "초록 점멸: 직진·좌회전·우회전할 수 있지만 교차로를 먼저 확인합니다."],
      en: ["Flashing red: stop completely and proceed when safe.", "Red flashing in every direction: treat it as a 4-way stop.", "Flashing yellow: proceed cautiously after yielding.", "Flashing green: you may go straight or turn, but first clear the intersection."],
    },
    caution: { ko: "점멸 초록의 의미는 캐나다 안에서도 지역별로 다를 수 있습니다. 이 설명은 Alberta 기준입니다.", en: "Flashing green can mean something different elsewhere in Canada. This explanation is for Alberta." },
    keywords: ["점멸", "깜빡이는 초록", "flashing green", "flashing red", "flashing yellow", "신호등"], sourceUrl: guideSource,
  },
  {
    id: "sign-families", chapterId: "signs", visual: "sign",
    title: { ko: "표지판 모양과 색", en: "Sign shapes and colours" },
    summary: { ko: "빨간 원과 사선은 금지, 초록 원은 허용, 노란 다이아몬드는 경고를 뜻합니다.", en: "A red circle and slash prohibits, a green circle permits, and a yellow diamond warns." },
    takeaway: { ko: "글자를 다 읽지 못해도 색과 모양부터 보면 표지판의 성격을 빠르게 알 수 있습니다.", en: "Even before reading the words, colour and shape tell you what kind of message to expect." },
    steps: {
      ko: ["빨간 원과 사선: 그림 속 행동 금지", "초록 원: 그림 속 진행 방향이나 행동 허용", "흰색 직사각형: 속도·차로 등 규제", "노란 다이아몬드: 앞의 위험 또는 도로 상태 경고", "주황색: 공사구간 정보와 작업자 주의"],
      en: ["Red circle and slash: the pictured action is prohibited.", "Green circle: the shown direction or action is permitted.", "White rectangle: regulations such as speed or lane use.", "Yellow diamond: hazard or road-condition warning ahead.", "Orange: construction information and workers ahead."],
    },
    caution: { ko: "보조 표지판의 시간, 요일, 화살표가 본 표지의 적용 범위를 바꿀 수 있습니다.", en: "Time, day and arrow plates below a sign can change when and where it applies." },
    keywords: ["표지판", "색", "모양", "금지", "허용", "warning sign", "regulatory sign"], sourceUrl: guideSource,
  },
  {
    id: "four-way-stop", chapterId: "intersections", visual: "intersection",
    title: { ko: "4-way stop 통과 순서", en: "4-way stop order" },
    summary: { ko: "모든 차량이 정지한 뒤 먼저 도착한 차량부터 진행합니다.", en: "Every vehicle stops, then the first vehicle to arrive proceeds first." },
    takeaway: { ko: "동시에 도착했다면 일반적으로 오른쪽 차량에 먼저 양보합니다.", en: "If vehicles arrive together, generally yield to the vehicle on your right." },
    steps: {
      ko: ["정지선 앞에서 완전히 멈춥니다.", "누가 먼저 정지했는지 관찰합니다.", "먼저 도착한 차량이 먼저 진행합니다.", "동시 도착이면 오른쪽 차량을 먼저 보냅니다.", "좌회전 차량은 맞은편 직진 차량에 양보합니다."],
      en: ["Come to a complete stop before the line.", "Observe which vehicle stopped first.", "The first vehicle to arrive goes first.", "For simultaneous arrivals, yield to the vehicle on the right.", "A left-turning driver yields to opposing through traffic."],
    },
    caution: { ko: "지나치게 손짓으로 양보하면 오히려 순서가 불분명해집니다. 확신이 없다면 안전을 확인하고 명확하게 행동하세요.", en: "Excessive waving can create confusion. If unsure, verify it is safe and act predictably." },
    keywords: ["4-way stop", "four way", "사거리", "우선순위", "먼저", "동시도착"], sourceUrl: guideSource,
  },
  {
    id: "unprotected-left", chapterId: "intersections", visual: "turn",
    title: { ko: "비보호 좌회전", en: "Unprotected left turns" },
    summary: { ko: "초록불이어도 맞은편 직진·우회전 차량과 횡단보행자에게 먼저 양보합니다.", en: "Even on green, yield to opposing through/right-turn traffic and pedestrians." },
    takeaway: { ko: "교차로에서 기다릴 때 앞바퀴는 직진으로 두세요.", en: "Keep your front wheels straight while waiting in the intersection." },
    steps: {
      ko: ["좌회전 차로에서 방향지시등을 켭니다.", "교차로 진입 공간과 출구 쪽 횡단보도를 확인합니다.", "맞은편 차량이 충분히 멀거나 완전히 멈췄을 때 회전합니다.", "회전 후 중앙선 바로 오른쪽의 올바른 차로로 들어갑니다."],
      en: ["Signal from the proper left-turn lane.", "Check space in the intersection and the exit crosswalk.", "Turn only when opposing traffic is far enough away or fully stopped.", "Finish in the correct lane immediately right of the centre line."],
    },
    caution: { ko: "앞바퀴를 미리 왼쪽으로 돌리면 뒤에서 추돌당할 때 맞은편 차로로 밀릴 수 있습니다.", en: "Turning the wheels left while waiting can push you into opposing traffic if struck from behind." },
    keywords: ["비보호 좌회전", "좌회전", "unprotected left", "green light", "맞은편"], sourceUrl: guideSource,
  },
  {
    id: "right-red-uturn", chapterId: "intersections", visual: "uturn",
    title: { ko: "빨간불 우회전과 U턴", en: "Right on red and U-turns" },
    summary: { ko: "금지 표지가 없다면 빨간불에서 완전 정지 후 안전하게 우회전할 수 있습니다. U턴은 제한이 훨씬 많습니다.", en: "Unless prohibited, you may turn right on red after a complete stop. U-turns are much more restricted." },
    takeaway: { ko: "우회전 가능은 우선권이 있다는 뜻이 아닙니다. 보행자와 진행 차량에 양보하세요.", en: "Permission to turn right does not give you priority. Yield to pedestrians and moving traffic." },
    steps: {
      ko: ["정지선이나 횡단보도 앞에서 완전히 멈춥니다.", "No Right Turn on Red 표지가 없는지 확인합니다.", "보행자·자전거·왼쪽 진행 차량을 확인한 뒤 가까운 차로로 우회전합니다.", "U턴은 신호 교차로에서 허용 표지가 있을 때만 하고, 금지 표지를 항상 확인합니다."],
      en: ["Stop completely before the stop line or crosswalk.", "Check that no No Right Turn on Red sign is posted.", "Yield to pedestrians, cyclists and traffic from the left, then enter the nearest lane.", "At a signalized intersection, make a U-turn only when a traffic-control device permits it."],
    },
    caution: { ko: "도시지역에서는 교차로 사이, 골목 교차로, 공공이 이용하는 주차장 출입구 교차로에서도 U턴할 수 없습니다.", en: "In urban areas, U-turns are also prohibited between intersections, at alley intersections and at intersections providing public parking-lot access." },
    keywords: ["빨간불 우회전", "우회전", "유턴", "u-turn", "right on red", "no right turn"], sourceUrl: guideSource,
  },
  {
    id: "parking-distances", chapterId: "parking", visual: "parking",
    title: { ko: "주차하면 안 되는 거리", en: "Where not to park" },
    summary: { ko: "소화전, 표지판, 횡단보도와 드라이브웨이 주변에는 법정 여유거리가 필요합니다.", en: "Fire hydrants, signs, crosswalks and driveways require legal clearance." },
    takeaway: { ko: "5m 규칙: 소화전, STOP/YIELD 표지판, 표시된 횡단보도에서 최소 5m 떨어지세요.", en: "The 5 m rule: stay at least 5 m from hydrants, STOP/YIELD signs and marked crosswalks." },
    steps: {
      ko: ["소화전에서 가장 가까운 연석 지점으로부터 5m를 확보합니다.", "STOP/YIELD 표지판과 표시된 횡단보도에서 5m를 확보합니다.", "차고·사유도로·드라이브웨이 출입구에서 1.5m를 확보합니다.", "평행주차 시 바퀴를 연석에서 50cm 이내에 둡니다."],
      en: ["Leave 5 m from the curb point nearest a fire hydrant.", "Leave 5 m from STOP/YIELD signs and marked crosswalks.", "Leave 1.5 m from garage, private-road and driveway access.", "When parallel parked, keep the wheels within 50 cm of the curb."],
    },
    caution: { ko: "표지판이 없어도 기본 주차금지 거리는 적용됩니다.", en: "These basic no-parking clearances apply even when no sign is posted." },
    keywords: ["소화전", "5미터", "드라이브웨이", "횡단보도", "주차", "hydrant", "parking distance"], sourceUrl: guideSource,
  },
  {
    id: "street-parking-signs", chapterId: "parking", visual: "sign",
    title: { ko: "주차 표지판 완전 해석", en: "Decoding parking signs" },
    summary: { ko: "No Stopping과 No Parking부터 시간·요일·화살표, 유료·허가·적재·장애인·버스·택시·제설 표지까지 종류별로 읽습니다.", en: "Decode No Stopping and No Parking plus times, days, arrows, payment, permits, loading, accessible, reserved and snow-route signs." },
    takeaway: { ko: "기둥에서 내 차 방향의 화살표를 찾은 뒤, 가장 강한 금지 → 시간·요일 → 예외·허가 → 결제 순서로 읽으세요.", en: "Start with the arrow toward your car, then read strongest prohibition → time/day → exceptions/permits → payment." },
    steps: {
      ko: ["화살표가 내 주차 위치를 가리키는지 확인합니다.", "No Stopping인지 No Parking인지 구분합니다.", "적용 요일과 시작·종료 시간을 확인합니다.", "최대 주차시간, 주민 허가증, 유료 여부를 확인합니다.", "임시 공사표지와 제설 알림이 없는지 주변을 한 번 더 봅니다."],
      en: ["Check whether the arrow applies to your parking position.", "Distinguish No Stopping from No Parking.", "Read the applicable days and start/end times.", "Check maximum stay, resident permit and payment requirements.", "Look again for temporary construction or snow-removal notices."],
    },
    caution: { ko: "도시 주차 조례는 표지판에 모두 적혀 있지 않을 수 있습니다. 장기·야간 주차는 도시 규칙도 확인하세요.", en: "Not every municipal parking rule appears on a sign. Check local rules for long-term or overnight parking." },
    parkingSigns: [
      {
        kind: "no-stopping", signText: { ko: "NO STOPPING", en: "NO STOPPING" },
        title: { ko: "정차 금지", en: "No Stopping" },
        meaning: { ko: "교통 흐름이나 긴급상황 때문에 멈추는 경우 외에는 승하차를 위해 잠깐도 세울 수 없습니다.", en: "Except for traffic or an emergency, you may not stop even briefly to pick up or drop off." },
        check: { ko: "비상등을 켜도 예외가 되지 않습니다.", en: "Hazard lights do not create an exception." },
      },
      {
        kind: "no-parking", signText: { ko: "NO PARKING", en: "NO PARKING" },
        title: { ko: "주차 금지", en: "No Parking" },
        meaning: { ko: "Calgary 표준 안내 기준으로 승객을 적극적으로 태우거나 내리는 동안만 정차할 수 있고, 그 외 이유로 차를 세워두거나 떠날 수 없습니다.", en: "Under Calgary's standard guidance, you may stop only while actively loading or unloading passengers and may not leave the vehicle stopped for another reason." },
        check: { ko: "물건 적재 허용 여부는 별도 Loading Zone 표지를 확인합니다.", en: "Check for a separate Loading Zone sign before loading goods." },
      },
      {
        kind: "time-limit", signText: { ko: "2 HR · 08–18 · MON–SAT", en: "2 HR · 08–18 · MON–SAT" },
        title: { ko: "시간·요일·최대 체류", en: "Time, day and maximum stay" },
        meaning: { ko: "표시된 요일과 시간대에만 제한이 적용되며, 2 HR 같은 숫자는 최대 주차시간입니다.", en: "The restriction applies on the posted days and hours; a value such as 2 HR is the maximum stay." },
        check: { ko: "자정을 넘는 시간대와 공휴일 예외 문구도 확인합니다.", en: "Watch for overnight ranges and holiday exceptions." },
      },
      {
        kind: "arrows", signText: { ko: "←  →", en: "←  →" },
        title: { ko: "적용 방향", en: "Direction arrows" },
        meaning: { ko: "왼쪽·오른쪽 화살표는 표지 기둥에서 그 방향 구간에 적용됩니다. 양방향 화살표면 양쪽 모두입니다.", en: "A left or right arrow applies from the signpost in that direction; two arrows apply on both sides." },
        check: { ko: "내 차 앞뒤의 다음 표지판까지 같은 제한이 이어질 수 있습니다.", en: "The same restriction may continue until the next sign in that direction." },
      },
      {
        kind: "paid", signText: { ko: "P · ZONE 2598", en: "P · ZONE 2598" },
        title: { ko: "유료·번호 등록", en: "Paid or plate-registered parking" },
        meaning: { ko: "표지의 Zone 번호와 차량 번호판으로 결제 또는 무료 등록을 시작합니다.", en: "Use the posted zone number and your licence plate to pay or start a required free registration." },
        check: { ko: "결제했어도 No Stopping, 시간 제한과 허가 조건은 그대로 적용됩니다.", en: "Payment does not override No Stopping, time limits or permit restrictions." },
      },
      {
        kind: "loading", signText: { ko: "LOADING · 20 MIN", en: "LOADING · 20 MIN" },
        title: { ko: "승객·물품 적재구역", en: "Passenger or loading zone" },
        meaning: { ko: "표지에 허용된 대상만 적극적으로 승하차·적재하는 동안 사용할 수 있으며 최대시간을 넘길 수 없습니다.", en: "Only the posted users may actively load or unload, and the posted maximum cannot be exceeded." },
        check: { ko: "Public, Passenger, Commercial처럼 대상이 서로 다릅니다.", en: "Public, Passenger and Commercial zones serve different users." },
      },
      {
        kind: "permit", signText: { ko: "EXCEPT BY PERMIT", en: "EXCEPT BY PERMIT" },
        title: { ko: "거주자·구역 허가", en: "Residential or zone permit" },
        meaning: { ko: "표시된 시간에는 해당 구역의 유효한 허가 차량만 주차할 수 있습니다.", en: "During posted hours, only vehicles with the valid permit for that zone may park." },
        check: { ko: "방문자 허가도 구역 문자·번호와 유효시간이 맞아야 합니다.", en: "Visitor permits must match the zone and valid period." },
      },
      {
        kind: "accessible", signText: { ko: "ACCESSIBLE", en: "ACCESSIBLE" },
        title: { ko: "장애인 전용", en: "Accessible parking" },
        meaning: { ko: "유효한 장애인 주차 표지판 또는 번호판을 표시한 차량만 이용할 수 있습니다.", en: "Only a vehicle displaying a valid accessible placard or plate may use the space." },
        check: { ko: "사선 접근통로도 주차공간의 일부이므로 침범하면 안 됩니다.", en: "The striped access aisle is part of the space and must remain clear." },
      },
      {
        kind: "reserved", signText: { ko: "BUS · TAXI · FIRE", en: "BUS · TAXI · FIRE" },
        title: { ko: "버스·택시·소방 전용", en: "Bus, taxi and fire zones" },
        meaning: { ko: "표지에 적힌 허가 차량 외에는 정차하거나 주차할 수 없습니다.", en: "Vehicles other than the class named on the sign may not stop or park." },
        check: { ko: "승객을 잠깐 내리는 목적도 허용되지 않을 수 있습니다.", en: "Even a quick passenger drop-off may be prohibited." },
      },
      {
        kind: "snow-route", signText: { ko: "SNOW ROUTE · WHEN DECLARED", en: "SNOW ROUTE · WHEN DECLARED" },
        title: { ko: "제설·임시 주차금지", en: "Snow route or temporary ban" },
        meaning: { ko: "도시가 금지를 발령했거나 임시 표지에 적힌 날짜·시간이 되면 평소 주차 가능 구간도 비워야 합니다.", en: "When the city declares a ban or a temporary sign's date begins, an otherwise legal space must be cleared." },
        check: { ko: "도로가 한 번 제설됐어도 도시가 해제를 발표하기 전에는 돌아오지 않습니다.", en: "Do not return merely because the road was plowed once; wait until the city lifts the ban." },
      },
    ],
    keywords: ["스트릿파킹", "스트리트 파킹", "주차표지판", "정차금지", "적재구역", "permit", "no parking", "no stopping", "paid parking"], sourceUrl: guideSource, sourceKinds: ["guide", "municipal"],
  },
  {
    id: "hill-snow-parking", chapterId: "parking", visual: "hill",
    title: { ko: "언덕 주차와 겨울 주차금지", en: "Hill parking and winter bans" },
    summary: { ko: "언덕에서는 차량이 굴러가도 교통 쪽으로 향하지 않게 바퀴 방향을 정하고, 겨울에는 도시 제설 알림을 확인합니다.", en: "On hills, turn wheels so a rolling vehicle moves away from traffic, and check municipal snow-ban notices in winter." },
    takeaway: { ko: "오르막+연석은 왼쪽, 그 외 오른쪽. 항상 주차브레이크를 사용하세요.", en: "Uphill with a curb: wheels left. Otherwise: right. Always set the parking brake." },
    steps: {
      ko: ["오르막이며 연석이 있으면 앞바퀴를 왼쪽으로 돌립니다.", "오르막이며 연석이 없으면 앞바퀴를 오른쪽으로 돌립니다.", "내리막은 연석 유무와 관계없이 오른쪽으로 돌립니다.", "변속기를 P 또는 저단에 두고 주차브레이크를 겁니다."],
      en: ["Uphill with a curb: turn the front wheels left.", "Uphill without a curb: turn them right.", "Downhill: turn them right whether or not there is a curb.", "Select Park or low gear and set the parking brake."],
    },
    caution: { ko: "도로가 이미 제설된 것처럼 보여도 공식적으로 금지가 해제되기 전에는 다시 주차하지 마세요.", en: "Do not re-park merely because the road looks plowed; wait until the ban is officially cleared." },
    cities: {
      calgary: { ko: "Calgary는 지정 Snow Route 주차금지가 발령되면 최대 72시간 이어질 수 있습니다.", en: "Calgary snow-route bans can remain in effect for up to 72 hours." },
      edmonton: { ko: "Edmonton은 주요도로 Phase 1과 주거지역 Phase 2로 나눠 운영합니다.", en: "Edmonton uses Phase 1 for major routes and Phase 2 for residential areas." },
    },
    keywords: ["언덕주차", "바퀴", "제설", "snow route", "parking ban", "hill parking"], sourceUrl: guideSource, sourceKinds: ["guide", "municipal"],
  },
  {
    id: "highway-merge", chapterId: "winter", visual: "merge",
    title: { ko: "고속도로 합류", en: "Merging onto a highway" },
    summary: { ko: "가속차선에서 본선 속도에 맞춘 뒤 충분한 간격으로 부드럽게 합류합니다.", en: "Use the acceleration lane to match highway speed, then merge smoothly into a safe gap." },
    takeaway: { ko: "합류차선 끝에서 멈추지 말고, 일찍 간격을 찾으며 속도를 맞추세요.", en: "Do not stop at the end of the merge lane; find a gap early and match speed." },
    steps: {
      ko: ["램프에서 본선 교통 흐름과 간격을 관찰합니다.", "가속차선에서 도로 조건이 허용하는 범위 내 본선 속도에 맞춥니다.", "미러·방향지시등·왼쪽 숄더 체크를 합니다.", "앞이나 뒤의 안전한 간격으로 진입하고 방향지시등을 끕니다."],
      en: ["Observe highway flow and gaps while on the ramp.", "Use the acceleration lane to match traffic speed within legal and safe limits.", "Check mirrors, signal and shoulder-check left.", "Move into a safe gap ahead or behind and cancel the signal."],
    },
    caution: { ko: "본선 차량이 반드시 차선을 바꿔줄 것이라고 기대하지 마세요. 합류 차량이 안전하게 진입할 책임이 있습니다.", en: "Do not assume highway traffic will change lanes for you; the merging driver must enter safely." },
    keywords: ["합류", "고속도로", "가속", "merge", "freeway", "acceleration lane"], sourceUrl: guideSource,
  },
  {
    id: "black-ice", chapterId: "winter", visual: "ice",
    title: { ko: "블랙아이스와 눈길", en: "Black ice and snow" },
    summary: { ko: "검고 반짝이는 노면, 교량, 그늘진 곳은 보이지 않는 결빙 가능성이 큽니다.", en: "Dark shiny pavement, bridges and shaded areas may hide nearly invisible ice." },
    takeaway: { ko: "급제동·급가속·큰 조향을 피하고, 미리 속도와 차간거리를 조절하세요.", en: "Avoid sudden braking, acceleration and steering; reduce speed and increase space early." },
    steps: {
      ko: ["기온과 노면 광택, 앞 차량 움직임을 관찰합니다.", "가속페달에서 부드럽게 발을 떼어 속도를 줄입니다.", "평소보다 훨씬 긴 차간거리를 둡니다.", "미끄러지면 브레이크를 밟지 말고 가고 싶은 방향을 보며 조향합니다."],
      en: ["Watch temperature, pavement shine and vehicles ahead.", "Ease off the accelerator to reduce speed smoothly.", "Leave much more following distance than usual.", "If skidding, avoid braking and look/steer where you want the vehicle to go."],
    },
    caution: { ko: "노면이 나쁠 때 크루즈 컨트롤을 사용하지 마세요.", en: "Do not use cruise control when road and weather conditions are poor." },
    keywords: ["블랙아이스", "빙판", "눈길", "미끄러짐", "black ice", "skid", "winter"], sourceUrl: guideSource,
  },
  {
    id: "snowplow", chapterId: "winter", visual: "plow",
    title: { ko: "제설차 주변 운전", en: "Driving around snowplows" },
    summary: { ko: "제설차 뒤 눈구름은 시야를 가리고 모래와 돌이 튈 수 있으므로 충분히 멀리 떨어집니다.", en: "A snowplow's snow cloud blocks visibility and its sanding unit can throw debris, so stay well back." },
    takeaway: { ko: "추월하려 애쓰기보다 제설차가 안전한 곳에서 비켜줄 때까지 기다리는 편이 안전합니다.", en: "It is safer to wait until the operator pulls over than to force a pass." },
    steps: {
      ko: ["차량 뒤에 표시된 최소 안전거리를 지킵니다.", "눈구름 때문에 전방이 보이지 않으면 더 멀리 떨어집니다.", "도로표시와 맞은편 시야가 모두 확보될 때만 추월 가능 여부를 판단합니다.", "맞은편 제설차 옆으로 추월해 오는 차량도 예상합니다."],
      en: ["Follow the minimum distance shown on the vehicle.", "Drop farther back when the snow cloud obscures your view.", "Consider passing only with legal markings and a fully clear opposing view.", "Expect another driver may be passing an oncoming snowplow in your lane."],
    },
    caution: { ko: "시야가 가려졌거나 제설 작업을 방해하거나 안전하게 완료할 수 없다면 추월은 금지됩니다.", en: "Passing is prohibited when visibility is obstructed, operations would be impeded or it cannot be completed safely." },
    keywords: ["제설차", "snowplow", "추월", "눈구름", "snow plow"], sourceUrl: "https://www.alberta.ca/driving-safely-around-snowplows", sourceKinds: ["alberta"],
  },
  {
    id: "school-bus", chapterId: "emergency", visual: "bus",
    title: { ko: "스쿨버스 점멸등", en: "School-bus flashing lights" },
    summary: { ko: "빨간 점멸등과 STOP 팔이 펼쳐진 스쿨버스에는 약 20m 떨어져 정지합니다.", en: "Stop about 20 m away when a school bus displays alternating red lights and its STOP arm." },
    takeaway: { ko: "중앙분리대가 없는 도로에서는 앞뒤 어느 방향에서 오든 모든 차로가 정지합니다.", en: "On an undivided road, traffic in every lane and both directions must stop." },
    steps: {
      ko: ["황색 점멸등이 보이면 정지할 준비를 합니다.", "빨간 점멸등이 켜지면 버스에서 약 20m 떨어져 완전히 멈춥니다.", "빨간불이 꺼지고 STOP 팔이 접힐 때까지 기다립니다.", "출발 전 주변 어린이와 뒤따르는 다른 스쿨버스를 다시 확인합니다."],
      en: ["Prepare to stop when alternating amber lights begin flashing.", "On red flashes, stop completely about 20 m from the bus.", "Wait until the red lights are off and the STOP arm retracts.", "Before moving, check for children and any additional school bus."],
    },
    caution: { ko: "중앙분리대가 있는 도로에서는 버스 뒤쪽 동일 방향 차량만 정지하며 반대편은 보행자를 살피며 진행할 수 있습니다.", en: "On a divided highway, vehicles behind the bus stop; opposing traffic may proceed cautiously while watching for pedestrians." },
    keywords: ["스쿨버스", "빨간불", "20미터", "school bus", "red lights", "stop arm"], sourceUrl: guideSource,
  },
  {
    id: "emergency-vehicles", chapterId: "emergency", visual: "siren",
    title: { ko: "사이렌과 정차한 긴급차량", en: "Sirens and stopped emergency vehicles" },
    summary: { ko: "접근하는 긴급차량에는 길을 비켜 정지하고, 도로변 정차 차량 옆 차로에서는 감속합니다.", en: "Pull over and stop for an approaching emergency vehicle; slow down beside a stopped response vehicle." },
    takeaway: { ko: "양방향 도로에서는 오른쪽 가장자리, 일방통행에서는 가장 가까운 가장자리로 이동해 정지합니다.", en: "Move to the right edge on a two-way road, or the nearest edge on a one-way road, and stop." },
    steps: {
      ko: ["급정지하지 말고 미러로 주변 차량을 먼저 확인합니다.", "안전하게 도로 가장자리로 이동해 긴급차량이 지나갈 때까지 정지합니다.", "다른 긴급차량이 뒤따르는지 확인합니다.", "정차한 긴급차량·견인차 바로 옆 차로는 60km/h 또는 표지속도 중 낮은 속도로 통과합니다."],
      en: ["Check mirrors before moving; do not panic-stop.", "Move safely to the road edge and stop until the vehicle passes.", "Check for additional emergency vehicles.", "In the lane beside a stopped emergency vehicle or tow truck, travel at 60 km/h or the posted limit, whichever is lower."],
    },
    caution: { ko: "작동 중인 긴급차량 뒤에는 최소 150m 거리를 유지하세요.", en: "Maintain at least 150 m behind an emergency vehicle with its siren or lights operating." },
    keywords: ["사이렌", "구급차", "경찰차", "소방차", "긴급차량", "siren", "ambulance", "move over"], sourceUrl: guideSource,
  },
  {
    id: "collision", chapterId: "emergency", visual: "collision",
    title: { ko: "교통사고가 났을 때", en: "After a collision" },
    summary: { ko: "먼저 사람과 2차 사고 위험을 확인하고, 기록·신고·보험 순서로 대응합니다.", en: "Protect people and prevent a second collision first, then document, report and contact insurance." },
    takeaway: { ko: "부상·사망 또는 합산 피해 5,000달러 이상이면 경찰 신고가 필요합니다.", en: "Police reporting is required for injury, death or combined property damage of $5,000 or more." },
    steps: {
      ko: ["비상등을 켜고 가능한 경우 안전한 곳으로 이동합니다.", "부상자가 있거나 즉각적인 위험이면 911에 연락합니다.", "운전자·보험·차량정보와 목격자 연락처를 교환하고 사진을 찍습니다.", "과실을 단정하거나 현장에서 합의하지 말고 보험사에 연락합니다."],
      en: ["Turn on hazards and move to a safe location when appropriate.", "Call 911 for injuries or immediate danger.", "Exchange driver, insurance and vehicle details; record witnesses and photos.", "Do not admit fault or settle at the scene; contact your insurer."],
    },
    caution: { ko: "고속도로에서 직접 수리하거나 차량 뒤에 서 있지 마세요. 안전한 장소에서 도움을 기다립니다.", en: "Do not attempt roadside repairs or stand behind the vehicle on a fast highway. Wait in a safe location." },
    keywords: ["사고", "고장", "견인", "5000", "보험", "collision", "breakdown", "towing", "tow truck"],
    sourceUrl: "https://www.alberta.ca/automobile-collisions-insurance",
  },
  {
    id: "breakdown", chapterId: "emergency", visual: "collision",
    title: { ko: "차가 고장 났을 때", en: "When your car breaks down" },
    summary: { ko: "가능하면 교통에서 벗어난 안전한 장소로 이동하고, 빠른 도로에서는 직접 수리하지 않습니다.", en: "Move out of traffic when possible and do not attempt repairs beside a fast-moving highway." },
    takeaway: { ko: "비상등을 켜고 차량 뒤가 아닌 교통에서 멀리 떨어진 안전한 곳에서 도움을 기다리세요.", en: "Use hazard lights and wait away from traffic, not directly behind the vehicle." },
    steps: {
      ko: ["차선을 안전하게 바꿔 갓길이나 안전한 장소에 정차합니다.", "비상등을 켜고, 위험한 위치라면 탑승자 모두 안전한 곳으로 이동합니다.", "안전하게 할 수 있을 때만 반사 삼각대를 차량 뒤 10~20m 간격으로 둡니다.", "보험사 또는 로드사이드 서비스에 현재 도로·방향·가까운 출구를 알려줍니다."],
      en: ["Change lanes safely and stop on the shoulder or another safe location.", "Turn on hazards and move occupants to a safe place if the location is dangerous.", "Only when safe, place reflective triangles 10–20 m apart behind the vehicle.", "Tell roadside assistance the road, direction and nearest exit or landmark."],
    },
    caution: { ko: "교량이나 터널에 멈추지 말고, 혼잡하거나 빠른 고속도로 옆에서 수리하지 마세요.", en: "Do not stop on a bridge or in a tunnel, and do not make repairs beside crowded or fast traffic." },
    keywords: ["고장", "펑크", "배터리", "갓길", "breakdown", "flat tire", "roadside"], sourceUrl: guideSource,
  },
  {
    id: "towing", chapterId: "emergency", visual: "parking",
    title: { ko: "차가 견인됐을 때", en: "When your car is towed" },
    summary: { ko: "사고 견인인지 주차단속 견인인지 먼저 확인하고, 차량 위치·비용·필요서류를 확인합니다.", en: "First determine whether it was a collision tow or an enforcement tow, then confirm location, costs and required documents." },
    takeaway: { ko: "내가 요청하는 일반 견인은 목적지와 항목별 비용에 동의한 뒤 기록을 보관하세요.", en: "For a consumer-requested tow, agree to the destination and itemized costs and keep the record." },
    steps: {
      ko: ["차량이 없어진 위치의 표지판과 주변을 사진으로 남깁니다.", "도시 311·주차기관 또는 경찰 비긴급 번호로 견인 여부와 보관소를 확인합니다.", "면허증, 차량등록증, 보험증서와 결제수단을 준비합니다.", "인수 전 차량 상태와 청구내역을 확인하고 영수증을 보관합니다."],
      en: ["Photograph signs and the area where the vehicle was parked.", "Contact municipal 311, parking authority or police non-emergency to confirm the tow and lot.", "Bring your licence, registration, insurance and a payment method.", "Inspect the vehicle and invoice before release and keep the receipt."],
    },
    caution: { ko: "2026년 Alberta 견인·보관 소비자 보호 규정은 경찰·지자체·사유지 소유자가 지시한 견인 등에 예외가 있습니다.", en: "Alberta's 2026 towing consumer protections have exceptions for tows directed by law enforcement, municipalities or private-property owners." },
    cities: {
      edmonton: { ko: "Edmonton은 일반 주차단속 견인은 311에 문의하고, 겨울 금지 견인은 Find Your Vehicle 조회를 제공합니다.", en: "For Edmonton parking-enforcement tows, contact 311; winter-ban tows also have a Find Your Vehicle lookup." },
      calgary: { ko: "Calgary의 주차단속·Snow Route 견인은 Calgary Parking에서 확인합니다.", en: "Check Calgary Parking for enforcement and snow-route tows." },
    },
    keywords: ["견인", "토잉", "보관소", "impound", "towing", "towed", "tow truck"], sourceUrl: "https://www.alberta.ca/vehicle-towing-and-storage-regulation", sourceKinds: ["alberta", "municipal", "practical"],
  },
];

articles.push(...expandedArticles);

// Keep the public guide focused on enforceable rules, legal duties and Alberta-specific systems.
const generalDrivingAdvice = new Set([
  "shoulder-check",
  "highway-merge",
  "black-ice",
  "emergency-braking-skids",
  "visibility-hydroplaning",
  "emergency-kit-animals",
  "heavy-log-trucks",
]);

for (let index = articles.length - 1; index >= 0; index -= 1) {
  if (generalDrivingAdvice.has(articles[index].id)) articles.splice(index, 1);
}

export const quickTopics = [
  { articleId: "unprotected-left", ko: "비보호 좌회전", en: "Unprotected left turn" },
  { articleId: "four-way-stop", ko: "4-way stop 순서", en: "4-way stop order" },
  { articleId: "street-parking-signs", ko: "스트리트 파킹", en: "Street parking" },
  { articleId: "school-bus", ko: "스쿨버스 빨간불", en: "School bus red lights" },
  { articleId: "emergency-vehicles", ko: "사이렌이 들릴 때", en: "When you hear a siren" },
  { articleId: "towing", ko: "차가 견인됐어요", en: "My car was towed" },
  { articleId: "driver-side-mirror", ko: "운전석 미러가 낯설어요", en: "The driver's mirror feels odd" },
  { articleId: "block-heater", ko: "블록히터 사용법", en: "Using a block heater" },
  { articleId: "alberta-auto-insurance", ko: "알버타 자동차 보험", en: "Alberta auto insurance" },
];
