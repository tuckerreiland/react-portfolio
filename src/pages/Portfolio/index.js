import React, { useState, useEffect } from 'react'
import { ProjectCard } from '../../components/ProjectCard'


const Portfolio = () => {
const projects = [
	{
		name:'CMS-style-blog',
		url:'https://github.com/tuckerreiland/CMS-style-blog-site',
		tech: [
			{
				name:'JavaScript',
				logo:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
				color:'yellow-400'
			},
			{
				name:'Handelbars',
				logo:'https://iconape.com/wp-content/png_logo_vector/handlebars.png',
				color:'orange-500'
			},
			{
				name:'Sequelize',
				logo:'https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png',
				color:'sky-400'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	},
	{
		name:'social-media-API',
		url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661911903/Screen_Shot_2022-08-30_at_10.09.20_PM_gvqy0s.png',
		tech: [
			{
				name:'Mongoose.js',
				logo:'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png',
				color:'red-900'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	},
	{
		name:'HTML Portfolio',
		url:'https://github.com/tuckerreiland/challenge-02',
		tech: [
			{
				name:'HTML',
				logo:'https://banner2.cleanpng.com/20180504/crq/kisspng-html-web-development-world-wide-web-consortium-jav-5-5aec37d60c4f81.9093409015254302300504.jpg',
				color:'Yellow'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	},
	{
		name:'DnD Machine',
		url:'https://github.com/knight19jonathan/Adventure-Game-Project-',
		tech: [
			{
				name:'JavaScript',
				logo:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
				color:'Yellow'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	},
	{
		name:'CMS-style-blog',
		url:'https://github.com/tuckerreiland/CMS-style-blog-site',
		tech: [
			{
				name:'JavaScript',
				logo:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
				color:'Yellow'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	},
	{
		name:'CMS-style-blog',
		url:'https://github.com/tuckerreiland/CMS-style-blog-site',
		tech: [
			{
				name:'JavaScript',
				logo:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
				color:'Yellow'
			},
		],
		img_url:'https://res.cloudinary.com/hawker-image-db/image/upload/v1661820226/Screen_Shot_2022-08-29_at_8.40.35_PM_jvhezu.png'
	}
]
  return (
    <div className='bg-zinc-900 p-3 min-h-screen w-screen flex flex-row justify-between'>
		<div className='flex-shrink max-w-md'></div>
		<div>
		{
			projects.map((project) =><ProjectCard {...project} key={project.index}/>)
		}
		</div>
		<div className='flex-shrink max-w-md'></div>
	</div>
  )
}

export {Portfolio};