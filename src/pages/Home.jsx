import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="relative  h-full">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/component-97b01.firebasestorage.app/o/Ooy%2FhomeImage.jpg?alt=media&token=b913fe62-27ee-474d-b8f0-876e587c3817"
                        alt="School"
                        className=" w-full h-1/2 object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center bg-opacity-50">
                        <h1 className="text-4xl font-bold text-white text-center">
                            ระบบบันทึกการเยี่ยมบ้านโรงเรียนบางแพปฐมพิทยา
                        </h1>
                    </div>
                    <div className="h-1/2 ">
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
