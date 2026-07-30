"use client";

import { useState } from "react";

type ProjectChapter = {
  number: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  summary: string;
  details: string[];
  flow: string[];
};

const chapters: ProjectChapter[] = [
  {
    number: "01",
    shortTitle: "模型选型",
    eyebrow: "MODEL RESEARCH",
    title: "模型选型与能力边界测试",
    summary: "从市场调研到供应链搭建，为业务筛选稳定、可控且具备成本优势的 AI 生成能力。",
    details: [
      "深度接触 20+ AIGC 供应商，按生成能力、稳定性与成本结构进行分级。",
      "针对不同模型开展阶段性边界测试，建立高性价比 AI 供应资源池。",
    ],
    flow: ["市场调研", "供应商评估", "能力测试", "成本分级", "资源入池"],
  },
  {
    number: "02",
    shortTitle: "AI视频制作",
    eyebrow: "AI VIDEO PRODUCTION",
    title: "AI 视频全流程制作",
    summary: "把创意策略转化为可以稳定交付的 AI 视频，从脚本到成片完整打通。",
    details: [
      "主导创意脚本、分镜设计、AI 生成、剪辑合成与最终成片交付。",
      "围绕产品卖点和业务场景产出高质量内容，用于站内外创意投放。",
    ],
    flow: ["创意脚本", "分镜设计", "AI生成", "剪辑合成", "成片交付"],
  },
  {
    number: "03",
    shortTitle: "Prompt与QC",
    eyebrow: "PROMPT SYSTEM & QC",
    title: "Prompt 框架与质量体系",
    summary: "将个人经验沉淀为结构化方法，让生成质量有标准、可检查、能复用。",
    details: [
      "搭建结构化、体系化 Prompt 框架，建立内部质量标准与审核机制。",
      "解决平台规则、角色与物品一致性，以及镜头时序连贯性问题。",
    ],
    flow: ["结构化Prompt", "生成测试", "一致性检查", "合规审核", "质量复盘"],
  },
  {
    number: "04",
    shortTitle: "工作流搭建",
    eyebrow: "SCALABLE WORKFLOW",
    title: "AIGC 内容工作流搭建",
    summary: "把分散的工具、角色和标准串成一条可复制、可扩展的内容生产链路。",
    details: [
      "定义从需求输入、生成制作、质量审核到交付复盘的标准节点。",
      "降低个人经验依赖，推动 AIGC 视频持续、稳定产出。",
    ],
    flow: ["需求输入", "任务拆解", "协同生产", "QC审核", "交付复盘"],
  },
  {
    number: "05",
    shortTitle: "部门培训",
    eyebrow: "TEAM ENABLEMENT",
    title: "跨部门 AI 能力培训",
    summary: "把成熟方法带给客服、设计等协同团队，让 AI 真正进入日常业务流程。",
    details: [
      "主导部门培训与案例演示，建立易理解、可直接使用的应用方法。",
      "提升客服转化与设计协同效率，推动 AI 能力在团队内部扩散。",
    ],
    flow: ["场景梳理", "方法沉淀", "案例演示", "团队实操", "反馈优化"],
  },
];

const outcomes = ["20+ 供应商", "0→1 搭建", "可复制扩展", "站内外投放"];

export default function ProjectExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = chapters[activeIndex];

  return (
    <div className="experience-showcase">
      <div className="experience-index" aria-label="项目工作内容">
        {chapters.map((chapter, index) => (
          <button
            className={`experience-index-item${activeIndex === index ? " is-active" : ""}`}
            type="button"
            key={chapter.number}
            onClick={() => setActiveIndex(index)}
            aria-pressed={activeIndex === index}
            aria-controls="project-experience-detail"
          >
            <span className="experience-index-number">{chapter.number}</span>
            <span className="experience-index-title">{chapter.shortTitle}</span>
            <span className="experience-index-mark" aria-hidden="true" />
          </button>
        ))}
      </div>

      <article className="experience-detail" id="project-experience-detail" aria-live="polite">
        <header className="experience-detail-header">
          <div>
            <p>AIGC PROJECT PM</p>
            <h3>AIGC项目PM</h3>
          </div>
          <time dateTime="2026-04/2026-06">2026.04—2026.06</time>
        </header>

        <div className="experience-visual" aria-hidden="true">
          <div className="experience-visual-topline">
            <span>AIGC DELIVERY PIPELINE</span>
            <span>{active.number} / 05</span>
          </div>
          <div className="experience-flow">
            {active.flow.map((step, index) => (
              <div className="experience-flow-step" key={step}>
                <span className="experience-flow-preview">
                  <i />
                  <i />
                  <i />
                </span>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <em>{step}</em>
              </div>
            ))}
          </div>
          <div className="experience-visual-grid" />
        </div>

        <div className="experience-copy" key={active.number}>
          <div className="experience-copy-primary">
            <p className="experience-eyebrow">{active.eyebrow}</p>
            <h4>{active.title}</h4>
            <p className="experience-summary">{active.summary}</p>
          </div>
          <ul className="experience-points">
            {active.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>

        <div className="experience-outcomes" aria-label="项目成果">
          {outcomes.map((outcome, index) => (
            <div key={outcome}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <strong>{outcome}</strong>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
