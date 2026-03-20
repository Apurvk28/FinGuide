import { Link } from 'react-router-dom';
import { Bot, LineChart, PiggyBank, Target, ArrowRight } from "lucide-react";

export default function Home() {
    return (
        <div className="hero-container" style={{ display: 'block' }}>
            <div className="text-center animate-slide-up" style={{ marginTop: '3rem' }}>
                <h1 className="header-title">
                    <span className="glow-text">FinGuide</span>
                </h1>
                <h2 className="tagline mb-4">Track it. Own it.</h2>

                <p className="mb-4" style={{ maxWidth: '700px', fontSize: '1.2rem', margin: '0 auto' }}>
                    Navigate your finances with our cutting-edge Multi-Agent Artificial Intelligence. Let the machines crunch the numbers so you can focus on living.
                </p>
            </div>

            <div className="text-center animate-slide-up delay-2 mt-8" style={{ zIndex: 10, position: 'relative' }}>
                <Link to="/analyse" className="glow-button">
                    Analyse your Finance <ArrowRight style={{ marginLeft: '10px' }} />
                </Link>
            </div>

            {/* Animated Workflow */}
            <div className="workflow-container animate-slide-up delay-1" style={{ position: 'relative', marginTop: '6rem' }}>
                <div className="glass-panel workflow-step hover-animate">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
                    <h3 className="glow-text" style={{ fontSize: '1.2rem' }}>1. Enter Data</h3>
                    <p style={{ fontSize: '0.9rem' }}>Input your income, debts, and monthly expenses.</p>
                </div>

                <div className="glass-panel workflow-step hover-animate">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚙️</div>
                    <h3 className="glow-text" style={{ fontSize: '1.2rem' }}>2. AI Analysis</h3>
                    <p style={{ fontSize: '0.9rem' }}>Multiple ADK Agents process your financials instantly.</p>
                </div>

                <div className="glass-panel workflow-step hover-animate">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
                    <h3 className="glow-text" style={{ fontSize: '1.2rem' }}>3. Get Strategy</h3>
                    <p style={{ fontSize: '0.9rem' }}>Receive extreme optimizations for your wealth.</p>
                </div>
            </div>

            {/* Split Screen Comparison */}
            <div className="mt-8 animate-slide-up delay-3" style={{ marginTop: '6rem', width: '100%' }}>
                <h2 className="header-title" style={{ fontSize: '2.5rem', textAlign: 'center' }}>
                    <span className="glow-text">The FinGuide Difference</span>
                </h2>

                <div className="split-screen-container">
                    {/* Left Column */}
                    <div className="split-column without-guide">
                        <h3 style={{ textAlign: 'center', color: '#5d6c7b', marginBottom: '2rem' }}>Without FinGuide</h3>

                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Static Spreadsheets</h4>
                            <p className="pop-details">Tedious manual data entry across fragmented excel files leading to extreme time waste.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Guesswork Strategies</h4>
                            <p className="pop-details">Blindly paying minimums on debt without mapping out mathematical Avalanche curves.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Generic Advice</h4>
                            <p className="pop-details">Reading "one-size-fits-all" internet blogs that ignore your actual income & local Indian mechanics.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Fragmented Tools</h4>
                            <p className="pop-details">Using a dozen different apps for budgeting, EMIs, and mutual funds.</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="split-column with-guide">
                        <h3 style={{ textAlign: 'center', color: 'var(--neon-purple)', marginBottom: '2rem' }}>With FinGuide</h3>

                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Instant ADK Agents</h4>
                            <p className="pop-details">Automated aggregation natively pushed through Google's Gemini Multi-Agent core instantly.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Math-Backed Output</h4>
                            <p className="pop-details">Engineered Python algorithms calculate exactly which debts save you the most interest natively.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>Hyper-Personalized</h4>
                            <p className="pop-details">The 4 AI Agents parse your distinct dependents, income, and liabilities exclusively.</p>
                        </div>
                        <div className="glass-panel comparison-card hover-pop">
                            <h4>All-In-One Hub</h4>
                            <p className="pop-details">Budgets, Savings, Debt, and custom Indian Investments calculated structurally in one click.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 animate-slide-up delay-3" style={{ marginTop: '6rem' }}>
                <h2 className="header-title" style={{ fontSize: '2.5rem', textAlign: 'center' }}><span className="glow-text">The Engine Overview</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem', width: '100%', alignItems: 'center' }}>

                    <div className="glass-panel engine-card">
                        <LineChart size={32} color="var(--neon-cyan)" className="mb-2" />
                        <h3 style={{ color: 'var(--neon-purple)' }}>Budget Analysis Agent</h3>
                        <p>Scans your spending patterns, identifies leakages, and recommends actionable expense reductions.</p>
                    </div>

                    <div className="glass-panel engine-card">
                        <PiggyBank size={32} color="var(--neon-cyan)" className="mb-2" />
                        <h3 style={{ color: 'var(--neon-purple)' }}>Savings Strategy Agent</h3>
                        <p>Calculates optimal emergency fund sizes and generates robust, automated saving routines.</p>
                    </div>

                    <div className="glass-panel engine-card">
                        <Target size={32} color="var(--neon-cyan)" className="mb-2" />
                        <h3 style={{ color: 'var(--neon-purple)' }}>Debt Reduction Agent</h3>
                        <p>Deploys complex math algorithms to map out your fastest route to a debt-free life.</p>
                    </div>

                    <div className="glass-panel engine-card">
                        <Bot size={32} color="var(--neon-cyan)" className="mb-2" />
                        <h3 style={{ color: 'var(--neon-purple)' }}>Investment Strategy Agent</h3>
                        <p>Surplus mapping dynamically allocating liquidity across tailored Indian market instruments.</p>
                    </div>
                </div>
            </div>
            <section className="faq-section animate-slide-up delay-3">
                <h2 className="header-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
                    <span className="glow-text">Frequently Asked Questions</span>
                </h2>
                <div className="faq-container">
                    <div className="faq-item">
                        <div className="faq-question">How does FinGuide track my finances organically? <span className="faq-icon">+</span></div>
                        <div className="faq-answer">We securely aggregate your historical telemetry and bank outputs and pipe them structurally into Google's ADK native architecture. This allows our backend system to process thousands of financial variables simultaneously, outputting pure mathematical strategies that actively pivot around your long-term goals without human error.</div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">Is my bank data fully secure? <span className="faq-icon">+</span></div>
                        <div className="faq-answer">Absolutely. All active endpoints traversing our infrastructure are rigorously secured using localized sandbox environments equipped with military-grade AES-256 encryption. FinGuide operates exclusively as a read-only tracking advisor across all nodes, meaning we mathematically cannot execute any transactions on your behalf.</div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">Do I need to connect my bank accounts? <span className="faq-icon">+</span></div>
                        <div className="faq-answer">Connecting your bank is entirely optional and only required if you strongly desire live, real-time expense classification. You can natively utilize our dedicated manual data pipelines to input your overheads seamlessly, ensuring your entire financial dataset remains strictly isolated from any external networks.</div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">How is the Debt Agent different from a calculator? <span className="faq-icon">+</span></div>
                        <div className="faq-answer">Instead of functioning as a basic static calculator, our specialized Machine Learning backend actively calculates your distinct open loans and automatically projects a mathematical 'Avalanche Curve' perfectly mapped against your specific interest rates, guaranteeing the absolute lowest possible overhead over the lifespan of your debt.</div>
                    </div>
                    <div className="faq-item">
                        <div className="faq-question">Does the Investment Agent handle Indian tax laws? <span className="faq-icon">+</span></div>
                        <div className="faq-answer">Yes, our proprietary algorithmic strategy matrices natively construct investment and savings recommendations while deeply factoring the strict boundary conditions of both the old and new Indian structured tax regimes. This guarantees that your liquid allocations inherently maximize tax-harvesting efficiencies without external CP guidance.</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
