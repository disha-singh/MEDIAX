import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <br />
      <ul class="footer-info">
        <ul class="footer-info-left">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#"> Terms of use</a>
          </li>
        </ul>
        <ul class="footer-info-center">
          <li>
            <a href="#">Accounts and Billing</a>
          </li>
          <li>
            <a href="#">Plans and Pricing</a>
          </li>
        </ul>
        <ul className="footer-info-right">
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
        </ul>
      </ul>
      <section className="footer-social-media">
        <section className="footer-social-media__icon">
          <FaInstagram size="20px" />
        </section>

        <section className="footer-social-media__icon">
          <FaFacebook size="20px" />
        </section>

        <section className="footer-social-media__icon">
          <FaYoutube size="20px" />
        </section>

        <section className="footer-social-media__icon">
          <FaTwitter size="20px" />
        </section>
      </section>
      <p className="footer-name"> 2020 © MEDIAX </p>
    </section>
  );
}

export default Footer;
