import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TokenData {
  timestamp: string;
  token: string;
  pair: string;
  name: string;
  symbol: string;
  passed: boolean;
  liquidityETH: number;
  buyTax: number;
  sellTax: number;
  ownerPercent: number;
  lpBurnedPercent: number;
  failures: string[];
  checkTimeMs: number;
}

const GIST_URL = 'https://gist.githubusercontent.com/jnworth/3f51567c4347144d481293aa1c215262/raw/tokens.json';

export default function TokenDashboard() {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedToken, setExpandedToken] = useState<string | null>(null);

  useEffect(() => {
    fetchTokens();
    // Refresh every 30 seconds
    const interval = setInterval(fetchTokens, 30000);
    return () => clearInterval(interval);
  }, []);

  async function fetchTokens() {
    try {
      const res = await fetch(GIST_URL + '?t=' + Date.now());
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setTokens(data);
      setError(null);
    } catch {
      setError('Unable to load token data');
    } finally {
      setLoading(false);
    }
  }

  function formatTime(timestamp: string) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return date.toLocaleDateString();
  }

  function truncateAddress(addr: string) {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }

  if (loading) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 text-center">
        <div className="animate-pulse flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-500 dark:text-gray-400">Loading live data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center">
        <span className="text-red-600 dark:text-red-400">{error}</span>
      </div>
    );
  }

  if (tokens.length === 0) {
    return (
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 text-center">
        <span className="text-gray-500 dark:text-gray-400">Waiting for new tokens...</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tokens.map((token) => (
        <motion.div
          key={token.token + token.timestamp}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-50 dark:bg-gray-800/50 rounded-xl overflow-hidden"
        >
          {/* Main row - always visible */}
          <button
            onClick={() => setExpandedToken(expandedToken === token.token ? null : token.token)}
            className="w-full p-4 flex items-center gap-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
          >
            {/* Pass/Fail indicator */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
              token.passed
                ? 'bg-green-100 dark:bg-green-900/30'
                : 'bg-red-100 dark:bg-red-900/30'
            }`}>
              {token.passed ? (
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>

            {/* Token info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-white truncate">
                  {token.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">
                  ${token.symbol}
                </span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {truncateAddress(token.token)}
              </div>
            </div>

            {/* Key metrics */}
            <div className="hidden sm:flex items-center gap-6 text-sm">
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-400">Liquidity</div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {token.liquidityETH.toFixed(2)} ETH
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 dark:text-gray-400">Tax</div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {token.buyTax.toFixed(1)}% / {token.sellTax.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* Time */}
            <div className="text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
              {formatTime(token.timestamp)}
            </div>

            {/* Expand arrow */}
            <motion.svg
              animate={{ rotate: expandedToken === token.token ? 180 : 0 }}
              className="w-5 h-5 text-gray-400 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          {/* Expanded details */}
          <AnimatePresence>
            {expandedToken === token.token && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <MetricCard label="Liquidity" value={`${token.liquidityETH.toFixed(4)} ETH`} />
                    <MetricCard label="Buy Tax" value={`${token.buyTax.toFixed(2)}%`} />
                    <MetricCard label="Sell Tax" value={`${token.sellTax.toFixed(2)}%`} />
                    <MetricCard label="Owner Balance" value={`${token.ownerPercent.toFixed(2)}%`} />
                    <MetricCard label="LP Burned" value={`${token.lpBurnedPercent.toFixed(1)}%`} />
                    <MetricCard label="Check Time" value={`${token.checkTimeMs}ms`} />
                  </div>

                  {/* Failures */}
                  {token.failures.length > 0 && (
                    <div className="mt-4">
                      <div className="text-sm font-medium text-red-600 dark:text-red-400 mb-2">
                        Failed Checks:
                      </div>
                      <ul className="space-y-1">
                        {token.failures.map((failure, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            {failure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href={`https://etherscan.io/address/${token.token}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      View on Etherscan
                    </a>
                    <a
                      href={`https://dexscreener.com/ethereum/${token.pair}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      DexScreener
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white dark:bg-gray-900/50 rounded-lg p-3">
      <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
      <div className="font-medium text-gray-900 dark:text-white">{value}</div>
    </div>
  );
}
