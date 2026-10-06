import React from 'react'

export default function Temp({data, alignClass = "text-left"}) {
  return (
    <section className="container px-4 mx-auto sm:px-8 md:px-16">
        <div className="w-full mb-20">
            <img
                src={`/assets/images/temp/group-0.png`}
                alt=''
                className="block w-full h-auto"
            />
        </div>
    </section>
  )
}
