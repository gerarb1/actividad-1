import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [blinkOn, setBlinkOn] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [hoverSkill, setHoverSkill] = useState(null)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setBlinkOn(prev => !prev)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  const skills = [
    { name: 'MERN Stack', icon: '⚔️', level: 75, color: '#00ff88' },
    { name: 'TypeScript', icon: '🛡️', level: 60, color: '#3178c6' },
    { name: 'MMA / Kickboxing', icon: '🥊', level: 50, color: '#ff4444' },
    { name: 'Linux (Pop!_OS / CachyOS)', icon: '🐧', level: 85, color: '#ffcc00' },
  ]

  const achievements = [
    { label: 'NIVEL', value: '24', icon: '⭐' },
    { label: 'CLASE', value: 'DEV', icon: '💻' },
    { label: 'HP', value: '100%', icon: '❤️' },
  ]

  return (
    <div className={`arcade-page ${loaded ? 'loaded' : ''}`}>
      {/* Scanline overlay */}
      <div className="scanlines"></div>
      <div className="crt-curve"></div>

      {/* Decorative grid background */}
      <div className="retro-grid"></div>

      <div className="arcade-container">
        {/* Top marquee */}
        <div className="marquee">
          <div className="marquee-text">
            ★ PLAYER 1 READY ★ GERARDO BURGOS ★ SELECT YOUR FIGHTER ★
          </div>
        </div>

        {/* Header */}
        <header className="arcade-header">
          <div className="title-container">
            <span className="title-prefix">&gt;&gt;</span>
            <h1 className="main-title">MI BIOGRAFÍA</h1>
            <span className="title-suffix">&lt;&lt;</span>
          </div>
          <p className="subtitle blink">{blinkOn ? '▶ ESTUDIANTE DE INFORMÁTICA Y SISTEMAS ◀' : '   ESTUDIANTE DE INFORMÁTICA Y SISTEMAS   '}</p>
          <div className="coin-indicator">
            <span className={`coin ${blinkOn ? 'visible' : 'hidden'}`}>INSERT COIN</span>
          </div>
        </header>

        {/* Stats bar */}
        <div className="stats-bar">
          {achievements.map((stat, idx) => (
            <div className="stat-box" key={idx}>
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Main bio card */}
        <section className="bio-card">
          <div className="card-border-top">
            <div className="corner tl"></div>
            <div className="corner tr"></div>
          </div>

          <div className="card-content">
            <div className="player-header">
              <div className="player-avatar">
                <div className="avatar-frame">
                  <span className="avatar-emoji">👾</span>
                </div>
                <div className="level-badge">LV.24</div>
              </div>
              <div className="player-info">
                <h2 className="player-name">Gerardo Burgos</h2>
                <div className="player-title">[ Estudiante de Último Año ]</div>
              </div>
            </div>

            <div className="dialog-box">
              <p className="dialog-text">
                Soy un estudiante de último año muy curioso por aprender sobre desarrollo web. Mis hobbies son los videojuegos y soy peleador amateur de MMA.
              </p>
            </div>

            <div className="section-divider">
              <span className="divider-text">⚡ INTERESES Y HABILIDADES ⚡</span>
            </div>

            <div className="skills-grid">
              {skills.map((skill, idx) => (
                <div
                  className="skill-card"
                  key={idx}
                  style={{ '--skill-color': skill.color }}
                  onMouseEnter={() => setHoverSkill(idx)}
                  onMouseLeave={() => setHoverSkill(null)}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                  <div className="skill-bar-container">
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 8px ${skill.color}`,
                      }}
                    ></div>
                  </div>
                  <div className="skill-level">
                    {hoverSkill === idx ? `POWER: ${skill.level}` : `${skill.level}/100`}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-border-bottom">
            <div className="corner bl"></div>
            <div className="corner br"></div>
          </div>
        </section>

        {/* High score table style footer */}
        <footer className="arcade-footer">
          <div className="highscore-box">
            <div className="highscore-header">★ HIGH SCORE ★</div>
            <div className="highscore-entry">
              <span className="rank">1ST</span>
              <span className="name">Actividad 1</span>
              <span className="score">Programación Móvil</span>
            </div>
            <div className="highscore-date">MAYO 2026</div>
          </div>
          <div className="footer-pixels">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className={`pixel-dot dot-${i}`}></span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App