"use client";

import { useState } from "react";

type ImageWork = { title: string; category: string; image: string };
type Campaign = { id: string; label: string; title: string; description: string; works: ImageWork[] };

const campaigns: Campaign[] = [
  {
    id: "trail", label: "01 / TRAIL", title: "COLUMBIA TRAIL SYSTEM",
    description: "以防水机能、户外动势与自然环境为核心的商业产品视觉。",
    works: [
      { title: "TECHLITE SPLASH", category: "PRODUCT CAMPAIGN", image: "/works/image/portfolio-14.webp" },
      { title: "TRAIL BLACK II", category: "PRODUCT CAMPAIGN", image: "/works/image/portfolio-19.webp" },
      { title: "MEADOW HIKE", category: "PRODUCT CAMPAIGN", image: "/works/image/portfolio-15.webp" },
      { title: "TRAIL MOTION", category: "OUTDOOR CAMPAIGN", image: "/works/image/portfolio-20.webp" },
      { title: "TRAIL PANTS", category: "OUTDOOR CAMPAIGN", image: "/works/image/portfolio-22.webp" },
    ],
  },
  {
    id: "shell", label: "02 / SHELL", title: "COLUMBIA STORMSHELL",
    description: "用悬浮、材质特写与水滴动态强化防水外套的产品卖点。",
    works: [
      { title: "STORMSHELL BLACK", category: "PRODUCT VISUAL", image: "/works/image/portfolio-07.webp" },
      { title: "STORMSHELL SAND", category: "PRODUCT VISUAL", image: "/works/image/portfolio-08.webp" },
      { title: "STORMSHELL BLUE", category: "PRODUCT VISUAL", image: "/works/image/portfolio-09.webp" },
      { title: "WEIGHTLESS SHELL", category: "PRODUCT CONCEPT", image: "/works/image/portfolio-01.webp" },
    ],
  },
  {
    id: "new-era", label: "03 / NEW ERA", title: "NEW ERA — CITY ENERGY",
    description: "从产品刺绣细节延展至城市青年场景，建立完整的潮流传播语境。",
    works: [
      { title: "EMBROIDERY ERA I", category: "PRODUCT CAMPAIGN", image: "/works/image/portfolio-06.webp" },
      { title: "CITY FRAME", category: "FASHION CAMPAIGN", image: "/works/image/portfolio-10.webp" },
      { title: "EMBROIDERY ERA II", category: "PRODUCT CAMPAIGN", image: "/works/image/portfolio-11.webp" },
      { title: "COURT LIGHT", category: "FASHION CAMPAIGN", image: "/works/image/portfolio-17.webp" },
    ],
  },
  {
    id: "ck", label: "04 / CK", title: "CK — EVERYDAY ESSENTIALS",
    description: "以自然光和城市生活氛围呈现基础款服饰的真实亲和力。",
    works: [
      { title: "CK ESSENTIALS I", category: "LIFESTYLE", image: "/works/image/portfolio-13.webp" },
      { title: "CK ESSENTIALS II", category: "LIFESTYLE", image: "/works/image/portfolio-16.webp" },
    ],
  },
  {
    id: "editorial", label: "05 / EDITORIAL", title: "COMMERCIAL EDITORIAL",
    description: "围绕人物、服装与场景关系展开的商业模特与时尚编辑视觉。",
    works: [
      { title: "ALPINE PORTRAIT", category: "OUTDOOR FASHION", image: "/works/image/portfolio-02.webp" },
      { title: "SUMMER EDITORIAL", category: "LIFESTYLE", image: "/works/image/portfolio-05.webp" },
      { title: "URBAN DENIM", category: "STREET EDITORIAL", image: "/works/image/portfolio-12.webp" },
      { title: "HOLIDAY KNIT", category: "FASHION EDITORIAL", image: "/works/image/portfolio-21.webp" },
    ],
  },
  {
    id: "botanica", label: "06 / STILL LIFE", title: "CHOCOLATE BOTANICA",
    description: "将巧克力、花卉与香料转译成克制而富有质感的产品静物。",
    works: [
      { title: "BOTANICA I", category: "PRODUCT STILL LIFE", image: "/works/image/portfolio-03.webp" },
      { title: "BOTANICA II", category: "PRODUCT STILL LIFE", image: "/works/image/portfolio-04.webp" },
    ],
  },
];

export default function ImagePortfolio() {
  const [activeId, setActiveId] = useState(campaigns[0].id);
  const activeCampaign = campaigns.find((campaign) => campaign.id === activeId) ?? campaigns[0];

  return (
    <section className="image-portfolio" id="image-works" aria-labelledby="image-portfolio-title">
      <div className="image-portfolio-grid" aria-hidden="true" />
      <div className="shell image-portfolio-shell">
        <header className="image-portfolio-head">
          <p><span>03</span> / COMMERCIAL IMAGE ARCHIVE</p>
          <h2 id="image-portfolio-title">IMAGE WORKS</h2>
          <div><strong>{activeCampaign.title}</strong><span>{activeCampaign.description}</span></div>
        </header>

        <div className="image-campaign-tabs" role="tablist" aria-label="图片项目分类">
          {campaigns.map((campaign) => (
            <button aria-controls="image-campaign-panel" aria-selected={campaign.id === activeId} className={campaign.id === activeId ? "is-active" : undefined} key={campaign.id} onClick={() => setActiveId(campaign.id)} role="tab" type="button">
              {campaign.label}
            </button>
          ))}
        </div>

        <div className={`image-story-grid image-story-count-${activeCampaign.works.length}`} id="image-campaign-panel" role="tabpanel">
          {activeCampaign.works.map((work, index) => (
            <figure className={index === 0 ? "is-featured" : undefined} key={work.image}>
              <img src={work.image} alt={`${activeCampaign.title}：${work.title}`} width="1000" height="1500" loading="lazy" decoding="async" />
              <figcaption><span>{String(index + 1).padStart(2, "0")}</span><div><strong>{work.title}</strong><small>{work.category}</small></div></figcaption>
            </figure>
          ))}
        </div>

        <p className="image-portfolio-note">SELECT A CAMPAIGN TO EXPLORE · {String(activeCampaign.works.length).padStart(2, "0")} IMAGES</p>
      </div>
    </section>
  );
}
