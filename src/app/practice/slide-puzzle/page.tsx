"use client";
import { useState } from "react";


export default function SlidePuzzlePage() {

    const [contentStatus, setContentStatus] = useState("start");
    const [tiles, setTiles] = useState([]);
    const hist = [];

    // useEffect(() => {
    //     if (contentStatus === "start") {
    //         // init();
    //     }
    // }, [contentStatus]);

    const standbyDisplay = () => (
        <div className="w-[500px] h-[500px] flex items-center justify-center">
            <button
                className="bg-[#ffffff] hover:bg-gray-300 w-[200px] h-[30px] rounded-[4px]"
                onClick={() => setContentStatus("start")}
            >
                <h4 className="text-[#000000] font-bold">スタート</h4>
            </button>
        </div>
    );

    const startDisplay = () => (
        <div className="w-[500px] h-[500px] flex items-center justify-center">
            <table id="table" />
        </div>
    );

    
    const content = () => {
        if (contentStatus === "standby") {
            return standbyDisplay();
        } else if (contentStatus === "start") {
            return startDisplay();
        }
        return null; // 必要に応じてエラー処理
    };
    
    return (
        <div className="w-[100%] h-[100%] flex items-center justify-center">
            <div className="w-[600px] h-[600px]">
                <div className="w-[100%] h-[100px] flex items-center justify-center">
                    <h4 className="text-[20px] text-[#ffffff]">Slide Puzzle</h4>
                </div>
                <div className="w-[100%] h-[500px] flex items-center justify-center">
                    {content()}
                </div>
            </div>
        </div>
    )
}