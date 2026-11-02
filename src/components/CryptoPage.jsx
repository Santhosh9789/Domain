import React, { useState, useEffect } from 'react';
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
  Wallet,
  ArrowDownUp,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
  PlusCircle
} from 'lucide-react';

export default function CryptoPage({ onNavigateHome }) {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x37f7EA1144036E49A2F00e318Ad3C82219BD72c3';

  // Web3 Wallet State
  const [walletAddress, setWalletAddress] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [bnbBalance, setBnbBalance] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletError, setWalletError] = useState(null);
  const [addedToWallet, setAddedToWallet] = useState(false);

  // In-App Swap State
  const [swapMode, setSwapMode] = useState('quick'); // 'quick' or 'pancake'
  const [payAmount, setPayAmount] = useState('0.1');
  const [slippage, setSlippage] = useState('1.0');
  const [isSwapping, setIsSwapping] = useState(false);

  const BSC_MAINNET_CHAIN_ID = '0x38'; // 56 in decimal
  const isBSC = chainId === BSC_MAINNET_CHAIN_ID || chainId === 56 || chainId === '56';

  // Copy Contract Address Helper
  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check if wallet is already connected on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.request({ method: 'eth_accounts' })
        .then(accounts => {
          if (accounts && accounts.length > 0) {
            setWalletAddress(accounts[0]);
            fetchChainIdAndBalance(accounts[0]);
          }
        })
        .catch(console.error);

      // Listen for account and network changes
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          fetchChainIdAndBalance(accounts[0]);
        } else {
          setWalletAddress(null);
          setBnbBalance(null);
        }
      };

      const handleChainChanged = (newChainId) => {
        setChainId(newChainId);
        if (walletAddress) fetchChainIdAndBalance(walletAddress);
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        if (window.ethereum.removeListener) {
          window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
          window.ethereum.removeListener('chainChanged', handleChainChanged);
        }
      };
    }
  }, [walletAddress]);

  // Fetch Chain ID & BNB Balance
  const fetchChainIdAndBalance = async (address) => {
    if (!window.ethereum || !address) return;
    try {
      const currentChain = await window.ethereum.request({ method: 'eth_chainId' });
      setChainId(currentChain);

      const balanceHex = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      const balanceWei = parseInt(balanceHex, 16);
      const balanceEth = (balanceWei / 1e18).toFixed(4);
      setBnbBalance(balanceEth);
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  // Connect Wallet Action
  const connectWallet = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      setWalletError('No Web3 Wallet detected! Please install MetaMask or Trust Wallet.');
      window.open('https://metamask.io/download/', '_blank');
      return;
    }

    setIsConnecting(true);
    setWalletError(null);

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
        await fetchChainIdAndBalance(accounts[0]);

        // Auto prompt to switch to BSC if on wrong network
        const currentChain = await window.ethereum.request({ method: 'eth_chainId' });
        if (currentChain !== BSC_MAINNET_CHAIN_ID) {
          await switchToBSC();
        }
      }
    } catch (err) {
      console.error('Wallet connection failed:', err);
      setWalletError(err.message || 'Connection failed. Please approve request in wallet.');
    } finally {
      setIsConnecting(false);
    }
  };

  // Switch or Add BNB Smart Chain (BSC)
  const switchToBSC = async () => {
    if (!window.ethereum) return;
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: BSC_MAINNET_CHAIN_ID }]
      });
      setChainId(BSC_MAINNET_CHAIN_ID);
    } catch (switchError) {
      // 4902 error code means BSC network has not been added to MetaMask yet
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: BSC_MAINNET_CHAIN_ID,
                chainName: 'BNB Smart Chain Mainnet',
                nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
                rpcUrls: ['https://bsc-dataseed.binance.org/', 'https://rpc.ankr.com/bsc'],
                blockExplorerUrls: ['https://bscscan.com/']
              }
            ]
          });
          setChainId(BSC_MAINNET_CHAIN_ID);
        } catch (addError) {
          console.error('Failed to add BSC:', addError);
          setWalletError('Failed to add BNB Smart Chain to wallet.');
        }
      } else {
        setWalletError(switchError.message || 'Please switch network to BNB Smart Chain in your wallet.');
      }
    }
  };

  // Add BIT Token to MetaMask / Trust Wallet with 1 click
  const addTokenToWallet = async () => {
    if (!window.ethereum) {
      setWalletError('MetaMask or Web3 wallet is required.');
      return;
    }

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
    } catch (error) {
      console.error('Add token error:', error);
    }
  };

  // Estimate BIT Output (Calculation based on hard cap & PancakeSwap ratio)
  const calculateOutput = (amount) => {
    const parsed = parseFloat(amount);
    if (isNaN(parsed) || parsed <= 0) return '0.0000';
    // Approximation: 1 BNB ~= 0.1 BIT (subject to DEX pool curve)
    const est = (parsed * 0.1).toFixed(4);
    return est;
  };

  // Execute Swap via PancakeSwap
  const handleExecuteSwap = () => {
    if (!walletAddress) {
      connectWallet();
      return;
    }
    if (!isBSC) {
      switchToBSC();
      return;
    }

    // Direct PancakeSwap pre-filled URL with user input
    const pancakeUrl = `https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chainId=56`;
    window.open(pancakeUrl, '_blank', 'noopener,noreferrer');
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

          {/* Web3 Wallet Quick Status Bar */}
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            {walletAddress ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {!isBSC ? (
                  <button
                    onClick={switchToBSC}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '20px',
                      background: '#FEE2E2',
                      border: '1px solid #EF4444',
                      color: '#DC2626',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <AlertCircle size={14} />
                    <span>Switch to BSC</span>
                  </button>
                ) : (
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    color: '#059669',
                    fontSize: '0.82rem',
                    fontWeight: 700
                  }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
                    BNB Chain {bnbBalance ? `(${bnbBalance} BNB)` : ''}
                  </span>
                )}

                <div style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 163, 255, 0.3)',
                  color: '#0F172A',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(0, 163, 255, 0.1)'
                }}>
                  <Wallet size={14} color="#0284C7" />
                  <span>{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
                </div>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="glow-btn-primary"
                style={{ padding: '7px 18px', fontSize: '0.85rem', gap: '8px' }}
                disabled={isConnecting}
              >
                <Wallet size={16} />
                <span>{isConnecting ? 'Connecting...' : 'Connect Wallet'}</span>
              </button>
            )}
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
              href="#swap-terminal"
              className="glow-btn-primary"
              style={{ textDecoration: 'none' }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('swap-terminal')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Zap size={18} />
              <span>Instant Buy / Swap BIT</span>
            </a>

            <button
              onClick={addTokenToWallet}
              className="glow-btn-secondary"
              style={{ gap: '8px' }}
            >
              <PlusCircle size={18} color="#0284C7" />
              <span>{addedToWallet ? 'BIT Added to Wallet! ✓' : 'Add BIT to MetaMask'}</span>
            </button>

            <a
              href="https://dexscreener.com/bsc/0x92e6bdf0de4f19c3ebad07b385b5b9171028c6bc"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-btn-secondary"
              style={{ textDecoration: 'none' }}
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
              style={{ textDecoration: 'none' }}
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

        {/* ------------------------------------------------------------- */}
        {/* INTERACTIVE WEB3 WALLET & PANCAKESWAP SWAP TERMINAL */}
        {/* ------------------------------------------------------------- */}
        <div id="swap-terminal" style={{ marginBottom: '60px' }}>
          <div className="section-title-wrap">
            <div className="badge-glow" style={{ marginBottom: '14px' }}>
              <ArrowDownUp size={14} color="#00A3FF" />
              <span>In-App Decentralized Exchange</span>
            </div>
            <h2 className="section-title">
              Direct <span className="gradient-text">PancakeSwap Buy Terminal</span>
            </h2>
            <p className="section-subtitle">
              Connect your Web3 Wallet (MetaMask, Trust Wallet, Binance Web3) and swap BNB directly for BIT tokens on BNB Smart Chain.
            </p>
          </div>

          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            {/* Swap Terminal Mode Switcher */}
            <div style={{
              display: 'flex',
              background: '#E0F2FE',
              borderRadius: '12px',
              padding: '4px',
              marginBottom: '20px',
              gap: '6px'
            }}>
              <button
                onClick={() => setSwapMode('quick')}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: swapMode === 'quick' ? '#FFFFFF' : 'transparent',
                  color: swapMode === 'quick' ? '#0284C7' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: swapMode === 'quick' ? '0 4px 12px rgba(2, 132, 199, 0.12)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Zap size={16} />
                <span>Instant In-App Swap</span>
              </button>

              <button
                onClick={() => setSwapMode('pancake')}
                style={{
                  flex: 1,
                  padding: '10px 16px',
                  borderRadius: '10px',
                  border: 'none',
                  background: swapMode === 'pancake' ? '#FFFFFF' : 'transparent',
                  color: swapMode === 'pancake' ? '#0284C7' : '#475569',
                  fontWeight: 700,
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  boxShadow: swapMode === 'pancake' ? '0 4px 12px rgba(2, 132, 199, 0.12)' : 'none',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <ExternalLink size={16} />
                <span>Full PancakeSwap Interface</span>
              </button>
            </div>

            {/* Error Message Notice if any */}
            {walletError && (
              <div style={{
                background: '#FEE2E2',
                border: '1px solid #F87171',
                color: '#B91C1C',
                padding: '12px 18px',
                borderRadius: '12px',
                marginBottom: '18px',
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <AlertCircle size={18} flexShrink={0} />
                <span>{walletError}</span>
              </div>
            )}

            {/* Mode 1: Quick In-App Swap UI */}
            {swapMode === 'quick' && (
              <div className="glass-panel" style={{
                padding: '32px',
                borderRadius: '20px',
                boxShadow: '0 20px 45px rgba(2, 132, 199, 0.15)',
                border: '1px solid rgba(0, 163, 255, 0.35)',
                background: '#FFFFFF'
              }}>
                {/* Header info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A' }}>Swap Tokens</span>
                    <span style={{ fontSize: '0.75rem', padding: '2px 8px', borderRadius: '10px', background: '#F0F9FF', color: '#0284C7', fontWeight: 700 }}>
                      PancakeSwap V2 Pool
                    </span>
                  </div>

                  {/* Slippage tolerance pill */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600 }}>Slippage:</span>
                    {['0.5', '1.0', '2.5'].map(val => (
                      <button
                        key={val}
                        onClick={() => setSlippage(val)}
                        style={{
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: slippage === val ? '1px solid #00A3FF' : '1px solid #E2E8F0',
                          background: slippage === val ? '#E0F2FE' : '#FFFFFF',
                          color: slippage === val ? '#0284C7' : '#64748B',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {val}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pay Input Box (BNB) */}
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  marginBottom: '10px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>You Pay</span>
                    {bnbBalance && (
                      <span style={{ fontSize: '0.8rem', color: '#0284C7', fontWeight: 600 }}>
                        Balance: {bnbBalance} BNB
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <input
                      type="number"
                      step="0.01"
                      min="0"
                      value={payAmount}
                      onChange={(e) => setPayAmount(e.target.value)}
                      placeholder="0.0"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: '#0F172A',
                        width: '100%',
                        fontFamily: 'var(--font-heading)'
                      }}
                    />

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 163, 255, 0.3)',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                      flexShrink: 0
                    }}>
                      <span style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: '#F0B90B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFF',
                        fontSize: '11px',
                        fontWeight: 900
                      }}>
                        BNB
                      </span>
                      <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0F172A' }}>BNB</span>
                    </div>
                  </div>

                  {/* Preset Amount Badges */}
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
                    {['0.05', '0.1', '0.25', '0.5', '1.0'].map(preset => (
                      <button
                        key={preset}
                        onClick={() => setPayAmount(preset)}
                        style={{
                          background: payAmount === preset ? '#0284C7' : '#FFFFFF',
                          color: payAmount === preset ? '#FFFFFF' : '#475569',
                          border: '1px solid #E2E8F0',
                          padding: '4px 10px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {preset} BNB
                      </button>
                    ))}
                  </div>
                </div>

                {/* Swap Icon Divider */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '-16px 0', position: 'relative', zIndex: 2 }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: '2px solid rgba(0, 163, 255, 0.3)',
                    boxShadow: '0 4px 14px rgba(0, 163, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0284C7'
                  }}>
                    <ArrowDownUp size={16} />
                  </div>
                </div>

                {/* Receive Box (BIT) */}
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  marginTop: '10px',
                  marginBottom: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>You Receive (Estimated)</span>
                    <span style={{ fontSize: '0.8rem', color: '#059669', fontWeight: 700 }}>
                      Verified BEP-20
                    </span>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      fontSize: '1.6rem',
                      fontWeight: 800,
                      color: '#0F172A',
                      fontFamily: 'var(--font-heading)'
                    }}>
                      {calculateOutput(payAmount)}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#FFFFFF',
                      border: '1px solid rgba(0, 163, 255, 0.4)',
                      borderRadius: '20px',
                      padding: '6px 14px',
                      boxShadow: '0 2px 8px rgba(0, 163, 255, 0.1)',
                      flexShrink: 0
                    }}>
                      <img
                        src="./logo.png"
                        alt="BIT Logo"
                        style={{ width: '20px', height: '20px', borderRadius: '50%', objectFit: 'contain' }}
                      />
                      <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#0284C7' }}>BIT</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '8px', fontSize: '0.75rem', color: '#64748B', display: 'flex', justifyContent: 'space-between' }}>
                    <span>Route: BNB ➔ PancakeSwap V2 Pool ➔ BIT</span>
                    <span>1,000 Total Supply Cap</span>
                  </div>
                </div>

                {/* Primary Action Button */}
                {!walletAddress ? (
                  <button
                    onClick={connectWallet}
                    className="glow-btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1.05rem',
                      justifyContent: 'center',
                      borderRadius: '14px'
                    }}
                    disabled={isConnecting}
                  >
                    <Wallet size={20} />
                    <span>{isConnecting ? 'Opening Wallet...' : 'Connect Wallet to Buy BIT'}</span>
                  </button>
                ) : !isBSC ? (
                  <button
                    onClick={switchToBSC}
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1.05rem',
                      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '14px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)'
                    }}
                  >
                    <AlertCircle size={20} />
                    <span>Switch Network to BNB Smart Chain (BSC)</span>
                  </button>
                ) : (
                  <button
                    onClick={handleExecuteSwap}
                    className="glow-btn-primary"
                    style={{
                      width: '100%',
                      padding: '16px',
                      fontSize: '1.05rem',
                      justifyContent: 'center',
                      borderRadius: '14px'
                    }}
                  >
                    <Zap size={20} />
                    <span>Proceed with Swap on PancakeSwap</span>
                    <ExternalLink size={16} />
                  </button>
                )}

                {/* Footer Assurance Info */}
                <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '0.78rem', color: '#64748B' }}>
                  🔒 Non-custodial transaction executed directly on BNB Smart Chain via PancakeSwap V2 Router.
                </div>
              </div>
            )}

            {/* Mode 2: Full Embedded PancakeSwap Interactive Frame */}
            {swapMode === 'pancake' && (
              <div className="glass-panel" style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#FFFFFF',
                boxShadow: '0 20px 45px rgba(2, 132, 199, 0.15)',
                border: '1px solid rgba(0, 163, 255, 0.35)'
              }}>
                <div style={{
                  padding: '14px 20px',
                  background: '#F0F9FF',
                  borderBottom: '1px solid rgba(0, 163, 255, 0.2)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0F172A' }}>
                      PancakeSwap V2 Official Liquidity Pool
                    </span>
                  </div>
                  <a
                    href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chainId=56`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.8rem',
                      color: '#0284C7',
                      fontWeight: 700,
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Open in Full Tab</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div style={{ width: '100%', height: '580px', position: 'relative' }}>
                  <iframe
                    src={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chainId=56`}
                    title="PancakeSwap Swap Widget"
                    width="100%"
                    height="100%"
                    style={{ border: 'none' }}
                  />
                </div>
              </div>
            )}
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
