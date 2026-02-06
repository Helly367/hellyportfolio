"use client";
import { createContext, useContext } from "react";
import { useDeviseSize } from "../hooks/useDeviseSizs";


const DeviceContext = createContext();

export const useDevice = () => {
    const context = useContext(DeviceContext);
    if (!context) {
        throw new Error("useScreenDevice must be used within ScreenDeviceProvider");
    }
    return context;
};


const DeviceProvider = ({ children }) => {

    const { width } = useDeviseSize();
    // Breakpoints standards (Tailwind CSS)
    const mobileOrTablet = width < 1024;
    const mobile = width < 768;
    const tablette = width >= 768 && width < 1024;
    const desktop = width >= 1024;
    const largeDesktop = width >= 1280;



    return (
        <DeviceContext.Provider value={{ mobile, mobileOrTablet, desktop, tablette, largeDesktop }}>
            {children}
        </DeviceContext.Provider>
    );
};

export { DeviceProvider };

