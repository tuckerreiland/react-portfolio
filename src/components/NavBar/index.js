import React from 'react'
import { Tabs } from '../Tabs'
import About from '../../pages/About'
import Resume from '../../pages/Resume'
import Contact from '../../pages/Contact'
import { Portfolio } from '../../pages/Portfolio'

export default function Navbar() {
	// This solution works but it doesn't change back when not active
	// I think it'd be easier to just change it according to the dom, but I'll google it tomorrow
	// on the MUI website, they seemed to make one by having two states, -1 (false) and 0 (true), that changed the index.  So all the links start at an index of -1, then when clicked there's a change that sets their value to 0, and when it changes it resets the value to 0
	return (
   		<div className='flex flex-col'>
        	<div className='pl-3 py-2'>
					<pre className='-py1'>____            __           </pre>
					<pre className='-py1'> /    _ / _ _  /__)_ '/_   _/</pre>
					<pre className='-py1'>(  (/( /((-/  / ( (-/((//)(/ </pre>
        	</div>
        	<div className='flex justify-between'>
				<Tabs>
					<div label ='about'>
						<About/>
					</div>
					<div label ='portfolio'>
						<Portfolio />
					</div>
					<div label ='contact'>
						<Contact/>
					</div>
					<div label ='resume'>
						<Resume/>
					</div>
				</Tabs>
        	</div>
    	</div>
  	)
}