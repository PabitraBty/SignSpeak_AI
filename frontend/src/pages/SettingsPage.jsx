import React, { useState } from 'react';
import { Moon, Sun, Volume2, Camera as CameraIcon, Bell, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import PageWrapper from '../components/layout/PageWrapper';
import './SettingsPage.css';

const SettingsPage = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const [settings, setSettings] = useState({
    speechOutput: true,
    notifications: true,
    cameraDevice: 'default',
    language: 'en'
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <PageWrapper>
      <div className="container settings-container">
        <div className="section-header-small">
          <h2>Settings</h2>
          <p className="text-secondary">Manage your preferences and app configuration</p>
        </div>

        <div className="settings-grid">
          
          {/* Appearance */}
          <div className="settings-card card">
            <div className="settings-header">
              <div className="settings-icon-wrapper">
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </div>
              <h3>Appearance</h3>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h4>Dark Mode</h4>
                <p>Toggle between light and dark themes</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={isDarkMode} 
                  onChange={toggleTheme} 
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Audio & Speech */}
          <div className="settings-card card">
            <div className="settings-header">
              <div className="settings-icon-wrapper">
                <Volume2 size={20} />
              </div>
              <h3>Audio & Speech</h3>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h4>Speech Output</h4>
                <p>Automatically read recognized signs aloud</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.speechOutput} 
                  onChange={() => handleToggle('speechOutput')} 
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          {/* Hardware */}
          <div className="settings-card card">
            <div className="settings-header">
              <div className="settings-icon-wrapper">
                <CameraIcon size={20} />
              </div>
              <h3>Hardware</h3>
            </div>
            <div className="setting-item">
              <div className="setting-info w-100">
                <h4>Default Camera</h4>
                <p>Select which camera to use for recognition</p>
                <select 
                  className="settings-select"
                  value={settings.cameraDevice}
                  onChange={(e) => handleChange('cameraDevice', e.target.value)}
                >
                  <option value="default">System Default</option>
                  <option value="front">Front Camera</option>
                  <option value="rear">Rear Camera</option>
                </select>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="settings-card card">
            <div className="settings-header">
              <div className="settings-icon-wrapper">
                <Globe size={20} />
              </div>
              <h3>Preferences</h3>
            </div>
            <div className="setting-item">
              <div className="setting-info">
                <h4>App Language</h4>
                <p>Select interface language</p>
              </div>
              <select 
                className="settings-select small"
                value={settings.language}
                onChange={(e) => handleChange('language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi (Coming Soon)</option>
              </select>
            </div>
            <div className="setting-item border-top">
              <div className="setting-info">
                <h4>Notifications</h4>
                <p>Receive updates and usage reports</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.notifications} 
                  onChange={() => handleToggle('notifications')} 
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
};

export default SettingsPage;
