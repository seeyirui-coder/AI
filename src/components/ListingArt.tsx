import type { Listing } from "../types";

function ListingArt({ art }: Pick<Listing, "art">) {
  if (art === "a") {
    return (
      <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
        <path
          d="M40 168V96l52-36 52 36v72"
          stroke="#fff"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path d="M26 104 92 58l66 46" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
        <rect x="76" y="126" width="32" height="42" stroke="#fff" strokeWidth="3" />
        <path
          d="M170 168v-52l40-28 40 28v52"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <rect
          x="196"
          y="134"
          width="26"
          height="34"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (art === "b") {
    return (
      <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
        <rect x="58" y="58" width="86" height="110" stroke="#fff" strokeWidth="3" />
        <rect
          x="176"
          y="86"
          width="86"
          height="82"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="3"
        />
        <path
          d="M74 80h20M110 80h20M74 110h20M110 110h20M74 140h20M110 140h20"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M192 108h20M228 108h20M192 138h20M228 138h20"
          stroke="rgba(255,255,255,.75)"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
      <path d="M30 168h260" stroke="rgba(255,255,255,.6)" strokeWidth="3" />
      <path
        d="M74 168v-64l58-42 58 42v64"
        stroke="#fff"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M60 110 132 58l72 52" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <rect x="116" y="128" width="34" height="40" stroke="#fff" strokeWidth="3" />
      <path
        d="M232 168v-44l26-18 26 18v44"
        stroke="rgba(255,255,255,.7)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ListingArt;
