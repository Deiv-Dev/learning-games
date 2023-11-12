import React from "react";
import { Link, Head } from "@inertiajs/react";
import "../../Welcome/Welcome.scss";

export default function NumbersGames() {
    return (
        <>
            <Head title="Numbers-Games" />
            <div className="grid-container">
                <Link
                    href={route("find-numbers-game")}
                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    <div className="grid-item">Rasti skaičiu iki 10</div>
                </Link>

                <Link
                    href={route("add-numbers-game")}
                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >
                    <div className="grid-item">Skaičiu pridetis</div>
                </Link>
            </div>
        </>
    );
}
