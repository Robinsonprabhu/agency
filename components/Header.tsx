"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let last = 0;
    let ticking = false;

    const update = () => {
      const h = headerRef.current;
      const l = lineRef.current;
      if (!h || !l) return;

      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;

      // square -> circle morphing over the first 500px
      h.style.setProperty("--p", String(Math.min(y / 500, 1)));

      // Reading progress line
      l.style.transform = `scaleX(${max > 0 ? y / max : 0})`;

      // Solid background state
      h.classList.toggle("solid", y > 20);

      // Hide on scroll down after 300px, reveal on scroll up
      h.classList.toggle("hide", y > 300 && y > last && !isOpen);

      last = y;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleSheet = (openState?: boolean) => {
    const nextState = typeof openState === "boolean" ? openState : !isOpen;
    setIsOpen(nextState);
    if (headerRef.current) {
      headerRef.current.style.zIndex = nextState ? "60" : "50";
    }
  };

  return (
    <>
      <header ref={headerRef} className="hd" id="hd">
        <div className="hd-bar">
          <div className="flex items-baseline gap-3">
            <Link
              className="hd-logo"
              href="/"
              aria-label="Form and Function, home"
              onClick={() => toggleSheet(false)}
            >
              Form <i className="hd-mark" aria-hidden="true" /> Function
            </Link>
            <span className="text-[12px] uppercase font-medium text-[#6B6B66] hidden sm:inline-block border-l border-[#E4E4DF] pl-2.5">
              Est. 2019
            </span>
          </div>

          <ul className="hd-nav">
            <li>
              <a className="roll" href="#work">
                <span>Work</span>
                <span>Work</span>
              </a>
            </li>
            <li>
              <a className="roll" href="#services">
                <span>Services</span>
                <span>Services</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="hd-cta"
                onClick={() => {
                  toggleSheet(false);
                  onOpenContact?.();
                }}
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </li>
          </ul>

          <button
            className="hd-menu"
            id="hdMenu"
            aria-expanded={isOpen}
            aria-controls="hdSheet"
            onClick={() => toggleSheet()}
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div ref={lineRef} className="hd-line" id="hdLine" />
      </header>

      {/* Mobile Drawer Sheet */}
      <div className={`hd-sheet ${isOpen ? "open" : ""}`} id="hdSheet">
        <a href="#work" onClick={() => toggleSheet(false)}>
          Work
        </a>
        <a href="#services" onClick={() => toggleSheet(false)}>
          Services
        </a>
        <button
          type="button"
          onClick={() => {
            toggleSheet(false);
            onOpenContact?.();
          }}
        >
          Inquire
        </button>
      </div>
    </>
  );
}
