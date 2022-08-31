import React, { useState, useEffect } from 'react'

export default function Contact() {
  return (
    <div className='bg-zinc-900 p-3 min-h-screen w-screen md:flex md:flex-row md:justify-between'>
		<div className='flex-shrink md:max-w-md'></div>
		<form className='flex flex-col p-3 md:w-8/12 '>
			<input placeholder='name...' className=' my-3 bg-zinc-900 placeholder:text-cowboycream placeholder:font-ab placeholder:text-sm placeholder:font-italic placeholder:font-light focus:bg-cowboycream'></input>
			<input placeholder='email...' className=' my-3 bg-zinc-900 placeholder:text-cowboycream placeholder:font-ab placeholder:text-sm placeholder:font-italic placeholder:font-light focus:bg-cowboycream'></input>
			<textarea placeholder='message...' className=' my-3 bg-zinc-900 placeholder:text-cowboycream placeholder:font-ab placeholder:text-sm placeholder:font-italic placeholder:font-light focus:bg-cowboycream'></textarea>
			<button className='cursor-default font-ab text-sm px-3 py-2 bg-cowboycream w-fit'>submit</button>
		</form>
		<div className='flex-shrink md:max-w-md'></div>
	</div>
  )
}
