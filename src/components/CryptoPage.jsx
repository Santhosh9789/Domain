import React, { useState } from 'react';
import { 
  Coins, 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  ArrowLeft, 
  Layers, 
  Lock, 
  Sparkles,
  Zap,
  PlusCircle
} from 'lucide-react';

export default function CryptoPage({ onNavigateHome }) {
  const [copied, setCopied] = useState(false);
  const [addedToWallet, setAddedToWallet] = useState(false);
  const contractAddress = '0x37f7EA1144036E49A2F00e318Ad3C82219BD72c3';

  // Copy Contract Address
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Add BIT Token to MetaMask / Web3 Wallet
  const addTokenToWallet = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const wasAdded = await window.ethereum.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: contractAddress,
              symbol: 'BIT',
              decimals: 18,
              image: 'https://blueidealteck.com/logo.png'
            }
          }
        });
        if (wasAdded) {
          setAddedToWallet(true);
          setTimeout(() => setAddedToWallet(false), 3000);
        }
      } catch (err) {
        console.error('Error adding token:', err);
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', position: 'relative' }}>
      <div className="section-container">
        
        {/* Navigation Bar Top Action */}
        <div style={{ marginBottom: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <button
            onClick={onNavigateHome}
            className="glow-btn-secondary"
            style={{ padding: '8px 18px', fontSize: '0.88rem', gap: '8px' }}
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>BNB Smart Chain (BEP-20)</span>
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              padding: '4px 12px', 
              borderRadius: '20px', 
              background: 'rgba(16, 185, 129, 0.12)', 
              color: '#059669', 
              fontSize: '0.82rem', 
              fontWeight: 700 
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
              Mainnet Live
            </span>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="glass-panel" style={{
          padding: 'clamp(28px, 5vw, 56px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '40px',
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 249, 255, 0.9) 100%)',
          border: '1px solid rgba(0, 163, 255, 0.35)',
          boxShadow: '0 20px 50px rgba(2, 132, 199, 0.12)'
        }}>
          {/* Badge */}
          <div className="badge-glow" style={{ marginBottom: '20px' }}>
            <Sparkles size={14} color="#00A3FF" />
            <span>ULTRA-SCARCE DIGITAL ASSET • STRICTLY 1,000 HARD-CAPPED SUPPLY</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            color: '#0F172A',
            lineHeight: 1.15,
            marginBottom: '18px',
            letterSpacing: '-1px'
          }}>
            The Sovereign Asset of <span className="gradient-text">blueidealteck (BIT)</span>
          </h1>

          <p style={{
            color: '#475569',
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            lineHeight: 1.7,
            maxWidth: '780px',
            margin: '0 auto 32px auto'
          }}>
            A mathematically capped, non-inflationary cryptocurrency designed to power the corporate valuation, 
            ecosystem utility, and enterprise technological services of blueidealteck on the BNB Smart Chain.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '32px' }}>
            <a
              href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chainId=56`}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-primary"
              style={{ textDecoration: 'none', padding: '14px 26px', fontSize: '1rem' }}
            >
              <Zap size={18} />
              <span>Buy BIT on PancakeSwap 🚀</span>
              <ExternalLink size={16} />
            </a>

            <button
              onClick={addTokenToWallet}
              className="glow-btn-secondary"
              style={{ gap: '8px', padding: '14px 22px' }}
            >
              <PlusCircle size={18} color="#0284C7" />
              <span>{addedToWallet ? 'BIT Added to Wallet! ✓' : 'Add BIT to MetaMask'}</span>
            </button>

            <a
              href="https://dexscreener.com/bsc/0x92e6bdf0de4f19c3ebad07b385b5b9171028c6bc"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-secondary"
              style={{ textDecoration: 'none', padding: '14px 22px' }}
            >
              <TrendingUp size={18} color="#0284C7" />
              <span>Live Chart (DexScreener)</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="./crypto/WHITEPAPER.html"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-secondary"
              style={{ textDecoration: 'none', padding: '14px 22px' }}
            >
              <FileText size={18} color="#0284C7" />
              <span>Whitepaper</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Contract Address Bar */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(56, 189, 248, 0.4)',
            borderRadius: '14px',
            padding: '14px 20px',
            maxWidth: '720px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
            boxShadow: '0 4px 16px rgba(2, 132, 199, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0, textAlign: 'left' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0F172A', whiteSpace: 'nowrap' }}>
                Contract Address:
              </span>
              <code style={{
                fontFamily: 'var(--font-mono)',
                color: '#0284C7',
                fontSize: '0.88rem',
                wordBreak: 'break-all',
                background: '#F0F9FF',
                padding: '4px 8px',
                borderRadius: '6px'
              }}>
                {contractAddress}
              </code>
            </div>

            <button
              onClick={handleCopy}
              className="glow-btn-secondary"
              style={{
                padding: '6px 14px',
                fontSize: '0.82rem',
                background: copied ? 'rgba(16, 185, 129, 0.1)' : '#FFFFFF',
                color: copied ? '#059669' : '#0284C7',
                borderColor: copied ? '#10B981' : 'rgba(0, 163, 255, 0.4)',
                gap: '6px'
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied! ✓' : 'Copy Address'}</span>
            </button>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="glass-panel" style={{
          padding: '24px 30px',
          marginBottom: '50px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          textAlign: 'center'
        }}>
          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '1.05rem', marginBottom: '4px' }}>
              BNB Smart Chain Mainnet
            </strong>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Chain ID: 56 • BEP-20 Standard</span>
          </div>

          <div>
            <strong style={{ display: 'block', color: '#059669', fontSize: '1.05rem', marginBottom: '4px' }}>
              Open-Source Verified ✅
            </strong>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Solidity 0.8.34 • BscScan Match</span>
          </div>

          <div>
            <strong style={{ display: 'block', color: '#0284C7', fontSize: '1.05rem', marginBottom: '4px' }}>
              PancakeSwap V2 Pool Live
            </strong>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>Automated 24/7 Liquidity</span>
          </div>

          <div>
            <strong style={{ display: 'block', color: '#0F172A', fontSize: '1.05rem', marginBottom: '4px' }}>
              0 High Risk Score
            </strong>
            <span style={{ fontSize: '0.85rem', color: '#64748B' }}>HashDit & Web3 Audited</span>
          </div>
        </div>

        {/* Tokenomics Key Metrics Grid */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-title-wrap">
            <div className="badge-glow" style={{ marginBottom: '14px' }}>
              <Coins size={14} color="#00A3FF" />
              <span>Tokenomics & Circulation</span>
            </div>
            <h2 className="section-title">
              Key Token <span className="gradient-text">Metrics</span>
            </h2>
            <p className="section-subtitle">
              Strict mathematical scarcity mirroring the Bitcoin standard. No continuous minting, zero inflationary decay.
            </p>
          </div>

          <div className="grid-responsive-4">
            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>
                Total Max Supply
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '6px' }}>
                1,000 BIT
              </div>
              <div style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 600 }}>
                🔒 100% Capped Forever
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>
                Company Reserve Vault
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '6px' }}>
                900 BIT
              </div>
              <div style={{ fontSize: '0.85rem', color: '#0284C7', fontWeight: 600 }}>
                🏛️ 90% Strategic Treasury
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>
                Public DEX Circulation
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '6px' }}>
                100 BIT
              </div>
              <div style={{ fontSize: '0.85rem', color: '#00A3FF', fontWeight: 600 }}>
                🌊 10% PancakeSwap Liquidity
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '28px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px', fontWeight: 700 }}>
                Precision Decimals
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0F172A', marginBottom: '6px' }}>
                18 Decimals
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', fontWeight: 600 }}>
                🔬 Micro-fractional Trading
              </div>
            </div>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-title-wrap">
            <div className="badge-glow" style={{ marginBottom: '14px' }}>
              <Lock size={14} color="#00A3FF" />
              <span>Treasury & Governance</span>
            </div>
            <h2 className="section-title">
              Transparent <span className="gradient-text">Allocation</span>
            </h2>
          </div>

          <div className="grid-responsive-2">
            <div className="glass-panel" style={{ padding: '32px', borderLeft: '4px solid #0284C7' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                🏛️ 900 BIT (90%) — Company Reserve
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Permanently allocated to the blueidealteck corporate vault to serve as a transparent cryptographic 
                balance-sheet asset for strategic investments, expansion, client rewards, enterprise technological backing, 
                and corporate treasury strength.
              </p>
            </div>

            <div className="glass-panel" style={{ padding: '32px', borderLeft: '4px solid #00A3FF' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>
                🌊 100 BIT (10%) — Public DEX Trading
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6 }}>
                Directly dedicated to decentralized automated market maker liquidity pools on PancakeSwap, allowing worldwide 
                users and enterprises to trade micro-fractions (0.01 BIT, 0.001 BIT) autonomously 24/7 without centralized intermediary friction.
              </p>
            </div>
          </div>
        </div>

        {/* Execution Roadmap */}
        <div style={{ marginBottom: '60px' }}>
          <div className="section-title-wrap">
            <div className="badge-glow" style={{ marginBottom: '14px' }}>
              <Layers size={14} color="#00A3FF" />
              <span>Strategic Evolution</span>
            </div>
            <h2 className="section-title">
              Project <span className="gradient-text">Roadmap</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', maxWidth: '860px', margin: '0 auto' }}>
            <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#10B981',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Phase 1: Genesis & Smart Contract Deployment
                </h4>
                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  Solidity 0.8.34 smart contract architecture developed, audited, deployed on BNB Smart Chain Mainnet, and verified on BscScan with Open-Source MIT License.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#10B981',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                ✓
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Phase 2: Liquidity & DEX Activation
                </h4>
                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  PancakeSwap decentralized liquidity pool established. 900 BIT secured in Company Vault. Live candlestick trading enabled on DexScreener and GeckoTerminal.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#0284C7',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                3
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Phase 3: Global Tracking & Aggregator Listings
                </h4>
                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  Official token logo and metadata indexing on BscScan. Application for listings on CoinGecko, CoinMarketCap, and Trust Wallet Asset registry.
                </p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '24px', display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#64748B',
                color: '#FFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                4
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                  Phase 4: Corporate Ecosystem Utility
                </h4>
                <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.5 }}>
                  Acceptance of BIT across blueidealteck technological services, client loyalty discounts, and potential centralized exchange (CEX) tier listings.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Links & Resources */}
        <div className="glass-panel" style={{
          padding: '36px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #0284C7 0%, #00A3FF 100%)',
          color: '#FFFFFF',
          marginBottom: '40px'
        }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 900, marginBottom: '12px' }}>
            Official Verification & Web3 Resources
          </h3>
          <p style={{ fontSize: '1rem', opacity: 0.95, maxWidth: '640px', margin: '0 auto 24px auto' }}>
            Access all transparent smart contracts, decentralized exchange pools, and technical whitepapers directly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a
              href="https://bscscan.com/token/0x37f7EA1144036E49A2F00e318Ad3C82219BD72c3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#FFFFFF',
                color: '#0284C7',
                padding: '10px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <ShieldCheck size={16} />
              <span>Verified BscScan Contract</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="./crypto/WHITEPAPER.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                padding: '10px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} />
              <span>Official Whitepaper</span>
              <ExternalLink size={14} />
            </a>

            <a
              href="./crypto/blueidealteck_Coin_Purpose.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                border: '1px solid #FFFFFF',
                padding: '10px 20px',
                borderRadius: '10px',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FileText size={16} />
              <span>Purpose Document (PDF)</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Home CTA */}
        <div style={{ textAlign: 'center', paddingBottom: '30px' }}>
          <button
            onClick={onNavigateHome}
            className="glow-btn-secondary"
            style={{ padding: '10px 24px', fontSize: '0.95rem', gap: '8px' }}
          >
            <ArrowLeft size={16} />
            <span>Return to Main Website</span>
          </button>
        </div>

      </div>
    </div>
  );
}
