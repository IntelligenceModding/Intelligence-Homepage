import Image from 'next/image'

const people = [
    {
        name: 'UnhappyWithoutU',
        role: 'Software Developer',
        imageUrl:
            'https://avatars.githubusercontent.com/u/49205934?v=4',
        curseforgeUrl: 'https://www.curseforge.com/members/unhappywithoutu/projects',
        githubUrl: '',
    },
    {
        name: 'Srendi',
        role: 'Software Developer & System Admin',
        imageUrl:
            'https://avatars.githubusercontent.com/u/67484093?v=4',
        curseforgeUrl: 'https://www.curseforge.com/members/unhappywithoutu/projects',
        githubUrl: 'https://github.com/SirEndii',
        xUrl: 'https://twitter.com/Srendi5'
    },
    {
        name: 'Artemis',
        role: 'Software Developer',
        imageUrl:
            'https://avatars.githubusercontent.com/u/98607053?v=4',
        curseforgeUrl: 'https://www.curseforge.com/members/unhappywithoutu/projects',
        githubUrl: 'https://avatars.githubusercontent.com/u/98607053?v=4',
    },
]

export default function Page() {
    return (
        <div className="dark:bg-slate-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-400">
                        We’re a dynamic group of ugly humans.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
                >
                    {people.map((person) => (
                        <li key={person.name} className="rounded-2xl bg-slate-600 px-8 py-10 drop-shadow-2xl">
                            <Image className="relative mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                                   src={person.imageUrl}
                                   alt=""
                                   width={460}
                                   height={460}
                            />
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                            <p className="text-sm leading-6 text-gray-400">{person.role}</p>
                            <ul role="list" className="mt-6 flex justify-center gap-x-6">
                                <li className="max-w-8 max-h-8">
                                    <a href={person.githubUrl} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">Github</span>
                                        <svg height="32px" width="32px" fill="currentColor" viewBox="0 0 98 98"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={person.curseforgeUrl} className="text-gray-400 hover:text-gray-300">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg height="40px" width="40px" fill="currentColor" viewBox="0 0 100 53.5">
                                            <path fillRule="evenodd"
                                                  d="M0 6.9082l27.9532.0756L26.269 0h73.7449l-.0164 8.1433C87.5 10.6348 78.6726 16.775 74.825 36.34H72.046l-1.5815 4.359h2.3079l3.9906 12.8087H37.961l3.9184-12.8086h2.325l-1.6467-4.359h-2.7642l-5.1516-13.7535C13.5203 21.3437 2.6748 16.9042 0 6.9082zM58.6772 39.062c-3.082-5.6216-5.1058-1.197-11.4454-6.9496-2.4727-2.2436-3.4588-8.8199 2.097-10.8301-2.5255 5.5749 4.0297 7.8558 5.5898 4.6685.709-1.4486 1.6039-4.1204-.9798-5.9518-1.392-.9867-1.9281-3.9125-.7364-5.5388.3837 1.2093 1.5938 2.5013 3.916 1.5411-4.9192-8.1404 2.934-10.9457 6.7104-10.5817-3.9686.441-6.025 3.977-4.2196 7.8269 1.15 2.452 2.9006 3.6589 3.4097 5.6657-1.6952.1263-2.1852.9065-2.1495 2.362.0268 1.0895 2.5496 2.6646 2.9494-.4456 1.175 2.4245-.2407 3.8496-1.0129 4.9984-1.7824 2.6515-.1036 5.4107 2.1097 3.3067.9547-.9074 1.6155-2.5812.4048-5.318 2.229 1.776 4.5057 6.5447.9079 10.677-1.756 2.017-6.9514 1.391-7.551 4.5693z"/>
                                        </svg>
                                    </a>
                                </li>
                                {person.xUrl && (
                                    <li>
                                        <a href={person.xUrl} className="text-gray-400 hover:text-gray-300">
                                            <span className="sr-only">X</span>
                                            <svg height="32px" width="32px" aria-hidden="true" fill="currentColor"
                                                 viewBox="0 0 18 18">
                                                <path
                                                    d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"/>
                                            </svg>
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
