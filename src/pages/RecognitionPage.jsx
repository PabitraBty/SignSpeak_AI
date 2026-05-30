import React, { useState, useRef, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, StopCircle, RefreshCw, Volume2, History } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import { predictSign } from '../services/aiService';
import './RecognitionPage.css';

const RecognitionPage = () => {
  const webcamRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startCapture = () => {
    setIsCapturing(true);
    setError(null);
  };

  const stopCapture = () => {
    setIsCapturing(false);
    setPrediction(null);
  };

  const clearOutput = () => {
    setPrediction(null);
    setHistory([]);
  };

  const captureFrame = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setIsLoading(true);
        try {
          const result = await predictSign(imageSrc);
          setPrediction(result);
          setHistory(prev => [result, ...prev].slice(0, 10)); // Keep last 10
        } catch (err) {
          setError("Failed to reach AI service.");
        } finally {
          setIsLoading(false);
        }
      }
    }
  }, [webcamRef]);

  // Set up interval for capturing if automatic mode is desired. 
  // For now, we will provide a manual capture button, but it could be automated here.

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <PageWrapper>
      <div className="container recognition-container">
        <div className="recognition-layout">
          
          {/* Left Side: Webcam */}
          <div className="webcam-section card">
            <div className="section-header-small">
              <h3>Live Feed</h3>
              <div className={`status-indicator ${isCapturing ? 'active' : ''}`}></div>
            </div>
            
            <div className="webcam-wrapper">
              {isCapturing ? (
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="webcam-video"
                  videoConstraints={{ facingMode: "user" }}
                />
              ) : (
                <div className="webcam-placeholder">
                  <Camera size={48} />
                  <p>Camera is off</p>
                </div>
              )}
            </div>

            <div className="webcam-controls">
              {!isCapturing ? (
                <button className="btn-primary w-100" onClick={startCapture}>
                  <Camera size={20} /> Start Camera
                </button>
              ) : (
                <>
                  <button className="btn-danger w-100" onClick={stopCapture}>
                    <StopCircle size={20} /> Stop Camera
                  </button>
                  <button className="btn-secondary w-100" onClick={captureFrame} disabled={isLoading}>
                    <Camera size={20} /> {isLoading ? 'Analyzing...' : 'Capture Sign'}
                  </button>
                </>
              )}
            </div>
            {error && <div className="error-message">{error}</div>}
          </div>

          {/* Center: Recognition Result */}
          <div className="result-section card">
            <h3>Recognition Output</h3>
            <div className="result-display">
              {isLoading ? (
                <div className="loading-spinner">
                  <RefreshCw className="spin-icon" size={32} />
                  <p>Processing frame...</p>
                </div>
              ) : prediction ? (
                <div className="prediction-content">
                  <h2 className="detected-sign text-gradient">{prediction.prediction}</h2>
                  <div className="prediction-meta">
                    <span className="confidence-badge">
                      Confidence: {prediction.confidence}%
                    </span>
                    <span className="timestamp">{prediction.timestamp}</span>
                  </div>
                  <button 
                    className="btn-primary mt-4" 
                    onClick={() => speakText(prediction.prediction)}
                  >
                    <Volume2 size={20} /> Speak
                  </button>
                </div>
              ) : (
                <div className="empty-state">
                  <p>Waiting for sign language input...</p>
                </div>
              )}
            </div>
            
            <div className="result-actions mt-4">
              <button className="btn-secondary w-100" onClick={clearOutput}>
                <RefreshCw size={20} /> Clear Output
              </button>
            </div>
          </div>

          {/* Right Side: History */}
          <div className="history-section card">
            <div className="section-header-small">
              <h3><History size={20} /> History</h3>
            </div>
            <div className="history-list">
              {history.length === 0 ? (
                <p className="empty-history">No history yet.</p>
              ) : (
                history.map((item, index) => (
                  <div key={index} className="history-item">
                    <div className="history-item-main">
                      <span className="history-sign">{item.prediction}</span>
                      <span className="history-conf">{item.confidence}%</span>
                    </div>
                    <div className="history-time">{item.timestamp}</div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default RecognitionPage;
