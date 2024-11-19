"use client";
// import { useEffect , useState } from "react";


export default function SlidePuzzlePage() {

    // // const [contentStatus, setContentStatus] = useState("start");
    const contentStatus = "standby";
    const tiles = [];
    const hist = [];

    // useEffect(() => {
    //     if (contentStatus === "start") {
    //         init();
    //     }
    // }, [contentStatus]);

    const init = () => {
        const tableElement = document.getElementById("table");
        if (!tableElement) return;

        const newTiles:any = [];
        tableElement.innerHTML = ""; // 初期化

        for (let i = 0; i < 5; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < 5; j++) {
                const td = document.createElement("td");
                const index = i * 5 + j;

                td.className = "tile";
                td.dataset.index = index.toString();
                td.textContent = index === 0 ? "" : index.toString();
                td.style.width = "100px";
                td.style.height = "100px";
                td.style.textAlign = "center";
                td.style.fontSize = "30px";
                td.style.border = "1px solid #000000";
                td.style.borderRadius = "4px";
                td.style.backgroundColor = "#ffffff";
                td.onclick = (e) => click(e, newTiles);

                tr.appendChild(td);
                newTiles.push(td);
            }
            tableElement.appendChild(tr);
        }

        // setTiles(newTiles);

        // シャッフル
        for (let i = 0; i < 1000; i++) {
            const randomIndex = Math.floor(Math.random() * 25);
            click({ target: { dataset: { index: randomIndex.toString() } } }, newTiles);
        }
    };

    const standbyDisplay = () => (
        <div className="w-[500px] h-[500px] flex items-center justify-center">
            <button
                className="bg-[#ffffff] hover:bg-gray-300 w-[200px] h-[30px] rounded-[4px]"
                // onClick={() => setContentStatus("start")}
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