import { Link, Head } from "@inertias/react";
import "./Welcome.scss";

export default function NumbersGames() {
    return (
        <>
            <Head title="Numbers-Games" />
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
        </>
    );
}
