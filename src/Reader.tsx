import { useEffect } from "react";
import { articles, guideItems, type Article, type CityId, type Locale, type ParkingSignExample, type SourceKind } from "./content";

type ReaderProps = {
  locale: Locale;
  city: CityId;
  articleId: string;
  onClose: () => void;
  onSelectArticle: (id: string) => void;
};

const labels = {
  ko: {
    contents: "가이드 목차",
    takeaway: "한 줄 결론",
    actions: "이렇게 하세요",
    caution: "주의하세요",
    city: "선택한 도시에서",
    source: "공식 출처 확인",
    related: "같은 장의 다른 글",
    close: "가이드 닫기",
    read: "읽기",
  },
  en: {
    contents: "Guide contents",
    takeaway: "The short answer",
    actions: "What to do",
    caution: "Watch out",
    city: "For your selected city",
    source: "Check the official source",
    related: "More in this chapter",
    close: "Close guide",
    read: "Read",
  },
};

type DisplaySource = {
  kind: SourceKind;
  agency: Record<Locale, string>;
  title: Record<Locale, string>;
  url?: string;
};

const GUIDE_URL = "https://www.alberta.ca/driver-guides-overview-and-pdf-versions";
const guideSource: DisplaySource = {
  kind: "guide",
  agency: { ko: "Government of Alberta", en: "Government of Alberta" },
  title: { ko: "Driver’s Guide: Cars and light trucks (2026)", en: "Driver’s Guide: Cars and light trucks (2026)" },
  url: GUIDE_URL,
};

const sourceOverrides: Record<string, DisplaySource[]> = {
  "speed-units": [
    guideSource,
    { kind: "municipal", agency: { ko: "City of Calgary", en: "City of Calgary" }, title: { ko: "Neighbourhood speed limits — 표지판 없는 도로 40km/h", en: "Neighbourhood speed limits — 40 km/h on unsigned roads" }, url: "https://www.calgary.ca/roads/safety/residential-speed-limits.html" },
  ],
  "street-parking-signs": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Traffic sign catalogue — 표준 규제 표지", en: "Traffic sign catalogue — standard regulatory signs" }, url: "https://www.alberta.ca/traffic-sign-catalogue" },
    { kind: "municipal", agency: { ko: "City of Calgary", en: "City of Calgary" }, title: { ko: "Traffic Safety Tips — No Stopping·No Parking·특수 주차구역", en: "Traffic Safety Tips — No Stopping, No Parking and special zones" }, url: "https://www.calgary.ca/Transportation/Roads/Documents/Traffic/Traffic-safety-programs/Traffic-tips-booklet.pdf" },
    { kind: "municipal", agency: { ko: "Calgary Parking", en: "Calgary Parking" }, title: { ko: "On-street parking — ParkPlus·시간제한·적재구역", en: "On-street parking — ParkPlus, time limits and loading zones" }, url: "https://parking-prd.calgary.ca/find-parking/on-street.html" },
    { kind: "municipal", agency: { ko: "City of Edmonton", en: "City of Edmonton" }, title: { ko: "Parking Enforcement — 72시간·장애인 주차·단속", en: "Parking Enforcement — 72-hour, accessible parking and enforcement" }, url: "https://www.edmonton.ca/city_government/bylaws/parking-enforcement-services" },
  ],
  "hill-snow-parking": [
    guideSource,
    { kind: "municipal", agency: { ko: "City of Calgary", en: "City of Calgary" }, title: { ko: "Snow route parking bans", en: "Snow route parking bans" }, url: "https://www.calgary.ca/roads/conditions/snow-route-parking-bans.html" },
    { kind: "municipal", agency: { ko: "City of Edmonton", en: "City of Edmonton" }, title: { ko: "Snow Clearing Service Levels — 단계별 주차금지", en: "Snow Clearing Service Levels — phased parking bans" }, url: "https://www.edmonton.ca/transportation/on_your_streets/neighbourhood-roads-winter" },
  ],
  "snowplow": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Driving safely around snowplows — 추월 금지 조건·벌칙", en: "Driving safely around snowplows — passing rules and penalties" }, url: "https://www.alberta.ca/driving-safely-around-snowplows" },
  ],
  "collision": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Automobile collisions and insurance", en: "Automobile collisions and insurance" }, url: "https://www.alberta.ca/automobile-collisions-insurance" },
  ],
  "towing": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Vehicle towing and storage regulation", en: "Vehicle towing and storage regulation" }, url: "https://www.alberta.ca/vehicle-towing-and-storage-regulation" },
  ],
  "seatbelts-child-seats": [
    guideSource,
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Occupant restraint laws", en: "Occupant restraint laws" }, url: "https://www.alberta.ca/occupant-restraint-laws" },
  ],
  "distracted-fatigue": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Distracted driving — 금지 행위·벌금·벌점", en: "Distracted driving — prohibited actions, fines and demerits" }, url: "https://www.alberta.ca/distracted-driving" },
  ],
  "impaired-demerits": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Impaired driving penalties", en: "Impaired driving penalties" }, url: "https://www.alberta.ca/impaired-driving-penalties" },
  ],
  "driver-side-mirror": [
    { kind: "canada", agency: { ko: "Government of Canada · Justice Laws Website", en: "Government of Canada · Justice Laws Website" }, title: { ko: "Motor Vehicle Safety Regulations — 후사경 요건", en: "Motor Vehicle Safety Regulations — rear-view mirror requirements" }, url: "https://laws-lois.justice.gc.ca/eng/regulations/c.r.c.%2C_c._1038/FullText.html?wbdisable=true" },
  ],
  "block-heater": [
    { kind: "alberta", agency: { ko: "Utilities Consumer Advocate · Government of Alberta", en: "Utilities Consumer Advocate · Government of Alberta" }, title: { ko: "에너지 절약 안내 — 블록히터 타이머 사용", en: "Energy-saving guidance — block-heater timer use" }, url: "https://ucahelps.alberta.ca/learning-hub/tips/tips-to-save-money-on-utility-bills/" },
  ],
  "folding-mirrors": [
    { kind: "practical", agency: { ko: "차량별 확인 자료", en: "Vehicle-specific reference" }, title: { ko: "차량 소유자 설명서·트림별 장비 목록", en: "Owner’s manual and trim equipment list" } },
  ],
  "alberta-auto-insurance": [
    { kind: "alberta", agency: { ko: "Government of Alberta", en: "Government of Alberta" }, title: { ko: "Automobile insurance", en: "Automobile insurance" }, url: "https://www.alberta.ca/automobile-insurance" },
  ],
};

