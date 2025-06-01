import { Dialog, Transition } from '@headlessui/react';
import { Head, Link, usePage } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import { Sidebar as PiSidebar, X as PiX } from 'phosphor-react';
import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { CiUser, CiLogout, CiGrid41, CiHome, CiMedicalCross } from "react-icons/ci";

export default function AppLayout({ children, title }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head title={title} />
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 flex justify-center w-16 pt-5 left-full">
                                            <button
                                                type="button"
                                                className="-m-2.5 p-2.5"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <PiX className="w-6 h-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>

                                    {/* Sidebar Responsive */}
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
                                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3:'>
                                                                <CiHome className='w-6 h-6 shrink-0 text-foreground' />Dashboard
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3:'>
                                                                <CiUser className='w-6 h-6 shrink-0 text-foreground' />People
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3:'>
                                                                <CiHome className='w-6 h-6 shrink-0 text-foreground' />My Task
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3:'>
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
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex flex-col px-6 overflow-y-auto bg-white border-r border-gray-200 dark:border-gray-800 dark:bg-gray-900 grow gap-y-5">
                        <div className="flex h-16 shrink-0 items-center space-x-1.5">
                            <Link
                                href="/"
                                className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter"
                            >
                                Plannify<span className="text-red-500">.</span>
                            </Link>
                        </div>
                        {/* Sidebar */}
                        <nav className="flex flex-col flex-1">
                            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-2">
                                        {/* menu */}
                                        <li>
                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                                <CiHome className='w-6 h-6 text-foreground shrink-0' />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                                <CiUser className='w-6 h-6 text-foreground shrink-0' />
                                                People
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                                <CiGrid41 className='w-6 h-6 text-foreground shrink-0' />
                                                My Task
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href='' className='flex p-3 text-sm font-semibold leading-relaxed tracking-tighter rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                                <CiLogout className='w-6 h-6 text-foreground shrink-0' />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {/* workspaces */}
                                    <div className='flex items-center justify-between '>
                                        <div className='text-xs font-semibold leading-relaxed uppercase text-foreground'>
                                            Workspaces
                                        </div>
                                        <Link>
                                            <CiMedicalCross className='w-4 h-4 text-foreground hover:text-red-500' />
                                        </Link>
                                    </div>
                                    <ul role='list' className='mt-2 -mx-2 space-y-2'>
                                        <li>
                                            <Link href='' className='flex p-3 w-full text-sm  font-semibold leading-relaxed rounded-md text-foreground hover:bg-gray-100 group gap-x-3'>
                                                <span className='border-foreground text-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[.625rem] font-medium'>8</span>
                                                <span className='truncate'>Backend Developer</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mt-auto -mx-6">
                                    {/* profile */}
                                    <Link
                                        href='' className='flex items-center px-6 p-3 text-sm font-semibold leading-relaxed gap-x-4 text-foreground hover:bg-gray-100'>
                                        <Avatar>
                                            <AvatarFallback>X</AvatarFallback>
                                        </Avatar>
                                        <span>Cahya Hafizh</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="sticky top-0 z-40 flex items-center px-4 py-4 bg-white shadow-sm dark:bg-gray-900 gap-x-6 sm:px-6 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <PiSidebar className="w-6 h-6 text-foreground" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-relaxed tracking-tighter text-foreground">
                        {title}
                    </div>
                    <Link href='#'>
                        <span className="sr-only">Your profile</span>
                        <Avatar>
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>

                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
}
