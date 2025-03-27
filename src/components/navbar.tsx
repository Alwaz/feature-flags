import { LayoutDashboard, Settings } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { NavLink } from './navlink';

const Navbar = () => {
  return (
    <header className=" fixed left-0 right-0 top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center">
          <Link href={'/'} className="text-xl font-medium">
            Feature Flags
          </Link>
        </div>
        <nav className="flex items-center space-x-2">
          <ul className="flex space-x-3">
            <li>
              <NavLink href="/">
                <LayoutDashboard className="mr-2 h-5 w-5" />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink href="/settings">
                <Settings className="mr-2 h-5 w-5" />
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
