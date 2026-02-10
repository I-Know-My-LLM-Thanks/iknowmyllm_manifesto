<template>
  <div class="site">
    <!-- Navigation -->
    <header class="nav">
      <div class="container nav-inner">
        <NuxtLink to="/" class="logo">
          <img src="/logo.jpg" alt="Trustworthy AI Manifesto" class="logo-img" />
          <span class="logo-text">I Know My LLM</span>
        </NuxtLink>
        <button class="nav-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav class="nav-links" :class="{ open: menuOpen }">
          <NuxtLink to="/" @click="menuOpen = false">Manifesto</NuxtLink>
          <NuxtLink to="/resources" @click="menuOpen = false">Research Tools</NuxtLink>
          <a href="/#sign" class="nav-cta" @click="menuOpen = false">Sign the Manifesto</a>
        </nav>
      </div>
    </header>

    <!-- Main -->
    <main><slot /></main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-content">
        <div class="footer-grid">
          <div class="footer-section">
            <div class="footer-brand">
              <img src="/logo.jpg" alt="Trustworthy AI Manifesto" class="footer-logo" />
              <h4>About</h4>
            </div>
            <p>A community-driven initiative promoting transparency, accountability, and ethical practices in AI platforms.</p>
          </div>
          <div class="footer-section">
            <h4>Navigate</h4>
            <nav class="footer-nav">
              <NuxtLink to="/">Manifesto</NuxtLink>
              <NuxtLink to="/resources">Research Tools</NuxtLink>
              <a href="/#sign">Sign</a>
            </nav>
          </div>
          <div class="footer-section">
            <h4>Connect</h4>
            <nav class="footer-nav">
              <a href="https://github.com/iknowmyllm" target="_blank" rel="noopener">GitHub</a>
              <a href="https://twitter.com/hashtag/IKnowMyLLM" target="_blank" rel="noopener">#IKnowMyLLM</a>
            </nav>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="disclaimer-text">Educational guidance only. Not legal advice. Do your own research.</p>
          <p class="copyright">© {{ new Date().getFullYear() }} I Know My LLM</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main { flex: 1; }

/* Nav */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 900;
  font-size: 1rem;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.logo-img {
  height: 36px;
  width: auto;
  border-radius: 4px;
}

.logo-text {
  display: block;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.nav-toggle span {
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  transition: var(--transition);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: var(--text-secondary);
  font-size: 0.85rem;
  font-weight: 500;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent);
}

.nav-cta {
  background: var(--accent);
  color: #fff !important;
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  font-weight: 600;
}

.nav-cta:hover {
  opacity: 0.9;
}

/* Footer */
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 3rem 0 1.5rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h4 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.footer-brand h4 {
  margin-bottom: 0;
}

.footer-logo {
  height: 40px;
  width: auto;
  border-radius: 4px;
}

.footer-section p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-nav a {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.footer-nav a:hover {
  color: var(--accent);
}

.footer-bottom {
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  text-align: center;
}

.disclaimer-text {
  color: var(--text-muted);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.copyright {
  color: var(--text-muted);
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .logo-text {
    display: none;
  }

  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--page-bg);
    flex-direction: column;
    justify-content: flex-start;
    padding: 2rem;
    gap: 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-links.open {
    transform: translateX(0);
  }

  .nav-links a {
    font-size: 1.1rem;
    padding: 0.75rem 0;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
