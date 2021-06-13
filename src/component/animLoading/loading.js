import React from 'react';

class loading extends React.Component{

	render(){
		return(
			<div className='flex w-11/12 h-full my-5 mx-auto justify-center'>
				<img src='/search.svg' className='w-32' />
			</div>
			)
	}

}

export default loading;