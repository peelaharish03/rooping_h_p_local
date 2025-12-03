import React from 'react';
import { Activity, BarChart3, Shield, Lock, Terminal, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import styles from './SentinelOverview.module.css';

export default function SentinelOverview() {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.brandRow}>
            <span className={styles.brand}>Sentinel</span><span className={styles.brandAccent}>Web</span>
          </div>
          <div className={styles.agents}><span className={styles.dot}></span>Agents Online: 1</div>
        </div>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.sbItem}><Activity size={16} /></div>
            <div className={styles.sbItem}><BarChart3 size={16} /></div>
            <div className={styles.sbItem}><Shield size={16} /></div>
            <div className={styles.sbItem}><Lock size={16} /></div>
            <div className={styles.sbItem}><Terminal size={16} /></div>
          </div>
          <div className={styles.content}>
            <div className={styles.statsRow}>
              <div className={styles.stat}><div className={styles.statTitle}>Open Alerts</div><div className={styles.statValue}>7</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Active Agents</div><div className={styles.statValue}>1</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Threats</div><div className={styles.statValue}>7</div></div>
              <div className={styles.stat}><div className={styles.statTitle}>Events</div><div className={styles.statValue}>15</div></div>
            </div>
            <div className={styles.lowerRow}>
              <div className={styles.chart}>
                <div className={styles.chartHead}>Global Network Traffic</div>
                <svg viewBox="0 0 400 160" className={styles.chartSvg}>
                  <polyline points="0,130 60,120 120,135 180,95 240,75 300,85 360,70" fill="none" stroke="#27F7E8" strokeWidth="3" />
                  <polyline points="0,145 60,125 120,145 180,105 240,95 300,105 360,85" fill="none" stroke="#FF3B3B" strokeWidth="3" />
                </svg>
              </div>
              <div className={styles.threats}>
                <div className={styles.thHead}><span className={styles.thTitle}>LIVE THREATS</span><span>1:50 AM</span></div>
                <div className={styles.thList}>
                  <div className={styles.thItem}>
                    <div className={`${styles.thBadge} ${styles.thBadgeRed}`}><AlertTriangle size={14} /> ALERTED</div>
                    <div className={styles.thSub}>CRITICAL: Password Reuse Detected. Same password used on pixr.com</div>
                  </div>
                  <div className={styles.thItem}>
                    <div className={`${styles.thBadge} ${styles.thBadgeAmber}`}><AlertTriangle size={14} /> ALERTED</div>
                    <div className={styles.thSub}>CRITICAL: Password Reuse Detected. Same password used on plx.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightIconWrap}><Globe size={18} /></div>
        <h2 className={styles.title}>Unified Exposure Intelligence</h2>
        <p className={styles.desc}>
          Most breaches start on the outside. We continuously map your entire digital footprint—cloud assets, leaked credentials, and shadow IT—correlating billions of signals to find the one weakness that matters.
        </p>
        <div className={styles.bullets}>
          <div className={styles.bullet}><span className={styles.check}><CheckCircle size={12} /></span><span className={styles.bulletText}>Real-time correlation of Dark Web & OSINT signals</span></div>
          <div className={styles.bullet}><span className={styles.check}><CheckCircle size={12} /></span><span className={styles.bulletText}>Automated discovery of shadow cloud buckets & APIs</span></div>
          <div className={styles.bullet}><span className={styles.check}><CheckCircle size={12} /></span><span className={styles.bulletText}>Zero-noise verification engine eliminates false positives</span></div>
          <div className={styles.bullet}><span className={styles.check}><CheckCircle size={12} /></span><span className={styles.bulletText}>Instant alerts for leaked employee credentials</span></div>
        </div>
      </div>
    </div>
  );
}
