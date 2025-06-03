import React from 'react';
import { FiMail, FiPhone, FiGithub, FiMapPin } from 'react-icons/fi';
import './Contact.scss';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="message-bubble">
          <div className="pixel-corner"></div>
          <div className="contact-content">
            <h2 className="pixel-font">Let's Connect!</h2>
            
            <div className="contact-grid">
              <div className="contact-item">
                <FiMail className="icon pixel-icon" />
                <a href="mailto:giaola.work@gmail.com">giaola.work@gmail.com</a>
              </div>
              
              <div className="contact-item">
                <FiPhone className="icon pixel-icon" />
                <span>0847514323</span>
              </div>
              
              <div className="contact-item">
                <FiGithub className="icon pixel-icon" />
                <a href="https://github.com/LuuAiGiao" target="_blank" rel="noopener noreferrer">
                  LuuAiGiao
                </a>
              </div>
              
              <div className="contact-item">
                <FiMapPin className="icon pixel-icon" />
                <span>TP.HCM, Vietnam</span>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          className="pixel-character"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="pixel-head"></div>
          <div className="pixel-body"></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;