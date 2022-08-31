import React, { useState, useEffect } from 'react'
import { JobCard } from '../../components/JobCard'

export default function Resume() {
const jobs = [
	//l'abeille
	{
		company:"l'abeille",
		location:'new york city',
		start_date:'feb 2022',
		end_date:'may 2022',
		title:'chef de partie',
		duties:[
			'contributed to opening of a new restaurant including developing station workflows, menu planning, and R&D for new dishes',
			'collaborated with management and front of house to create systems for smooth expediting and service',
		],
		achievements:'',
		project_url:'',
	},
	//per se
	{
		company:"per se",
		location:'new york city',
		start_date:'august 2021',
		end_date:'december 2021',
		title:'chef de partie',
		duties:[
			'managed cornet and pasta prep stations as well as assisting with general prep',
			'assigned to PDRs as a CDP, prepping and cooking for 50+ guests',
			'filled in as Garde Manger as needed, while simultaneously preparing and cooking for the PDR',
		],
		achievements:'',
		project_url:'',
	},
	//el destilado
	{
		company:"El Destilado",
		location:'oaxaca de juárez',
		start_date:'march 2021',
		end_date:'june 2021',
		title:'butcher / line cook',
		duties:[
			'received, cleaned, processed, and portioned daily orders of fish, meat, and poultry for a la carte and tasting menu ',
			'developed recipes and improved cooking and prep techniques to streamline menu execution',
			'designed and implemented an inventory and order management system',
		],
		achievements:'',
		project_url:'',
	},
	//mister jiu's
	{
		company:"Mister Jiu's",
		location:'san francisco',
		start_date:'april 2019',
		end_date:'march 2020',
		title:'line cook',
		duties:[
			'managed station and coordinated with prep team to insure station was properly prepared for service',
			'organized and executed pre-service prep based on analysis of dish sales, order ingredients to maintain inventory',
			'managed and timed incoming orders, coordinating with other stations for timely service of complimentary dishes',
		],
		achievements:'',
		project_url:'',
	},
	//patagonia
	{
		company:"Patagonia",
		location:'san francisco',
		start_date:'october 2017',
		end_date:'june 2019',
		title:'stockroom manager',
		duties:[
			'oversaw $5 million inventory and fulfilled customer orders (over 100-200 a day during peak months)',
			'managed all shipping and receiving of products (typically 500-1000 pieces in daily incoming shipments)',
			'trained and managed new hires and stockroom assistants in back of house operations',
			'assisted sales team with customers during peak times while still meeting all daily deadlines',
		],
		achievements:[
			'promoted to position within weeks of being hired as seasonal salesperson'
		],
		project_url:'',
	},
]
  return (
    <div className='bg-zinc-900 p-3 min-h-screen w-screen flex flex-row justify-between'>
			<div className='flex-shrink max-w-md'></div>
			<div>
				<a href='https://docs.google.com/document/d/1loMgcSVS1gARW8hbZWiwYfImMJn03hb8zuZNYP4L590/export?format=pdf' className='bg-cowboycream text-zinc-900 cursor-default font-ab text-sm p-3 w-fit'>download</a>
				<div className='my-4'>
					{jobs.map((job)=><JobCard {...job} key={job.index}/>)}
				</div>
			</div>
			<div className='flex-shrink max-w-md'></div>
    </div>
  )
}
