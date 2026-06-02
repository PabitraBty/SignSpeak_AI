import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import './DashboardPage.css';

const data = [
  { name: 'Mon', signs: 40, accuracy: 92 },
  { name: 'Tue', signs: 30, accuracy: 94 },
  { name: 'Wed', signs: 55, accuracy: 91 },
  { name: 'Thu', signs: 45, accuracy: 95 },
  { name: 'Fri', signs: 60, accuracy: 96 },
  { name: 'Sat', signs: 80, accuracy: 98 },
  { name: 'Sun', signs: 65, accuracy: 97 },
];

const DashboardPage = () => {
  return (
    <PageWrapper>
      <div className="container dashboard-container">
        <div className="section-header-small">
          <h2>Dashboard Overview</h2>
          <p className="text-secondary">Your SignSpeak AI usage statistics</p>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card card">
            <div className="stat-icon-wrapper blue">
              <Activity className="stat-icon" />
            </div>
            <div className="stat-info">
              <p className="stat-label">Total Signs</p>
              <h3 className="stat-value">375</h3>
            </div>
          </div>
          
          <div className="stat-card card">
            <div className="stat-icon-wrapper green">
              <CheckCircle className="stat-icon" />
            </div>
            <div className="stat-info">
              <p className="stat-label">Avg Accuracy</p>
              <h3 className="stat-value">94.7%</h3>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrapper purple">
              <Clock className="stat-icon" />
            </div>
            <div className="stat-info">
              <p className="stat-label">Usage Time</p>
              <h3 className="stat-value">12h 45m</h3>
            </div>
          </div>

          <div className="stat-card card">
            <div className="stat-icon-wrapper yellow">
              <TrendingUp className="stat-icon" />
            </div>
            <div className="stat-info">
              <p className="stat-label">Weekly Growth</p>
              <h3 className="stat-value">+15%</h3>
            </div>
          </div>
        </div>

        {/* Charts and History */}
        <div className="dashboard-grid">
          <div className="chart-section card">
            <h3>Weekly Recognition Activity</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                  <XAxis dataKey="name" stroke="var(--text-secondary)" />
                  <YAxis stroke="var(--text-secondary)" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    itemStyle={{ color: 'var(--accent-primary)' }}
                  />
                  <Bar dataKey="signs" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="recent-activity-section card">
            <h3>Recent Recognitions</h3>
            <div className="activity-list">
              {[
                { sign: 'Hello', time: '2 mins ago', conf: '98%' },
                { sign: 'Thank You', time: '15 mins ago', conf: '95%' },
                { sign: 'Namaste', time: '1 hour ago', conf: '99%' },
                { sign: 'Yes', time: '2 hours ago', conf: '92%' },
                { sign: 'No', time: '3 hours ago', conf: '96%' },
              ].map((item, idx) => (
                <div key={idx} className="activity-item">
                  <div className="activity-dot"></div>
                  <div className="activity-content">
                    <p className="activity-title">Detected <strong>"{item.sign}"</strong></p>
                    <p className="activity-time">{item.time}</p>
                  </div>
                  <div className="activity-conf">{item.conf}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default DashboardPage;
