import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, Check, ChevronDown,
  Code2, Command, Cpu, Download, Github, Globe2, Layers3, Linkedin,
  Mail, Menu, Moon, Network, RadioTower, Send, Server, ShieldCheck,
  Sun, Terminal, X, Zap
} from 'lucide-react';
import './styles.css';

const projects = [
  {
    no: '01', type: 'EDTECH / WEB + MOBILE', title: 'Skawan Exam CBT',
    desc: 'Ekosistem ujian berbasis komputer dengan live monitoring, aplikasi Exambro Android, proteksi lock-screen, dan violation tracking.',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'Android'],
    icon: <Command size={23} />, tone: 'violet',
    outcome: 'Menyatukan pengalaman ujian siswa dan pemantauan pengawas dalam satu alur kerja.'
  },
  {
    no: '02', type: 'SCHOOL MANAGEMENT', title: 'Digital Master Book',
    desc: 'Sistem manajemen sekolah terpadu untuk administrasi akademik dan generator Surat Keterangan Lulus dengan QR Code.',
    tags: ['PHP', 'MySQL', 'Tailwind CSS', 'TCPDF'],
    icon: <Layers3 size={23} />, tone: 'blue',
    outcome: 'Mempercepat proses administrasi akademik dan membantu validasi dokumen digital.'
  },
  {
    no: '03', type: 'NETWORK AUTOMATION', title: 'Skawan Net · Mini ISP',
    desc: 'Konsep platform billing otomatis dan pengelolaan pelanggan untuk Teaching Factory ISP dengan integrasi MikroTik API.',
    tags: ['MikroTik API', 'Node.js', 'PostgreSQL', 'RouterOS'],
    icon: <RadioTower size={23} />, tone: 'green',
    outcome: 'Menghubungkan operasi jaringan, data pelanggan, dan proses billing ke satu sistem.'
  },
  {
    no: '04', type: 'QUANT / AUTOMATION', title: 'Swarm Sentiment Engine',
    desc: 'Eksperimen Python untuk screening saham IHSG, indikator teknikal, dan simulasi analisis sentimen multi-agent.',
    tags: ['Python', 'Pandas', 'VWAP', 'EMA / MACD'],
    icon: <Cpu size={23} />, tone: 'orange',
    outcome: 'Mengeksplorasi bagaimana sinyal teknikal dan perspektif agen dapat dirangkum untuk analisis.'
  }
];

const skillGroups = [
  { icon: <Code2 size={19}/>, title: 'Frontend engineering', note: 'Interfaces & experiences', items: ['React', 'React Native', 'Vite', 'Tailwind CSS', 'Bootstrap'] },
  { icon: <Server size={19}/>, title: 'Backend & data', note: 'APIs, logic & persistence', items: ['Node.js', 'Express', 'PHP Native', 'MySQL', 'PostgreSQL', 'Supabase'] },
  { icon: <Network size={19}/>, title: 'Network & security', note: 'Connectivity by design', items: ['MikroTik RouterOS v7', 'VLAN', 'WireGuard VPN', 'Dynamic Routing', 'Firewall Filtering'] },
  { icon: <Globe2 size={19}/>, title: 'DevOps & infrastructure', note: 'Deploy, operate, observe', items: ['Debian Linux', 'VirtualBox', 'VMware ESXi', 'CloudPanel', 'NGINX', 'GCP', 'Terraform'] },
  { icon: <Zap size={19}/>, title: 'Trading & automation', note: 'Data-driven experiments', items: ['Python', 'Pandas', 'Stockbit Screener', 'VWAP', 'EMA / MACD', 'Multi-agent simulation'] }
];

const milestones = [
  { year: 'FOUNDATION', title: 'TJKT & Network Lab', body: 'Membangun fondasi jaringan, server, routing, dan praktik troubleshooting.' },
  { year: 'SYSTEMS', title: 'School Digitalization', body: 'Mengembangkan aplikasi CBT dan sistem informasi untuk kebutuhan sekolah.' },
  { year: 'INFRASTRUCTURE', title: 'Teaching Factory ISP', body: 'Eksplorasi automasi billing, pengelolaan pelanggan, dan integrasi MikroTik.' },
  { year: 'CONTINUOUS', title: 'Trainer & Experimenter', body: 'Berbagi pengetahuan jaringan sekaligus bereksperimen dengan software dan data.' }
];

