import { Link } from '@inertiajs/react';
import { Sidebar as PiSidebar, X as PiX } from 'phosphor-react';
import { CiUser, CiLogout, CiGrid41, CiHome, CiMedicalCross } from "react-icons/ci";

export default function SidebarResponsive() {
    return (
        <div className="flex flex-col px-6 pb-2 overflow-y-auto bg-white dark:bg-gray-900 grow gap-y-5">
            <div className="flex h-16 shrink-0 items-center space-x-1.5">
                <Link
                    href="/"
                    className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter"
                >
                    Plannify<span className="text-red-500">.</span>
                </Link>
            </div>
            <nav className="flex flex-col flex-1">
                <ul role="list" className="flex flex-col flex-1 gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {/* menu */}
                            <li>
                                <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                    <CiHome className='w-6 h-6 shrink-0 text-foreground' />Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                    <CiUser className='w-6 h-6 shrink-0 text-foreground' />People
                                </Link>
                            </li>
                            <li>
                                <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                    <CiGrid41 className='w-6 h-6 shrink-0 text-foreground' />My Task
                                </Link>
                            </li>
                            <li>
                                <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                    <CiLogout className='w-6 h-6 shrink-0 text-foreground' />Logout
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        {/* workspaces */}
                        <div className='flex
                                                     items-center justify-between'>
                            <div className='text-xs font-semibold leading-relaxed uppercase text-foreground'>
                                Workspace
                            </div>
                            <Link>
                                <CiMedicalCross className='w-4 h-4 text-foreground hover:text-red-500' />
                            </Link>
                        </div>
                        <ul role='list' className='mt-2 -mx-2 space-y-1'>
                            <li>
                                <Link href='' className='flex w-full p-3 text-sm font-semibold leading-relaxed rounded-md gorup gap-x-3 text-foreground hover:bg-gray-100'>
                                    <span className='flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium border-foreground text-foreground'>8</span>
                                    <span className='truncate'>Backend Developer</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}