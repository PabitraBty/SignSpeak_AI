import React from 'react';
import { BookOpen, Hand, PlayCircle, Info } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import './LearningPage.css';

const learningCards = [
  { sign: 'Hello', desc: 'A simple wave of the hand from side to side.', emoji: '👋' },
  { sign: 'Thank You', desc: 'Fingers touch the chin, then move forward and down.', emoji: '🙏' },
  { sign: 'Yes', desc: 'A nodding motion of the fist.', emoji: '👍' },
  { sign: 'No', desc: 'Index and middle fingers tap the thumb.', emoji: '👎' },
  { sign: 'Please', desc: 'Flat hand rubs the chest in a circular motion.', emoji: '🥺' },
  { sign: 'Sorry', desc: 'Fist rubs the chest in a circular motion.', emoji: '😔' },
];

const LearningPage = () => {
  return (
    <PageWrapper>
      <div className="container learning-container">
        
        {/* Intro Section */}
        <section className="learning-hero">
          <div className="learning-hero-content">
            <h1>Learn Indian Sign Language</h1>
            <p>Start with the basics. Understanding simple signs can make a huge difference in creating an inclusive environment.</p>
          </div>
          <div className="learning-hero-icon">
            <BookOpen size={80} className="text-gradient" />
          </div>
        </section>

        {/* Info Grid */}
        <div className="info-grid mb-4">
          <div className="info-card card">
            <Info className="info-icon blue" size={32} />
            <h3>Why Learn ISL?</h3>
            <p>ISL is a rich, expressive language used by millions in India. Learning it bridges communication gaps and promotes accessibility.</p>
          </div>
          <div className="info-card card">
            <Hand className="info-icon purple" size={32} />
            <h3>Basic Rules</h3>
            <p>Facial expressions and body language are just as important as hand gestures in ISL grammar.</p>
          </div>
        </div>

        {/* Dictionary Section */}
        <section className="dictionary-section">
          <div className="section-header-small">
            <h2>Basic Signs Dictionary</h2>
          </div>
          
          <div className="cards-grid">
            {learningCards.map((item, idx) => (
              <div key={idx} className="learning-card card">
                <div className="card-image-placeholder">
                  <span className="card-emoji">{item.emoji}</span>
                  <div className="play-overlay">
                    <PlayCircle size={40} className="play-icon" />
                  </div>
                </div>
                <div className="card-content">
                  <h3>{item.sign}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </PageWrapper>
  );
};

export default LearningPage;
