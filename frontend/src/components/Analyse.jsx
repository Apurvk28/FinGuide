export default function Analyse() {
    return (
        <div style={{ width: '100%', height: '80vh', borderRadius: '16px', overflow: 'hidden', marginTop: '2rem' }}>
            <iframe
                src="http://localhost:8501/?embed=true"
                width="100%"
                height="100%"
                style={{ border: 'none', background: 'transparent' }}
                title="FinGuide AI Analysis"
            />
        </div>
    );
}
