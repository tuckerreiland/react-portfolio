import React from 'react'

const ProjectCard = (props) => {
	//need to change background color to match the tech color
	

  	return (
			<div className='bg-cowboycream w-fit p-3 m-3'>
				<a href={props.url} >
					<img src={props.img_url}/>
					<h1>{props.name}</h1>
					<div className='flex flex-row'>
					{props.tech.map((tech) =>{
						{console.log(tech)}
						return (
						<button className='p-2 bg-cowboycream'>
							<img src={tech.logo} className='max-h-10'/>
						</button>
						)
					})}
					</div>
				</a>
			</div>
  	)
}

export {ProjectCard};