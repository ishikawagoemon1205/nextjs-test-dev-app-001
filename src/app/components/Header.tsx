'use client'

import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();
    return (
        <header>
            <div onClick={() => router.push('/')} className="w-[100%] h-[30px] bg-[#000000] border-b-2 border-gray-700 flex items-center justify-center">
                <h1 className="text-[#ffffff] cursor-pointer">Game Programming</h1>
            </div>
        </header>   
    );
}