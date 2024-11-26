'use client';

import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const LoadingScreen = dynamic(() => import('../../components/LoadingScreen'));

const Roomera: NextPage = () => {
    const [loadingComplete, setLoadingComplete] = useState(false);

    const handleLoadingComplete = () => {
        setLoadingComplete(true);
    };

    return (
        <>
            {!loadingComplete && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
            <main className={'container mx-auto ${loadingComplete ? "display-none" : ""}'}>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <p className='text-gray-800'>Coming soon</p>
                </div>
            </main>
        </>
    );
};

export default Roomera;