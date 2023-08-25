import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

interface Item {
    rowIndex: number;
    nombre: string;
    // Add other properties here
}

const DataContext = createContext<Item[]>([]);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<Item[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWfThl1orWa1Uxn6Mzr_qn2ezQSosCGLIRA84JkTrczj_zHkYExNITCDo9x8s9GXc942WM--JPh67A/pub?output=csv",
                    { responseType: 'blob' }
                );

                const parsedData = Papa.parse(response.data, { header: true }).data as Item[];

                console.log(parsedData)
                setData(parsedData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
    return useContext(DataContext);
};
