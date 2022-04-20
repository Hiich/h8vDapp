import React from "react";
import { useWallet } from "../context/WalletContext";

export default function Nav() {
  const { address, connect } = useWallet();

  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand" href="/#page-top">
          <img
            src="/img/logo_.png"
            alt="Heroes & Villains"
            class=" my-auto"
            style={{
              maxWidth: "250px",
              minHeight: "30px",
            }}
          />
        </a>

        <button
          class="navbar-toggler"
          style={{ minWidth: "fit-content" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <a class="nav-btn btn btn-yellow btn-sm text-uppercase" href="/">
                Home
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-btn btn btn-yellow btn-sm text-uppercase"
                href="https://discord.com/invite/XJwV38jhJm"
              >
                Discord
              </a>
            </li>

            <li class="nav-item">
              <a
                class="nav-btn btn btn-yellow btn-sm text-uppercase"
                href="#"
                target="_blank"
              >
                Game
              </a>
            </li>

            <li class="nav-item">
              <a
                id="btn-connect"
                class="nav-btn btn btn-yellow btn-sm text-uppercase"
                onClick={connect}
              >
                {address.length ? address : "Connect"}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
