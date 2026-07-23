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

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-motion" aria-hidden="true">
          <span className="orb orb-one" />
          <span className="orb orb-two" />
          <span className="orb orb-three" />
          <div className="grid-field" />
        </div>
        <nav className="nav shell" aria-label="主导航">
          <a className="logo" href="#home" aria-label="返回首页">
            QX<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">关于</a>
            <a href="#projects">项目</a>
            <a href="#strengths">优势</a>
          </div>
          <a className="nav-contact" href="#contact">
            联系我 <span>↗</span>
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="eyebrow">
            <span className="status-dot" />
            AVAILABLE FOR NEW OPPORTUNITIES
          </div>
          <h1>
            AI CAN CREATE.
            <br />
            <span>I MAKE IT MATTER.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              周琦翔 / AIGC 内容专家 &amp; 项目 PM
              <br />
              用内容策略与生成式技术，创造可被感知的商业价值。
            </p>
            <a className="circle-link" href="#about" aria-label="向下查看">
              ↓
            </a>
          </div>
        </div>
        <p className="hero-side-note">PORTFOLIO · 2026</p>
      </section>

      <section className="about section shell" id="about">
        <div className="section-kicker">
          <span>01</span>
          <p>ABOUT / EXPERIENCE</p>
        </div>
        <div className="about-grid">
          <div className="portrait">
            <div className="portrait-glow" />
            <div className="portrait-copy">
              <span>QIXIANG ZHOU</span>
              <strong>QX</strong>
              <p>AIGC · CONTENT · PM</p>
            </div>
          </div>
          <div className="about-copy">
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
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="shell">
          <div className="section-heading">
            <div className="section-kicker">
              <span>02</span>
              <p>SELECTED WORKS</p>
            </div>
            <h2>精选项目</h2>
            <p>把创意、工具与商业目标组织成完整作品。</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.className}`} key={project.index}>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="section-heading compact">
          <div className="section-kicker">
            <span>03</span>
            <p>CORE STRENGTHS</p>
          </div>
          <h2>我能带来的价值</h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <span className="strength-number">{item.number}</span>
              <p className="strength-en">{item.en}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="card-mark">✦</div>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="shell contact-inner">
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
        </div>
      </footer>
    </main>
  );
}
