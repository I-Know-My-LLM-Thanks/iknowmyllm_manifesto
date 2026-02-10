<template>
  <div class="manifesto-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg" role="img" aria-label="Clown logo representing AI hype caution - five stage transformation showing the mask behind AI marketing"></div>
      <div class="hero-content">
        <span class="hero-badge">Community Manifesto</span>
        <h1>I Know My LLM</h1>
        <p class="lead">We are uncovering better ways to evaluate AI platforms by doing it and helping others do it.</p>
        <div class="hero-actions">
          <a href="#sign" class="btn btn-primary">Sign the Manifesto</a>
          <a href="#values" class="btn btn-secondary">Read the Values</a>
        </div>
        <p class="signatory-count">Join <strong>{{ signatoryCount }}</strong> signatories committed to trustworthy AI</p>
      </div>
    </section>

    <!-- Core Values -->
    <section id="values" class="section values">
      <div class="container">
        <h2>Core Values</h2>
        <p class="section-intro">
          While we acknowledge that items on the right have value, we have come to value the items on the left more.
        </p>
        
        <div class="values-grid">
          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">01</span>
              <h3>Evidence</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>Promises</h3>
            </div>
            <p class="value-description">
              Verifiable credentials, named references, and demonstrated capabilities over 
              marketing claims, impressive titles, or future-oriented projections.
            </p>
          </div>

          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">02</span>
              <h3>Transparency</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>Hype</h3>
            </div>
            <p class="value-description">
              Clear explanations of limitations and data practices over 
              buzzwords, invented jargon, or claims of proprietary magic.
            </p>
          </div>

          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">03</span>
              <h3>Accountability</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>Obscurity</h3>
            </div>
            <p class="value-description">
              Named leadership with verifiable histories over 
              anonymous teams, offshore entities, or untraceable ownership.
            </p>
          </div>

          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">04</span>
              <h3>Due Diligence</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>Blind Trust</h3>
            </div>
            <p class="value-description">
              Systematic verification through independent research over 
              convenience or urgency-driven decisions.
            </p>
          </div>

          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">05</span>
              <h3>Human Oversight</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>AI Worship</h3>
            </div>
            <p class="value-description">
              Meaningful human control and the ability to understand outcomes over 
              fully automated "hands-off" solutions.
            </p>
          </div>

          <div class="value-pair">
            <div class="value-left">
              <span class="value-number">06</span>
              <h3>Community Wisdom</h3>
            </div>
            <span class="value-vs">over</span>
            <div class="value-right">
              <h3>Isolated Judgment</h3>
            </div>
            <p class="value-description">
              Collective verification and shared experiences over 
              individual assessment or single sources.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Principles -->
    <section class="section principles">
      <div class="container">
        <h2>The 8 Principles</h2>
        <p class="section-intro">Actionable guidelines to protect yourself from AI fraud. These principles are open for community refinement via GitHub.</p>
        
        <div class="principles-compact">
          <div class="principle-row">
            <span class="p-num">1</span>
            <div class="p-content">
              <strong>Verify Credentials Thoroughly</strong>
              <span>Dig into roles, histories, and team depth—beyond profiles, seek independent confirmation.</span>
              <em class="principle-example">🎪 Like "100+ years combined experience" that's actually 35 years total.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">2</span>
            <div class="p-content">
              <strong>Demand Concrete Proof</strong>
              <span>Require working demos, named references, and verifiable case studies before sharing data.</span>
              <em class="principle-example">🎪 Not "sign an NDA first, then maybe a demo."</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">3</span>
            <div class="p-content">
              <strong>Spot Hype and Jargon</strong>
              <span>Identify invented terms, generic AI copy, and unsubstantiated claims as red flags.</span>
              <em class="principle-example">🎪 Like "Cognitive Knowledge Orchestration™" with zero Google Scholar results.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">4</span>
            <div class="p-content">
              <strong>Audit Security Independently</strong>
              <span>Check certifications, data practices, and access controls—don't trust words alone.</span>
              <em class="principle-example">🎪 Real security = audited certifications, not reassuring prose.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">5</span>
            <div class="p-content">
              <strong>Research Regulatory Standing</strong>
              <span>Review FINRA, SEC, FCA filings, and physical/financial legitimacy for stability.</span>
              <em class="principle-example">🎪 "Senior bank executive" with no FINRA registration = project manager.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">6</span>
            <div class="p-content">
              <strong>Question Urgency and Terms</strong>
              <span>Challenge artificial scarcity, NDAs, and exit options—ensure fair, transparent deals.</span>
              <em class="principle-example">🎪 "Limited spots available" is manipulation, not opportunity.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">7</span>
            <div class="p-content">
              <strong>Document Everything</strong>
              <span>Record claims, communications, and interactions for accountability.</span>
              <em class="principle-example">🎪 Screenshots today, evidence tomorrow.</em>
            </div>
          </div>
          <div class="principle-row">
            <span class="p-num">8</span>
            <div class="p-content">
              <strong>Leverage Instincts and Community</strong>
              <span>Trust your gut; consult shared wisdom and collective experiences when in doubt.</span>
              <em class="principle-example">🎪 If it feels wrong, it probably is. Ask around.</em>
            </div>
          </div>
        </div>

        <div class="github-cta">
          <p>
            <strong>Help improve these principles.</strong> 
            <a href="https://github.com/iknowmyllm/iknowmyllm-manifesto" target="_blank">
              Edit on GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>

    <!-- Hall of Red Flags -->
    <section class="section red-flags">
      <div class="container">
        <h2>🎪 Hall of Amusing Red Flags</h2>
        <p class="section-intro">
          Real patterns we've encountered (anonymized but unembellished). You couldn't make this stuff up.
        </p>

        <div class="flags-grid">
          <div class="flag-card">
            <div class="flag-icon">🧮</div>
            <h4>The "Combined Experience" Math</h4>
            <div class="flag-claim">"100+ years of combined AI experience"</div>
            <div class="flag-reality">
              4 founders × 25 years each? LinkedIn reveals: 35 years total. In AI specifically: 4.
              <em>Apparently time moves differently in startup land.</em>
            </div>
          </div>

          <div class="flag-card">
            <div class="flag-icon">🏦</div>
            <h4>The "Senior Bank Executive"</h4>
            <div class="flag-claim">"Former senior executive managing billions"</div>
            <div class="flag-reality">
              FINRA shows no registration. LinkedIn reveals "Technology Project Manager" overseeing CRM upgrades.
              <em>By this logic, the night janitor at Goldman Sachs also "worked with billions."</em>
            </div>
          </div>

          <div class="flag-card">
            <div class="flag-icon">📚</div>
            <h4>The Revolutionary Terminology</h4>
            <div class="flag-claim">"Financial AGI with Cognitive Knowledge Orchestration™"</div>
            <div class="flag-reality">
              Google Scholar results: 0. Academic papers: 0. Peer reviews: 0.
              <em>Invented terminology that sounds impressive precisely because no one can evaluate it.</em>
            </div>
          </div>

          <div class="flag-card">
            <div class="flag-icon">🔬</div>
            <h4>The Impressive Case Study</h4>
            <div class="flag-claim">"A leading biotech consortium reduced timelines by 73%"</div>
            <div class="flag-reality">
              "Which consortium?" → "Confidential."<br>
              "Can we speak to them?" → "They prefer not to be contacted."<br>
              <em>The only thing verifiable is that someone typed "73%."</em>
            </div>
          </div>

          <div class="flag-card">
            <div class="flag-icon">🤖</div>
            <h4>The AI-Generated Business Plan</h4>
            <div class="flag-claim">"Operationalizing cross-functional synergies through AI-native methodologies"</div>
            <div class="flag-reality">
              This sentence could describe any software. Or a toaster. Or nothing at all.
              <em>Pro tip: If you can replace "AI" with "blockchain" and it still works, it says nothing.</em>
            </div>
          </div>

          <div class="flag-card">
            <div class="flag-icon">🎭</div>
            <h4>The Exclusive Demo</h4>
            <div class="flag-claim">"Sign this NDA, provide sample data, then we'll schedule a preliminary discussion"</div>
            <div class="flag-reality">
              Translation: "Limit demos" = no working demo. "NDA required" = legal cover for nothing.
              <em>Real platforms: "Here's a sandbox, try it yourself."</em>
            </div>
          </div>
        </div>

        <div class="flags-reminder">
          <p>
            <strong>Remember:</strong> These patterns seem obvious in isolation. 
            They're far less obvious wrapped in professional websites and urgent "limited time" offers.
          </p>
        </div>
      </div>
    </section>

    <!-- Sign Section -->
    <section id="sign" class="section sign-section">
      <div class="container">
        <h2>Sign the Manifesto</h2>
        <p class="section-intro">
          Add your name to the growing community committed to trustworthy AI evaluation.
        </p>

        <div class="sign-grid">
          <div class="sign-form-wrapper">
            <div class="coming-soon-box">
              <div class="coming-soon-icon">🎪</div>
              <h3>Coming Soon</h3>
              <p>Online signing will be available shortly. In the meantime, add your signature via GitHub PR:</p>
              <a href="https://github.com/iknowmyllm/iknowmyllm-manifesto/blob/main/SIGNATORIES.md" target="_blank" class="btn btn-primary">
                Sign on GitHub →
              </a>
              <div class="coming-soon-features">
                <span>✓ Anonymous signatures welcome</span>
                <span>✓ Permanent record</span>
                <span>✓ Community verified</span>
              </div>
            </div>
          </div>

          <div class="sign-info">
            <div class="stats-card">
              <div class="stat">
                <span class="stat-number">{{ signatoryCount }}</span>
                <span class="stat-label">Signatures</span>
              </div>
              <div class="stat">
                <span class="stat-number">{{ commentCount }}</span>
                <span class="stat-label">Comments</span>
              </div>
            </div>

            <div class="share-section">
              <h4>Share the Manifesto</h4>
              <div class="share-buttons">
                <a :href="twitterShareUrl" target="_blank" class="share-btn twitter">
                  𝕏 Share
                </a>
                <a :href="linkedinShareUrl" target="_blank" class="share-btn linkedin">
                  in Share
                </a>
                <button @click="copyLink" class="share-btn copy">
                  {{ copied ? '✓ Copied!' : '🔗 Copy Link' }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resources CTA -->
    <section class="section resources-cta">
      <div class="container">
        <div class="cta-box">
          <h3>Need More Research Tools?</h3>
          <p>
            Verification databases, regulatory resources, red flag checklists, 
            and global AI ethics frameworks.
          </p>
          <NuxtLink to="/resources" class="btn btn-secondary">
            View Research Resources →
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// SEO
useHead({
  title: 'I Know My LLM - AI Manifesto Principles for Trustworthy AI',
  meta: [
    { name: 'description', content: 'A community-driven AI manifesto with 8 actionable principles for evaluating AI platforms. Evidence over promises, transparency over hype. Join the trustworthy AI community.' },
    { name: 'keywords', content: 'AI manifesto principles, trustworthy AI community, AI fraud awareness, AI ethics, evaluate AI platforms, AI red flags' },
    { property: 'og:title', content: 'I Know My LLM - AI Manifesto Principles' },
    { property: 'og:description', content: 'A community-driven standard for evaluating AI platforms. 8 actionable principles to protect yourself from AI fraud.' },
    { property: 'og:image', content: '/hero_banner.jpg' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'I Know My LLM - AI Manifesto Principles' },
    { name: 'twitter:description', content: 'Evidence over promises, transparency over hype. Join the trustworthy AI community.' }
  ]
})

// Data
const signatoryCount = ref(0)
const commentCount = ref(0)
const copied = ref(false)
const signatures = ref([])

// Share URLs
const siteUrl = 'https://iknowmyllm.com'
const shareText = 'I signed the I Know My LLM manifesto. Evidence over promises, transparency over hype.'

const twitterShareUrl = computed(() => 
  `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`
)

const linkedinShareUrl = computed(() => 
  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`
)

// Parse CSV helper
function parseCSV(csv) {
  const lines = csv.trim().split('\n')
  if (lines.length < 2) return []
  
  const headers = lines[0].split(',').map(h => h.trim())
  const data = []
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || line.startsWith('#')) continue
    
    const values = line.split(',').map(v => v.trim())
    const row = {}
    headers.forEach((header, index) => {
      row[header] = values[index] || ''
    })
    if (row.name) data.push(row)
  }
  
  return data
}

// Methods
function copyLink() {
  navigator.clipboard.writeText(siteUrl)
  copied.value = true
  setTimeout(() => copied.value = false, 2000)
}

onMounted(async () => {
  // Load signatures from CSV
  try {
    const response = await fetch('/signatures.csv')
    if (response.ok) {
      const csv = await response.text()
      signatures.value = parseCSV(csv)
      signatoryCount.value = signatures.value.length
      commentCount.value = signatures.value.filter(s => s.comment).length
    }
  } catch (error) {
    console.log('Could not load signatures:', error)
  }
})
</script>

<style scoped>
/* Base */
.manifesto-page {
  min-height: 100vh;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 5rem 0;
}

.section h2 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  text-align: center;
}

.section-intro {
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Hero */
.hero {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('/hero_banner.jpg');
  background-attachment: fixed;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(10, 10, 10, 0.95) 0%,
    rgba(10, 10, 10, 0.7) 30%,
    rgba(10, 10, 10, 0.4) 50%,
    rgba(10, 10, 10, 0.7) 70%,
    rgba(10, 10, 10, 0.95) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.hero-badge {
  display: inline-block;
  background: rgba(230, 57, 70, 0.15);
  color: var(--accent);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.lead {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.signatory-count {
  font-size: 0.95rem;
  color: var(--text-muted);
}

.signatory-count strong {
  color: var(--accent);
}

/* Values */
.values {
  background: var(--bg-card);
}

.values-grid {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.value-pair {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--page-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}

.value-left, .value-right {
  text-align: center;
}

.value-left h3 {
  color: var(--accent);
  font-size: 1.5rem;
  margin: 0;
}

.value-right h3 {
  color: var(--text-muted);
  font-size: 1.5rem;
  margin: 0;
  opacity: 0.6;
}

.value-number {
  display: block;
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
}

.value-vs {
  color: var(--text-muted);
  font-size: 0.9rem;
  text-transform: lowercase;
}

.value-description {
  grid-column: 1 / -1;
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
  text-align: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

/* Principles */
.principles-compact {
  max-width: 800px;
  margin: 0 auto;
}

.principle-row {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid var(--border);
  transition: background var(--transition);
}

.principle-row:hover {
  background: rgba(255, 255, 255, 0.02);
}

.p-num {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 700;
}

.p-content {
  flex: 1;
}

.p-content strong {
  display: block;
  margin-bottom: 0.25rem;
}

.p-content span {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.principle-example {
  display: block;
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: var(--clown-cyan);
  font-style: italic;
}

.github-cta {
  margin-top: 2rem;
  padding: 1.25rem;
  background: linear-gradient(135deg, rgba(106, 27, 154, 0.1) 0%, rgba(0, 176, 255, 0.08) 100%);
  border: 1px solid rgba(126, 87, 194, 0.3);
  border-radius: var(--radius);
  text-align: center;
}

.github-cta p {
  margin: 0;
  color: var(--text-secondary);
}

.github-cta a {
  color: var(--clown-cyan);
  font-weight: 600;
  text-decoration: none;
}

.github-cta a:hover {
  text-decoration: underline;
}

/* Red Flags */
.red-flags {
  background: linear-gradient(180deg, var(--page-bg) 0%, rgba(106, 27, 154, 0.08) 50%, rgba(211, 47, 47, 0.05) 100%);
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.red-flags h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.red-flags .section-intro {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.flags-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.flag-card {
  background: var(--bg-card);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
  transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
}

.flag-card:hover {
  transform: translateY(-5px);
  border-color: var(--clown-purple);
  box-shadow: 0 8px 30px rgba(106, 27, 154, 0.25);
}

.flag-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.flag-card h4 {
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
  color: var(--clown-magenta);
}

.flag-claim {
  background: rgba(106, 27, 154, 0.08);
  border-left: 4px solid var(--clown-purple);
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
  font-style: italic;
  font-size: 1.1rem;
  color: var(--text-secondary);
}

.flag-reality {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.flag-reality em {
  display: block;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 2px dashed var(--clown-cyan);
  color: var(--clown-cyan);
  font-size: 1rem;
  font-weight: 500;
}

.flags-reminder {
  background: linear-gradient(135deg, rgba(106, 27, 154, 0.2) 0%, rgba(193, 33, 91, 0.15) 100%);
  border: 2px solid rgba(126, 87, 194, 0.4);
  border-radius: var(--radius);
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.flags-reminder p {
  margin: 0;
  color: var(--text-secondary);
  font-size: 1.15rem;
}

.flags-reminder strong {
  color: var(--clown-magenta);
}

/* Sign Section */
.sign-section {
  background: var(--bg-card);
}

.sign-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.sign-form {
  background: var(--page-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2rem;
}

/* Coming Soon Box - in sign section */
.sign-form-wrapper .coming-soon-box {
  background: linear-gradient(135deg, var(--clown-deep) 0%, rgba(106, 27, 154, 0.3) 50%, rgba(194, 24, 91, 0.15) 100%);
  border: 1px solid var(--clown-purple);
  border-radius: var(--radius);
  padding: 3rem 2rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.coming-soon-box .coming-soon-icon {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}

.coming-soon-box h3 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--clown-cyan) 0%, var(--clown-violet) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.coming-soon-box > p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.coming-soon-box .btn {
  background: linear-gradient(135deg, var(--clown-magenta) 0%, var(--clown-purple) 100%);
  border: none;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  font-size: 1rem;
}

.coming-soon-box .btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

.coming-soon-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.coming-soon-features span {
  color: var(--clown-cyan);
  font-size: 0.9rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.btn-full {
  width: 100%;
}

.form-note {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 1rem;
  text-align: center;
}

.form-note a {
  color: var(--accent);
}

.sign-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stats-card {
  display: flex;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--page-bg);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  justify-content: center;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.share-section h4 {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.share-buttons {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.share-btn {
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  border: none;
}

.share-btn.twitter {
  background: #000;
  color: #fff;
}

.share-btn.linkedin {
  background: #0077b5;
  color: #fff;
}

.share-btn.copy {
  background: var(--page-bg);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.share-btn:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Resources CTA */
.resources-cta {
  padding: 3rem 0;
}

.cta-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 2.5rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.cta-box h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.cta-box p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: var(--radius);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all var(--transition);
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover {
  opacity: 0.9;
  color: #fff;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Responsive */
@media (max-width: 768px) {
  .section {
    padding: 3rem 0;
  }

  .section h2 {
    font-size: 1.75rem;
  }

  .value-pair {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 0.5rem;
  }

  .value-vs {
    padding: 0.5rem 0;
  }

  .sign-grid {
    grid-template-columns: 1fr;
  }

  .hero-bg {
    background-attachment: scroll;
    background-size: cover;
    background-position: center center;
  }

  .flags-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .flag-card {
    padding: 1.75rem;
  }

  .flag-icon {
    font-size: 2.5rem;
  }

  .flag-card h4 {
    font-size: 1.2rem;
  }

  .red-flags h2 {
    font-size: 1.75rem;
  }

  .red-flags .section-intro {
    font-size: 1rem;
  }

  .stats-card {
    gap: 3rem;
  }
}
</style>
