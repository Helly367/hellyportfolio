"use client";
import { useState, useEffect } from "react";


export const useDeviseSize = () => {
    const [deviceSize, setDeviceSize] = useState({
        width: 0, // ← Valeur par défaut
        height: 0
    });

    useEffect(() => {
        // ← S'exécute seulement côté client
        const updateDeviceSize = () => {
            setDeviceSize({
                width: window.screen.width,
                height: window.screen.height
            });
        };

        // Initialisation
        updateDeviceSize();

        // Écouter les changements de taille
        window.addEventListener("resize", updateDeviceSize);

        // Nettoyage
        return () => {
            window.removeEventListener("resize", updateDeviceSize);
        };
    }, []);

    return deviceSize;
};