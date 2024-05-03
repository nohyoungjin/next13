"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './ui/toggle-mode'

export default function Nav() {
    return (
        <header className="top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="flex h-14 items-center">
                <ul className="flex items-center justify-between space-x-5">
                    <li>
                        <a
                            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                            href="/"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/vercel.svg"
                                alt="Vercel Logo"
                                className="dark:invert"
                                width={100}
                                height={24}
                                priority
                            />
                        </a>
                    </li>
                    <li className="text-1xl text-violet-400">
                        <Link href="/next">
                            NEXT.js 13 (라우팅 테스트)
                        </Link>
                    </li>
                </ul>    
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}