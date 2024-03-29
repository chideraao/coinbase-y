import React from "react";

export function Loader() {
  return (
    <div className="loader">
      <div>
        <div className="loading-1"></div>
        <div>Powered by CoinGecko API, Nomics API and ipgeolocation API</div>
      </div>
    </div>
  );
}

export function Loading() {
  return (
    <div className="loading-div">
      <div className="loading-2"></div>
    </div>
  );
}
