import { CursorGlow, Reveal, TextReveal } from "./Animation";
import AboutCamcorder from "./AboutCamcorder";
import HeroLiquidEther from "./HeroLiquidEther";
import ProjectExperience from "./ProjectExperience";
import PortfolioWheel from "./PortfolioWheel";
import ImagePortfolio from "./ImagePortfolio";
import SiteNav from "./SiteNav";

const strengths = [
  {
    number: "01",
    title: "内容策略",
    en: "CONTENT STRATEGY",
    text: "理解品牌与用户，把模糊需求转化为清晰、可执行的内容方案。",
    visual: "strategy",
    tags: ["洞察", "定位", "内容方案"],
  },
  {
    number: "02",
    title: "AIGC 工作流",
    en: "AIGC WORKFLOW",
    text: "熟悉图像、视频与文本生成链路，持续优化质量、效率与一致性。",
    visual: "workflow",
    tags: ["图像", "视频", "文本"],
  },
  {
    number: "03",
    title: "项目管理",
    en: "PROJECT MANAGEMENT",
    text: "从目标拆解、资源协同到交付复盘，推动跨团队项目稳定落地。",
    visual: "management",
    tags: ["目标拆解", "资源协同", "交付复盘"],
  },
  {
    number: "04",
    title: "业务转化",
    en: "BUSINESS IMPACT",
    text: "五年电商实战背景，以真实业务指标检验创意与内容价值。",
    visual: "impact",
    tags: ["5年实战", "业务指标", "价值验证"],
  },
];

const careerPath = [
  {
    period: "2021 — 2022",
    title: "电商运营与增长实践",
    role: "电商运营",
    description:
      "从商品、活动与用户数据出发，建立以业务目标为导向的运营方法。",
  },
  {
    period: "2023 — 2024",
    title: "内容策略与项目协同",
    role: "内容运营 / 项目推进",
    description:
      "连接内容生产、流量策略与跨团队协作，推动项目从需求拆解走向稳定交付。",
  },
  {
    period: "2025 — 至今",
    title: "AIGC 内容与项目管理",
    role: "AIGC CONTENT / PROJECT PM",
    description:
      "将生成式图像、视频与文本工具纳入内容工作流，兼顾创意质量、效率与商业结果。",
  },
];

