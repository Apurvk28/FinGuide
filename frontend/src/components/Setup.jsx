import { Key, ShieldCheck } from 'lucide-react';

export default function Setup() {
    return (
        <div>
            <h2 className="header-title" style={{ fontSize: '2.5rem' }}><span className="glow-text">Setup FinGuide</span></h2>
            <p className="tagline mb-4" style={{ marginLeft: '0' }}>Configure your local environment securely.</p>

            <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Key size={32} color="var(--neon-cyan)" style={{ marginRight: '1rem' }} />
                    <h3>1. Get your API Key</h3>
                </div>
                <p>Acquire your free <strong>Gemini API Key</strong> from Google AI Studio: <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer" style={{ color: 'var(--neon-purple)' }}>aistudio.google.com</a></p>
            </div>

            <div className="glass-panel">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <ShieldCheck size={32} color="var(--neon-cyan)" style={{ marginRight: '1rem' }} />
                    <h3>2. Environment Secrets</h3>
                </div>
                <p>Create a <code>.env</code> file in the backend root directory of this project and inject the secure key like so:</p>
                <pre style={{ background: 'rgba(0,0,0,0.5)', padding: '1rem', borderRadius: '8px', color: 'var(--neon-cyan)' }}>
                    GOOGLE_API_KEY=your_api_key_here
                </pre>
            </div>
        </div>
    );
}
