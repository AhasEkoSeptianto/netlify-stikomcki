import React from "react";

// my nav
import Nav from "./../../component/navbar/navbar.js";

// myfooter
import Footer from "./../../component/footer/Footer.js";

// Scrillable module
import ScrollableAnchor from "react-scrollable-anchor";

// slide js module
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

// image background splide js
import bg1 from "./../../asset/image/background/bg1.jpeg";
import bg2 from "./../../asset/image/background/bg2.jpeg";
import bg3 from "./../../asset/image/background/bg3.jpeg";

// mycss
import s from "./../../asset/css/home.module.css";

import { get } from './../../lib/axios.js';
import { setCookies, getCookies } from './../../lib/cookie';


class Home extends React.Component {

	async componentDidMount() {

		document.title = "Home";

		let gets = get(`${process.env.REACT_APP_BASE_URL}api/mahasiswa`)
		
		let visitor = await get(`${process.env.REACT_APP_BASE_URL}api/visitor`);
		console.log(visitor)
	}

	render() {
		return (
			<div className={s.containermPage}>
				<Nav />
				<ScrollableAnchor id="main">
					<div></div>
				</ScrollableAnchor>
				<Splide
					options={{
						rewind: true,
						autoplay: true,
						interval: 10000,
						gap: "1rem",
					}}
				>
					<SplideSlide>
						<div className={s.text_bg}>
							<h2 className={s.text_bg_top}>Selamat datang</h2>
							<h4 className={s.text_bg_bot}>
								di Sekolah Tinggi Ilmu Komputer Cipta Karya
								Informatika Kampus D
							</h4>
						</div>
						<img
							src={bg3}
							alt=""
							className={s.img_background}
						></img>
					</SplideSlide>

					<SplideSlide>
						<div className={s.text_bg}>
							<h2 className={s.text_bg_top}>Bem</h2>
							<h4 className={s.text_bg_bot}>
								Kegiatan mahasiswa di stikom cki sebagai badan
								eksekutif mahasiswa
							</h4>
						</div>
						<img
							src={bg1}
							alt=""
							className={s.img_background}
						/>
					</SplideSlide>
					<SplideSlide>
						<img
							src={bg2}
							alt=""
							className={s.img_background}
						/>
					</SplideSlide>
				</Splide>
				<Footer />
			</div>
		);
	}
}

export default Home;
