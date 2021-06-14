import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

class breadcumb extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		var path = this.props.path.split('/').slice(1);
		var max = path.length;

		return(
			<div className='block'>
				{path.map((val, index) => {
					if (index === 0) {
						return (
							<Fragment>
								<Link to={`/dashboard`}>
									<span className={index + 1 === max ? 'text-gray-500' : 'text-gray-400' }>{val}</span>
								</Link>
								<span> / </span>
							</Fragment>
						)
					}
					if (index + 1 === max ) {
						return (
							<span className='text-gray-600'>{val}</span>
							)
					} else {
						return (
							<Fragment>
								<Link to={`/dashboard/${val}`}>
									<span className={index + 1 === max ? 'text-gray-500' : 'text-gray-400' }>{val}</span>
								</Link>
								<span className='cursor-default'> / </span>
							</Fragment>
							)
					}
				})}
			</div>
			)
	}
}

export default breadcumb;