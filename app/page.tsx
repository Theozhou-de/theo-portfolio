import Aurora from "./Aurora";
import { CursorGlow, ImageReveal, Reveal, TextReveal, TiltCard } from "./Animation";

const projects = [
  {
    index: "01",
    type: "AIGC CAMPAIGN",
    title: "品牌视觉与内容生产",
    subtitle: "从创意概念、工作流设计到批量内容交付",
    className: "project-violet",
  },
  {
    index: "02",
    type: "AI VIDEO",
    title: "AI 商业影像实验",
    subtitle: "用生成式影像重构广告内容的制作效率",
    className: "project-blue",
  },
  {
    index: "03",
    type: "PROJECT MANAGEMENT",
    title: "AIGC 项目全链路管理",
    subtitle: "拆解复杂目标，连接创意、技术与业务结果",
    className: "project-amber",
  },
];

const strengths = [
  {
    number: "01",
    title: "内容策略",
    en: "CONTENT STRATEGY",
    text: "理解品牌与用户，把模糊需求转化为清晰、可执行的内容方案。",
  },
  {
    number: "02",
    title: "AIGC 工作流",
    en: "AIGC WORKFLOW",
    text: "熟悉图像、视频与文本生成链路，持续优化质量、效率与一致性。",
  },
  {
    number: "03",
    title: "项目管理",
    en: "PROJECT MANAGEMENT",
    text: "从目标拆解、资源协同到交付复盘，推动跨团队项目稳定落地。",
  },
  {
    number: "04",
    title: "业务转化",
    en: "BUSINESS IMPACT",
    text: "五年电商实战背景，以真实业务指标检验创意与内容价值。",
  },
];

const heroWorks = [
  { src: "/theo-hero-obsidian.png", label: "OBSIDIAN / 01", position: "50% 48%" },
  { src: "/theo-hero-scene.png", label: "VIOLET WORLD", position: "50% 66%" },
  { src: "/theo-hero-visual.png", label: "MATERIAL / 01", position: "50% 72%" },
  { src: "/theo-hero-scene.png", label: "AI LANDSCAPE", position: "50% 42%" },
  { src: "/theo-hero-obsidian.png", label: "GENERATIVE FORM", position: "50% 38%" },
];

export default function Home() {
  return (
    <main>
      <CursorGlow />
      <nav className="editorial-nav shell" aria-label="主导航">
        <a className="editorial-logo" href="#home" aria-label="返回首页">
          <span>THEO</span>
          <i>/</i>
          <span>ZHOU</span>
        </a>
        <div className="editorial-nav-links">
          <a href="#projects">WORK</a>
          <a href="#about">ABOUT</a>
          <a href="#strengths">EXPERTISE</a>
        </div>
        <a className="editorial-contact" href="#contact">
          <span>LET&apos;S TALK</span>
          <b aria-hidden="true">↗</b>
        </a>
      </nav>

      <section className="hero hero-editorial-root" id="home">
        <Aurora />
        <div className="editorial-grain" aria-hidden="true" />

        <div className="refined-hero shell">
          <div className="refined-copy">
            <p className="refined-index">PORTFOLIO / 2026</p>
            <h1 className="refined-name" aria-label="THEOZHOU PORTFOLIO">
              <span>THEOZHOU</span>
              <span>PORTFOLIO</span>
            </h1>
            <div className="refined-role">
              <span className="refined-dot" aria-hidden="true" />
              <p>AIGC内容专家/AIGC项目PM</p>
              <small>内燃机的发明不是为了让马车夫失业，而你可以选择手握方向盘</small>
            </div>
          </div>

          <div className="refined-stage refined-avatar-stage">
            <div className="refined-halo" aria-hidden="true" />
            <span className="avatar-title avatar-title-back" aria-hidden="true">THEO</span>
            <ImageReveal className="refined-visual refined-avatar">
              <img
                src="/theo-avatar-v2.png"
                alt="Theo 的灰色西装 Q 版个人形象"
              />
              <div className="refined-visual-wash" aria-hidden="true" />
            </ImageReveal>
            <span className="avatar-title avatar-title-front" aria-hidden="true">ZHOU</span>
            <span className="refined-star star-one" aria-hidden="true">✦</span>
            <span className="refined-star star-two" aria-hidden="true">✦</span>
          </div>

          <div className="refined-side-note">
            <p>CREATIVE DIRECTION<br />AI WORKFLOW<br />PROJECT DELIVERY</p>
            <span>SHANGHAI · CHINA</span>
          </div>
        </div>

        <div className="hero-marquee" aria-label="精选作品预览">
          <div className="hero-marquee-track">
            {[...heroWorks, ...heroWorks].map((work, index) => (
              <a className="hero-work-card" href="#projects" key={`${work.label}-${index}`}>
                <img src={work.src} alt="" style={{ objectPosition: work.position }} />
                <span>{String((index % heroWorks.length) + 1).padStart(2, "0")} / {work.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="refined-footer shell">
          <a href="#about"><span>SCROLL TO EXPLORE</span><b aria-hidden="true">↓</b></a>
          <p>SELECTED WORKS · PERSONAL ARCHIVE</p>
          <span>© 2026</span>
        </div>
      </section>

      <section className="about section shell" id="about">
        <TextReveal className="section-kicker">
          <span>01</span>
          <p>ABOUT / EXPERIENCE</p>
        </TextReveal>
        <div className="about-grid">
          <ImageReveal className="portrait">
            <div className="portrait-glow" />
            <div className="portrait-copy">
              <span>QIXIANG ZHOU</span>
              <strong>QX</strong>
              <p>AIGC · CONTENT · PM</p>
            </div>
          </ImageReveal>
          <Reveal className="about-copy" delay={0.1}>
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
            <div className="experience-row">
              <span>2021 — NOW</span>
              <p>
                <b>电商运营 / AIGC 内容实践</b>
                <small>内容策略 · 项目推进 · AI 工作流 · 数据分析</small>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <TextReveal className="section-heading">
            <div className="section-kicker">
              <span>02</span>
              <p>SELECTED WORKS</p>
            </div>
            <h2>精选项目</h2>
            <p>把创意、工具与商业目标组织成完整作品。</p>
          </TextReveal>
          <div className="project-list">
            {projects.map((project, index) => (
              <TiltCard className={`project-card ${project.className}`} delay={index * 0.15} key={project.index}>
                <div className="project-no">{project.index}</div>
                <div className="project-art" aria-hidden="true">
                  <span className="art-ring" />
                  <span className="art-core" />
                  <span className="art-line line-a" />
                  <span className="art-line line-b" />
                </div>
                <div className="project-meta">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                  <span>{project.subtitle}</span>
                </div>
                <div className="project-arrow">↗</div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <TextReveal className="section-heading compact">
          <div className="section-kicker">
            <span>03</span>
            <p>CORE STRENGTHS</p>
          </div>
          <h2>我能带来的价值</h2>
        </TextReveal>
        <div className="strength-grid">
          {strengths.map((item, index) => (
            <Reveal className="strength-card" delay={index * 0.1} key={item.number}>
              <span className="strength-number">{item.number}</span>
              <p className="strength-en">{item.en}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-mark">✦</div>
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
          <a className="email-link" href="mailto:contact@qixiangzhou.com">
            contact@qixiangzhou.com <span>↗</span>
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
