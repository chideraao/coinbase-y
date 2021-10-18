/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="container grid">
        <div className="selectbox">
          <h2>basecoin</h2>
          <option
            name="language"
            id="language"
            disabled="disabled"
            value="English"
          ></option>
          <p>&copy; {new Date().getUTCFullYear()} Basecoin</p>
          <div className="flex">
            <a href="https://blog.coinbase.com">Blog</a>
            <span className="bulletpoint">.</span>
            <a href="https://twitter.com">Twitter</a>
            <span className="bulletpoint">.</span>
            <a href="https://facebook.com">Facebook</a>
          </div>
        </div>
        <div className="products flex">
          <h2>Products</h2>
          <a href="/">Coinbase</a>
          <a href="#">Commerce</a>
          <a href="#">Custody</a>
          <a href="/earn">Earn</a>
          <a href="#">Prime</a>
          <a href="#">Pro</a>
          <a href="#">USD Coin</a>
          <a href="#">Wallet</a>
          <a href="#">Ventures</a>
        </div>
        <div className="learn flex">
          <h2>Learn</h2>
          <a href="#">Browse assets</a>
          <a href="#">What is Crypto?</a>
          <a href="#">What is Bitcoin?</a>
          <a href="#">What is a Blockchain?</a>
          <a href="#">Buy Bitcoin</a>
          <a href="#">Buy Bitcoin Cash</a>
          <a href="#">Buy Ethereum</a>
          <a href="#">Buy Litecoin</a>
          <a href="#">Buy XRP</a>
          <a href="#">Supported countries</a>
          <a href="#">Status</a>
          <a href="#">Taxes</a>
        </div>
        <div className="company flex">
          <h2>Company</h2>
          <a href="/about">About</a>
          <a href="#">Affiliates</a>
          <a href="/careers">Careers</a>
          <a href="#">Partners</a>
          <a href="/press">Press</a>
          <a href="#">Legal & Privacy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="support flex">
          <h2>Support</h2>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Create account</a>
          <a href="#">ID verification</a>
          <a href="#">Account information</a>
          <a href="#">Payment methods</a>
          <a href="#">Account access</a>
          <a href="#">Send/Receive crypto</a>
          <a href="#">Supported crypto</a>
          <a href="#">Pricing and fees</a>
        </div>
      </div>
      <div className="signout flex-column">
        <a href="https://nomics.com" target="_blank" rel="noreferrer">
          Crypto Market Cap & Pricing Data Provided by Nomics
        </a>
        <span>Powered by CoinGecko API and ipgeolocation API</span>
        <span>
          {" "}
          Made with &#x2764;&#xfe0f; &nbsp; by{" "}
          <a
            href="https://dhera.dev/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#000", textDecoration: "underline" }}
          >
            Chidera Okeke
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer;
