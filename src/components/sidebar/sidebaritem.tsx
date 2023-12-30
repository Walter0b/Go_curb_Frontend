import { SVGProps } from "react";
import { NavLink } from "react-router-dom";

interface NavigationItem {
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<Omit<SVGProps<SVGSVGElement>, 'ref' | 'key' | 'children'>>;
    count?: string;
    current: boolean;
}

interface Team {
    id: number;
    name: string;
    href: string;
    initial?: string;
    current: boolean;
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function SideBareItems({ navigation, teams }: { navigation: NavigationItem[], teams: Team[] }) {
    return (
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
                <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item: NavigationItem) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                            >
                                <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                                {item.name}
                                {item.count ? (
                                    <span
                                        className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-gray-900 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-white ring-1 ring-inset ring-gray-700"
                                        aria-hidden="true"
                                    >
                                        {item.count}
                                    </span>
                                ) : null}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team: Team) => (
                        <li key={team.name}>
                            <a
                                href={team.href}
                                className={classNames(
                                    team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                            >
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                                    {team.initial}
                                </span>
                                <span className="truncate">{team.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </li>
            <li className="-mx-6 mt-auto">
                <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
                >
                    <img
                        className="h-8 w-8 rounded-full bg-gray-800"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                </a>
            </li>
        </ul>
    )
}