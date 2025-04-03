import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-md px-4">
            <div className="navbar-start">
                <img src="https://firebasestorage.googleapis.com/v0/b/component-97b01.firebasestorage.app/o/Ooy%2Flogo.png?alt=media&token=26ff65aa-8383-41fc-8ccf-184567638ce3" alt="Logo" className="w-10 h-10 mr-2" />
                <span className="text-lg font-bold">ระบบบันทึกการเยี่ยมบ้าน</span>
            </div>
            <div className="navbar-end">
                <button className="btn btn-primary">ลงชื่อเข้าใช้งาน</button>
            </div>
        </div>
    )
}

export default Navbar
