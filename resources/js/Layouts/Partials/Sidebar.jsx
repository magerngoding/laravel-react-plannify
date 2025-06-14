import { Link } from '@inertiajs/react';
import { CiUser, CiLogout, CiGrid41, CiHome, CiMedicalCross } from "react-icons/ci";
import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { cn } from '@/lib/utils';


export default function Sidebar({ auth, url }) {
    return (
        <nav className="flex flex-col flex-1">
            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}
                        <li>
                            <Link href={route('dashboard')}
                                className={cn(
                                    url.startsWith('/dashboard')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed'
                                )}
                            >
                                <CiHome className={cn(
                                    url.startsWith('/dashboard')
                                        ? 'text-white'
                                        : 'text-foreground',
                                    'h-6 w-6 shrink-0'
                                )} />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href='' className={cn(
                                url.startsWith('/users')
                                    ? 'bg-red-500 text-white'
                                    : 'text-foreground hover:bg-gray-100',
                                'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed'
                            )}
                            >
                                <CiUser className={cn(
                                    url.startsWith('/users')
                                        ? 'text-white'
                                        : 'text-foreground',
                                    'h-6 w-6 shrink-0'
                                )} />
                                People
                            </Link>
                        </li>
                        <li>
                            <Link href=''
                                className={cn(
                                    url.startsWith('/my-tasks')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed'
                                )}
                            >
                                <CiGrid41 className={cn(
                                    url.startsWith('/my-tasks')
                                        ? 'text-white'
                                        : 'text-foreground',
                                    'h-6 w-6 shrink-0'
                                )} />
                                My Task
                            </Link>
                        </li>
                        <li>
                            <Link href={route('logout')} method='post' as='button'
                                className={cn(
                                    url.startsWith('/logout')
                                        ? 'bg-red-500 text-white'
                                        : 'text-foreground hover:bg-gray-100',
                                    'group w-full flex gap-x-3 rounded-md p-3 text-sm font-semibold leading-relaxed'
                                )}
                            >
                                <CiLogout className={cn(
                                    url.startsWith('/logout')
                                        ? 'text-white'
                                        : 'text-foreground',
                                    'h-6 w-6 shrink-0'
                                )} />
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
                        <span>{auth.name}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}