function App() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [terminalLine, setTerminalLine] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalCommands = [
    { cmd: 'system status --all', result: ['network ............ online', 'services ........... 12 healthy', 'uptime ............. stable'] },
    { cmd: 'route inspect --summary', result: ['vlans .............. segmented', 'gateway ............ reachable', 'firewall ........... active'] },
    { cmd: 'deploy portfolio --check', result: ['build .............. ready', 'accessibility ...... in progress', 'status ............. shipping'] }
  ];
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    const timer = setInterval(() => setTerminalLine(n => (n + 1) % terminalCommands.length), 4500);
    return () => clearInterval(timer);
  }, []);
  const sendEmail = () => { window.location.href = 'mailto:bagus.djamasa@gmail.com?subject=Kolaborasi%20Proyek'; };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('bagus.djamasa@gmail.com');
      setCopied(true); setTimeout(() => setCopied(false), 1800);
    } catch { sendEmail(); }
  };

  return <div className="site-shell">
    <div className="topline"><span><span className="status-dot"/> AVAILABLE FOR SELECT PROJECTS</span><span className="topline-right">PURWOKERTO, ID <span className="top-sep">/</span> UTC+7</span></div>
    <header className="nav-wrap">
      <a className="brand" href="#home" aria-label="Bagus Nurhuda home"><span className="brand-mark">BN<span>.</span></span><span className="brand-name">BAGUS NURHUDA<small>TECH PORTFOLIO</small></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a><a href="#stack" onClick={() => setMenuOpen(false)}>Stack</a><a href="#labs" onClick={() => setMenuOpen(false)}>Labs & teaching</a>
        <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={14}/></a>
      </nav>
      <div className="nav-actions"><button className="theme-btn" aria-label="Ganti tema" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button><button className="mobile-menu" aria-label="Buka menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> SOFTWARE × NETWORK × SYSTEMS</div>
          <h1>Building systems<br/>that <span className="gradient-text">connect.</span></h1>
          <p className="hero-lead">Interactive Tech Specialist &amp; Systems Builder.</p>
          <p className="hero-description">Saya menghubungkan software engineering, arsitektur jaringan, dan infrastruktur server untuk membangun solusi digital yang berguna di dunia nyata.</p>
          <div className="hero-roles"><span>FULL-STACK DEVELOPER</span><i/> <span>NETWORK &amp; SERVER</span><i/> <span>MIKROTIK TRAINER</span></div>
          <div className="hero-ctas"><a className="btn btn-primary" href="#work">Explore projects <ArrowDownRight size={17}/></a><a className="btn btn-quiet" href="#contact">Contact me <ArrowUpRight size={16}/></a></div>
          <div className="hero-footnote"><span className="mini-avatar">MB</span><span>From packets to pixels.<br/><b>One system at a time.</b></span><span className="hero-footnote-line"/></div>
        </div>
        <div className="hero-visual">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="visual-grid"/>
          <div className="floating-chip chip-top"><span className="chip-pulse"/> SYSTEMS ONLINE</div>
          <div className="core-card">
            <div className="core-top"><span><span className="status-dot"/> LIVE ENVIRONMENT</span><span className="core-dots">•••</span></div>
            <div className="core-symbol"><div className="symbol-ring"><Network size={37}/></div><span className="symbol-cross">+</span></div>
            <div className="core-title">Infrastructure<br/><em>meets intelligence.</em></div>
            <div className="core-stats"><div><b>04</b><small>CORE DOMAINS</small></div><div><b>∞</b><small>IDEAS TO SHIP</small></div></div>
          </div>
          <div className="floating-chip chip-bottom"><Terminal size={14}/> BUILD · DEPLOY · IMPROVE</div>
          <div className="decor-label label-left">FIG. 01 <span>— SYSTEM MAP</span></div><div className="decor-label label-right">0xBN / 2026</div>
        </div>
      </section>

      <section className="signal-strip"><div className="signal-item"><span className="signal-icon"><Code2 size={17}/></span><span><b>Software</b><small>Apps &amp; platforms</small></span></div><div className="signal-cross">×</div><div className="signal-item"><span className="signal-icon"><Network size={17}/></span><span><b>Connectivity</b><small>Network architecture</small></span></div><div className="signal-cross">×</div><div className="signal-item"><span className="signal-icon"><Server size={17}/></span><span><b>Infrastructure</b><small>Servers &amp; automation</small></span></div><div className="signal-note">END-TO-END THINKING <ArrowUpRight size={14}/></div></section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading"><div><span className="section-index">01 / ABOUT</span><h2>Curious by nature.<br/><span className="muted-heading">Systems-minded by practice.</span></h2></div><p className="section-intro">Teknologi paling menarik saat semua bagiannya bekerja bersama—dari konfigurasi jaringan hingga antarmuka yang dipakai manusia.</p></div>
        <div className="about-grid"><div className="about-copy"><p className="dropcap">Saya Muhammad Bagus Nurhuda, praktisi teknologi dengan fokus lintas disiplin: pengembangan aplikasi, administrasi jaringan dan server, serta pembelajaran teknologi.</p><p>Saya menikmati proses memahami masalah dari akarnya, merancang sistem yang masuk akal, lalu mengubahnya menjadi sesuatu yang dapat digunakan dan dikembangkan. Pendekatan ini membentuk cara saya bekerja di proyek software maupun infrastruktur.</p><a className="text-link" href="#contact">Let’s build something useful <ArrowRight size={16}/></a></div>
          <div className="principles"><div className="principle"><span className="principle-no">A</span><div><b>Think end-to-end</b><p>Memahami hubungan antara user, aplikasi, jaringan, dan server.</p></div><ArrowUpRight size={16}/></div><div className="principle"><span className="principle-no">B</span><div><b>Build for real use</b><p>Berangkat dari kebutuhan operasional, bukan sekadar demo.</p></div><ArrowUpRight size={16}/></div><div className="principle"><span className="principle-no">C</span><div><b>Keep learning</b><p>Mendokumentasikan eksperimen dan membagikan pengetahuan.</p></div><ArrowUpRight size={16}/></div></div>
        </div>
        <div className="timeline"><div className="timeline-head"><span className="section-index">THE JOURNEY</span><span className="mono muted">A CONTINUOUS LOOP ↗</span></div><div className="timeline-track">{milestones.map((m,i)=><div className="milestone" key={m.title}><span className="milestone-dot">{String(i+1).padStart(2,'0')}</span><span className="milestone-year">{m.year}</span><h3>{m.title}</h3><p>{m.body}</p></div>)}</div></div>
      </section>

      <section className="work-section" id="work"><div className="section-wrap"><div className="section-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>Ideas turned into<br/><span className="muted-heading">working systems.</span></h2></div><p className="section-intro">Empat studi kasus yang merepresentasikan cara saya memecahkan masalah lintas software, network, dan data.</p></div>
        <div className="project-grid">{projects.map((p)=><article className={`project-card ${p.tone}`} key={p.no}><div className="project-card-top"><span className="project-no">{p.no} <span>/ 04</span></span><span className="project-icon">{p.icon}</span></div><div className="project-type">{p.type}</div><h3>{p.title}</h3><p className="project-desc">{p.desc}</p><div className="tag-list">{p.tags.map(t=><span key={t}>{t}</span>)}</div><button className="project-open" onClick={() => setActiveProject(p)} aria-label={`Lihat detail ${p.title}`}>Explore case study <ArrowUpRight size={16}/></button><div className="project-art"><div className="art-window"><div className="art-window-top"><span/><span/><span/><small>{p.no} / SYSTEM PREVIEW</small></div>{p.no === '01' ? <div className="exam-art"><div className="art-sidebar"/><div className="art-main"><span/><span/><span/><div className="art-chart"><i/><i/><i/><i/><i/><i/><i/></div></div></div> : p.no === '02' ? <div className="book-art"><div className="book-sidebar"/><div className="book-paper"><b>STUDENT RECORD</b><span/><span/><span/><div className="qr"><i/></div></div></div> : p.no === '03' ? <div className="network-art"><i/><i/><i/><i/><div className="network-lines"/></div> : <div className="data-art"><div className="data-bars">{[28,52,38,74,47,90,64,82,56,96,72,45].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}</div><div className="data-caption">SIGNAL / MOMENTUM</div></div>}</div></div></article>)}</div>
        <div className="work-bottom"><span>MORE EXPERIMENTS, DOCUMENTATION &amp; SOURCE CODE</span><a href="#labs">Visit the lab <ArrowUpRight size={15}/></a></div>
      </div></section>

      <section className="section-wrap stack-section" id="stack"><div className="section-heading"><div><span className="section-index">03 / TECHNICAL STACK</span><h2>The tools are different.<br/><span className="muted-heading">The mindset is one.</span></h2></div><p className="section-intro">Peta kemampuan yang tumbuh dari membangun antarmuka sampai mengelola infrastruktur yang menopangnya.</p></div>
        <div className="skills-layout"><div className="skills-note"><div className="stack-graphic"><div className="stack-square sq-one"><Code2 size={22}/></div><div className="stack-square sq-two"><Network size={22}/></div><div className="stack-square sq-three"><Server size={22}/></div><div className="stack-square sq-four"><ShieldCheck size={22}/></div><div className="stack-center">BN<span>.</span></div></div><span className="section-index">ARCHITECTURE MINDSET</span><h3>Every layer<br/>has a purpose.</h3><p>Memilih teknologi berdasarkan konteks, kebutuhan pengguna, dan kemudahan pemeliharaan.</p></div>
          <div className="skill-list">{skillGroups.map((g,i)=><div className="skill-row" key={g.title}><div className="skill-row-head"><span className="skill-icon">{g.icon}</span><div><h3>{g.title}</h3><p>{g.note}</p></div><span className="skill-count">0{i+1}</span></div><div className="skill-tags">{g.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></div>
      </section>

      <section className="labs-section" id="labs"><div className="section-wrap labs-grid"><div className="labs-copy"><span className="section-index">04 / LABS &amp; ACADEMY</span><h2>Learn it.<br/><span className="muted-heading">Build it. Share it.</span></h2><p>Eksperimen adalah bagian dari proses. Dari lab jaringan sampai ruang kelas, tujuannya tetap sama: memahami teknologi lebih dalam dan membantu orang lain berkembang.</p><div className="cert-list"><div className="cert-item"><span className="cert-symbol"><Network size={18}/></span><div><b>MikroTik Certified Trainer</b><small>Training &amp; knowledge sharing</small></div><span className="cert-arrow">↗</span></div><div className="cert-item"><span className="cert-symbol"><ShieldCheck size={18}/></span><div><b>MTCRE / MTCNA</b><small>Routing &amp; network fundamentals</small></div><span className="cert-arrow">↗</span></div></div><p className="small-disclaimer">Detail sertifikasi, masa berlaku, dan statistik pelatihan dapat ditambahkan setelah data resmi tersedia.</p></div>
        <div className="terminal-card"><div className="terminal-head"><div className="terminal-controls"><i/><i/><i/></div><span>bagus@lab:~</span><span className="terminal-live"><span className="status-dot"/> INTERACTIVE CLI</span></div><div className="terminal-body"><div className="terminal-greeting">Welcome to <b>Bagus Lab</b> <span>v1.0.26</span></div><div className="terminal-muted">A small window into how I think.</div><div className="terminal-command"><span>$</span> {terminalCommands[terminalLine].cmd}<span className="cursor"/></div><div className="terminal-output">{terminalCommands[terminalLine].result.map((r,i)=><div key={r}><span className="terminal-check">✓</span> {r}</div>)}</div><div className="terminal-divider"/><div className="terminal-prompt"><span>root@bagus-lab</span> <span>~/experiments</span></div><div className="terminal-bottom">Keep exploring. Keep shipping.<span className="cursor"/></div></div><div className="terminal-foot"><span><span className="status-dot"/> SIMULATION MODE</span><span>AUTO REFRESH ENABLED</span></div></div>
      </div></section>

      <section className="contact-section" id="contact"><div className="section-wrap"><div className="contact-card"><div className="contact-orb orb-a"/><div className="contact-orb orb-b"/><div className="contact-content"><span className="section-index">05 / CONTACT</span><h2>Have a system<br/>to <span className="gradient-text">build?</span></h2><p>Terbuka untuk kolaborasi software, konsultasi jaringan, automasi, dan ide teknologi yang layak dieksplorasi.</p><div className="contact-actions"><button className="btn btn-primary" onClick={sendEmail}>Start a conversation <ArrowUpRight size={16}/></button><button className="btn btn-outline" onClick={copyEmail}>{copied ? <Check size={16}/> : <AtSign size={16}/>} {copied ? 'Email copied' : 'Copy email'}</button></div></div><div className="contact-side"><div className="contact-side-label">PREFERRED CHANNELS</div><a href="mailto:bagus.djamasa@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a><a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><div className="contact-side-note"><span className="status-dot"/> Open to meaningful collaboration</div></div></div></div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">BN<span>.</span></span><span className="brand-name">BAGUS NURHUDA<small>TECH PORTFOLIO</small></span></a><span className="footer-center">DESIGNED TO CONNECT THE DOTS.</span><div className="footer-right"><span>© 2026</span><a href="#home">BACK TO TOP ↑</a></div></footer>

    {activeProject && <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}><button className="modal-close" aria-label="Tutup detail" onClick={() => setActiveProject(null)}><X size={20}/></button><span className="section-index">CASE STUDY / {activeProject.no}</span><div className={`modal-icon ${activeProject.tone}`}>{activeProject.icon}</div><div className="project-type">{activeProject.type}</div><h2 id="modal-title">{activeProject.title}</h2><p>{activeProject.desc}</p><div className="modal-outcome"><span>PROJECT INTENT</span><p>{activeProject.outcome}</p></div><div className="tag-list">{activeProject.tags.map(t=><span key={t}>{t}</span>)}</div><p className="modal-note">Ringkasan ini berdasarkan deskripsi proyek di PRD. Tambahkan tautan demo, repository, metrik, dan screenshot nyata sebelum dipublikasikan.</p><button className="btn btn-primary modal-done" onClick={() => setActiveProject(null)}>Close case study <ArrowRight size={16}/></button></section></div>}
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
