import React, {useState} from "react";

const Tabs = ( {children} ) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e, newActiveTab) => {
        e.preventDefault()
        setActiveTab(newActiveTab)
    }

    return (
        <div>
            <div className="flex flex-row justify-between">
                {children.map((tab)=> {
                    const label = tab.props.label
                    return (
                    <div key={label} className={label === activeTab? 'bg-zinc-900 text-cowboycream px-3 py-2 flex flex-grow justify-center':'px-3 py-2  hover:bg-zinc-900 hover:text-cowboycream flex flex-grow justify-center'}>
                        <button onClick={(e)=>handleClick(e, label)} className='cursor-default font-ab text-sm'>{label}</button>
                    </div>
                    )
                })
                }
            </div>
            <div>
                {children.map((tabbedContent)=> {
					console.log(tabbedContent.props.children)
                    if (tabbedContent.props.label === activeTab)
                        return(
                            <div key={tabbedContent.props.label} className=''>{tabbedContent.props.children}</div>
                        );
                })}
            </div>
        </div>
    )
}


export {Tabs};