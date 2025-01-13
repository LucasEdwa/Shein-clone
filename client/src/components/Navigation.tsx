import  { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHeadset, faGlobe, faMagnifyingGlass, faFire, faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import { categories } from '../models/Categories';

export default function Navigation() {
    const categoriesRef = useRef<HTMLUListElement>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const handleCategoryClick = (category: string) => {
        if (activeCategory === category) {
            setActiveCategory(null);
        } else {
            setActiveCategory(category);
        }
    }
    const scrollLeft = () => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoriesRef.current) {
            categoriesRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <nav className="flex justify-center flex-col pl-6 pr-6 items-center shadow-bottom">
            <div className="flex items-center w-full justify-between">
                <Link className="ml-6 w-[11.2rem] h-[4.6rem]" to="/">
                    <img className="w-full h-full object-cover" src={logo} alt="logo" />
                </Link>
                <div className="flex items-center w-[40rem] ml-[20rem] justify-center border border-black relative">
                    <FontAwesomeIcon icon={faFire} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400" />
                    <input className="w-full p-3 pl-10" type="text" placeholder="" />
                    <button className="bg-black text-white p-3 text-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <ul className="flex gap-4 items-center w-1/4 justify-end mr-6 p-4 text-2xl text-gray-600">
                    <li>
                        <Link to="/user">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            <FontAwesomeIcon icon={faHeart} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/support">
                            <FontAwesomeIcon icon={faHeadset} />
                        </Link>
                    </li>
                    <li>
                        <Link to="/language">
                            <FontAwesomeIcon icon={faGlobe} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center w-full ">
                <ul ref={categoriesRef} className="flex gap-4 items-center w-full mr-6 px-2 text-sm text-black overflow-x-auto whitespace-nowrap scrollbar-hide ">
                    <li className="flex items-center w-fit">
                        <Link to="/" className="w-fit text-center flex gap-1 hover:bg-gray-200 p-2 items-center group">
                            Categories
                            <FontAwesomeIcon icon={faChevronDown} className="group-hover:animate-spinUp" />
                            </Link>
                    </li>
                    {Object.keys(categories.categories).map((category, index) => (
                        <li key={index} className="flex items-center w-fit ">
                            <Link to={`/category/${category}`}  onClick={() => handleCategoryClick(category)}
                                className={`w-fit text-center flex gap-1 hover:bg-gray-200 p-2 items-center ${activeCategory === category ? 'border-b-4 border-black' : ''}`}>
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
                    <div className="flex  px-2 gap-4  shadow-md">
                    <button onClick={scrollLeft} className="p-2">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={scrollRight} className="p-2">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                </div>
            </div>
        </nav>
    );
}