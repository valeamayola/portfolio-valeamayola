import React from 'react';

export default function NavBar() {
    return (
        <div className="navbar bg-[#232323] px-5 md:px-10 py-5">
            <div className="navbar-start">
                <a className="btn btn-ghost text-base font-bold text-white">Valentina.</a>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1GZ15SG_jEvfW-RMNsE17DAdUWPYYMSxH/view?usp=sharing' target='_blank' className="btn btn-sm rounded-full text-sm font-medium text-white bg-[#BE6AB7] border-none">Ver CV</a>
            </div>
        </div>
    )
}