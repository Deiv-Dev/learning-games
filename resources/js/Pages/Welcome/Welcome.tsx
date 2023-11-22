import React from "react";
import { Link, Head, usePage } from "@inertiajs/react";
import "./Welcome.scss";
import route from "ziggy-js";

interface WelcomeProps {
    auth: {
        user: any; // Adjust the type according to your authentication user type
    };
    laravelVersion: string;
    phpVersion: string;
}

const Welcome: React.FC<WelcomeProps> = ({
    auth,
    laravelVersion,
    phpVersion,
}) => {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    {auth.user ? (
                        <Link
                            href={route("dashboard")}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route("login")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route("register")}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <div className="grid-container">
                    <Link
                        href={route("numbers-game")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <div className="grid-item">Žaidimai su skaičiais</div>
                    </Link>

                    <Link
                        href={route("colors-game")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <div className="grid-item">Žaidimai su spalvomis</div>
                    </Link>
                    <Link
                        href={route("colors-game")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <div className="grid-item">Žaidimai su žodžiais</div>
                    </Link>
                    <Link
                        href={route("letters-game")}
                        className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >
                        <div className="grid-item">Žaidimai su raidemis</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Welcome;
