import { useState } from "react";

const NAV_LINKS = [
  { label: "Tournaments", href: "#" },
  { label: "Players", href: "#" },
  { label: "Rankings", href: "#" },
  { label: "Live Scores", href: "#", badge: "Live" },
  { label: "News", href: "#" },
];

function TennisBallIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="16" cy="16" r="15" fill="#C8E63B" stroke="#A8C520" strokeWidth="1" />
      <path
        d="M4.5 10.5C8 9.5 11 6.5 11 1.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27.5 10.5C24 9.5 21 6.5 21 1.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M4.5 21.5C8 22.5 11 25.5 11 30.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M27.5 21.5C24 22.5 21 25.5 21 30.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SearchBar({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-[#0d2a1a] border-t border-[#1e4d30] z-40 px-6 py-4 shadow-2xl">
      <div className="max-w-3xl mx-auto flex items-center gap-3">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7aad8a]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" strokeLinecap="round" />
          </svg>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search players, tournaments, news…"
            className="w-full bg-[#1a3d28] text-white placeholder-[#5a8a6a] pl-10 pr-4 py-2.5 rounded-lg border border-[#2d5c3a] focus:outline-none focus:border-[#C8E63B] text-sm transition-colors"
          />
        </div>
        <button
          onClick={onClose}
          className="text-[#7aad8a] hover:text-white transition-colors p-1"
          aria-label="Close search"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, isLoggedIn, onAuthToggle }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#0a2016] border-t border-[#1e4d30] px-4 pb-4 pt-2 space-y-1">
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex items-center gap-2 text-[#c5e0cc] hover:text-white hover:bg-[#1a3d28] px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
        >
          {link.label}
          {link.badge && (
            <span className="text-[10px] font-semibold bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wide">
              {link.badge}
            </span>
          )}
        </a>
      ))}
      <div className="pt-3 border-t border-[#1e4d30]">
        {isLoggedIn ? (
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#C8E63B] flex items-center justify-center text-[#0d2a1a] font-bold text-xs">
                RF
              </div>
              <span className="text-[#c5e0cc] text-sm">Roger F.</span>
            </div>
            <button
              onClick={onAuthToggle}
              className="text-[#7aad8a] hover:text-white text-sm font-medium transition-colors"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 px-3">
            <button
              onClick={onAuthToggle}
              className="flex-1 py-2 text-sm font-semibold text-[#0d2a1a] bg-[#C8E63B] hover:bg-[#d4ee50] rounded-lg transition-colors"
            >
              Sign in
            </button>
            <button className="flex-1 py-2 text-sm font-semibold text-[#C8E63B] border border-[#C8E63B] rounded-lg hover:bg-[#C8E63B]/10 transition-colors">
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TennisHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Tournaments");

  const toggleAuth = () => {
    setIsLoggedIn((prev) => !prev);
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header */}
      <header className="relative bg-[#0d2a1a] text-white shadow-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 md:px-8 h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 flex-shrink-0 group">
            <TennisBallIcon className="w-9 h-9 group-hover:rotate-12 transition-transform duration-300" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-lg tracking-tight text-white">ACE</span>
              <span className="font-light text-[10px] tracking-[0.2em] text-[#7aad8a] uppercase">Tennis</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 mx-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeLink === link.label
                    ? "text-white bg-[#1a3d28]"
                    : "text-[#9dc9ac] hover:text-white hover:bg-[#1a3d28]"
                }`}
              >
                {link.label}
                {link.badge && (
                  <span className="text-[9px] font-bold bg-red-500 text-white px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    {link.badge}
                  </span>
                )}
                {activeLink === link.label && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C8E63B]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              onClick={() => {
                setSearchOpen((p) => !p);
                setMobileOpen(false);
              }}
              aria-label="Open search"
              className={`p-2 rounded-lg transition-colors ${
                searchOpen
                  ? "bg-[#C8E63B] text-[#0d2a1a]"
                  : "text-[#9dc9ac] hover:text-white hover:bg-[#1a3d28]"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>

            {/* Auth — desktop */}
            <div className="hidden md:flex items-center gap-2 ml-1">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C8E63B] flex items-center justify-center text-[#0d2a1a] font-bold text-xs select-none">
                      RF
                    </div>
                    <span className="text-sm text-[#c5e0cc] font-medium">Roger F.</span>
                  </div>
                  <button
                    onClick={toggleAuth}
                    className="flex items-center gap-1.5 text-sm font-medium text-[#9dc9ac] hover:text-white border border-[#2d5c3a] hover:border-[#4a8c5c] px-3.5 py-1.5 rounded-lg transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Sign out
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={toggleAuth}
                    className="text-sm font-semibold text-[#9dc9ac] hover:text-white px-3.5 py-1.5 rounded-lg hover:bg-[#1a3d28] transition-colors"
                  >
                    Sign in
                  </button>
                  <button className="text-sm font-semibold text-[#0d2a1a] bg-[#C8E63B] hover:bg-[#d4ee50] px-4 py-1.5 rounded-lg transition-colors">
                    Register
                  </button>
                </>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => {
                setMobileOpen((p) => !p);
                setSearchOpen(false);
              }}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-[#9dc9ac] hover:text-white hover:bg-[#1a3d28] transition-colors"
            >
              {mobileOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Search panel */}
        <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

        {/* Mobile menu */}
        <MobileMenu isOpen={mobileOpen} isLoggedIn={isLoggedIn} onAuthToggle={toggleAuth} />
      </header>

      {/* Demo page content */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <TennisBallIcon className="w-16 h-16 mb-6 opacity-30" />
        <h1 className="text-3xl font-black text-[#0d2a1a] mb-2">ACE Tennis</h1>
        <p className="text-[#5a7a64] text-sm max-w-xs">
          Use the buttons in the header to try search, sign in / sign out, and mobile menu.
        </p>
        <p className="mt-4 text-xs text-[#9db0a4]">
          Auth state: <span className="font-semibold text-[#0d2a1a]">{isLoggedIn ? "Signed in as Roger F." : "Signed out"}</span>
        </p>
      </main>
    </div>
  );
}
