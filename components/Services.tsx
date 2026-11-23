"use client";

import React from "react";

interface ServicesProps {
  onSelectService?: (service: { title: string }) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  return (
    <section className="sv border-t border-[#E4E4DF]" id="services" aria-labelledby="sv-title">
      <div className="sv-head">
        <h2 id="sv-title">What we do</h2>
        <p>Three disciplines, one team, from the first workshop to launch day.</p>
      </div>

      <div className="sv-grid">
        <a
          className="sv-card"
          href="#contact"
          onClick={() => {
            if (onSelectService) {
              onSelectService({ title: "Strategy" });
            }
          }}
          style={
            {
              "--img":
                "url(https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80)",
            } as React.CSSProperties
          }
        >
          <div className="sv-img">
            <i />
          </div>
          <div className="sv-body">
            <h3>Strategy</h3>
            <p>Brand positioning, digital architecture and market discovery for ambitious companies.</p>
            <ul>
              <li>Brand positioning</li>
              <li>Market research</li>
              <li>Product roadmap</li>
            </ul>
            <span className="sv-more">
              See scope{" "}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 17 17 3M7 3h10v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </div>
        </a>

        <a
          className="sv-card"
          href="#contact"
          onClick={() => {
            if (onSelectService) {
              onSelectService({ title: "UI / UX design" });
            }
          }}
          style={
            {
              "--img":
                "url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1000&q=80)",
            } as React.CSSProperties
          }
        >
          <div className="sv-img">
            <i />
          </div>
          <div className="sv-body">
            <h3>UI / UX design</h3>
            <p>Art direction, design systems and interfaces built around real people.</p>
            <ul>
              <li>Art direction</li>
              <li>Design systems</li>
              <li>Prototypes and testing</li>
            </ul>
            <span className="sv-more">
              See scope{" "}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 17 17 3M7 3h10v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </div>
        </a>

        <a
          className="sv-card"
          href="#contact"
          onClick={() => {
            if (onSelectService) {
              onSelectService({ title: "Web development" });
            }
          }}
          style={
            {
              "--img":
                "url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80)",
            } as React.CSSProperties
          }
        >
          <div className="sv-img">
            <i />
          </div>
          <div className="sv-body">
            <h3>Web development</h3>
            <p>Fast front-end builds, headless CMS integrations and clean, durable code.</p>
            <ul>
              <li>Front-end engineering</li>
              <li>Headless CMS</li>
              <li>Performance and SEO</li>
            </ul>
            <span className="sv-more">
              See scope{" "}
              <svg viewBox="0 0 20 20" aria-hidden="true">
                <path d="M3 17 17 3M7 3h10v10" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
