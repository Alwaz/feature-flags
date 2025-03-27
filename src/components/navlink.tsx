'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center rounded-full px-3 py-1 ${
        isActive
          ? 'bg-primary text-primary-foreground'
          : 'duration-150 hover:bg-secondary'
      }`}
    >
      {children}
    </Link>
  );
}
