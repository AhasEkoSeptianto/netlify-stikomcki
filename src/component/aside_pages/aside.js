import React  from 'react';

import { Paper } from '@material-ui/core';
import { get } from './../../lib/axios';
import {Link} from 'react-router-dom';

class aside extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			news: [],
		}
	}

	async componentDidMount(){
		var all_news = await get (`${process.env.REACT_APP_BASE_URL}api/broadcast/allData`);
		var news_limit2 = all_news.data.slice(0,2);
		this.setState({news: news_limit2});
	}

	render(){
		return(
			<Paper
				className='p-2 divide-y divide-gray-400'
				variant="outlined"
				square
			>
				<div className='p-1 font-kaushan_scriptregular'>
					<h1 className='text-2xl'>kategori</h1>

					<ul className='text-gray-500 text-sm my-3'>
						<Link to='/berita'>
							<li className='my-1'>Berita</li>
						</Link>
						<Link to='/pengumuman'>
							<li className='my-1'>Pengumuman</li>
						</Link>
					</ul>
				</div>

				<div className='my-3 p-1'>
					<h1 className='font-kaushan_scriptregular text-2xl'>berita terbaru</h1>

					{this.state.news.map((val, index) => (
						<div className='my-5 border p-2 cursor-pointer'>
							<p className='text-gray-500 text-sm my-1'>{val.title}</p>
							<img src={process.env.REACT_APP_BASE_URL + val.imageUrl} className='w-full' />
						</div>
						))}

				</div>


			</Paper>
			)
	}
}

export default aside;