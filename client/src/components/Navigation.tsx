import { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faHeadset, faGlobe, faMagnifyingGlass, faFire, faChevronLeft, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";
import { categories } from '../models/Categories';
import CategoryDropdown from './CategoryDropdown';
import { products } from '../data/products';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export default function Navigation() {
    const categoriesRef = useRef<HTMLUListElement>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleCategoryClick = (category: string) => {
        setActiveCategory(prevCategory => (prevCategory === category ? null : category));
    };

    const scrollLeft = () => {
        categoriesRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        categoriesRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <nav className="flex lg:justify-center flex-col lg:pl-6 lg:pr-6 items-center shadow-bottom">
            <div className="flex items-center w-full justify-between px-4">
               <div className="lg:hidden gap-2 flex items-center justify-between ">
               <button className=" text-md p-2" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                </button>
                <button className=" text-3xl">
                <FontAwesomeIcon icon={faEnvelope} />
                </button>
                </div>
                <Link className="lg:ml-6 lg:w-[11.2rem] lg:h-[4.6rem] w-1/4" to="/">
                    <img className="w-full h-full object-cover" src={logo} alt="logo" />
                </Link>
                <div className="lg:flex lg:items-center lg:w-[40rem]  lg:ml-[20rem] lg:justify-center hidden  border border-black relative">
                    <FontAwesomeIcon icon={faFire} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400 hidden lg:block" />
                    <input className="lg:w-full p-3 lg:pl-10  hidden  lg:block" type="text" placeholder="" />
                    <button className="lg:bg-black lg:text-white p-3 right-0 text-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </div>
                <ul className="flex gap-4 items-center w-1/4 justify-end lg:mr-6 lg:p-4 text-2xl text-gray-600">
                    <button className="lg:hidden block text-black p-3 right-0 text-lg"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                    <li className='hidden lg:block'>
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
                    <li className='hidden lg:block'>
                        <Link to="/support">
                            <FontAwesomeIcon icon={faHeadset} />
                        </Link>
                    </li>
                    <li className='hidden lg:block'>
                        <Link to="/language">
                            <FontAwesomeIcon icon={faGlobe} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex items-center w-full " >

                <ul ref={categoriesRef} className="flex gap-4 items-center w-full mr-6 px-2 text-sm text-black overflow-x-auto whitespace-nowrap lg:scrollbar-hide ">
                    <li className="flex items-center w-fit">
                        <Link to="/" className="w-fit text-center   flex gap-1 hover:bg-gray-200 p-2 items-center group">
                            Categories
                            <FontAwesomeIcon icon={faChevronDown} className="group-hover:animate-spinUp hidden lg:block" />
                        </Link>
                    </li>
                    {Object.keys(categories.categories).map((category, index) => (
                        <li key={index} className="flex items-center w-fit "
                            onMouseEnter={() => setHoveredCategory(category)}
                            onMouseLeave={() => setHoveredCategory(null)}>
                            <Link to={`/category/${category}`} onClick={() => handleCategoryClick(category)}
                                className={`w-fit text-center flex  gap-1 hover:bg-gray-200 p-2 items-center ${activeCategory === category ? 'border-b-4 border-black' : ''}`}
                                tabIndex={0} role="button">
                                {category}
                            </Link>

                        </li>
                    ))}
                </ul>
                <button onClick={scrollLeft} className="p-2 hidden lg:block">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={scrollRight} className="p-2 hidden lg:block">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="relative bg-white shadow-lg w-full z-50 ">
                {hoveredCategory && (
                    <CategoryDropdown
                        category={hoveredCategory}
                        subcategories={categories.categories[hoveredCategory]}
                        products={products}
                        onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                        onMouseLeave={() => setHoveredCategory(null)}
                    />
                )}
            </div>
        </nav>
    );
}