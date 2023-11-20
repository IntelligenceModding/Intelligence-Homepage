import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'
import logo from '/public/BH_INH_Logo_2.png'; // Tell webpack this JS file uses this image
import { JSX, SVGProps } from 'react';

const links = [
  {
    name: 'Documentation',
    href: 'https://docs.intelligence-modding.de/',
    description: 'Check out the documentation.',
    icon: BookOpenIcon,
  },
  {
    name: 'AP Curseforge',
    href: 'https://www.curseforge.com/minecraft/mc-mods/advanced-peripherals',
    description: 'Checkout the Curseforge page of Advanced Peripherals.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 100 53.5" {...props}>
          <path
              fillRule="evenodd"
              d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
  {
    name: 'Thorium Curseforge',
    href: 'https://www.curseforge.com/minecraft/mc-mods/thorium-reactors',
    description: 'Checkout the Curseforge page of Thorium Reactors.',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 100 53.5" {...props}>
          <path
              fillRule="evenodd"
              d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
]
const social = [
  {
    name: 'GitHub',
    href: 'https://github.com/SirEndii',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
          />
        </svg>
    ),
  },
  {
    name: 'Discord',
    href: 'https://discord.intelligence-modding.de',
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 127.14 96.36" {...props}>
          <path
              fillRule="evenodd"
              d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
          />
        </svg>
    ),
  },
]


export default function Home() {
  return (
      <div className="bg-white h-screen flex flex-col justify-between">
        <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
          <Image
              className="mx-auto sm:h-32 sm:w-32"
              src={logo}
              alt="Logo"
          />
          <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Sorry, I'm too lazy to make a proper website for intelligence.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
            <h2 className="sr-only">Popular pages</h2>
            <ul role="list" className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
              {links.map((link, linkIdx) => (
                  <li key={linkIdx} className="relative flex gap-x-6 py-6">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                      <link.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={link.href}>
                          <span className="absolute inset-0" aria-hidden="true" />
                          {link.name}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{link.description}</p>
                    </div>
                    <div className="flex-none self-center">
                      <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </main>
        <footer className="border-t border-gray-100 py-6 sm:py-10 sticky bottom-0">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
            <p className="text-sm leading-7 text-gray-400">&copy; Intelligence Modding. All rights reserved.</p>
            <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />
            <div className="flex gap-x-4">
              {social.map((item, itemIdx) => (
                  <a key={itemIdx} href={item.href} className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
  )
}
