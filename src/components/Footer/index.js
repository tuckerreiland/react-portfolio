import React from 'react'

export default function Footer() {
  return (
	<div className='md:flex md:flex-row md:justify-between'>
		<div className='pl-3 py-2 justify-center'>
					<pre>____            __           </pre>
					<pre> /    _ / _ _  /__)_ '/_   _/</pre>
					<pre>(  (/( /((-/  / ( (-/((//)(/ </pre>
        </div>
		<div className='md:flex md:flex-row items-center'>
            <a href='https://github.com/tuckerreiland' className='px-3 py-2 hover:bg-zinc-900 hover:text-cowboycream flex flex-grow justify-center cursor-default font-ab text-sm'>github</a>
            <a href='https://www.linkedin.com/in/tucker-reiland-41a2431b6/' className='px-3 py-2 hover:bg-zinc-900 hover:text-cowboycream flex flex-grow justify-center cursor-default font-ab text-sm'>linkedin</a>
            <a href='https://www.instagram.com/tuckerreiland/?hl=en' className='px-3 py-2 hover:bg-zinc-900 hover:text-cowboycream flex flex-grow justify-center cursor-default font-ab text-sm'>instagram</a>
		</div>
	</div>
  )
}
