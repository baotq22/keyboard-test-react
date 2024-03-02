import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Welcome',
        icon: <i className='bx bx-home'></i>,
        to: '/',
        section: ''
    },
    {
        display: 'Full Size - 100%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/fullsize',
        section: 'fullsize'
    },
    {
        display: 'Near Full Size - 90%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/nearfullsize',
        section: 'nearfullsize'
    },
    {
        display: 'TKL/TKL 7U - 80%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/tkl',
        section: 'tkl'
    },
    {
        display: 'WKL - 80%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/wkl',
        section: 'wkl'
    },
    {
        display: 'Near TKL - 75%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/75percent',
        section: '75percent'
    },
    {
        display: 'FRL - 70%',
        icon: <i className='bx bxs-keyboard'></i>,
        to: '/frl',
        section: 'frl'
    },
]

const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
        <div className='sidebar'>
            <div className="sidebar__logo">
                iKeyTest
            </div>
            <div ref={sidebarRef} className="sidebar__menu">
                <div
                    ref={indicatorRef}
                    className="sidebar__menu__indicator"
                    style={{
                        transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                    }}
                ></div>
                {
                    sidebarNavItems.map((item, index) => (
                        <Link to={item.to} key={index}>
                            <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                                <div className="sidebar__menu__item__icon">
                                    {item.icon}
                                </div>
                                <div className="sidebar__menu__item__text">
                                    {item.display}
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};

export default SideBar;
