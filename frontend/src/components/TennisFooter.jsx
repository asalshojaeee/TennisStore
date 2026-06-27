import { useState } from "react";


const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const footerLinks = {
  Shop: [
    "Rackets",
    "Tennis Balls",
    "Shoes & Footwear",
    "Apparel",
    "Bags & Cases",
    "Accessories",
  ],
  Support: [
    "Size Guide",
    "Racket Stringing",
    "Returns & Exchanges",
    "Shipping Info",
    "Contact Us",
    "FAQ",
  ],

};

const courtBadges = ["Clay", "Hard", "Grass", "Indoor"];

export default function TennisFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer style={styles.footer}>
      {/* Decorative court line accent */}
      <div style={styles.courtAccent}>
        <div style={styles.courtLine} />
        <div style={styles.courtCenter} />
        <div style={styles.courtLine} />
      </div>

      <div style={styles.inner}>
        {/* Top section */}
        <div style={styles.topGrid}>
          {/* Brand column */}
          <div style={styles.brandCol}>
            <div style={styles.logoRow}>
              {/* Stylized racket logo */}
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <ellipse cx="16" cy="15" rx="12" ry="13" stroke="#C8FF00" strokeWidth="2.2" />
                <line x1="16" y1="2" x2="16" y2="28" stroke="#C8FF00" strokeWidth="1.4" opacity="0.6" />
                <line x1="4" y1="15" x2="28" y2="15" stroke="#C8FF00" strokeWidth="1.4" opacity="0.6" />
                <line x1="7" y1="5" x2="25" y2="25" stroke="#C8FF00" strokeWidth="1" opacity="0.35" />
                <line x1="25" y1="5" x2="7" y2="25" stroke="#C8FF00" strokeWidth="1" opacity="0.35" />
                <rect x="15" y="28" width="2.2" height="6" rx="1" fill="#C8FF00" />
              </svg>
              <span style={styles.logoText}>ACE<span style={styles.logoAccent}>SPORT</span></span>
            </div>

            <p style={styles.tagline}>
              Outfitting champions since 1998 — from first serve to match point.
            </p>

            <div style={styles.courtBadges}>
              {courtBadges.map((c) => (
                <span key={c} style={styles.badge}>{c}</span>
              ))}
            </div>

            {/* Newsletter */}
            <div style={styles.newsletterWrap}>
              <p style={styles.newsletterLabel}>Court-side news, gear drops & pro tips</p>
              {subscribed ? (
                <div style={styles.subscribedMsg}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C8FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  You're in. See you on court.
                </div>
              ) : (
                <div style={styles.inputRow}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    style={styles.emailInput}
                  />
                  <button onClick={handleSubscribe} style={styles.subscribeBtn}>
                    Join
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} style={styles.linkCol}>
              <h4 style={styles.colHeading}>{heading}</h4>
              <ul style={styles.linkList}>
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" style={styles.link}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Bottom bar */}
        <div style={styles.bottomBar}>
          <div style={styles.bottomLeft}>
            <span style={styles.copyright}>© 2025 AceSport. All rights reserved.</span>
            <a href="#" style={styles.legalLink}>Privacy</a>
            <a href="#" style={styles.legalLink}>Terms</a>
            <a href="#" style={styles.legalLink}>Cookies</a>
          </div>

          <div style={styles.socialRow}>
            {socialLinks.map(({ label, href, icon }) => (
              <a key={label} href={href} aria-label={label} style={styles.socialBtn}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0e1010",
    color: "#e8e8e2",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  /* Tennis court line decoration at the top */
  courtAccent: {
    display: "flex",
    alignItems: "center",
    gap: 0,
    height: "3px",
    overflow: "hidden",
  },
  courtLine: {
    flex: 1,
    height: "3px",
    background: "rgba(200, 255, 0, 0.25)",
  },
  courtCenter: {
    width: "60px",
    height: "3px",
    background: "#C8FF00",
    boxShadow: "0 0 12px rgba(200,255,0,0.6)",
  },

  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "52px 32px 36px",
  },

  topGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1fr",
    gap: "48px",
  },

  /* Brand column */
  brandCol: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  logoRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoText: {
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.08em",
    color: "#ffffff",
  },
  logoAccent: {
    color: "#C8FF00",
  },
  tagline: {
    fontSize: "13.5px",
    lineHeight: "1.65",
    color: "#888880",
    margin: 0,
    maxWidth: "280px",
  },

  courtBadges: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  badge: {
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.06em",
    color: "#C8FF00",
    background: "rgba(200,255,0,0.08)",
    border: "0.5px solid rgba(200,255,0,0.3)",
    borderRadius: "4px",
    padding: "3px 9px",
    textTransform: "uppercase",
  },

  newsletterWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  newsletterLabel: {
    fontSize: "12px",
    color: "#666660",
    margin: 0,
    letterSpacing: "0.02em",
  },
  inputRow: {
    display: "flex",
    gap: "8px",
  },
  emailInput: {
    flex: 1,
    background: "rgba(255,255,255,0.06)",
    border: "0.5px solid rgba(255,255,255,0.15)",
    borderRadius: "6px",
    padding: "9px 12px",
    fontSize: "13px",
    color: "#e8e8e2",
    outline: "none",
    minWidth: 0,
  },
  subscribeBtn: {
    background: "#C8FF00",
    color: "#0e1010",
    border: "none",
    borderRadius: "6px",
    padding: "9px 16px",
    fontSize: "13px",
    fontWeight: "700",
    cursor: "pointer",
    letterSpacing: "0.03em",
    whiteSpace: "nowrap",
  },
  subscribedMsg: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#C8FF00",
    fontWeight: "500",
  },

  /* Link columns */
  linkCol: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  colHeading: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#ffffff",
    margin: 0,
  },
  linkList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    fontSize: "13.5px",
    color: "#888880",
    textDecoration: "none",
    transition: "color 0.15s",
    display: "inline-block",
  },

  /* Bottom */
  divider: {
    height: "0.5px",
    background: "rgba(255,255,255,0.08)",
    margin: "40px 0 24px",
  },
  bottomBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },
  bottomLeft: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  copyright: {
    fontSize: "12px",
    color: "#555550",
  },
  legalLink: {
    fontSize: "12px",
    color: "#555550",
    textDecoration: "none",
  },
  socialRow: {
    display: "flex",
    gap: "4px",
  },
  socialBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    color: "#666660",
    textDecoration: "none",
    border: "0.5px solid rgba(255,255,255,0.08)",
    transition: "color 0.15s, border-color 0.15s, background 0.15s",
  },
};
