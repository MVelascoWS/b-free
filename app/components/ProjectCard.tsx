import React from 'react'

function ProjectCard() {
  return (
    <div className="grid grid-cols-3">
    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/prenda.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Handmade Clothes</h2>
            <p className='text-black'>Increase production with a new machine.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>
    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/vegetables.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Organic products</h2>
            <p className='text-black'>Training to improve the irrigation system.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>
    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/jewerly.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Handcrafted Jewelry</h2>
            <p className='text-black'>Purchase of supplies to increase jewelry production.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>
    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/workshop.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Arts and Crafts.</h2>
            <p className='text-black'>Purchase of furniture to improve the community workshop.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>

    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/ecouturism.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Eco-tourism and Rural Lodging</h2>
            <p className='text-black'>English classes for the community.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>

    <div className="card card-compact w-80 bg-base-100 shadow-xl m-2">
        <figure><img src="/rebozo.jpg" alt="Prenda" /></figure>
        <div className="card-body">
            <h2 className="card-title text-black">Rebozos, huipiles, and handwoven blankets</h2>
            <p className='text-black'>Workshop for high-quality natural dyes for textiles.</p>
            <div className="card-actions justify-end">
            <button className="btn bg-button-color text-white">Votar</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ProjectCard