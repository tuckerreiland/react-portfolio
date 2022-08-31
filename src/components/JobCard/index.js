import React from 'react'

const JobCard = (props) => {
	//need to change background color to match the tech color
	

  	return (
			<div className='bg-cowboycream p-3'>
				<a href={props.url} >
					<img src={props.img_url}/>
					<h1 className='font-ab text-sm bg-zinc-900 w-fit px-2 py-1 text-cowboycream'>{props.company}</h1>
					<h1 className='font-ab text-xs py-1'>{props.location}</h1>
					<div className='flex flex-row py-1'>
						<h1 className='font-ab text-xs'>{props.start_date}</h1>
						<h1 className='font-ab text-xs px-3'> {'>>>'} </h1>
						<h1 className='font-ab text-xs'>{props.end_date}</h1>
					</div>
					<h1 className='font-ab text-xs  py-1'>{props.title}</h1>
					<div className='flex flex-col'>
					{props.duties.map((duty) =>{
						return (
						<div className='flex flex-row py-1'>
							<span className='font-ab text-xs pr-2'>{'>'}</span>
							<p className='text-xs'> {duty}</p>
						</div>
						)
					})}
					</div>
					{props.achievements?
						<div className='flex flex-col'>
						<h1 className='font-ab text-xs py-1'>achievements</h1>
						{props.achievements.map((achievement) =>{
							return (
								<div className='flex flex-row py-1'>
								<span className='font-ab text-xs pr-2'>{'>'}</span>
								<p className='text-xs'> {achievement}</p>
							</div>
							)
						})}
						</div> :
						<></>
					}
				</a>
			</div>
  	)
}

export {JobCard};