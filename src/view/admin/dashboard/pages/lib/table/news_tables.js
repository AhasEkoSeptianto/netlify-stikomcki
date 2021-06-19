import React from 'react';

import { get } from './../../../../../../lib/axios';

class news_tables extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			listNews: [],
		}
	}

	async componentDidMount(){
		var all_list_new = await get(`${process.env.REACT_APP_BASE_URL}api/broadcast/allData`)
		.then((res) => {
			return res.data.reverse();
		})
		.catch((err) => console.log(err));

		var listThreeNews = all_list_new.filter((val, index) => index < 3);
		this.setState({listNews: listThreeNews});
	}

	render(){
		return(
			<div className='my-10 text-gray-600'>
				<h1 className='text-center my-3 font-source_sans_proregular text-gray-600 font-bold'>News about StikomCki</h1>
				<table className='auto'>
					<thead>
						<tr>
							<td>No</td>
							<td className='text-center'>Title</td>
							<td className='text-center'>Album</td>
							<td className='text-center'>Content</td>
							<td className='text-center'>Time Post</td>
						</tr>
					</thead>
					<tbody>
						{this.state.listNews.map((val, index) => (
							<tr>
								<td>{index + 1}</td>
								<td>{val.title}</td>
								<td>
									<img src={(`${process.env.REACT_APP_BASE_URL + val.imageUrl}`)} className='max-h-40' />
								</td>
								<td>{val.content}</td>
								<td>{val.time_post}</td>
							</tr>
							)
						)}
					</tbody>
				</table>
			</div>
			)
	}
}

export default news_tables;