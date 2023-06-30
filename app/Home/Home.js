import React from 'react'


function Home() {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)' }}>
                {/* <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="max-w-sm rounded-lg shadow-2xl" /> */}
                <div className="hero-overlay bg-opacity-60" />
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">
                            Welcome to our pizza restaurant! Discover a world of flavorful pizza creations crafted with care and passion. 
                            From traditional Margherita to bold and inventive combinations, our menu offers a delightful range of options to satisfy your cravings.
                             Join us today and let our pizzas transport you to a place of pure culinary bliss.
                        </p>
                        <button className="btn btn-primary">Order now</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home