const albertaPageTitles: Record<string, Record<Locale, string>> = {
  "automobile-collisions-insurance": { ko: "Automobile collisions and insurance", en: "Automobile collisions and insurance" },
  "vehicle-towing-and-storage-regulation": { ko: "Vehicle towing and storage regulation", en: "Vehicle towing and storage regulation" },
};

function sourcesFor(article: Article): DisplaySource[] {
  if (sourceOverrides[article.id]) return sourceOverrides[article.id];
  if (!article.sourceUrl || article.sourceUrl.includes("driver-guides-overview")) return [guideSource];
  if (article.sourceUrl.includes("alberta.ca")) {
    const key = Object.keys(albertaPageTitles).find((candidate) => article.sourceUrl?.includes(candidate));
    return [{
      kind: "alberta",
      agency: { ko: "Government of Alberta", en: "Government of Alberta" },
      title: key ? albertaPageTitles[key] : { ko: "Alberta 교통 규정·안내", en: "Alberta transportation rules and guidance" },
      url: article.sourceUrl,
    }];
  }
  return [{ kind: "practical", agency: { ko: "참고 자료", en: "Reference" }, title: { ko: "원문 확인", en: "View source" }, url: article.sourceUrl }];
}

function ParkingSignCard({ example, locale }: { example: ParkingSignExample; locale: Locale }) {
  return (
    <article className="parking-sign-card">
      <div className={`parking-sign-face parking-sign-${example.kind}`} aria-label={example.signText[locale]}>
        <span className="parking-sign-symbol">{example.kind === "accessible" ? "♿" : example.kind === "snow-route" ? "✳" : "P"}</span>
        <b>{example.signText[locale]}</b>
      </div>
      <div><h3>{example.title[locale]}</h3><p>{example.meaning[locale]}</p><small>{example.check[locale]}</small></div>
    </article>
  );
}

