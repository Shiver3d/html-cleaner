import React, { useEffect, useRef, useState } from 'react'
import '../persona3.scss'

function stripHtml(html: string) {
  try {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  } catch (e) {
    return html.replace(/<[^>]*>/g, '')
  }
}

export const HtmlCleaner: React.FC = () => {
  const [input, setInput] = useState('')
  const cleaned = stripHtml(input)
  const outputRef = useRef<HTMLTextAreaElement | null>(null)

  // Ctrl+L to replace input with cleaned text
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'l') {
        e.preventDefault()
        setInput((prev) => stripHtml(prev))
        // focus output
        setTimeout(() => outputRef.current?.focus(), 50)
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(cleaned)
    } catch (err) {
      // fallback selection
      if (outputRef.current) {
        outputRef.current.select()
        document.execCommand('copy')
      }
    }
  }

  return (
    <div className="extras-page">
      <div className="circle-transition c-top-left" />
      <div className="circle-transition c-bottom-right" />

      <div className="top-bar">
        <span>Html Cleaner</span>
      </div>

      <div className="bg-stripes">
        <div className="middle-stripe" />
      </div>

      <div className="content-area">
        <div className="menu-layout">
          <h1 className="extras-title">html cleaner</h1>
          <div className="menu-wrapper">
            <ul className="option-list">
              <li className="is-selected">Html → Texto</li>
            </ul>
            <p className="hint-text">Cole HTML no campo abaixo; tags serão removidas.</p>
          </div>
        </div>

        <div className="player-container">
          <div style={{ width: '640px', maxWidth: '90vw' }}>
            <label style={{ display: 'block', color: '#0d2f5a', marginBottom: '0.5rem' }}>HTML input</label>
            <textarea
              className="html-input textarea"
              aria-label="html-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Cole aqui o HTML com tags..."
              style={{ width: '100%', height: 180 }}
            />

            <label style={{ display: 'block', color: '#0d2f5a', margin: '1rem 0 0.5rem' }}>Texto limpo</label>

            <textarea
              className="output-textarea textarea"
              ref={outputRef}
              readOnly
              aria-label="cleaned-output"
              value={cleaned}
              onFocus={(e) => e.currentTarget.select()}
              style={{ width: '100%', height: 140, marginBottom: 8 }}
            />

            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button onClick={copyOutput} aria-label="copy-cleaned" className="controls-group" style={{ padding: '0.4rem 0.8rem', borderRadius: 6 }}>
                Copiar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div className="controls">
          <div className="controls-group">
            <div className="key-icon">CTRL</div>
            <div className="key-label">Limpar (Ctrl+L)</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HtmlCleaner
