import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";
function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const showHideMenu = () => {
        setToggleMenu((prev) => !prev)
    }
    const links = [
        {
            icon: <IoIosSearch />,
            name: 'Search'
        },
        {
            icon: <CiDiscount1 />,
            name: 'Offers',
            sup: 'New'
        },
        {
            icon: <IoHelpBuoyOutline />,
            name: 'Help'
        },
        {
            icon: '',
            name: 'SignIn'
        },
        {
            icon: '',
            name: 'Cart'
        },
    ]
    return (
        <>
            <div className={`w-full h-full fixed backdrop-brightness-50 duration-500 ${toggleMenu ? 'right-0' : 'right-full'}`} onClick={showHideMenu}>
                <div className={`w-[500px] h-full bg-white duration-700 absolute ${toggleMenu ? 'left-0' : 'left-[-100%]'}`} onClick={(e) => e.stopPropagation()}></div>
            </div>
            <header className="p-[15px] shadow-xl text-[#686b78]">
                <div className="max-w-[1400px] mx-auto flex items-center">
                    <div className="w-20">
                        <img src="images/logo.png" className="w-full" alt="" />
                    </div>
                    <div className="">
                        <span className="font-bold border-b-4 border-black me-2"> Other </span> Jodhpur, Rajasthan, India <MdKeyboardArrowDown onClick={showHideMenu} fontSize={25} className="inline cursor-pointer text-[#ff5200]" />
                    </div>
                    <div className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
                        {
                            links.map((data, index) => (
                                <li key={index} className="flex hover:text-[#ff5200] items-center gap-2 cursor-pointer duration-500">
                                    {data.icon}
                                    {data.name}
                                    <sup className="text-[#ff5200]">{data.sup}</sup>
                                </li>
                            ))
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
