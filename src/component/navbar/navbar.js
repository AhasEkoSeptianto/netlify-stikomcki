import React, { useState } from "react";

// components
import Header from "./../header/Header.js";

// asset image
import logoNav from "./../../asset/image/logo Stikom.jpeg";

// module react-router-dom haslink scroll animated
import { HashLink as Link } from "react-router-hash-link";

import { Container, Grid } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab/";

// mycss
import styles from "./navbar.module.css";

// icons material-ui
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";

function Navbar() {
	// handle dropdown for dekstop mode
	const [open_A, setDropDown_A] = useState("none");

	const handleChangeDropDownPerkuliahan = () => {
		var togle = document.getElementById("toglePerguruan");
		if (open_A === "none") {
			togle.setAttribute("style", "display:block");
			setDropDown_A("block");
		} else if (open_A === "block") {
			togle.setAttribute("style", "display:none");
			setDropDown_A("none");
		}
	};

	const [open_B, setDropDown_B] = useState("none");

	const handleChangeDropDownProgramTI = () => {
		var togle = document.getElementById("togleProgramTI");
		if (open_B === "none") {
			togle.setAttribute("style", "display:block");
			setDropDown_B("block");
		} else if (open_B === "block") {
			togle.setAttribute("style", "display:none");
			setDropDown_B("none");
		}
	};

	const [open_C, setDropDown_C] = useState("none");

	const handleChangeDropDownProgramSI = () => {
		var togle = document.getElementById("togleProgramSI");
		if (open_C === "none") {
			togle.setAttribute("style", "display:block");
			setDropDown_C("block");
		} else if (open_C === "block") {
			togle.setAttribute("style", "display:none");
			setDropDown_C("none");
		}
	};

	// handle togle pada mode mobile

	const [open_togle_mobile, set_togle_mobile] = useState("closed");

	const togle_button_hp = () => {
		let togle = document.getElementById("togle_mobile");
		if (open_togle_mobile === "closed") {
			togle.setAttribute("style", "display:block;");
			set_togle_mobile("open");
		} else if (open_togle_mobile === "open") {
			togle.setAttribute("style", "display:none;");
			set_togle_mobile("closed");
		}
	};

	return (
		<div className={styles.mainDisplay} id="nav">
			<Header />
			<Container className={styles.contianer}>
				<Grid container spacing={1} className={styles.container_nav}>
					<Grid item sm={6} className={styles.nav_left}>
						<Link to="/" className={styles.link}>
							<img alt="logo" src={logoNav} className={styles.logo_nav} />
						</Link>
						<Link to="/" className={styles.link}>
							<div className={styles.container_text_nav}>
								<p className={styles.text_nav_top}>
									Sekolah Tinggi Ilmu Komputer
								</p>
								<p className={styles.text_nav_bot}>
									Cipta Karya informatika Kampus D
								</p>
							</div>
						</Link>
					</Grid>
					<Grid item sm={6} className={styles.container_for_hp}>
						<ul className={styles.ulNav}>
							<li
								className={styles.listNavBtn}
								onMouseEnter={handleChangeDropDownPerkuliahan}
								onMouseLeave={handleChangeDropDownPerkuliahan}
							>
								<div className={styles.headDropdown}>
									<span>Perguruan Tinggi</span>
									<ExpandMoreIcon
										className={styles.imgIcons}
									/>
								</div>
								<div
									className={styles.togleDropdown}
									id="toglePerguruan"
								>
									<ul>
										<Link
											to="/visi-misi-perguruan-tinggi#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Visi dan Misi perguruan tinggi
											</li>
										</Link>
										<Link
											to="/kalender-akademik#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Kalender Akademik
											</li>
										</Link>

										<Link
											to="/tujuan-perguruan-tinggi#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Tujuan Perguruan Tinggi
											</li>
										</Link>
										<Link
											to="/berita#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Berita terbaru
											</li>
										</Link>
										<Link
											to="/pengumuman#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Pengumuman
											</li>
										</Link>
									</ul>
								</div>
							</li>
							<li
								className={styles.listNavBtn}
								onMouseEnter={handleChangeDropDownProgramTI}
								onMouseLeave={handleChangeDropDownProgramTI}
							>
								<div className={styles.headDropdown}>
									<span>Program Study TI</span>
									<ExpandMoreIcon
										className={styles.imgIcons}
									/>
								</div>
								<div
									className={styles.togleDropdown}
									id="togleProgramTI"
								>
									<ul>
										<Link
											to="/visi-misi-TI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Visi dan Misi TI
											</li>
										</Link>
										<Link
											to="/tujuan-prodi-TI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Tujuan Prodi TI
											</li>
										</Link>
										<Link
											to="/daftar-matakuliah-TI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Daftar Mata Kuliah TI
											</li>
										</Link>
									</ul>
								</div>
							</li>
							<li
								className={styles.listNavBtn}
								onMouseEnter={handleChangeDropDownProgramSI}
								onMouseLeave={handleChangeDropDownProgramSI}
							>
								<div className={styles.headDropdown}>
									<span>Program Study SI</span>
									<ExpandMoreIcon
										className={styles.imgIcons}
									/>
								</div>
								<div
									className={styles.togleDropdown}
									id="togleProgramSI"
								>
									<ul>
										<Link
											to="/visi-misi-SI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Visi dan Misi SI
											</li>
										</Link>
										<Link
											to="/tujuan-prodi-SI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Tujuan Prodi SI
											</li>
										</Link>
										<Link
											to="/daftar-matakuliah-SI#main"
											className={styles.link}
										>
											<li className={styles.listDropDown}>
												Daftar Mata Kuliah SI
											</li>
										</Link>
									</ul>
								</div>
							</li>
							<a
								href="https://pmb.stikomcki.ac.id/"
								className={styles.link}
							>
								<li className={styles.pmb}>
									Pendaftaran mahasiswa baru
								</li>
							</a>
						</ul>

						{/* togle untuk navigasi hp device */}
						<div className={styles.navigated_device}>
							{/* togle utama */}
							<div className={styles.togleHp}>
								<ViewHeadlineIcon
									className={styles.iconTogle}
									fontSize="large"
									onClick={togle_button_hp}
								/>
							</div>
							<div
								className={styles.dropdownTogleHp}
								id="togle_mobile"
							>
								{/* togle header untuk togle list 1 heress */}
								<TreeView
									defaultCollapseIcon={<ExpandMoreIcon />}
									defaultExpandIcon={<ChevronRightIcon />}
								>
									<Link to="/#main" className={styles.link}>
										<TreeItem nodeId="0" label="Home" />
									</Link>
									<TreeItem
										nodeId="1"
										label="Perguruan Tinggi"
									>
										<Link
											to="/visi-misi-perguruan-tinggi#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="2"
												label="Visi dan Misi perguruan tinggi"
											/>
										</Link>
										<Link
											to="/kalender-akademik#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="3"
												label="Kalender Akademik"
											/>
										</Link>
										<Link
											to="/tujuan-perguruan-tinggi#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="4"
												label="Tujuan Perguruan Tinggi"
											/>
										</Link>
										<Link
											to="/berita#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="4"
												label="Berita terbaru"
											/>
										</Link>
										<Link
											to="/pengumuman#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="4"
												label="Pengumuman"
											/>
										</Link>
									</TreeItem>
									<TreeItem
										nodeId="5"
										label="Program Study TI"
									>
										<Link
											to="/visi-misi-TI#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="6"
												label="Visi dan Misi TI"
											/>
										</Link>
										<Link
											to="/tujuan-prodi-TI#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="7"
												label="Tujuan Prodi TI"
											/>
										</Link>
										<Link
											to="/daftar-matakuliah-TI#main"
											className={styles.link}
										>
											<TreeItem
												nodeId="8"
												label="Daftar Mata Kuliah TI"
											/>
										</Link>
									</TreeItem>
									<TreeItem
										nodeId="9"
										label="Program Study SI"
									>
										<TreeItem
											nodeId="10"
											label="Visi dan Misi SI"
										/>
										<TreeItem
											nodeId="11"
											label="Tujuan Prodi SI"
										/>
										<TreeItem
											nodeId="12"
											label="Daftar Mata Kuliah SI"
										/>
									</TreeItem>
									<TreeItem
										nodeId="13"
										label="Pendaftaran mahasiswa baru"
									/>
								</TreeView>
							</div>
						</div>
						{/* end togle device */}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default Navbar;
