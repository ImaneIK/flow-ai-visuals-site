// WhatsAppFloatingButton.tsx
import React from "react";

type WhatsAppFloatingButtonProps = {
  phone: string; // e.g. "212612345678"
  message?: string;
  label?: string;
  newTab?: boolean;
};

const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({
  phone,
  message = "Hello! I'd like to chat.",
  label = "Chat on WhatsApp",
  newTab = true,
}) => {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      aria-label={label}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 group"
    >
      {/* Label beside icon */}
      <span className="px-3 py-2 rounded-xl bg-[#4ade80] text-white font-medium shadow-md opacity-90 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-[-4px]">
        Contactez-nous
      </span>

      {/* Icon wrapper */}
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#4ade80] text-white shadow-lg transition-transform duration-200 ease-out hover:scale-105 active:scale-95">
        {/* Ping halo */}
        <span className="absolute inset-0 -m-1 rounded-full bg-[#4ade80]-500/40 blur-sm opacity-60 group-hover:opacity-80 transition-opacity" />
        <span className="absolute inset-0 -m-1 rounded-full bg-[#4ade80]-500/40 animate-ping" />

        {/* WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 258"
          className="h-7 w-7 relative z-10 group-hover:animate-bounce"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wa" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#61FD7D" />
              <stop offset="100%" stopColor="#2BB826" />
            </linearGradient>
          </defs>
          <path
            fill="url(#wa)"
            d="M128.6 0C59 0 2.6 56.4 2.6 126c0 22.1 6 43 16.6 60.8L0 258l73.9-18.7c17 9.3 36.6 14.6 57.7 14.6 69.6 0 126-56.4 126-126S198.2 0 128.6 0z"
          />
          <path
            fill="#fff"
            d="M187.1 151.7c-2.7 7.6-13.5 14.4-22.2 16.3-5.9 1.3-13.5 2.3-39.2-8.1-32.9-13.6-54.1-47.6-55.8-49.9-1.6-2.3-13.3-17.7-13.3-33.7s8.2-23.9 11.1-27.2c2.7-3.1 7.1-4.5 11.1-4.5 1.3 0 2.5.1 3.6.1 3.2.1 4.8.3 6.9 5.3 2.7 6.5 9.2 22.5 10 24.1 0 .9 1.7 3.9.9 6.2-.8 2.3-1.7 3.3-3.1 5.1-1.4 1.7-3.3 4-4.7 5.4-1.5 1.5-3 3.1-1.3 6.1 1.7 3.1 7.3 12 15.6 19.5 10.7 9.5 19.7 12.5 22.8 14 3.1 1.5 4.9 1.3 6.7-.8 2.1-2.4 4.8-6.2 7.6-10 2-2.7 4.6-3.1 7.3-2.1 2.7 1 17.1 8.1 20.1 9.6 3 .8 5.1 1.5 5.8 2.3 1 .7 1 7.4-1.7 15z"
          />
        </svg>
      </span>
    </a>
  );
};

export default WhatsAppFloatingButton;
