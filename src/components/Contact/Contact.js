import React from "react";
import { SocialContact } from "../Common/Social-contact/SocialContact";
import Seperator from "../Seperator/Seperator";
import "./Contact.css";
import Button from "@mui/material/Button";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";


//contact Page function
export function Contact() {
  return (
    <div className="contact">
      <Seperator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch ? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <Button
            startIcon={<CloudDownloadIcon />}
            variant="contained"
            color="secondary"
          >
            <a
              download
              href="https://drive.google.com/file/d/1-OzWJxTgjYpJkmzIBgGUGq9QK7yRq8Yf/view?usp=sharing"target="_blank" rel="noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
