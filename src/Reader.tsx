import { useEffect } from "react";
import { articles, guideItems, type CityId, type Locale, type SourceKind } from "./content";

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

const visualLabels: Record<string, string> = {
  road: "KEEP RIGHT", speed: "50", mirror: "CHECK", stop: "STOP", signal: "● ● ●",
  sign: "△", intersection: "4 WAY", turn: "↰", uturn: "↶", parking: "5 m",
  hill: "P ↗", snow: "SNOW", merge: "⇢", ice: "ICE", plow: "PLOW",
  bus: "20 m", siren: "60", collision: "!", pedestrian: "WALK", roundabout: "↻",
  highway: "PASS", skid: "ABS", visibility: "LOW", truck: "TRUCK", rail: "RAIL",
  seatbelt: "CLICK", law: "LAW", heater: "−20°", insurance: "AB",
};

const sourceLabels: Record<Locale, Record<SourceKind, string>> = {
  ko: { guide: "2026 Driver’s Guide", alberta: "Alberta 공식", municipal: "도시 규정", canada: "Canada 공식", practical: "실전 팁" },
  en: { guide: "2026 Driver’s Guide", alberta: "Alberta official", municipal: "Municipal rule", canada: "Canada official", practical: "Practical tip" },
};

export default function Reader({ locale, city, articleId, onClose, onSelectArticle }: ReaderProps) {
  const article = articles.find((item) => item.id === articleId) ?? articles[0];
  const chapter = guideItems.find((item) => item.id === article.chapterId) ?? guideItems[0];
  const sameChapter = articles.filter((item) => item.chapterId === chapter.id);
  const t = labels[locale];
  const sourceKinds = article.sourceKinds ?? (
    article.sourceUrl?.includes("driver-guides-overview") ? ["guide"] :
    article.sourceUrl?.includes("alberta.ca") ? ["alberta"] : ["practical"]
  ) as SourceKind[];

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

  return (
    <div className="reader-overlay" role="dialog" aria-modal="true" aria-label={article.title[locale]}>
      <header className="reader-topbar">
        <button className="reader-brand" onClick={onClose}>
          <img className="brand-logo" src="/drivebook-logo.png" alt="" />
          <span>Drivebook <b>Alberta</b></span>
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
            {sourceKinds.map((kind) => <span key={kind} className={`source-badge source-${kind}`}>{sourceLabels[locale][kind]}</span>)}
          </div>
          <h1>{article.title[locale]}</h1>
          <p className="reader-summary">{article.summary[locale]}</p>

          <div className={`article-visual visual-${article.visual}`} aria-hidden="true">
            <div className="visual-grid"><i /><i /><i /></div>
            <strong>{visualLabels[article.visual]}</strong>
            <span>{chapter.title[locale]}</span>
            <div className="visual-path"><i /><i /></div>
          </div>

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

          {article.sourceUrl && (
            <a className="source-link" href={article.sourceUrl} target="_blank" rel="noreferrer">
              <span>↗</span><div><b>{t.source}</b><small>{sourceKinds.map((kind) => sourceLabels[locale][kind]).join(" · ")}</small></div>
            </a>
          )}
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
