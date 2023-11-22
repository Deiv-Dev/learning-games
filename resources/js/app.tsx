// Importing the Bootstrap CSS file and the global app CSS file
import "./bootstrap";
import "../css/app.css";

// Importing necessary functions and components from libraries
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import React from "react";

// Getting the application name from environment variables or defaulting to "Laravel"
const appName = import.meta.env["REACT_APP_NAME"] || "Laravel";

// Creating the Inertia.js apps
createInertiaApp({
    // Setting up the document title
    title: (title: any) => `${title} - ${appName}`,

    // Resolving page components using the Laravel Vite Plugin
    resolve: (name: any) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx")
        ),

    // Setting up the Inertia.js app
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Rendering the Inertia.js app
        root.render(<App {...props} />);
    },

    // Configuring the progress bar color
    progress: {
        color: "#4B5563",
    },
});
