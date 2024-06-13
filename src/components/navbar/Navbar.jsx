import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Icons
import SiteLogo from '../../assets/icons/site-logo.svg'

const Header = () => {
    const [shrink, setShrink] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShrink(true)
            } else {
                setShrink(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`Header ${shrink ? 'shrink' : ''}`}>
            <div className="container">
                <nav>
                    <ul className="Header__links">
                        <li>СЛАДКИЕ ДНИ <span>%</span></li>
                        <li>ЛЕНИВАЯ ЗАГРУЗКА</li>
                        <li>КОМПАНЯМ</li>
                    </ul>
                    <Link to={'/'}>
                        <img src={SiteLogo} alt="site logo" />
                    </Link>
                    <ul className='Header__links'>
                        <li>подарочныеe</li>
                        <li>Собрать нaабор</li>
                        <li>ВЕСЬ КАТАЛОГ</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