function StrengthVisual({ type }: { type: string }) {
  if (type === "strategy") {
    return (
      <div className="strength-visual strength-visual-strategy" aria-hidden="true">
        <div className="strategy-orbit strategy-orbit-a" />
        <div className="strategy-orbit strategy-orbit-b" />
        <div className="strategy-orbit strategy-orbit-c" />
        <span className="strategy-node strategy-node-insight">洞察</span>
        <span className="strategy-node strategy-node-position">定位</span>
        <span className="strategy-node strategy-node-plan">策略</span>
        <span className="strategy-node strategy-node-output">内容方案</span>
        <span className="strategy-core">需求</span>
      </div>
    );
  }

  if (type === "workflow") {
    return (
      <div className="strength-visual strength-visual-workflow" aria-hidden="true">
        <div className="workflow-track" />
        {["需求输入", "图像生成", "视频生成", "文本协同", "成果输出"].map((step, index) => (
          <div className="workflow-stage" key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{step}</b>
          </div>
        ))}
      </div>
    );
  }

  if (type === "management") {
    return (
      <div className="strength-visual strength-visual-management" aria-hidden="true">
        <div className="management-phases">
          <span>目标拆解</span><span>资源协同</span><span>执行推进</span><span>交付复盘</span>
        </div>
        <div className="management-row"><b>目标</b><i /></div>
        <div className="management-row"><b>资源</b><i /></div>
        <div className="management-row"><b>制作</b><i /></div>
        <div className="management-row"><b>审核</b><i /></div>
        <div className="management-row"><b>交付</b><i /></div>
        <div className="management-milestone">稳定落地</div>
      </div>
    );
  }

  return (
    <div className="strength-visual strength-visual-impact" aria-hidden="true">
      <div className="impact-path"><i /><i /><i /></div>
      <div className="impact-bars"><span /><span /><span /><span /><span /></div>
      <div className="impact-axis"><span>内容效率</span><span>交付质量</span><span>业务价值</span></div>
      <strong>VALUE</strong>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <SiteNav />

      <section className="hero hero-editorial-root" id="home">
        <HeroLiquidEther />

        <div className="editorial-grain" aria-hidden="true" />
        <div className="hero-glass-surface" aria-hidden="true" />

        <div className="refined-hero">
          <div className="hero-top-light" aria-hidden="true" />
          <div className="hero-back-glow" aria-hidden="true" />
          <div className="hero-lower-depth" aria-hidden="true" />
          <div className="hero-carpet" aria-hidden="true" />

          <div className="refined-copy refined-type-back">
            <h1 className="refined-name" aria-label="THEO ZHOU PORTFOLIO">
              <span className="hero-title-theo">THEO</span>
              <span className="hero-title-zhou">ZHOU</span>
            </h1>
          </div>

          <div className="hero-grounding" aria-hidden="true">
            <span className="hero-floor-light" />
            <span className="foot-shadow foot-shadow-shared" />
            <span className="foot-shadow foot-shadow-weight foot-shadow-weight-left" />
            <span className="foot-shadow foot-shadow-weight foot-shadow-weight-right" />
            <span className="foot-shadow foot-shadow-core foot-shadow-core-left" />
            <span className="foot-shadow foot-shadow-core foot-shadow-core-right" />
          </div>

          <div className="refined-stage refined-avatar-stage">
            <div className="refined-visual refined-avatar">
              <img
                src="/theo-avatar-hero-crop.png"
                alt="Theo 的灰色西装 Q 版个人形象"
              />
            </div>
          </div>

          <p className="hero-portfolio refined-type-front">PORTFOLIO</p>

          <div className="refined-side-note">
            <p className="side-role">AIGC CONTENT EXPERT<br /><b>/</b>&nbsp; PROJECT PM</p>
            <span className="side-statement">AI-DRIVEN CONTENT.<br />CREATIVE SOLUTIONS.<br />MEASURABLE IMPACT.</span>
          </div>
        </div>

        <div className="hero-progress" aria-hidden="true"><span className="active" /><span /><span /><i /></div>

        <div className="refined-footer shell">
          <a href="#about"><span>SCROLL<br />DOWN</span><b aria-hidden="true">↓</b></a>
          <p />
          <span className="hero-page">01 <i /></span>
        </div>
      </section>

      <section className="about section shell" id="about">
        <TextReveal className="section-kicker">
          <span>01</span>
          <p>ABOUT / EXPERIENCE</p>
        </TextReveal>
        <div className="about-grid">
          <Reveal className="about-visual" delay={0.05}>
            <AboutCamcorder />
          </Reveal>
          <Reveal className="about-copy" delay={0.1}>
            <p className="about-eyebrow">HELLO, I&apos;M THEO.</p>
            <p className="lead">
              我是一名从电商增长一线走向
              <em> AIGC 内容与项目管理</em>的复合型创作者。
            </p>
            <p className="body-copy">
              过去五年，我持续在内容、流量、用户与商业结果之间寻找最有效的连接方式。
              现在，我把这套业务理解带入 AIGC：不仅关注“生成了什么”，更关注它为什么有效、
              如何规模化，以及怎样真正服务于品牌增长。
            </p>
            <div className="stats">
              <div>
                <strong>5+</strong>
                <span>年商业运营经验</span>
              </div>
              <div>
                <strong>20+</strong>
                <span>内容与项目实践</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>AI 工具深度应用</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="career-path" delay={0.12}>
          <div className="career-path-heading">
            <p>CAREER PATH</p>
            <h3>工作经历</h3>
          </div>
          <div className="career-timeline">
            {careerPath.map((item) => (
              <article className="career-item" key={item.period}>
                <span className="career-node" aria-hidden="true" />
                <p className="career-period">{item.period}</p>
                <h4>{item.title}</h4>
                <span className="career-role">{item.role}</span>
                <p className="career-description">{item.description}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <PortfolioWheel kind="video" />
      <ImagePortfolio />

      <section className="projects section" id="projects">
        <div className="shell">
          <TextReveal className="section-heading">
            <div className="section-kicker">
              <span>04</span>
              <p>SELECTED WORKS</p>
            </div>
            <h2>PROJECT EXPERIENCE</h2>
            <p>从业务问题出发，建立可复制、可扩展的 AIGC 内容生产能力。</p>
          </TextReveal>
          <ProjectExperience />
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <TextReveal className="section-heading compact">
          <div className="section-kicker">
            <span>05</span>
            <p>CORE STRENGTHS</p>
          </div>
          <h2>我能带来的价值</h2>
        </TextReveal>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <Reveal className={`strength-card strength-${item.visual}`} delay={index * 0.1} key={item.number}>
              <div className="strength-card-copy">
                <span className="strength-number">{item.number}</span>
                <p className="strength-en">{item.en}</p>
                <h3>{item.title}</h3>
                <p className="strength-description">{item.text}</p>
                <div className="strength-tags" aria-label={`${item.title}关键词`}>
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <StrengthVisual type={item.visual} />
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <Reveal className="shell contact-inner">
          <p className="contact-label">LET&apos;S CREATE SOMETHING MEANINGFUL</p>
          <h2>
            有好想法？
            <br />
            <span>一起让它发生。</span>
          </h2>
          <a className="email-link" href="mailto:contact@theozhou.cn">
            contact@theozhou.cn <span>↗</span>
          </a>
          <div className="footer-bar">
            <p>© 2026 QIXIANG ZHOU</p>
            <div>
              <a href="#home">返回顶部 ↑</a>
            </div>
          </div>
        </Reveal>
      </footer>
    </main>
  );
}
