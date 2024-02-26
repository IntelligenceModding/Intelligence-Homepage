import Image from "next/image";

const partners = [
    {
        name: 'MyFTB',
        description: "Are you looking for a new and challenging adventure?\n" +
            "Dreaming of machines, power plants, magic or even bees?\n" +
            "MyFTB is the largest German modded Minecraft network.\n" +
            "\n" +
            "One world is not enough! That's why every player gets their own world with us.\n" +
            "Play alone or in a team and get the greatest flexibility and security for maximum gaming fun.\n" +
            "With over 20 modpacks, you're guaranteed to find the right one for you!\n",
        website: 'https://myftb.de/',
        discord: 'https://discord.gg/myftb',
        image: '/images/MyFTB_Flask_4k.png'
    },
    {
        name: 'BisectHosting',
        description: 'You want to play with your friends? Everything preconfigured so that you don\'t have to do anything? \n' +
            'Rent a server from BisectHosting and get a 25% discount on the first month with the code intelligence. Click on the link, select the pack of your choice, use the code intelligence and have fun with your friends on your new server!',
        website: 'https://bisecthosting.com/intelligence',
        discord: 'https://bisecthosting.com/discord',
        image: 'https://avatars.githubusercontent.com/u/80847303?v=4'
    }
]

export default function Page() {
    return (
        <div className="dark:bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-700 dark:text-white sm:text-4xl">Our
                        Partners</h2>
                </div>
                <ul role="link"
                    className="mx-auto mt-20 grid max-w-2xl gap-6 grid-cols-2 lg:mx-0, lg:max-w-none lg:gap-8">
                    {partners.map((partner) => (
                        <li key={partner.name} className="rounded-2xl hover:outline outline-offset-2 outline-sky-600 bg-slate-600 px-8 py-10 shadow-2xl hover:shadow-sky-700">
                            <Image className="py-0.5 rounded-full mx-auto"
                                   src={partner.image}
                                   alt=""
                                   width={256}
                                   height={256}
                            />
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{partner.name}</h3>
                            <p className="text-sm leading-6 text-gray-300">{partner.description}</p>
                            <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                <li className="max-w-8 max-h-8">
                                    <a href={partner.website} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">Github</span>
                                        <svg fill="none" viewBox="0 0 24 24" height="32px" width="32px"
                                             stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"/>
                                        </svg>

                                    </a>
                                </li>
                                <li>
                                    <a href={partner.discord} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">LinkedIn</span>

                                        <svg fill="currentColor" height="32px" width="32px" viewBox="0 0 127.14 96.36">
                                            <path className="cls-1"
                                                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}