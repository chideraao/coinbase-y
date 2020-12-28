import React, { createContext, useState } from "react";
import X0X from "../logos/0x-png.png";
import Algorand from "../logos/algorand-png.png";
import Band from "../logos/band-png.png";
import Celo from "../logos/celo-png.png";
import Compound from "../logos/compound-png.png";
import Dai from "../logos/dai-png.png";
import Eos from "../logos/eos-png.png";
import Filecoin from "../logos/filecoin-png.png";
import Graph from "../logos/graph-png.png";
import Kyber from "../logos/kyber-png.png";
import Maker from "../logos/maker-png.png";
import Orchid from "../logos/orchid-png.png";
import Stellar from "../logos/stellar-png.png";
import Tezos from "../logos/tezos-png.png";
import { ReactComponent as XLogo } from "../logos/0x-logo.svg";
import { ReactComponent as AlgorandLogo } from "../logos/algorand-logo.svg";
import { ReactComponent as BandLogo } from "../logos/band-logo.svg";
import { ReactComponent as CeloLogo } from "../logos/celo-logo.svg";
import { ReactComponent as CompoundLogo } from "../logos/compound-comp-logo.svg";
import { ReactComponent as DAILogo } from "../logos/multi-collateral-dai-dai-logo.svg";
import { ReactComponent as EOSLogo } from "../logos/eos-eos-logo.svg";
import { ReactComponent as FilecoinLogo } from "../logos/filecoin-logo.svg";
import { ReactComponent as GraphLogo } from "../logos/graph-logo.svg";
import { ReactComponent as KyberLogo } from "../logos/kyber-logo.svg";
import { ReactComponent as MakerLogo } from "../logos/maker-logo.svg";
import { ReactComponent as OrchidLogo } from "../logos/orchid-logo.svg";
import { ReactComponent as StellarLogo } from "../logos/stellar-logo.svg";
import { ReactComponent as TezosLogo } from "../logos/tezos-xtz-logo.svg";

export const EarnContext = createContext();

export const EarnProvider = (props) => {
	const [earn, setEarn] = useState({
		courses: [
			{
				name: "The Graph",
				abbr: "GRT",
				text:
					" The Graph is a decentralized protocol for indexing and querying data from blockchains. Learn how it works and you’ll earn up to $3 in GRT tokens.",
				logo: GraphLogo,
				img: Graph,
				earn: 3,
			},
			{
				name: "Maker",
				abbr: "MKR",
				text:
					"Maker is a decentralized finance (“defi”) protocol that lets anyone borrow funds by supplying collateral. Learn how it works and you’ll earn up to $6 in MKR.",
				logo: MakerLogo,
				img: Maker,
				earn: 6,
			},
			{
				name: "Celo",
				abbr: "CGLD",
				text:
					"Celo aims to make financial tools borderless, easy to use, and accessible for anyone with a mobile phone. Learn how it works and you’ll earn up to $6 in CELO (also called cGLD).",
				logo: CeloLogo,
				img: Celo,
				earn: 6,
			},
			{
				name: "Compound",
				abbr: "COMP",
				text:
					"Compound is a protocol that lets anyone borrow or earn interest on their crypto. Learn how it works and you’ll earn up to $59 in COMP.",
				logo: CompoundLogo,
				img: Compound,
				earn: 59,
			},
			{
				name: "Stellar Lumens",
				abbr: "XLM",
				text:
					"Stellar is a platform that connects banks, payment systems, and people. Learn how it works and you’ll earn XLM.",
				logo: StellarLogo,
				img: Stellar,
				earn: 50,
			},
			{
				name: "Band Protocol",
				abbr: "BAND",
				text:
					"Band Protocol brings real-world data to blockchains like Ethereum, Solana, and Polkadot. Learn how it works and you’ll earn up to $3 in BAND tokens.",
				logo: BandLogo,
				img: Band,
				earn: 43,
			},
		],
		views: [
			{
				name: "Filecoin",
				abbr: "FIL",
				text:
					"Filecoin is a decentralized marketplace for data storage and retrieval. Learn how it works and you'll earn up to $6 in FIL.",
				logo: FilecoinLogo,
				img: Filecoin,
			},
			{
				name: "Tezos",
				abbr: "XTZ",
				text:
					"Tezos is a cryptocurrency and blockchain designed for safety, open participation, and upgradeability. Learn how it works and you’ll earn up to $6 in XTZ. ",
				logo: TezosLogo,
				img: Tezos,
			},
			{
				name: "Dai",
				abbr: "DAI",
				text:
					"Dai is a stablecoin that aims to be worth exactly one US dollar. Learn how it works and you’ll earn Dai.",
				logo: DAILogo,
				img: Dai,
			},
			{
				name: "EOS",
				abbr: "EOS",
				text:
					"EOSIO is a protocol designed for fast and free blockchain apps. Learn how it works and you’ll earn EOS.",
				logo: EOSLogo,
				img: Eos,
			},
			{
				name: "Algorand",
				abbr: "ALGO",
				text:
					"Algorand is a blockchain platform that aims to be scalable, secure, and decentralized — all at the same time. Learn how it works and you'll earn up to $6 in ALGO.",
				logo: AlgorandLogo,
				img: Algorand,
			},
			{
				name: "Kyber Network",
				abbr: "KNC",
				text:
					"Kyber is a protocol that aims to make exchanging Ethereum tokens easy and frictionless. Learn how it works and you’ll earn up to $6 in KNC.",
				logo: KyberLogo,
				img: Kyber,
			},
			{
				name: "Orchid",
				abbr: "OXT",
				text:
					"Orchid is a crypto-powered privacy tool. Learn how it works and you’ll get free OXT to try out Orchid’s VPN service.",
				logo: OrchidLogo,
				img: Orchid,
			},
			{
				name: "0X",
				abbr: "ZRX",
				text:
					"0x believes that all forms of value will eventually be represented by tokens. What are tokens? And how is 0x building towards that future?",
				logo: XLogo,
				img: X0X,
			},
		],
	});
	return (
		<EarnContext.Provider value={[earn, setEarn]}>
			{props.children}
		</EarnContext.Provider>
	);
};
