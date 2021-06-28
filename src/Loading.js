import React from 'react';

class Loading extends React.Component{
	render(){
		return(
			<div className='w-screen h-screen flex justify-center items-center'>
				<p className='animate-pulse font-league_spartanbold text-sm text-gray-500 lg:text-lg'>Loading ...</p>
			</div>
			)
	}
}

export default Loading;