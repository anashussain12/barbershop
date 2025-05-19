"use client";                           // ❗ must be a client component

import { useState } from "react";

/* ───── Popup component ───── */
function Popup({ open, onClose, title, message }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}   /* click backdrop to close */
    >
      <div
        className="w-[90%] max-w-sm rounded-2xl bg-white p-6 shadow-xl animate-popup"
        onClick={(e) => e.stopPropagation()} /* stop bubbling */
      >
        <h2 className="mb-2 text-xl font-bold">
          {title ?? "Booking Confirmed"}
        </h2>
        <p className="mb-6 text-gray-700">
          {message ??
            "Your booking has been successfully confirmed. See you soon!"}
        </p>
        <button
          onClick={onClose}
          className="mx-auto block rounded-md bg-amber-500 px-6 py-2 font-semibold text-white transition hover:bg-amber-400 active:scale-95"
        >
          OK
        </button>
      </div>
    </div>
  );
}

/* one-time keyframes */
const GlobalStyles = () => (
  <style>{`
    @keyframes popup {
      from { opacity: 0; transform: scale(.95); }
      to   { opacity: 1; transform: scale(1); }
    }
    .animate-popup { animation: popup .25s ease-out both; }
  `}</style>
);

/* ───── Main button ───── */
export default function ConfirmBookingButton() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    /* 🔗 Replace with your real API call */
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setShowPopup(true);   // open popup
  };

  return (
    <>
      <GlobalStyles />

      <button
        type="button"
        disabled={loading}
        onClick={handleClick}
        className={`w-full py-3 flex items-center justify-center
          bg-gradient-to-r from-amber-500 to-yellow-400
          hover:from-amber-400 hover:to-yellow-300
          text-black font-bold rounded-md transition-all duration-300
          transform hover:scale-[1.02]
          shadow-[0_5px_15px_rgba(0,0,0,0.2)]
          hover:shadow-[0_5px_20px_rgba(245,158,11,0.3)]
          ${loading ? "opacity-60 cursor-not-allowed hover:scale-100" : ""}`}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        ) : (
          "CONFIRM BOOKING"
        )}
      </button>

      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
