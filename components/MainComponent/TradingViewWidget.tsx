import React, { useEffect, useRef, memo } from 'react';

const TradingViewWidget: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbol": "NASDAQ:AAPL",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "3",
        "locale": "en",
        "enable_publishing": false,
        "hide_top_toolbar": true,
        "hide_legend": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current?.appendChild(script);

    const resizeObserver = new ResizeObserver(entries => {
      if (entries && entries.length > 0) {
        const entry = entries[0];
        const { height } = entry.contentRect;
        container.current?.querySelector('.tradingview-widget-container__widget')?.setAttribute('style', `height: ${height - 32}px`);
      }
    });

  }, []);

  return (
    <div className='h-full py-4'>

          {/* <div className='pb-12'>
            <h1>Bitcoin Price Chart (USD)</h1>
            <div>
                  
            </div>
          </div> */}
          <div className="tradingview-widget-container" ref={container} style={{ height: "20%", width: "100%" }}>
            {/* <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}>
            </div> */}
         </div>
    </div>

  );
}

export default memo(TradingViewWidget);
