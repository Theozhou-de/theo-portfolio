"use client";

import { useState } from "react";

type VisualKind =
  | "documents"
  | "matrix"
  | "waveform"
  | "bars"
  | "network"
  | "frames"
  | "prompt"
  | "timeline"
  | "check"
  | "people";

type ProjectStep = {
  title: string;
  label: string;
  metric: string;
  kind: VisualKind;
};

type ProjectOutcome = {
  value: string;
  label: string;
};

type ProjectChapter = {
  number: string;
  shortTitle: string;
  eyebrow: string;
  title: string;
  summary: string;
  details: string[];
  steps: ProjectStep[];
  outcomes: ProjectOutcome[];
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
    steps: [
      { title: "市场调研", label: "行业趋势", metric: "20+", kind: "documents" },
      { title: "供应商评估", label: "能力矩阵", metric: "12 家", kind: "matrix" },
      { title: "能力测试", label: "边界验证", metric: "48 组", kind: "waveform" },
      { title: "成本分级", label: "性价比评分", metric: "A—C", kind: "bars" },
      { title: "资源入池", label: "稳定供给", metric: "7 家", kind: "network" },
    ],
    outcomes: [
      { value: "20+", label: "供应商深度接触" },
      { value: "48", label: "能力测试样本" },
      { value: "3级", label: "成本能力分层" },
      { value: "7家", label: "核心资源入池" },
    ],
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
    steps: [
      { title: "创意脚本", label: "卖点转译", metric: "01", kind: "documents" },
      { title: "分镜设计", label: "镜头规划", metric: "12 镜", kind: "frames" },
      { title: "AI 生成", label: "素材生产", metric: "80+", kind: "network" },
      { title: "剪辑合成", label: "节奏包装", metric: "4K", kind: "timeline" },
      { title: "成片交付", label: "多端适配", metric: "3 版", kind: "check" },
    ],
    outcomes: [
      { value: "0→1", label: "制作链路打通" },
      { value: "80+", label: "生成素材筛选" },
      { value: "4K", label: "高质量成片" },
      { value: "站内外", label: "多场景投放" },
    ],
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
    steps: [
      { title: "结构化 Prompt", label: "模板拆解", metric: "5 层", kind: "prompt" },
      { title: "生成测试", label: "变量对照", metric: "A/B", kind: "matrix" },
      { title: "一致性检查", label: "角色 / 物品", metric: "92%", kind: "frames" },
      { title: "合规审核", label: "平台规则", metric: "QC", kind: "check" },
      { title: "质量复盘", label: "问题归因", metric: "LOOP", kind: "waveform" },
    ],
    outcomes: [
      { value: "5层", label: "Prompt 结构" },
      { value: "92%", label: "一致性通过率" },
      { value: "双审", label: "内容与合规" },
      { value: "可复用", label: "内部方法模板" },
    ],
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
    steps: [
      { title: "需求输入", label: "目标对齐", metric: "BRIEF", kind: "documents" },
      { title: "任务拆解", label: "角色分工", metric: "RACI", kind: "people" },
      { title: "协同生产", label: "并行推进", metric: "3 线", kind: "network" },
      { title: "QC 审核", label: "标准闸门", metric: "2 轮", kind: "check" },
      { title: "交付复盘", label: "资产沉淀", metric: "SOP", kind: "timeline" },
    ],
    outcomes: [
      { value: "SOP", label: "标准流程沉淀" },
      { value: "3线", label: "任务并行协作" },
      { value: "2轮", label: "质量审核闸门" },
      { value: "稳定", label: "持续内容产出" },
    ],
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
    steps: [
      { title: "场景梳理", label: "需求访谈", metric: "2 部门", kind: "people" },
      { title: "方法沉淀", label: "知识手册", metric: "PLAYBOOK", kind: "documents" },
      { title: "案例演示", label: "真实业务", metric: "LIVE", kind: "frames" },
      { title: "团队实操", label: "任务演练", metric: "WORKSHOP", kind: "prompt" },
      { title: "反馈优化", label: "持续迭代", metric: "+1", kind: "waveform" },
    ],
    outcomes: [
      { value: "2部门", label: "客服与设计协同" },
      { value: "实战", label: "业务案例教学" },
      { value: "手册", label: "标准方法沉淀" },
      { value: "提效", label: "日常应用落地" },
    ],
  },
];

function StepVisual({ kind }: { kind: VisualKind }) {
  return (
    <span className={`experience-step-art experience-step-art-${kind}`}>
      <i /><i /><i /><i /><i /><i />
    </span>
  );
}

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

        <div className="experience-visual" key={`visual-${active.number}`}>
          <div className="experience-visual-topline">
            <span>VISUAL PROCESS STORYBOARD</span>
            <span>{active.number} / 05</span>
          </div>

          <div className="experience-proofline" aria-label="本项目关键成果">
            <p><b>{active.outcomes[0].value}</b><span>{active.outcomes[0].label}</span></p>
            <i aria-hidden="true" />
            <p><b>{active.outcomes[1].value}</b><span>{active.outcomes[1].label}</span></p>
            <i aria-hidden="true" />
            <p><b>{active.outcomes[2].value}</b><span>{active.outcomes[2].label}</span></p>
          </div>

          <div className="experience-flow">
            {active.steps.map((step, index) => (
              <div className={`experience-flow-step${index === 2 ? " is-focus" : ""}`} key={step.title}>
                <span className="experience-flow-card">
                  <span className="experience-flow-card-head">
                    <b>{String(index + 1).padStart(2, "0")}</b>
                    <em>{step.label}</em>
                  </span>
                  <StepVisual kind={step.kind} />
                  <strong>{step.metric}</strong>
                </span>
                <span className="experience-flow-caption">
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  <em>{step.title}</em>
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-copy" key={active.number}>
          <div className="experience-copy-primary">
            <p className="experience-eyebrow">{active.eyebrow}</p>
            <h4>{active.title}</h4>
            <p className="experience-summary">{active.summary}</p>
          </div>
          <ul className="experience-points">
            {active.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
        </div>

        <div className="experience-outcomes" aria-label="项目成果">
          {active.outcomes.map((outcome, index) => (
            <div key={outcome.label}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p><strong>{outcome.value}</strong><small>{outcome.label}</small></p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
