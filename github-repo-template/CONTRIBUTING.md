# Contributing to I Know My LLM

Thank you for your interest in contributing to the I Know My LLM manifesto! This document provides guidelines for participation.

## Our Philosophy

This manifesto is community-driven and open for refinement. We believe collective wisdom is stronger than individual judgment—which is, after all, Principle #8.

## How to Contribute

### 1. Signing the Manifesto

Two quick options to sign:

**Option A: Google Form (Easiest)**

[✨ Sign via Google Form](https://forms.gle/3xKuRVxmhV6pUiL76)

**Option B: GitHub Issue**

[🐙 Sign via GitHub Issue](https://github.com/I-Know-My-LLM-Thanks/iknowmyllm_manifesto/issues/new?template=signature-request.md)

**Option C: Pull Request (Advanced)**

1. **Fork this repository** — Click "Fork" button in top right
2. **Clone your fork** — `git clone https://github.com/YOUR-USERNAME/iknowmyllm-manifesto.git`
3. **Edit signatures.csv** — Add a new line with your signature
4. **Commit your change** — `git commit -am "Add signature: Your Name"`
5. **Push to your fork** — `git push origin main`
6. **Create a Pull Request** — Go to the original repo and click "New Pull Request"

**CSV Format:**
```csv
name,title,email,comment
```

**Example signatures:**
```csv
# Full signature with all fields
Jane Doe,Security Researcher,jane@example.com,Evidence over promises - always.

# Anonymous with title and comment
Anonymous,CTO,,Transparency matters for our industry.

# Fully anonymous
Anonymous,,,

# Pseudonym for privacy
TrustVerifier,AI Ethics Advocate,,Community wisdom over isolated judgment.
```

**Privacy options:**
| Field | Required | Anonymous Option |
|-------|----------|------------------|
| `name` | Yes | Use `Anonymous` or a pseudonym |
| `title` | No | Leave empty |
| `email` | No | Leave empty or use `anonymous@example.com` |
| `comment` | No | Leave empty |

**Important notes:**
- Emails in the CSV are **not displayed publicly** on the website
- Anonymous signatures are respected and verified through the PR process
- One signature per PR please

### 2. Suggesting Principle Changes

**Before proposing changes:**
- Read the current [PRINCIPLES.md](PRINCIPLES.md) thoroughly
- Check existing Issues and Discussions for similar suggestions
- Consider how your suggestion aligns with the core values

**To propose a change:**
1. Open an Issue using the "Principle Suggestion" template
2. Explain the rationale for your change
3. Provide evidence or examples supporting the modification
4. Engage constructively with community feedback

#### Website Formatting Notes (Principles)

The homepage pulls the principles list directly from `PRINCIPLES.md`.

- Each principle must start with `## N. Title`
- The first bold line is used as the short summary
- An optional line starting with `Red flag example:` is used for the example snippet

### 3. Sharing Red Flag Patterns

We collect anonymized patterns in the "Hall of Amusing Red Flags." To contribute:

[🎪 Share a Red Flag via GitHub Issue](https://github.com/I-Know-My-LLM-Thanks/iknowmyllm_manifesto/issues/new?template=red-flag-share.md)

1. Open an Issue using the "Red Flag Share" template
2. Describe the pattern generically (NO specific company names)
3. Explain why this pattern is concerning
4. Include any verification methods that helped identify it

#### Red Flags Data (CSV)

The homepage loads the Hall of Amusing Red Flags from `RED_FLAGS.csv`.

- Columns: `icon,title,claim,reality,example`
- Wrap any field that contains commas in quotes
- Keep content anonymized and pattern-based

Example row:
```csv
"🎪","The Overpromised Demo","Sign the NDA first","Promises without proof are not proof","Ask for a sandbox before sharing data"
```

### 4. Updating Core Values

The homepage loads the Core Values list from `CORE_VALUES.md`.

- Each item must be a single list line
- Format: `- Left Value | Right Value | Description`

Example:
```
- Evidence | Promises | Verifiable credentials and demonstrated capabilities over marketing claims.
```

### 5. Participating in Discussions

Join our Discussions to:
- Debate principle refinements
- Share community stories and experiences
- Ask questions about applying the principles
- Connect with like-minded professionals

## Content Guidelines

### ✅ Do:
- Focus on generic, educational patterns
- Provide constructive, evidence-based suggestions
- Respect diverse perspectives and experiences
- Keep contributions professional and actionable
- Cite sources when making factual claims

### ❌ Don't:
- Name specific companies, individuals, or products
- Share potentially defamatory content
- Include personal attacks or harassment
- Post promotional or commercial content
- Share confidential or proprietary information

## Legal Safety

To maintain broad applicability and legal safety:

- **All examples must be anonymized** — no real company names
- **Focus on patterns, not specifics** — describe behaviors, not entities
- **Avoid potentially defamatory language** — stick to verifiable facts
- **When in doubt, generalize** — the educational value is in the pattern

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/principle-clarification`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Clarify Principle 3 regarding jargon detection'`)
5. Push to your fork (`git push origin feature/principle-clarification`)
6. Open a Pull Request with:
   - Clear description of the change
   - Rationale for the modification
   - Any relevant discussion references

## Review Process

- **Minor edits** (typos, clarifications): May be merged quickly
- **Substantive changes** (principle modifications): Require community discussion
- **All changes**: Must align with core values and maintain legal safety

## Code of Conduct

Please read and follow our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). We are committed to providing a welcoming, inclusive environment.

## Questions?

- Open a Discussion for general questions
- Open an Issue for specific proposals
- Visit [iknowmyllm.com](https://iknowmyllm.com) for more information

---

Thank you for helping make AI evaluation more trustworthy for everyone!