export default function Reader({ locale, city, articleId, onClose, onSelectArticle }: ReaderProps) {
  const article = articles.find((item) => item.id === articleId) ?? articles[0];
  const chapter = guideItems.find((item) => item.id === article.chapterId) ?? guideItems[0];
  const sameChapter = articles.filter((item) => item.chapterId === chapter.id);
  const t = labels[locale];
  const sources = sourcesFor(article);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [onClose]);

  useEffect(() => {
    document.querySelector<HTMLElement>(".reader-overlay")?.scrollTo({ top: 0 });
  }, [articleId]);

  return (
    <div className="reader-overlay" role="dialog" aria-modal="true" aria-label={article.title[locale]}>
      <header className="reader-topbar">
        <button className="reader-brand" onClick={onClose}>
          <img className="brand-logo" src="/drivebook-logo.png" alt="" />
          <span>Drive in <b>Alberta</b></span>
        </button>
        <span>{chapter.chapter} · {chapter.title[locale]}</span>
        <button className="reader-close" onClick={onClose} aria-label={t.close}>×</button>
      </header>

      <div className="reader-layout">
        <aside className="reader-sidebar">
          <p>{t.contents}</p>
          {guideItems.map((item) => {
            const firstArticle = articles.find((entry) => entry.chapterId === item.id);
            return (
              <button
                key={item.id}
                className={item.id === chapter.id ? "active" : ""}
                onClick={() => firstArticle && onSelectArticle(firstArticle.id)}
              >
                <span>{item.chapter}</span><b>{item.title[locale]}</b>
              </button>
            );
          })}
        </aside>

        <main className="reader-main">
          <div className="reader-breadcrumb">{chapter.chapter} / {chapter.title[locale]}</div>
          <div className="source-badges" aria-label={locale === "ko" ? "이 글의 출처" : "Sources for this article"}>
            {sources.map((source) => <span key={`${source.agency.en}-${source.title.en}`} className={`source-badge source-${source.kind}`}>{source.agency[locale]} · {source.title[locale]}</span>)}
          </div>
          <h1>{article.title[locale]}</h1>
          <p className="reader-summary">{article.summary[locale]}</p>

          {!article.parkingSigns && (
            <figure className="article-visual">
              <img
                src={`/guide-illustrations/${article.id}.jpg`}
                alt={`${article.title[locale]} — ${locale === "ko" ? "상황 일러스트" : "scenario illustration"}`}
                loading="eager"
              />
              <figcaption>{chapter.title[locale]}</figcaption>
            </figure>
          )}

          {article.parkingSigns && (
            <section className="parking-sign-guide" aria-label={locale === "ko" ? "주차 표지판 예시" : "Parking sign examples"}>
              {article.parkingSigns.map((example) => <ParkingSignCard key={example.kind} example={example} locale={locale} />)}
            </section>
          )}

          <section className="takeaway-box">
            <span>{t.takeaway}</span>
            <p>{article.takeaway[locale]}</p>
          </section>

          <section className="reader-section">
            <p className="reader-kicker">{t.actions}</p>
            <ol className="action-list">
              {article.steps[locale].map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
              ))}
            </ol>
          </section>

          <section className="caution-box">
            <span>!</span><div><b>{t.caution}</b><p>{article.caution[locale]}</p></div>
          </section>

          {article.cities?.[city] && (
            <section className="city-note">
              <span>⌖</span><div><b>{t.city}</b><p>{article.cities[city]![locale]}</p></div>
            </section>
          )}

          <section className="related-section">
            <div className="related-title"><p className="reader-kicker">{t.related}</p><span>{sameChapter.length}</span></div>
            <div className="related-grid">
              {sameChapter.filter((item) => item.id !== article.id).map((item) => (
                <button key={item.id} onClick={() => onSelectArticle(item.id)}>
                  <span>{t.read}</span><b>{item.title[locale]}</b><i>→</i>
                </button>
              ))}
            </div>
          </section>

          <section className="source-list" aria-label={t.source}>
            <p className="reader-kicker">{t.source}</p>
            {sources.map((source) => source.url ? (
              <a key={`${source.agency.en}-${source.title.en}`} className="source-link" href={source.url} target="_blank" rel="noreferrer">
                <span>↗</span><div><b>{source.agency[locale]}</b><small>{source.title[locale]}</small></div>
              </a>
            ) : (
              <div key={`${source.agency.en}-${source.title.en}`} className="source-link source-static">
                <span>·</span><div><b>{source.agency[locale]}</b><small>{source.title[locale]}</small></div>
              </div>
            ))}
          </section>
        </main>

        <aside className="reader-subnav">
          <p>{chapter.title[locale]}</p>
          {sameChapter.map((item, index) => (
            <button key={item.id} className={item.id === article.id ? "active" : ""} onClick={() => onSelectArticle(item.id)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{item.title[locale]}
            </button>
          ))}
        </aside>
      </div>
    </div>
  );
}
