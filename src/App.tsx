import { useEffect, useMemo, useState } from "react";
import Reader from "./Reader";
import { articles, guideItems, quickTopics, type CityId, type Locale } from "./content";

const copy = {
  ko: {
    nav: ["가이드", "표지판", "주차", "긴급상황"],
    eyebrow: "ALBERTA DRIVER'S COMPANION",
    titleA: "낯선 도로에서도,",
    titleB: "알고 나면 여유롭게.",
    lead: "알버타 운전 규칙을 복잡한 영어 대신 한눈에 이해하세요. 꼭 필요한 장면과 행동을 한국어와 영어로 안내합니다.",
    placeholder: "무엇이 궁금한가요? 예: 비보호 좌회전",
    search: "검색",
    noResult: "일치하는 가이드를 찾지 못했어요.",
    cityLabel: "운전 지역",
    source: "2026 Alberta Driver's Guide 기반",
    emergency: "지금 도움이 필요하신가요?",
    emergencyItems: ["사고가 났어요", "차가 고장 났어요", "견인됐어요"],
    essentialsEyebrow: "START HERE",
    essentialsTitle: "출발 전, 이것부터",
    essentials: [
      ["우측통행", "운전석은 왼쪽, 차량은 도로 오른쪽으로 달립니다."],
      ["km/h 사용", "속도 표지판 숫자는 모두 시간당 킬로미터입니다."],
      ["완전 정지", "STOP과 빨간불 우회전은 바퀴가 완전히 멈춰야 합니다."],
      ["도시 규칙 확인", "표지판 없는 도로 속도와 겨울 주차는 도시별로 다릅니다."],
    ],
    guideEyebrow: "THE GUIDEBOOK",
    guideTitle: "차례대로 읽어보세요",
    guideLead: "처음부터 읽어도 좋고, 지금 필요한 장부터 시작해도 좋습니다.",
    soon: "콘텐츠 준비 중",
    popular: "자주 찾는 상황",
    cityTitle: "왜 도시를 선택해야 하나요?",
    cityBody: "알버타 교통법은 공통이지만 기본 제한속도, 플레이그라운드 존 시간, 유료주차와 제설 주차금지는 도시 조례에 따라 달라질 수 있어요.",
    cityExample: "예: Calgary의 표지판 없는 도로는 기본 40km/h",
    disclaimer: "비공식 교육용 안내입니다. 현장 표지판과 최신 법령을 우선하세요.",
    attribution: "Government of Alberta의 정보를 Open Government Licence – Alberta에 따라 사용합니다.",
  },
  en: {
    nav: ["Guide", "Signs", "Parking", "Emergency"],
    eyebrow: "ALBERTA DRIVER'S COMPANION",
    titleA: "New roads,",
    titleB: "clearer decisions.",
    lead: "Understand Alberta's driving rules without digging through dense text. Learn the scenes and actions that matter, in Korean and English.",
    placeholder: "What do you need? Try: unprotected left turn",
    search: "Search",
    noResult: "We couldn't find a matching guide.",
    cityLabel: "Driving in",
    source: "Based on the 2026 Alberta Driver's Guide",
    emergency: "Need help right now?",
    emergencyItems: ["I had a collision", "My car broke down", "My car was towed"],
    essentialsEyebrow: "START HERE",
    essentialsTitle: "Know these before you go",
    essentials: [
      ["Keep right", "The driver's seat is on the left and traffic keeps to the right."],
      ["Speeds are km/h", "Every number on a speed sign is kilometres per hour."],
      ["Stop completely", "At STOP signs and red-light right turns, the wheels must stop."],
      ["Check your city", "Unposted speeds and winter parking rules vary by municipality."],
    ],
    guideEyebrow: "THE GUIDEBOOK",
    guideTitle: "Read it in your own order",
    guideLead: "Start at chapter one or jump directly to the situation you need.",
    soon: "Content coming soon",
    popular: "Common situations",
    cityTitle: "Why choose a city?",
    cityBody: "Alberta's core road rules are shared, but unposted speed limits, playground-zone hours, paid parking and snow bans can vary by municipality.",
    cityExample: "Example: Calgary's default unposted limit is 40 km/h",
    disclaimer: "An unofficial educational guide. Always follow current laws and on-road signs.",
    attribution: "Contains information licensed under the Open Government Licence – Alberta.",
  },
};

const cities = [
  { value: "alberta", ko: "Alberta 공통", en: "Alberta (general)" },
  { value: "calgary", ko: "Calgary", en: "Calgary" },
  { value: "edmonton", ko: "Edmonton", en: "Edmonton" },
  { value: "red-deer", ko: "Red Deer", en: "Red Deer" },
];

