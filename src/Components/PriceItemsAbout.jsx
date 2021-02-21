/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PriceItemsCryptosContext } from "../State/PriceItemsContext";

const api = {
	base: "https://api.nomics.com/v1/currencies?",
	key: process.env.REACT_APP_NOMICS_KEY,
};

function PriceItemsAbout({ match }) {
	const [cryptos, setCryptos] = useContext(PriceItemsCryptosContext);
	const [metadata, setMetadata] = useState([]);
	const [expand, setExpand] = useState(false);

	useEffect(() => {
		Axios.get(
			`${api.base}key=${api.key}&ids=${match.params.id}&attributes=website_url,whitepaper_url`
		)
			.then((res) => {
				setMetadata(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		return () => {
			setMetadata([]);
		};
	}, [match]);

	const handleClick = () => {
		setExpand(!expand);
	};

	return (
		<div className="price-items-about">
			{cryptos.length && (
				<div className="card">
					{" "}
					<div className="">
						<h2>About {cryptos[0].name}</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
							aliquam iusto eum porro at vitae repellendus quam unde. Ut,
							dolores unde. Repellendus aut soluta eum similique sequi in qui
							eaque laudantium. Ipsam id error sit pariatur dolores, consectetur
							excepturi aliquid?
						</p>
						{metadata.length && (
							<div className="flex-column">
								<h5 className="link-heading">RESOURCES</h5>

								<a href={metadata[0].website_url}>
									<div className="flex">
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon="globe"
											size="2x"
										/>
										<div className="">
											<p>Official website</p>
										</div>
									</div>
								</a>
								<a href={metadata[0].whitepaper_url}>
									<div className="flex">
										<FontAwesomeIcon
											className="font-awesome"
											fontWeight="light"
											icon={["far", "file-alt"]}
											size="2x"
										/>
										<div className="">
											<p>Whitepaper</p>
										</div>
									</div>
								</a>
							</div>
						)}
					</div>
					{expand && (
						<div className="crypto-description">
							<h3>What is {cryptos[0].name}?</h3>
							<p>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Pariatur eum velit repellendus quis modi ex corporis animi! Ab,
								autem fuga? Praesentium doloremque ducimus exercitationem
								accusantium.
							</p>
							<h3>What is {cryptos[0].name}, the technology?</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
								fugit a, eveniet repellat, necessitatibus vitae consectetur,
								sapiente repellendus laboriosam ipsa ratione? Voluptatibus
								facilis fuga, iusto porro eligendi architecto ratione doloribus.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								deleniti odit blanditiis quibusdam quisquam earum. Voluptatibus
								eligendi, similique nulla quas accusantium doloribus voluptatem,
								ad nam facere nemo cum nisi consequatur pariatur maiores.
								Suscipit maiores aperiam cum explicabo architecto consequuntur,
								earum natus nostrum ab temporibus cumque.
							</p>
							<h3>What is {cryptos[0].name}, the currency?</h3>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Quaerat rem odio iusto harum soluta quo pariatur voluptas quos
								nobis exercitationem?
							</p>
							<ul>
								<li className="link-heading">
									<b>{cryptos[0].name} is global</b> Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Corrupti veritatis qui unde
									quasi impedit delectus quis cumque consectetur suscipit, cum
									at, dolore velit? Commodi ipsam est, voluptates odio numquam
									sit.
								</li>
								<li className="link-heading">
									<b>{cryptos[0].name} is irreversible</b> Lorem ipsum dolor sit
									amet consectetur, adipisicing elit. Quaerat nostrum facilis,
									obcaecati magni reiciendis, aut at unde ipsam fugiat
									accusantium quos provident, quisquam necessitatibus minima
									suscipit harum in laboriosam nesciunt iste voluptas eum?
									Officia hic fugiat autem modi quae ratione?
								</li>
								<li className="link-heading">
									<b>{cryptos[0].name} is private</b> Lorem ipsum dolor sit amet
									consectetur adipisicing elit. Ipsum voluptatum iste suscipit
									iure aliquid dolores. Natus perferendis saepe placeat magnam.
								</li>
								<li className="link-heading">
									<b>{cryptos[0].name} is secure</b> Lorem ipsum dolor sit amet
									consectetur, adipisicing elit. Saepe, laudantium possimus.
									Fugiat consequuntur deleniti earum distinctio assumenda, modi
									minus exercitationem velit ea. Dolor illo ullam, dolores
									inventore quidem officiis nam quam omnis doloribus distinctio
									temporibus!
								</li>
								<li className="link-heading">
									<b>{cryptos[0].name} is open</b> Lorem ipsum dolor, sit amet
									consectetur adipisicing elit. Alias expedita ratione molestias
									eligendi magnam laboriosam esse, mollitia minima impedit
									architecto adipisci obcaecati facilis iure ducimus?
								</li>
							</ul>
							<h3>How can I learn more about {cryptos[0].name}</h3>
							<p>
								Learn more about {cryptos[0].name} the technology and{" "}
								{cryptos[0].name} the currency by visiting our by visiting our{" "}
								<Link to="#">{cryptos[0].name} educational page</Link>{" "}
							</p>
						</div>
					)}
					<div className="expand-btn flex" onClick={handleClick}>
						{!expand ? <h3>View more</h3> : <h3>Hide</h3>}
					</div>
				</div>
			)}
		</div>
	);
}

export default PriceItemsAbout;
