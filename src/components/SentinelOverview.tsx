import React from 'react';
import { Activity, BarChart3, Lock, Terminal, AlertTriangle, Check, Globe } from 'lucide-react';
import * as styles from './SentinelOverview.module.css';

export default function SentinelOverview() {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.brandRow}>
            <svg className={styles.brandIcon} xmlns="" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
            <div className={styles.brandText}>
              <span className={styles.brand}>Sentinel</span><span className={styles. brandAccent}>Web</span>
            </div>
          </div>
          <div className={styles.agents}><span className={styles.dot}></span>Agents Online: 1</div>
        </div>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={`${styles.sbItem} ${styles.sbItemTeal}`}><Activity size={16} /></div>
            <div className={styles.sbItem}><BarChart3 size={16} /></div>
            <div className={styles.sbItem}><Lock size={16} /></div>
            <div className={styles.sbItem}><Terminal size={16} /></div>
          </div>
          <div className={styles.content}>
            <div className={styles.dashboardTitle}>Dashboard Overview</div>
            <div className={styles.statsRow}>
              <div className={styles.stat}><div className={styles.statTitle}>Open Alerts</div><div className={styles.statValue}>7</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Active Agents</div><div className={styles.statValue}>1</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Threats</div><div className={styles.statValue}>7</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Events</div><div className={styles.statValue}>15</div></div>
            </div>
            <div className={styles.lowerRow}>
              <div className={styles.chart}>
                <div className={styles.chartHead}>Global Network Traffic</div>
                <svg viewBox="0 0 400 160" className={styles.chartSvg} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#27F7E8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#27F7E8" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FF3B3B" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF3B3B" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,130 60,120 120,135 180,95 240,75 300,85 400,70 400,160 0,160" fill="url(#grad1)" />
                  <polygon points="0,145 60,125 120,145 180,105 240,95 300,105 400,85 400,160 0,160" fill="url(#grad2)" />
                  <polyline points="0,130 60,120 120,135 180,95 240,75 300,85 400,70" fill="none" stroke="#27F7E8" strokeWidth="2" />
                  <polyline points="0,145 60,125 120,145 180,105 240,95 300,105 400,85" fill="none" stroke="#FF3B3B" strokeWidth="2" />
                </svg>
              </div>
              <div className={styles.threats}>
                <div className={styles.thHead}>
                  <div className={styles.thLeft}><span className={styles.liveDot}></span><span className={styles.thTitle}>LIVE THREATS</span></div>
                </div>
                <div className={styles.thList}>
                  <div className={styles.thItem}>
                    <div className={styles.thTopRow}>
                      <div className={`${styles.thBadge} ${styles.thBadgeRed}`}>ALERTED</div>
                      <span className={styles.thTime}>1:50</span>
                    </div>
                    <div className={styles.thDetailsGrid}>
                      <div className={styles.thDetailItem}>Critical: Password</div>
                      <div className={styles.thDetailItem}>Reuse Detected</div>
                      <div className={styles.thDetailItem}>Same Password</div>
                      <div className={styles.thDetailItem}>Used on pixr.com</div>
                    </div>
                  </div>
                  <div className={styles.thItem}>
                    <div className={styles.thTopRow}>
                      <div className={`${styles.thBadge} ${styles.thBadgeRed}`}>ALERTED</div>
                      <span className={styles.thTime}>1:50</span>
                    </div>
                    <div className={styles.thDetailsGrid}>
                      <div className={styles.thDetailItem}>Critical: Password</div>
                      <div className={styles.thDetailItem}>Reuse Detected</div>
                      <div className={styles.thDetailItem}>Same Password</div>
                      <div className={styles.thDetailItem}>Used on plx.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightIconWrap}><Globe size={24} /></div>
        <h2 className={styles.title}>Unified Exposure Intelligence</h2>
        <p className={styles.desc}>
          Most breaches start on the outside. We continuously map your entire digital footprint—cloud assets, leaked credentials, and shadow IT—correlating billions of signals to find the one weakness that matters.
        </p>
          <div className={styles.bullets}>
          <div className={styles.bullet}><svg className="text-teal-400" xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span className={styles.bulletText}>Real-time correlation of Dark Web & OSINT signals</span></div>
          <div className={styles.bullet}><svg className="text-teal-400" xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span className={styles.bulletText}>Automated discovery of shadow cloud buckets & APIs</span></div>
          <div className={styles.bullet}><svg className="text-teal-400" xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span className={styles.bulletText}>Zero-noise verification engine eliminates false positives</span></div>
          <div className={styles.bullet}><svg className="text-teal-400" xmlns="" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(45, 212, 191)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span className={styles.bulletText}>Instant alerts for leaked employee credentials</span></div>
        </div>
      </div>
    </div>
  );
}
