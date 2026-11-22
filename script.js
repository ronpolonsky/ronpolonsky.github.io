'use strict';
(() => {
  const data = window.siteContent || {};
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const safeURL = value => {
    try {
      const url = new URL(value, location.href);
      return ['http:', 'https:', 'mailto:', 'file:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const addLinks = (target, links) => {
    for (const link of links || []) {
      const url = safeURL(link.url);
      if (!url) continue;
      const a = el('a', '', link.label);
      a.href = url;
      target.append(a);
    }
  };
  const addImage = (parent, src, className, alt) => {
    if (!src || !safeURL(src)) return;
    const image = el('img', className);
    image.src = safeURL(src);
    image.alt = alt;
    image.loading = 'lazy';
    parent.append(image);
  };
  if (data.bio) document.getElementById('bio').textContent = data.bio;
  if (data.portrait) {
    const portrait = document.getElementById('portrait');
    portrait.replaceChildren();
    portrait.removeAttribute('role');
    portrait.removeAttribute('aria-label');
    addImage(portrait, data.portrait, '', 'Ron Polonsky');
  }
  if (data.links?.length) {
    const links = document.getElementById('profile-links');
    links.replaceChildren();
    addLinks(links, data.links);
  }
  if (data.researchIntro) {
    const intro = document.getElementById('research-intro');
    intro.textContent = data.researchIntro;
    intro.hidden = false;
  }
  const papers = data.papers || [];
  const paperList = document.getElementById('papers');
  if (papers.length) paperList.replaceChildren();
  const cards = papers.map(paper => {
    const card = el('article', 'paper');
    addImage(card, paper.image, 'paper-image', `${paper.title} illustration`);
    const body = el('div', 'paper-body');
    const title = el('h3');
    const paperURL = safeURL(paper.links?.[0]?.url || '');
    if (paperURL && paper.links?.length) {
      const link = el('a', '', paper.title);
      link.href = paperURL;
      title.append(link);
    } else title.textContent = paper.title;
    body.append(title);
    if (paper.authors) {
      const authors = el('p', 'meta');
      paper.authors.split(/(Ron Polonsky)/).forEach(part => {
        authors.append(part === 'Ron Polonsky' ? el('strong', '', part) : document.createTextNode(part));
      });
      body.append(authors);
    }
    if (paper.venue) body.append(el('p', 'meta', paper.venue));
    if (paper.note) body.append(el('p', 'meta', paper.note));
    if (paper.description) body.append(el('p', '', paper.description));
    const links = el('div', 'pills');
    addLinks(links, paper.links);
    if (links.children.length) body.append(links);
    card.append(body);
    paperList.append(card);
    return { card, tags: paper.tags || [] };
  });
  const tags = [...new Set(papers.flatMap(p => p.tags || []))].filter(tag => tag !== 'All');
  const filters = document.getElementById('filters');
  if (tags.length && filters) {
    const filters = document.getElementById('filters');
    filters.hidden = false;
    for (const tag of ['All', ...tags]) {
      const button = el('button', '', tag);
      button.type = 'button';
      button.setAttribute('aria-pressed', String(tag === 'All'));
      button.addEventListener('click', () => {
        for (const b of filters.children) b.setAttribute('aria-pressed', String(b === button));
        for (const item of cards) item.card.hidden = tag !== 'All' && !item.tags.includes(tag);
        const count = cards.filter(item => !item.card.hidden).length;
        document.getElementById('filter-status').textContent = `${count} research ${count === 1 ? 'item' : 'items'} shown`;
      });
      filters.append(button);
    }
  }
  for (const key of ['education', 'experience', 'service', 'teaching']) {
    const entries = data[key] || [];
    if (!entries.length) continue;
    const target = document.getElementById(`${key}-list`);
    target.replaceChildren();
    const section = document.getElementById(`${key}-section`);
    if (section) section.hidden = false;
    for (const entry of entries) {
      const article = el('article', 'entry');
      addImage(article, entry.image, 'entry-logo', '');
      const body = el('div', 'entry-body');
      body.append(el('h3', '', entry.title));
      if (entry.subtitle) body.append(el('p', '', entry.subtitle));
      if (entry.date) body.append(el('p', 'meta', entry.date));
      if (entry.description) body.append(el('p', '', entry.description));
      article.append(body);
      target.append(article);
    }
  }
  document.getElementById('year').textContent = new Date().getFullYear();
  const toggle = document.getElementById('theme-toggle');
  const syncTheme = () => toggle.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  syncTheme();
  toggle.addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch {}
    syncTheme();
  });
  const navLinks = [...document.querySelectorAll('.nav-links a')];
  const updateNavigation = () => {
    let current = '#top';
    for (const link of navLinks) {
      if (document.querySelector(link.hash).getBoundingClientRect().top <= 160) current = link.hash;
    }
    for (const link of navLinks) {
      if (link.hash === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };
  window.addEventListener('scroll', updateNavigation, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
