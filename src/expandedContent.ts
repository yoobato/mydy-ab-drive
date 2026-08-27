import type { Article } from "./content";

const GUIDE_URL = "https://www.alberta.ca/driver-guides-overview-and-pdf-versions";
const DISTRACTED_URL = "https://www.alberta.ca/distracted-driving";
const RESTRAINT_URL = "https://www.alberta.ca/occupant-restraint-laws";
const IMPAIRED_URL = "https://www.alberta.ca/impaired-driving-penalties";
const MIRROR_URL = "https://laws-lois.justice.gc.ca/eng/regulations/c.r.c.%2C_c._1038/FullText.html?wbdisable=true";
const BLOCK_HEATER_URL = "https://ucahelps.alberta.ca/learning-hub/tips/tips-to-save-money-on-utility-bills/";
const INSURANCE_URL = "https://www.alberta.ca/automobile-insurance";

export const expandedArticles: Article[] = [
  {
    id: "pedestrian-signals-zones", chapterId: "signs", visual: "pedestrian",
    title: { ko: "보행자 신호와 횡단구역", en: "Pedestrian signals and crossings" },
    summary: { ko: "WALK·DON'T WALK 신호와 황색 점멸 횡단표지는 보행자의 움직임을 미리 알려줍니다.", en: "WALK, DON'T WALK and flashing pedestrian signs help you anticipate people entering the road." },
    takeaway: { ko: "표시가 없는 교차로에도 횡단보도가 있을 수 있습니다. 사람이 건너려 하면 정지하세요.", en: "A crosswalk may be unmarked. Stop when a pedestrian is crossing or clearly intends to cross." },
    steps: {
      ko: ["WALK 신호가 켜지면 회전하기 전 횡단보도 양쪽을 확인합니다.", "DON'T WALK가 켜져도 이미 건너기 시작한 사람은 끝까지 건널 수 있게 기다립니다.", "황색 보행자 신호가 점멸하면 최대 30km/h로 감속하고 보행자에게 양보합니다."],
      en: ["When WALK appears, scan both ends of the crosswalk before turning.", "People already crossing may finish after DON'T WALK appears; keep yielding.", "At a flashing yellow pedestrian signal, slow to no more than 30 km/h and yield."],
    },
    caution: { ko: "옆 차로 차량이 횡단보도 앞에서 멈췄다면 추월하지 마세요. 보행자가 가려져 있을 수 있습니다.", en: "Never pass a vehicle stopped at a crosswalk; it may be hiding a pedestrian." },
    keywords: ["보행자", "횡단보도", "walk", "don't walk", "pedestrian", "crosswalk", "30km"], sourceUrl: GUIDE_URL,
  },
  {
    id: "lane-signals-markings", chapterId: "signs", visual: "sign",
    title: { ko: "차로 신호와 노면 표시", en: "Lane signals and pavement markings" },
    summary: { ko: "노란선은 반대 방향, 흰선은 같은 방향의 흐름을 나누며 실선과 점선이 차로 변경 가능 여부를 알려줍니다.", en: "Yellow separates opposing traffic, white separates traffic moving together, and solid or broken lines control crossing." },
    takeaway: { ko: "내 쪽이 실선이면 넘지 말고, 머리 위 빨간 X 차로에서는 즉시 안전하게 빠져나오세요.", en: "Do not cross a solid line on your side, and leave a lane showing a red X as soon as safely possible." },
    steps: {
      ko: ["점선은 안전할 때 차로 변경 또는 추월이 가능하다는 뜻입니다.", "실선+점선 조합에서는 점선이 있는 쪽 차량만 선을 넘을 수 있습니다.", "가역차로의 초록 화살표는 이용 가능, 빨간 X는 진입·계속 주행 금지입니다."],
      en: ["A broken line permits crossing only when it is safe and otherwise legal.", "With one solid and one broken line, only traffic beside the broken line may cross.", "A green arrow opens a reversible lane; a red X means do not enter or remain."],
    },
    caution: { ko: "노면 표시가 허용해도 교차로·언덕·곡선처럼 시야가 부족하면 추월하면 안 됩니다.", en: "A permissive line does not make a pass safe at an intersection, hill or blind curve." },
    keywords: ["노란선", "흰선", "실선", "점선", "가역차로", "red x", "lane marking"], sourceUrl: GUIDE_URL,
  },
  {
    id: "construction-control", chapterId: "signs", visual: "sign",
    title: { ko: "공사구간과 통제요원", en: "Construction zones and flag persons" },
    summary: { ko: "주황색 표지와 통제요원의 지시는 임시 도로 상태를 안내하며 평소 차선보다 우선합니다.", en: "Orange signs and flag-person directions describe temporary conditions and override the normal lane pattern." },
    takeaway: { ko: "작업자가 보이지 않아도 공사구간 제한속도와 임시 표지를 계속 따르세요.", en: "Construction limits and temporary signs still apply even when workers are not visible." },
    steps: {
      ko: ["주황색 표지가 보이면 차간거리를 늘리고 감속할 준비를 합니다.", "통제요원의 STOP/SLOW 표지와 손짓을 신호등처럼 따릅니다.", "차로가 합쳐지면 방향지시등을 켜고 번갈아 안전하게 합류합니다."],
      en: ["Increase following distance and prepare to slow when orange signs appear.", "Treat a flag person's STOP/SLOW paddle and directions like traffic control.", "When lanes narrow, signal and merge cooperatively without forcing a gap."],
    },
    caution: { ko: "새 포장, 자갈, 단차는 작업이 멈춘 시간에도 남아 있을 수 있습니다.", en: "Fresh pavement, loose gravel and abrupt edges can remain after work stops." },
    keywords: ["공사", "주황색", "통제요원", "flag person", "construction", "detour"], sourceUrl: GUIDE_URL,
  },
  {
    id: "uncontrolled-intersections", chapterId: "intersections", visual: "intersection",
    title: { ko: "무신호 교차로 우선순위", en: "Uncontrolled intersection priority" },
    summary: { ko: "신호와 표지판이 없는 교차로에서는 속도를 낮추고 오른쪽에서 오는 차량에 양보합니다.", en: "At an intersection without signs or signals, slow down and yield to a vehicle approaching from your right." },
    takeaway: { ko: "내가 먼저 보였다는 이유로 우선권이 생기지 않습니다. 오른쪽과 보행자를 먼저 확인하세요.", en: "Seeing the intersection first does not grant priority. Check your right and every crosswalk." },
    steps: {
      ko: ["가속페달에서 발을 떼고 언제든 멈출 수 있는 속도로 접근합니다.", "좌우 차량, 자전거와 표시되지 않은 횡단보도를 확인합니다.", "동시에 접근하면 오른쪽 차량을 먼저 보내고 예측 가능하게 진행합니다."],
      en: ["Ease off and approach at a speed that lets you stop easily.", "Scan traffic, cyclists and unmarked crosswalks in both directions.", "If arrivals are simultaneous, yield to the driver on your right and proceed predictably."],
    },
    caution: { ko: "주차 차량·울타리·눈더미가 시야를 가리면 교차로 바로 앞에서 다시 확인하세요.", en: "Parked cars, fences and snowbanks can hide traffic; check again near the edge." },
    keywords: ["무신호", "오른쪽 우선", "uncontrolled intersection", "right of way", "교차로"], sourceUrl: GUIDE_URL,
  },
  {
    id: "roundabouts", chapterId: "intersections", visual: "roundabout",
    title: { ko: "라운드어바웃과 로터리", en: "Roundabouts and traffic circles" },
    summary: { ko: "진입 차량이 이미 원 안을 반시계 방향으로 도는 차량에 양보합니다.", en: "Entering traffic yields to vehicles already circulating counterclockwise." },
    takeaway: { ko: "들어가기 전에 차로를 고르고, 안에서는 차로를 바꾸지 말고, 나갈 때 오른쪽 신호를 켜세요.", en: "Choose your lane before entry, stay in it, and signal right before your exit." },
    steps: {
      ko: ["표지와 노면 화살표로 목적 출구에 맞는 진입 차로를 선택합니다.", "왼쪽에서 오는 원내 차량과 입구 횡단보도에 양보합니다.", "원 안에서는 속도와 차로를 유지하고 직전 출구를 지난 뒤 오른쪽 신호를 켭니다."],
      en: ["Use signs and arrows to choose the correct lane for your exit.", "Yield to circulating traffic from the left and to people at the entry crosswalk.", "Hold your lane and signal right after passing the exit before yours."],
    },
    caution: { ko: "다차로 라운드어바웃 안에서 출구를 놓쳤다면 갑자기 가로지르지 말고 한 바퀴 더 도세요.", en: "If you miss an exit in a multi-lane circle, do not cut across; continue safely around." },
    keywords: ["라운드어바웃", "로터리", "원형교차로", "roundabout", "traffic circle"], sourceUrl: GUIDE_URL,
  },
  {
    id: "dual-turn-lanes", chapterId: "intersections", visual: "turn",
    title: { ko: "다중 회전차로", en: "Dual and multiple turn lanes" },
    summary: { ko: "두 개 이상의 회전차로에서는 출발한 차로와 대응하는 차로로 회전을 끝냅니다.", en: "With two or more turn lanes, finish in the lane corresponding to the one you started from." },
    takeaway: { ko: "회전 중 차선을 넘지 말고 회전이 완전히 끝난 뒤 별도로 차로를 변경하세요.", en: "Do not drift during the turn; complete it before making a separate lane change." },
    steps: {
      ko: ["교차로 전 표지와 노면 화살표로 내 차로의 도착 차로를 확인합니다.", "옆 차량이 넓게 돌 수 있다고 예상하고 나란히 간격을 유지합니다.", "대응 차로에 진입해 차를 곧게 한 뒤 필요하면 다시 신호를 켜고 변경합니다."],
      en: ["Read lane signs and arrows before the intersection to identify your receiving lane.", "Expect the vehicle beside you may swing wide and preserve side space.", "Straighten in the matching lane, then signal again for any later lane change."],
    },
    caution: { ko: "회전차로가 마지막에 하나로 합쳐지는 경우에는 노면 표시 순서에 따라 안전하게 합류하세요.", en: "Where turn lanes merge after the corner, follow the markings and merge safely." },
    keywords: ["이중 좌회전", "다중 회전", "dual turn", "turning lane", "차선"], sourceUrl: GUIDE_URL,
  },
  {
    id: "highway-lanes-passing", chapterId: "winter", visual: "highway",
    title: { ko: "고속도로 차로와 추월", en: "Highway lanes and passing" },
    summary: { ko: "다차로 도로에서는 느린 차량이 오른쪽을 이용하고 왼쪽 차로는 주로 추월에 사용합니다.", en: "On multi-lane highways, slower traffic keeps right and the left lane is mainly used for passing." },
    takeaway: { ko: "추월 중에도 제한속도를 넘을 수 없고, 확신이 조금이라도 없으면 기다리는 것이 맞습니다.", en: "The speed limit still applies while passing; if there is doubt, wait." },
    steps: {
      ko: ["미러와 왼쪽 사각지대를 확인하고 충분히 일찍 신호를 켭니다.", "맞은편 차로 추월은 점선·시야·복귀 공간이 모두 충분할 때만 합니다.", "추월한 차량이 룸미러에 완전히 보인 뒤 오른쪽을 확인하고 복귀합니다."],
      en: ["Check mirrors and the left blind spot, then signal early.", "On a two-lane road, pass only with legal markings, clear sight distance and room to return.", "Return right only after the passed vehicle is fully visible in your inside mirror."],
    },
    caution: { ko: "언덕·곡선·횡단보도·스쿨존 또는 스쿨버스 적색 점멸 상황에서는 추월하지 마세요.", en: "Do not pass at blind hills, curves, crosswalks, active school zones or a bus showing red lights." },
    keywords: ["추월", "왼쪽 차로", "고속도로", "passing", "keep right", "two lane highway"], sourceUrl: GUIDE_URL,
  },
  {
    id: "highway-exits-shoulder", chapterId: "winter", visual: "merge",
    title: { ko: "고속도로 정지·후진·갓길 주행 금지", en: "No stopping, reversing or shoulder driving" },
    summary: { ko: "출구를 놓쳤다는 이유로 고속도로·비상정차 차로·갓길에 멈추거나 후진할 수 없고, 갓길은 일반 주행차로가 아닙니다.", en: "Missing an exit does not permit stopping or reversing on a highway, emergency stopping lane or shoulder, and the shoulder is not a travel lane." },
    takeaway: { ko: "출구를 놓치면 다음 출구로 가세요. 고장 같은 실제 비상상황이 아니면 갓길에 들어가지 마세요.", en: "If you miss an exit, take the next one. Do not enter the shoulder without a real emergency such as a breakdown." },
    steps: {
      ko: ["고속도로 본선, 비상정차 차로 또는 갓길에서 경로를 되돌리기 위해 정지·후진하지 않습니다.", "교통체증을 우회하거나 다른 차량을 추월하기 위해 갓길로 주행하지 않습니다.", "실제 고장·긴급상황이면 차량을 주행차로 밖으로 최대한 빼고 비상등을 켭니다."],
      en: ["Do not stop or reverse on the highway, emergency stopping lane or shoulder to recover a route.", "Do not drive on the shoulder to bypass congestion or pass another vehicle.", "For an actual breakdown or emergency, move as far outside the travel lane as possible and activate hazards."],
    },
    caution: { ko: "갓길로 주행하거나 다른 차량의 추월을 돕기 위해 갓길에 들어가면 안 됩니다.", en: "Do not drive on the shoulder or use it to help another vehicle pass." },
    keywords: ["출구", "감속차로", "갓길", "비상정차", "exit", "shoulder", "emergency lane"], sourceUrl: GUIDE_URL,
  },
  {
    id: "emergency-braking-skids", chapterId: "emergency", visual: "skid",
    title: { ko: "급제동과 미끄러짐 회복", en: "Emergency braking and skid recovery" },
    summary: { ko: "ABS 차량은 브레이크를 강하고 일정하게 밟고, 미끄러질 때는 가고 싶은 방향을 보며 조향합니다.", en: "With ABS, brake firmly and continuously; in a skid, look and steer where you want the vehicle to go." },
    takeaway: { ko: "ABS 진동은 정상 작동입니다. 페달을 펌핑하지 말고 큰 조향을 피하세요.", en: "ABS pedal vibration is normal. Do not pump the pedal or make large steering corrections." },
    steps: {
      ko: ["ABS 차량은 브레이크를 끝까지 단단히 유지하며 장애물을 피할 방향을 봅니다.", "ABS가 없고 바퀴가 잠기면 압력을 조금 풀어 조향을 회복한 뒤 다시 문턱제동합니다.", "차가 미끄러지면 브레이크·가속에서 발을 떼고 차 앞부분이 갈 방향을 부드럽게 조향합니다."],
      en: ["With ABS, hold firm pressure and look toward a safe escape path.", "Without ABS, ease pressure if wheels lock, regain steering, then threshold-brake again.", "During a skid, release brake and accelerator and gently steer the front where you want to go."],
    },
    caution: { ko: "차량마다 제동 시스템이 다를 수 있으니 소유자 설명서의 긴급제동 방법도 확인하세요.", en: "Braking systems vary; also check the emergency-braking instructions in the owner's manual." },
    keywords: ["급제동", "abs", "미끄러짐", "스키드", "emergency braking", "skid"], sourceUrl: GUIDE_URL,
  },
  {
    id: "visibility-hydroplaning", chapterId: "emergency", visual: "visibility",
    title: { ko: "안개·폭우·수막현상", en: "Fog, heavy rain and hydroplaning" },
    summary: { ko: "시야가 나쁘면 하향등을 사용하고, 수막현상이 생기면 급제동 대신 가속페달에서 부드럽게 발을 뗍니다.", en: "Use low beams in poor visibility and ease off the accelerator rather than braking hard during hydroplaning." },
    takeaway: { ko: "내 전조등이 비추는 거리 안에서 멈출 수 있는 속도로 달리세요.", en: "Drive slowly enough to stop within the distance illuminated by your headlights." },
    steps: {
      ko: ["안개·연기·폭우에서는 상향등 대신 하향등을 켜고 차간거리를 크게 늘립니다.", "수막현상 시 핸들을 곧게 유지하고 가속페달에서 서서히 발을 뗍니다.", "계속 주행할 수 없으면 도로에서 충분히 벗어난 안전한 장소에 정차하고 비상등을 켭니다."],
      en: ["Use low beams, not high beams, in fog, smoke or heavy rain and add following distance.", "If hydroplaning, hold a steady wheel and ease off the accelerator.", "If driving is no longer safe, stop well off the road and turn on hazard lights."],
    },
    caution: { ko: "비·눈·빙판처럼 접지력이 나쁜 상황에서는 크루즈 컨트롤을 사용하지 마세요.", en: "Do not use cruise control when rain, snow or ice reduces traction." },
    keywords: ["안개", "폭우", "수막", "하향등", "fog", "hydroplaning", "low beam"], sourceUrl: GUIDE_URL,
  },
  {
    id: "emergency-kit-animals", chapterId: "emergency", visual: "snow",
    title: { ko: "비상용품과 야생동물", en: "Emergency supplies and wildlife" },
    summary: { ko: "알버타의 장거리·겨울 운전에는 구조를 기다릴 장비와 야생동물 대응 준비가 필요합니다.", en: "Long-distance and winter driving in Alberta calls for supplies and a plan for wildlife hazards." },
    takeaway: { ko: "동물이 갑자기 나타나면 먼저 강하게 제동하고, 맞은편 차로로 급회피하지 마세요.", en: "If an animal appears, brake hard first and avoid swerving into opposing traffic." },
    steps: {
      ko: ["구급함, 반사 삼각대, 부스터 케이블, 손전등, 보온복·담요와 물을 준비합니다.", "해질녘과 새벽에는 도로 가장자리와 반사되는 눈을 계속 살핍니다.", "동물 한 마리가 보이면 뒤따르는 무리가 있을 수 있으므로 충분히 감속합니다."],
      en: ["Carry first aid, warning triangles, booster cables, a flashlight, warm clothing, blankets and water.", "At dawn and dusk, scan road edges and watch for reflected eyes.", "Slow well down after seeing one animal because others may follow."],
    },
    caution: { ko: "겨울에 고립됐고 차량이 안전한 곳에 있다면 일반적으로 차량과 함께 구조를 기다리는 편이 안전합니다.", en: "If stranded in winter and the vehicle is safely positioned, it is generally safer to remain with it." },
    keywords: ["비상용품", "야생동물", "사슴", "무스", "emergency kit", "wildlife", "moose"], sourceUrl: GUIDE_URL,
  },
  {
    id: "vulnerable-road-users", chapterId: "road-users", visual: "pedestrian",
    title: { ko: "보행자·자전거·오토바이", en: "Pedestrians, cyclists and motorcycles" },
    summary: { ko: "차체 보호가 없는 도로 이용자는 작게 보이고 사각지대에 쉽게 가려지므로 더 큰 공간이 필요합니다.", en: "Road users without a protective vehicle are easily hidden and need extra space." },
    takeaway: { ko: "차로를 공유할 때는 좁게 비집고 지나가지 말고 완전히 안전한 간격이 생길 때까지 기다리세요.", en: "Do not squeeze past; wait until you can provide a clearly safe passing gap." },
    steps: {
      ko: ["횡단보도에 사람이 들어왔거나 건널 의사를 표시하면 정지해 끝까지 양보합니다.", "자전거를 추월하기 전 맞은편 차량과 도로 폭을 확인하고 충분히 옆 공간을 둡니다.", "오토바이도 한 차로 전체를 사용할 권리가 있으므로 같은 차로 안에서 나란히 추월하지 않습니다."],
      en: ["Stop and yield fully when a pedestrian enters or clearly intends to use a crosswalk.", "Before passing a cyclist, check opposing traffic and leave generous lateral space.", "A motorcycle is entitled to a full lane; never pass beside one within the same lane."],
    },
    caution: { ko: "우회전 전 오른쪽 숄더 체크로 자전거와 전동 이동수단을 반드시 확인하세요.", en: "Before turning right, shoulder-check for cyclists and other small mobility devices." },
    keywords: ["보행자", "자전거", "오토바이", "pedestrian", "cyclist", "motorcycle", "crosswalk"], sourceUrl: GUIDE_URL,
  },
  {
    id: "heavy-log-trucks", chapterId: "road-users", visual: "truck",
    title: { ko: "대형트럭과 벌목차량", en: "Heavy trucks and log haulers" },
    summary: { ko: "대형차는 사각지대가 크고 회전 반경과 제동거리가 길며, 벌목차량의 적재물은 회전할 때 차로로 휘어 나올 수 있습니다.", en: "Large vehicles have major blind spots and long stopping distances; logs can swing across lanes during turns." },
    takeaway: { ko: "트럭의 미러에 운전자가 보이지 않으면 운전자도 내 차를 보기 어렵다고 생각하세요.", en: "If you cannot see the truck driver in a mirror, assume the driver cannot see you." },
    steps: {
      ko: ["트럭 앞에 합류할 때는 룸미러에 트럭 전면이 보일 만큼 충분한 간격을 확보합니다.", "우회전하는 트럭의 오른쪽 틈으로 들어가지 않고 넓게 도는 공간을 남깁니다.", "벌목차량이 좌·우회전할 때는 뒤쪽 통나무가 차로를 가로지를 수 있으므로 추월하지 않습니다."],
      en: ["Merge ahead only with enough space to see the truck's front in your inside mirror.", "Never enter the space on the right of a turning truck; it may need that room.", "Do not pass a log truck turning left or right because the logs can sweep across lanes."],
    },
    caution: { ko: "대형차 옆을 오래 달리지 말고 추월할 수 없다면 뒤쪽의 보이는 위치로 물러나세요.", en: "Do not linger beside a large vehicle; pass decisively or drop back where you are visible." },
    keywords: ["대형트럭", "벌목차", "사각지대", "truck", "log truck", "wide turn"], sourceUrl: GUIDE_URL,
  },
  {
    id: "railway-lrt", chapterId: "road-users", visual: "rail",
    title: { ko: "철도 건널목과 LRT", en: "Railway crossings and LRT" },
    summary: { ko: "열차는 급정지하거나 방향을 바꿀 수 없으므로 모든 차량과 보행자가 항상 양보해야 합니다.", en: "A train cannot stop or steer away quickly, so every road user must yield." },
    takeaway: { ko: "차단기가 올라가도 경보가 완전히 끝나고 모든 선로가 비었는지 확인한 뒤 건너세요.", en: "Even after a train passes, wait for warnings to end and verify every track is clear." },
    steps: {
      ko: ["적색등·종·차단기가 작동하면 가장 가까운 선로에서 최소 5m 떨어져 정지합니다.", "STOP 표지가 있는 철도 건널목에서는 가장 가까운 선로 5~15m 전에 완전 정지합니다.", "내 차량 전체가 반대편까지 빠져나갈 공간이 있을 때만 선로에 진입합니다."],
      en: ["When red lights, bells or gates activate, stop at least 5 m from the nearest rail.", "At a railway STOP sign, stop completely 5 to 15 m before the nearest rail.", "Enter only when your whole vehicle can clear every track."],
    },
    caution: { ko: "LRT 선로에서는 일반 신호와 별도의 열차 신호·차단기를 모두 확인하고 선로 위에서 대기하지 마세요.", en: "At LRT tracks, obey rail controls as well as traffic lights and never queue on the tracks." },
    keywords: ["철도", "기차", "lrt", "railway", "train", "crossing", "차단기"], sourceUrl: GUIDE_URL,
  },
  {
    id: "seatbelts-child-seats", chapterId: "law", visual: "seatbelt",
    title: { ko: "안전벨트와 어린이 카시트", en: "Seat belts and child restraints" },
    summary: { ko: "운전자와 승객은 적절한 보호장치를 사용해야 하며, 운전자는 16세 미만 승객의 착용을 책임집니다.", en: "Drivers and passengers must be properly restrained, and the driver is responsible for passengers under 16." },
    takeaway: { ko: "6세 미만이면서 18kg 이하인 어린이는 올바르게 설치한 어린이 보호장치가 법적으로 필요합니다.", en: "A child under 6 who weighs 18 kg or less legally requires a properly installed child restraint." },
    steps: {
      ko: ["차량과 카시트 설명서를 모두 따라 UAS 또는 안전벨트로 단단히 설치합니다.", "가능한 한 제조사 한계까지 후방보기 좌석을 사용하고 전방보기 좌석은 상단 테더를 연결합니다.", "모든 탑승자의 안전벨트가 목·배가 아닌 어깨·가슴과 골반을 지나도록 확인합니다."],
      en: ["Follow both manuals and secure the seat with UAS or the vehicle belt.", "Keep children rear-facing to the manufacturer's limit and attach the top tether when forward-facing.", "Check every belt crosses the shoulder/chest and hips rather than the neck or abdomen."],
    },
    caution: { ko: "캐나다 안전기준 라벨이 없는 해외용 카시트는 사용하지 마세요.", en: "Do not use a foreign child seat that lacks the required Canadian safety-standard label." },
    keywords: ["안전벨트", "카시트", "어린이", "seat belt", "child seat", "booster"], sourceUrl: RESTRAINT_URL, sourceKinds: ["guide", "alberta"],
  },
  {
    id: "distracted-fatigue", chapterId: "law", visual: "law",
    title: { ko: "주의산만 운전 금지", en: "Distracted-driving prohibitions" },
    summary: { ko: "손에 든 휴대폰·문자·GPS 입력·인쇄물 읽기·개인 정돈 등은 빨간불에 정차 중일 때도 금지됩니다.", en: "Hand-held phones, texting, GPS entry, reading and personal grooming are prohibited even while stopped at a red light." },
    takeaway: { ko: "차량이 합법적으로 주차된 뒤에만 기기를 손으로 조작하세요.", en: "Handle a device only after the vehicle is legally parked." },
    steps: {
      ko: ["손에 든 휴대폰 사용, 문자·이메일, GPS 정보 입력은 금지됩니다.", "노트북·카메라·영상기기 조작, 인쇄물 읽기와 글쓰기 역시 금지됩니다.", "화장·면도 등 개인 정돈도 운전 중 할 수 없습니다. 음성 또는 한 번의 터치로 작동하는 핸즈프리 허용 범위는 공식 안내를 확인합니다."],
      en: ["Hand-held phone use, texting, email and entering GPS information are prohibited.", "Operating laptops, cameras or video devices, reading print and writing are also prohibited.", "Personal grooming is prohibited; check the official guidance for permitted hands-free use activated by voice or a single touch."],
    },
    caution: { ko: "현재 알버타의 주의산만 운전 벌칙은 $390과 벌점 3점이며, 별도 교통위반이 있으면 추가 처벌될 수 있습니다.", en: "Alberta currently lists a $390 distracted-driving fine and 3 demerits; another moving violation can add a separate charge." },
    keywords: ["휴대폰", "문자", "gps", "주의산만", "distracted driving", "cell phone"], sourceUrl: DISTRACTED_URL, sourceKinds: ["alberta"],
  },
  {
    id: "impaired-demerits", chapterId: "law", visual: "law",
    title: { ko: "음주·약물 운전과 벌점", en: "Impairment and demerit points" },
    summary: { ko: "알코올·약물·처방약으로 안전운전 능력이 떨어지면 즉시 제재될 수 있으며 유죄 판결에는 벌점이 기록됩니다.", en: "Alcohol, drugs and some medication can trigger immediate sanctions, while convictions add demerit points." },
    takeaway: { ko: "조금이라도 영향을 받았다면 운전하지 말고 대체 교통수단을 미리 정하세요.", en: "If there is any impairment, do not drive; arrange another way home before drinking or using drugs." },
    steps: {
      ko: ["Class 7과 Class 5-GDL 운전자는 알코올·약물 제로 톨러런스 대상임을 기억합니다.", "처방약과 일반약도 졸림 경고가 있으면 약사나 의사에게 운전 가능 여부를 확인합니다.", "벌점은 정식 면허 15점 이상, GDL 8점 이상이 2년 내 쌓이면 자동 정지 대상입니다."],
      en: ["Remember that Class 7 and Class 5-GDL drivers are subject to zero tolerance.", "Ask a pharmacist or doctor before driving with medication that warns of drowsiness.", "Within two years, 15 points for a fully licensed driver or 8 for GDL triggers automatic suspension."],
    },
    caution: { ko: "제재 금액과 기간은 상황·측정치·재범 여부에 따라 크게 달라집니다. 실제 통지는 SafeRoads와 최신 법령을 따르세요.", en: "Sanctions vary by reading, circumstances and prior events. Follow the current notice, SafeRoads and legislation." },
    keywords: ["음주운전", "약물", "벌점", "면허정지", "impaired", "demerit", "suspension", "gdl"], sourceUrl: IMPAIRED_URL, sourceKinds: ["guide", "alberta"],
  },
  {
    id: "korea-vs-alberta", chapterId: "appendix", visual: "road",
    title: { ko: "한국 운전자라면 먼저 달라지는 것", en: "What feels different from driving in Korea" },
    summary: { ko: "우측통행·좌핸들·km/h는 익숙하지만, 완전 정지 문화와 스쿨버스, 독특한 신호, 넓은 차로와 긴 겨울은 새로운 습관을 요구합니다.", en: "Right-side traffic, left-hand-drive cars and km/h feel familiar, but complete stops, school buses, distinctive signals, wide roads and long winters require new habits." },
    takeaway: { ko: "차량 방향보다 ‘정지·양보를 눈에 보이게 하고, 겨울에는 훨씬 일찍 준비한다’는 차이가 더 큽니다.", en: "The biggest adjustment is not the side of the road: make every stop and yield obvious, and prepare much earlier for winter." },
    steps: {
      ko: ["STOP에서는 바퀴를 완전히 멈추고 4-way stop의 도착 순서를 확인합니다.", "빨간불 우회전·점멸 초록·스쿨버스 빨간불처럼 알버타 특유의 상황을 따로 익힙니다.", "운전석 평면 미러의 좁은 화각을 숄더 체크로 보완합니다.", "첫눈 전에 겨울타이어·워셔액·배터리와 블록히터 장착 여부를 확인합니다."],
      en: ["Bring the wheels to a complete stop and track arrival order at a 4-way stop.", "Learn Alberta-specific situations such as right on red, flashing green and school-bus red lights.", "Compensate for the narrower driver-side mirror with a shoulder check.", "Before the first snow, check winter tires, washer fluid, the battery and whether a block heater is fitted."],
    },
    caution: { ko: "도시별 기본속도·주차·제설 규정은 달라질 수 있습니다. 알버타 공통 원칙을 익힌 뒤 현재 도시 표지판과 공지를 다시 확인하세요.", en: "Default speeds, parking and snow rules can vary by city. Learn the Alberta-wide rules, then check local signs and notices." },
    keywords: ["한국 운전 차이", "캐나다 운전", "4-way stop", "스쿨버스", "겨울운전", "korea driving difference", "alberta"], sourceUrl: GUIDE_URL, sourceKinds: ["guide", "canada", "practical"],
  },
  {
    id: "driver-side-mirror", chapterId: "appendix", visual: "mirror",
    title: { ko: "한국과 다른 운전석 사이드미러", en: "Why the driver's mirror feels different" },
    summary: { ko: "캐나다 차량의 운전석 미러는 보통 평면에 가까워 한국의 넓은 화각 미러보다 물체가 크게 보이고 시야가 좁게 느껴질 수 있습니다.", en: "A Canadian driver's-side mirror is generally unit-magnification, so it can look larger and narrower than the wide-angle mirrors familiar in Korea." },
    takeaway: { ko: "고장이 아니라 미러 곡률 차이일 가능성이 큽니다. 운전석 미러의 좁은 화각만큼 숄더 체크가 더 중요합니다.", en: "It is likely a difference in mirror curvature, not a fault. The narrower view makes shoulder checks especially important." },
    steps: {
      ko: ["시트와 머리 위치를 먼저 고정한 뒤 미러를 조절합니다.", "차체는 미러 안쪽 끝에 아주 얇게만 보이도록 바깥쪽 시야를 넓힙니다.", "차선 변경 전 룸미러→사이드미러→방향지시등→숄더 체크 순서를 반복합니다."],
      en: ["Set your seat and normal head position before adjusting mirrors.", "Show only a thin sliver of the vehicle at the inner edge to widen the outward view.", "Repeat inside mirror → side mirror → signal → shoulder check before moving."],
    },
    caution: { ko: "조수석 미러는 볼록할 수 있어 물체가 실제보다 작고 멀게 보입니다. 양쪽 미러의 거리감이 서로 다를 수 있습니다.", en: "The passenger mirror may be convex, making objects look smaller and farther away; distance perception can differ by side." },
    keywords: ["운전석 미러", "사이드미러", "평면", "볼록", "driver mirror", "convex", "flat mirror"], sourceUrl: MIRROR_URL, sourceKinds: ["canada", "practical"],
  },
  {
    id: "block-heater", chapterId: "appendix", visual: "heater",
    title: { ko: "블록히터는 무엇인가요?", en: "What is a block heater?" },
    summary: { ko: "블록히터는 추운 날 시동 전에 엔진을 데워 냉간 시동 부담을 줄이는 전기 히터이며 모든 차량에 기본 장착되는 것은 아닙니다.", en: "A block heater electrically warms the engine before a cold start, but it is not standard on every vehicle." },
    takeaway: { ko: "그릴 안쪽 전원선을 찾기 전에 차량 설명서와 옵션 목록에서 장착 여부부터 확인하세요.", en: "Before searching for a cord near the grille, confirm installation in the owner's manual or equipment list." },
    steps: {
      ko: ["차량 설명서에서 block heater 위치와 사용 온도를 확인합니다.", "접지된 실외용 연장선과 정상적인 콘센트를 사용하고 선이 팬·벨트·뜨거운 부품에 닿지 않게 합니다.", "타이머로 출발 약 2~3시간 전에 켜 장시간 불필요한 전력 사용을 줄입니다."],
      en: ["Check the manual for the heater location and recommended temperature range.", "Use a grounded outdoor-rated cord and keep it away from belts, fans and hot parts.", "Use a timer for roughly 2–3 hours before departure instead of powering it all night."],
    },
    caution: { ko: "전기차의 배터리 예열·충전 기능과 블록히터는 다른 장치입니다. 차량 제조사의 겨울 지침을 우선하세요.", en: "EV battery preconditioning and engine block heaters are different systems; follow the manufacturer's winter instructions." },
    keywords: ["블록히터", "엔진히터", "겨울 시동", "block heater", "plug in", "winter"], sourceUrl: BLOCK_HEATER_URL, sourceKinds: ["alberta", "practical"],
  },
  {
    id: "folding-mirrors", chapterId: "appendix", visual: "mirror",
    title: { ko: "사이드미러가 자동으로 안 접혀요", en: "Why the mirrors do not auto-fold" },
    summary: { ko: "자동 접이 미러는 알버타의 필수 장비가 아니라 제조사·연식·트림별 편의 기능이라 북미형 차량에서는 빠진 경우가 흔합니다.", en: "Power-folding mirrors are a trim-dependent convenience feature, not an Alberta requirement, and many North American vehicles omit it." },
    takeaway: { ko: "잠금 시 안 접히는 것이 고장이라고 단정하지 말고 미러 버튼과 차량 설정 메뉴를 먼저 확인하세요.", en: "Mirrors that stay open when locked may be normal; check the mirror switch and vehicle settings first." },
    steps: {
      ko: ["미러 조절 스위치 근처에 접이 아이콘 버튼이 있는지 확인합니다.", "차량 설정에서 Auto Fold 또는 Fold on Lock 옵션이 있는지 확인합니다.", "기능이 없다면 수동 접이 가능 여부도 설명서로 확인하고 제조사가 허용한 방향으로만 접습니다."],
      en: ["Look for a folding icon near the mirror adjustment switch.", "Check vehicle settings for Auto Fold or Fold on Lock.", "If no power feature exists, consult the manual before folding manually and use only the intended direction."],
    },
    caution: { ko: "얼어붙은 미러를 억지로 전동 또는 수동으로 접으면 기어와 하우징이 손상될 수 있습니다.", en: "Forcing a frozen mirror by motor or hand can damage its gears or housing." },
    keywords: ["자동접이", "사이드미러", "미러 버튼", "power folding mirror", "auto fold"], sourceKinds: ["practical"],
  },
  {
    id: "alberta-auto-insurance", chapterId: "appendix", visual: "insurance",
    title: { ko: "알버타 자동차 보험 기초", en: "Alberta auto insurance basics" },
    summary: { ko: "알버타에서 공공도로를 운행하려면 유효한 자동차 보험이 필요하며 기본 보험과 선택 담보를 구분해 가입합니다.", en: "A vehicle used on Alberta public roads needs valid insurance, with mandatory basic coverage and optional protection." },
    takeaway: { ko: "기본 보험만으로 내 차의 모든 손상이 보상되는 것은 아닙니다. Collision·Comprehensive와 자기부담금을 따로 확인하세요.", en: "Basic insurance does not cover every loss to your own car; review collision, comprehensive and deductibles separately." },
    steps: {
      ko: ["기본 담보인 제3자 배상과 사고 치료 혜택, 그리고 내 보험의 DCPD 적용 방식을 확인합니다.", "내 차 사고·도난·우박·유리 손상을 위해 Collision과 Comprehensive가 필요한지 비교합니다.", "모든 운전자, 통근·배달·라이드셰어 사용 여부와 차량 정보를 정확히 알리고 여러 견적의 한도·공제액을 같은 조건으로 비교합니다.", "등록할 때 보험 증명이 필요하며 운전 중에도 유효한 pink card 또는 허용되는 전자 증명을 준비합니다."],
      en: ["Confirm third-party liability, accident benefits and how DCPD applies under your policy.", "Compare whether you need collision and comprehensive for crashes, theft, hail and glass damage.", "Disclose all drivers and business or rideshare use, then compare quotes using the same limits and deductibles.", "Proof of insurance is required for registration; keep a valid pink card or accepted electronic proof available."],
    },
    caution: { ko: "알버타는 2027년 1월 1일 Care-First 제도로 전환 예정입니다. 이 글은 2026년 8월 기준이므로 갱신 시 보험사와 최신 조건을 확인하세요.", en: "Alberta plans to transition to Care-First on January 1, 2027. This article reflects August 2026; verify current terms at renewal." },
    keywords: ["자동차 보험", "핑크카드", "dcpd", "collision", "comprehensive", "deductible", "insurance"], sourceUrl: INSURANCE_URL, sourceKinds: ["alberta", "practical"],
  },
];
