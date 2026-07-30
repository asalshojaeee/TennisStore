import { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";

function MobileMenu({ open, setOpen }) {
    const [menOpen, setMenOpen] = useState(false);
    const [womenOpen, setWomenOpen] = useState(false);
    const [sportOpen, setSportOpen] = useState(false);

    return (
        <div
            className={`fixed top-0 right-0 h-screen w-72 bg-white opacity-95 shadow-xl transition-all duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex justify-end p-4">
                <IoIosClose
                    className="text-4xl cursor-pointer"
                    onClick={() => setOpen(false)}
                />
            </div>

            <ul className="px-6 space-y-4">

                <li>
                    <div
                        onClick={() => setMenOpen(!menOpen)}
                        className="flex justify-between items-center cursor-pointer font-bold text-blue-600"
                    >
                        Men
                        <MdNavigateNext
                            className={`text-2xl transition ${menOpen ? "rotate-90" : ""
                                }`}
                        />
                    </div>

                    {menOpen && (
                        <ul className="ml-5 mt-3 space-y-2 text-gray-400">
                            <li><Link to="/sneakers">Sneakers</Link></li>
                            <li><Link to="/menclothe">Clothes</Link></li>

                            <li className="font-semibold text-blue-500 mt-2">
                                Accessories
                            </li>

                            <ul className="ml-4 space-y-2">
                                <li><Link to="/hat">Hat</Link></li>
                                <li><Link to="/bag">Bag</Link></li>
                                <li><Link to="/socks">Socks</Link></li>
                            </ul>
                        </ul>
                    )}
                </li>

                <li>
                    <div
                        onClick={() => setWomenOpen(!womenOpen)}
                        className="flex justify-between items-center cursor-pointer font-bold text-blue-600"
                    >
                        Women
                        <MdNavigateNext
                            className={`text-2xl transition ${womenOpen ? "rotate-90" : ""
                                }`}
                        />
                    </div>

                    {womenOpen && (
                        <ul className="ml-5 mt-3 space-y-2 text-gray-400">
                            <li><Link to="/sneakers">Sneakers</Link></li>
                            <li><Link to="/womenclothe">Clothes</Link></li>

                            <li className="font-semibold text-blue-500 mt-2">
                                Accessories
                            </li>

                            <ul className="ml-4 space-y-2">
                                <li><Link to="/hat">Hat</Link></li>
                                <li><Link to="/bag">Bag</Link></li>
                                <li><Link to="/socks">Socks</Link></li>
                            </ul>
                        </ul>
                    )}
                </li>

                <li>
                    <div
                        onClick={() => setSportOpen(!sportOpen)}
                        className="flex justify-between items-center cursor-pointer font-bold text-blue-600"
                    >
                        Sport
                        <MdNavigateNext
                            className={`text-2xl transition ${sportOpen ? "rotate-90" : ""
                                }`}
                        />
                    </div>

                    {sportOpen && (
                        <ul className="ml-5 mt-3 space-y-2 text-gray-400">
                            <li><Link to="/rackets">Rackets</Link></li>
                            <li><Link to="/balls">Ball</Link></li>
                            <li><Link to="/sneakers">Sneakers</Link></li>
                        </ul>
                    )}
                </li>

            </ul>
        </div>
    );
}

export default MobileMenu;