export default function App() {
  const [locale, setLocale] = useState<Locale>("ko");
  const [city, setCity] = useState<CityId>("alberta");
  const [query, setQuery] = useState("");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const t = copy[locale];

  const results = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return [];
    return articles.filter((item) => {
      const searchable = [item.title.ko, item.title.en, item.summary.ko, item.summary.en, ...item.keywords]
        .join(" ")
        .toLocaleLowerCase();
      return searchable.includes(term) || item.keywords.some((keyword) => term.includes(keyword.toLocaleLowerCase()));
    });
  }, [query]);

  useEffect(() => {
    const focusSearch = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLocaleLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("main-search")?.focus();
      }
    };
    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Drivebook Alberta home">
          <span className="brand-mark" aria-hidden="true"><i /></span>
          <span>Drivebook <b>Alberta</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((item) => <a key={item} href="#guide">{item}</a>)}
        </nav>
        <div className="header-actions">
          <label className="city-picker">
            <span>{t.cityLabel}</span>
            <select value={city} onChange={(event) => setCity(event.target.value as CityId)}>
              {cities.map((item) => <option key={item.value} value={item.value}>{item[locale]}</option>)}
            </select>
          </label>
          <div className="language-toggle" aria-label="Language">
            <button className={locale === "ko" ? "active" : ""} onClick={() => setLocale("ko")}>KO</button>
            <button className={locale === "en" ? "active" : ""} onClick={() => setLocale("en")}>EN</button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
            <p className="hero-lead">{t.lead}</p>
            <div className="search-wrap">
              <span className="search-icon" aria-hidden="true" />
              <input
                id="main-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.placeholder}
                aria-label={t.search}
              />
              <kbd>⌘ K</kbd>
              {query && (
                <div className="search-results" role="listbox">
                  {results.length ? results.map((item) => (
                    <button key={item.id} onClick={() => { setActiveArticleId(item.id); setQuery(""); }}>
                      <span className="result-icon">→</span>
                      <span><b>{item.title[locale]}</b><small>{item.summary[locale]}</small></span>
                      <i>→</i>
                    </button>
                  )) : <p>{t.noResult}</p>}
                </div>
              )}
            </div>
            <p className="source-note"><span>✓</span>{t.source}</p>
          </div>

          <div className="hero-visual" aria-label={locale === "ko" ? "알버타 도로 안내 미리보기" : "Alberta road guide preview"}>
            <div className="rule-badge"><b>KEEP</b><span>RIGHT</span></div>
            <div className="visual-copy">
              <span>{locale === "ko" ? "오늘의 핵심" : "QUICK RULE"}</span>
              <strong>{locale === "ko" ? "우측통행" : "KEEP RIGHT"}</strong>
              <p>{locale === "ko" ? "도로 오른쪽으로 주행하고, 회전 후 올바른 차로로 진입하세요." : "Keep to the right and enter the correct lane after every turn."}</p>
            </div>
            <div className="road-scene" aria-hidden="true">
              <div className="road-edge edge-left" /><div className="road-edge edge-right" />
              <div className="centre-lines"><i /><i /></div>
              <div className="lane-direction direction-up">↑</div>
              <div className="lane-direction direction-down">↓</div>
              <div className="car car-one"><i /><i /></div>
              <div className="car car-two"><i /><i /></div>
            </div>
            <div className="visual-footer"><span>VISUAL GUIDE</span><div><i /></div><span>2026</span></div>
          </div>
        </section>

        <section className="emergency-strip" aria-label={t.emergency}>
          <strong><span>!</span>{t.emergency}</strong>
          <div>
            {t.emergencyItems.map((item, index) => {
              const articleIds = ["collision", "breakdown", "towing"];
              return <button key={item} onClick={() => setActiveArticleId(articleIds[index])}>{item}<span>↗</span></button>;
            })}
          </div>
        </section>

        <section className="essentials section-pad">
          <div className="section-heading">
            <p className="eyebrow">{t.essentialsEyebrow}</p>
            <h2>{t.essentialsTitle}</h2>
          </div>
          <div className="essential-grid">
            {t.essentials.map(([title, body], index) => (
              <article key={title}>
                <span>0{index + 1}</span><div className={`mini-icon icon-${index + 1}`} aria-hidden="true" />
                <h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="guide-section section-pad" id="guide">
          <div className="guide-intro">
            <p className="eyebrow">{t.guideEyebrow}</p>
            <h2>{t.guideTitle}</h2>
            <p>{t.guideLead}</p>
            <div className="chapter-progress"><span>6 {locale === "ko" ? "개 장" : "chapters"}</span><i /></div>
          </div>
          <div className="chapter-list">
            {guideItems.map((item) => (
              <button key={item.id} onClick={() => setActiveArticleId(articles.find((article) => article.chapterId === item.id)?.id ?? null)}>
                <span className="chapter-number">{item.chapter}</span>
                <span className="chapter-symbol">{item.icon}</span>
                <span className="chapter-copy"><b>{item.title[locale]}</b><small>{item.description[locale]}</small></span>
                <span className="chapter-arrow">→</span>
              </button>
            ))}
          </div>
        </section>

        <section className="popular section-pad">
          <div className="section-heading"><p className="eyebrow">QUICK FIND</p><h2>{t.popular}</h2></div>
          <div className="topic-cloud">
            {quickTopics.map((topic, index) => (
              <button key={topic.ko} className={index === 2 || index === 4 ? "accent" : ""} onClick={() => setActiveArticleId(topic.articleId)}>
                {topic[locale]}<span>↗</span>
              </button>
            ))}
          </div>
        </section>

        <section className="city-callout section-pad">
          <div className="city-card">
            <div className="map-dots" aria-hidden="true"><i /><i /><i /><i /><i /></div>
            <div>
              <p className="eyebrow">CITY-SPECIFIC</p>
              <h2>{t.cityTitle}</h2>
              <p>{t.cityBody}</p>
              <strong>{t.cityExample}</strong>
            </div>
            <label>
              <span>{t.cityLabel}</span>
              <select value={city} onChange={(event) => setCity(event.target.value as CityId)}>
                {cities.map((item) => <option key={item.value} value={item.value}>{item[locale]}</option>)}
              </select>
            </label>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand footer-brand"><span className="brand-mark"><i /></span><span>Drivebook <b>Alberta</b></span></div>
        <div><p>{t.disclaimer}</p><p>{t.attribution}</p></div>
        <span>© 2026 Drivebook Alberta</span>
      </footer>
      {activeArticleId && (
        <Reader
          locale={locale}
          city={city}
          articleId={activeArticleId}
          onClose={() => setActiveArticleId(null)}
          onSelectArticle={setActiveArticleId}
        />
      )}
    </div>
  );
}
