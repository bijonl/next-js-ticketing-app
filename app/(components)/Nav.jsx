import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

// This is in a folder with () so there is no routing

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4 text-nav-text">
        <div class="flex items-center space-x-4">
            <Link href="/">
                <FontAwesomeIcon icon={faHome} className="icon text-nav-text" />
            </Link>
            <Link href="/TicketPage/new">
                <FontAwesomeIcon icon={faTicket} className="icon text-nav-text" />
            </Link>
        </div>
        <div>
            <p className="">bijon@bijon.com</p>
        </div>
    </nav>
  )
}

export default Nav
