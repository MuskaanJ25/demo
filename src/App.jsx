import React from 'react';

function App() {
  return (
    <div className="app-container">
      {/* Background gradient glow behind hero */}
      <div className="hero-glow"></div>
      
      {/* Floating Navigation Bar */}
      <nav className="floating-nav">
        <div className="nav-container">
          <div className="logo">
            <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
              <rect x="0" y="4" width="8" height="8" rx="1" fill="#111827"/>
              <rect x="12" y="0" width="8" height="16" rx="1" fill="#111827"/>
              <rect x="24" y="6" width="8" height="6" rx="1" fill="#111827"/>
              <rect x="36" y="2" width="8" height="12" rx="1" fill="#111827"/>
            </svg>
          </div>
          <button className="hamburger" aria-label="Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="4" y1="6" x2="20" y2="6" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4" y1="12" x2="20" y2="12" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
              <line x1="4" y1="18" x2="20" y2="18" stroke="#111827" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-panel">
          <div className="hero-content">
            <h1 className="hero-headline">
              <span className="headline-black">Talk.</span>
              <span className="headline-black">Walk.</span>
              <span className="headline-orange">Create.</span>
            </h1>
            <p className="hero-description">
              Via is a mobile IDE for real software work. Open a repository, make changes, review, and ship from your phone.
            </p>
            <div className="cta-row">
              <button className="btn-primary">
                Join waitlist
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="arrow-icon">
                  <path d="M4.5 9H13.5M13.5 9L9 4.5M13.5 9L9 13.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <a href="#" className="read-more-link">Read more</a>
            </div>
          </div>
          
          {/* Product Mock Window */}
          <div className="hero-media">
            <div className="product-mock">
              <div className="traffic-lights">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="mock-inner">
                <div className="faded-headline">
                  <span className="faded-text">Empowering</span>{' '}
                  <span className="faded-highlight">Developers</span>{' '}
                  <span className="faded-text">with</span>{' '}
                  <span className="faded-highlight">Instant, Intelligent</span>{' '}
                  <span className="faded-text">Code.</span>
                </div>
                <div className="status-card">
                  <div className="status-header">
                    <span className="status-dot"></span>
                    <span className="status-title">Live coding flow</span>
                  </div>
                  <div className="status-body">
                    Prompt → Code change → Review → Commit → Ship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-item">
          <h3 className="feature-title">Intent-first workflow</h3>
          <p className="feature-description">
            Describe what you want and focus on the outcome, not file-by-file edits.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">GitHub-native execution</h3>
          <p className="feature-description">
            Work in existing repositories with clean diffs and straightforward review.
          </p>
        </div>
        <div className="feature-item">
          <h3 className="feature-title">Mobile full-stack shipping</h3>
          <p className="feature-description">
            Frontend, backend, and infra workflows from one mobile workspace.
          </p>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-card">
          <div className="blog-header">
            <div className="blog-title-block">
              <span className="blog-kicker">BLOG</span>
              <h2 className="blog-heading">From the Blog</h2>
            </div>
            <a href="#" className="all-posts-link">
              All posts →
            </a>
          </div>
          
          <div className="blog-posts">
            <article className="blog-post">
              <div className="post-meta">January 23, 2026 • Via Team</div>
              <h3 className="post-title">The Future of Autonomous Software Engineering</h3>
              <p className="post-excerpt">
                Exploring how AI is transforming the way we build and ship software at scale, and why accuracy matters more than speed.
              </p>
            </article>
            
            <div className="post-divider"></div>
            
            <article className="blog-post">
              <div className="post-meta">December 16, 2025 • Ila Mathur and Shray Alag</div>
              <h3 className="post-title">Our Mission</h3>
              <p className="post-excerpt">
                The new age of programming is ruled by ideas, not IDEs. Via exists to make software creation mobile, intent-first, and accessible.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;