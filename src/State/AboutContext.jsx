import React, { createContext, useState } from "react";
import Brian from "../logos/brian-86703eaa806f1d1412dde142dfd0e9d5ef7b82e6b9259c678206832f97e93432.png";
import Emilie from "../logos/emilie-28a96635eb9b5880cc4a1e39d9cb40683726e631e4539951322f75a8f68b750b.png";
import Surojit from "../logos/surojit-d267dca9f64fcc92073bf737692869a9d958d2234d94f6cb543ab3ee00039059.png";
import Alesia from "../logos/alesia-c46cc8ba5e13a032455373ea714124f576a9eac5df6dccbafa49ede8155f7023.png";
import Brook from "../logos/lj-89b29af4d8ea156d02be7985b4f1c4dbec501653f6c93a0f3bbd79f23c1873ac.png";
import Paul from "../logos/paul-89c93374d9e18a9209812473dd40979caa699ccda76d13a82d5f520842d95694.png";
import Manish from "../logos/manish-0009c7d9f7c0a947ad562ec15b04f38988bd0dce9ecae287bb7817348a661e20.png";
import FredE from "../logos/fred-49e9c9472bae05471d5e2fa3f96d27ad318befb6763930f6a23cde9a8d1254bf.png";
import FredW from "../logos/fred-w-d7e529c1ae90bb5fedf957b9d6496b5ffb96b9c28f13c6e134c0ef424a6bb433.png";
import Katie from "../logos/katie-1b684b98663a883e9948ae1fc59c17904f58fb5924133aadc372a1bbe9226818.png";
import Gokul from "../logos/gokul-7da4cf04691f7ce2788ae923f1d1ca0782a54793355140107d25cc483cf3ff0f.png";
import Marc from "../logos/marc-8bf4f4234864ca70fe7deec9800d7352a86510762ae5f289f25e9c28c4faed59.png";
import Kelly from "../logos/kelly-k-286f99e644e0ab07da6f1a433ae998fd3bdac936574e0a875edcbb95d9e3a3af.png";
import Barry from "../logos/barry-a59b7237f018a888fe1abd2c7e64dfe7b2a7eb632e702e6047dac04fa79bb6e0.png";
import Tom from "../logos/tom-78207a5381dd0ea986c04a39beb5fa0dc53e4bffe883e21d13b0860c6663dc44.png";
import Andreessen from "../logos/logo-ah-e268482098d114f6e3bf86e58bfe42bcc1076080ed63d82d96407c3803555bd4.png";
import Tiger from "../logos/logo-tg-c8c5ec268264bf004249e6aea8df6c8a14d4c54f917215636c8aa7134aac0fdb.png";
import IVP from "../logos/logo-ivp-4944103a11762ef312a1a8b5cd64f07d08f7934679b9a99e94bdfe927a5b284f.png";
import DFJ from "../logos/logo-dfj-489e7e219b5d34cd1b5607373d501f776778ad786ce9571e93424436ab567c21.png";
import USV from "../logos/logo-usv-6175cc3cfa72b32085e1241f6eee97c0aba55f4e8eed59053bd91509988946f3.png";
import Ribbit from "../logos/logo-rb-d8de5f3645b5e87fede57931191cfa2614e45f8d2a7206c60b62e827066284b3.png";
import YC from "../logos/logo-yc-70c988d071be9d5d147e835312d663c66f6be5dc28117f6a76a5d13d887dfde2.png";
import Spark from "../logos/logo-sc-825d764a1bfe2b14d6417b85b54445df7514db794da4afbd0a6a582f1b2a497b.png";
import Greylock from "../logos/logo-gl-5abc0a77a25ad4b311f5735f53bdd07deb68901a0032284bd6c66bde41ca4c27.png";
import MUFG from "../logos/logo-mu-dbb5397e5e0f29bdaadb5fb4731ed4383217f17b4cd29c1222f92d333a6d74d3.png";
import Paradigm from "../logos/logo-par-21e3e182dc443a974f4e81ff1ac9dae31b15e6a3d5cf6299b49f5c8b5f420dd4.png";
import Polychain from "../logos/logo-poly-79defa1ed99d8480d9227a20547e57595bebe698aab865de479cc4eed5af5cfd.png";
import Battery from "../logos/logo-bat-56bf664e37c2e2ca28d52ae28d2602baa53527079e637e80d57f9353946ae20d.png";
import Initialised from "../logos/logo-init-9b15f44621aaa9c7adbf88d84a7409d33b54c2d71ca2608180634808360550aa.png";
import SVAngel from "../logos/logo-svangel-d2c2d3bb5b87906ea61c005a8b1fa1c1ed6a2b45a69ce098a3084c8ab5a73bc3.png";

export const AboutContext = createContext();

export const AboutProvider = (props) => {
	const [about, setAbout] = useState({
		execs: [
			{
				name: "Brian Armstrong",
				img: Brian,
				position: "Co-Founder & Chief Executive Officer",
			},
			{ name: "Emilie Choi", img: Emilie, position: "Chief Operating Officer" },
			{
				name: "Surojit Chatterjee",
				img: Surojit,
				position: "Chief Product Officer",
			},
			{ name: "Alesia Haas", img: Alesia, position: "Chief Financial Officer" },
			{ name: "L.J. Brock", img: Brook, position: "Chief People Officer" },
			{ name: "Paul Grewal", img: Paul, position: "Chief Legal Officer" },
			{
				name: "Manish Gupta",
				img: Manish,
				position: "Executive VP of Engineering",
			},
		],
		boards: [
			{
				name: "Brian Armstrong",
				img: Brian,
				position: "Co-Founder & Board Director",
			},
			{
				name: "Fred Ehrsam",
				img: FredE,
				position: "Co-Founder & Board Director",
			},
			{ name: "Fred Wilson", img: FredW, position: "Board Director" },
			{ name: "Katie Haun", img: Katie, position: "Board Director" },
			{ name: "Gokul Rajaram", img: Gokul, position: "Board Director" },
			{ name: "Marc Andreessen", img: Marc, position: "Board Director" },
			{ name: "Kelly Kramer", img: Kelly, position: "Board Director" },
			{ name: "Barry Schuler", img: Barry, position: "Board Observer" },
			{ name: "Tom Loverro", img: Tom, position: "Board Observer" },
		],
		investors: [
			Andreessen,
			Tiger,
			IVP,
			DFJ,
			USV,
			Ribbit,
			YC,
			Spark,
			Greylock,
			MUFG,
			Paradigm,
			Polychain,
			Battery,
			Initialised,
			SVAngel,
		],
	});
	return (
		<AboutContext.Provider value={[about, setAbout]}>
			{props.children}
		</AboutContext.Provider>
	);
};
