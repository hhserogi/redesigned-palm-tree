const NavMenu = () => {
  return (
    <header className="socials">
      <div className="socials_flex_block">
        <div className="chains_block">
          <a href="https://x.com/HolyCoinTon" className="soc_href">
            <img
              src="http://res.cloudinary.com/platon1gg/image/upload/v1725792416/oqmq61wcniocsprfqfgx.png"
              alt="twitter"
              className="chain_logo"
            />
          </a>
          <a href="https://t.me/holycointon" className="soc_href">
            <img
              src="http://res.cloudinary.com/platon1gg/image/upload/v1725792416/ze3oytvbkecmhgmfm5a6.svg"
              alt="telegram"
              className="chain_logo"
            />
          </a>
          <a
            href="https://www.geckoterminal.com/ru/ton/pools/EQDRanLglGDiS5m-oHcER6ZKqpVWkkmHMkryFunjcIX2aJeT"
            className="soc_href"
          >
            <img
              src="https://res.cloudinary.com/platon1gg/image/upload/v1725792416/upf51oq1pkvgza58ykq3.png"
              alt="gecko"
              className="chain_logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavMenu;
