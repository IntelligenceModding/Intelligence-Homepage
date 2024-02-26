import Image from 'next/image'
import {ChevronRightIcon} from '@heroicons/react/20/solid'
import {BookOpenIcon, ArrowUturnLeftIcon} from '@heroicons/react/24/solid'
import logo from '/public/BH_INH_Logo_2.png';
import React from "react";
import {GoBackButton} from "@/app/ui/buttons/go-back";
import Layout from "@/app/(overview)/layout";
import '@/app/ui/globals.css';

const links = [
    {
        name: 'Documentation',
        href: 'https://docs.intelligence-modding.de/',
        description: 'Check out the documentation.',
        icon: BookOpenIcon,
    }
]

export default function NotFound() {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 justify-between">
            <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
                <Image
                    className="mx-auto sm:h-32 sm:w-32"
                    src={logo}
                    alt="Logo"
                />
                <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
                    <h1 className="mt-4 text-3xl dark:text-white font-bold tracking-tight text-gray-900 sm:text-5xl">Begone,
                        this is not
                        your place, traveller.</h1>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                        404
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
                    <h2 className="sr-only">Popular pages</h2>
                    <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
                        <li key="goBack" className="relative flex gap-x-6 py-6">
                            <div
                                className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-blue-700">
                                <ArrowUturnLeftIcon className="h-6 w-6 text-indigo-600" aria-hidden="true"/>
                            </div>
                            <div className="flex-auto">
                                <h3 className="text-sm font-semibold leading-6 dark:text-white">
                                    <GoBackButton/>
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                    Go back to the place where you&apos;ve come from.
                                </p>
                            </div>
                            <div className="flex-none self-center">
                                <ChevronRightIcon className="h-5 w-5 text-gray-100" aria-hidden="true"/>
                            </div>
                        </li>
                        {links.map((link, linkIdx) => (
                            <li key={linkIdx} className="relative flex gap-x-6 py-6">
                                <div
                                    className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10 dark:ring-blue-700">
                                    <link.icon className="h-6 w-6 text-indigo-600" aria-hidden="true"/>
                                </div>
                                <div className="flex-auto">
                                    <h3 className="text-sm font-semibold leading-6 dark:text-white">
                                        <a href={link.href}>
                                            <span className="absolute inset-0" aria-hidden="true"/>
                                            {link.name}
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{link.description}</p>
                                </div>
                                <div className="flex-none self-center">
                                    <ChevronRightIcon className="h-5 w-5 text-gray-100" aria-hidden="true"/>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
