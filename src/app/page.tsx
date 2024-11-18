'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  // コンテンツの配列
  const contents = [
    { id: 1, title: "スライドパズルゲーム", description: "タイルを指定通りの配置に並べるゲームです", link: "/practice/slide-puzzle", created: "2023-5-01" },
    { id: 2, title: "スライドパズルゲーム", description: "タイルを指定通りの配置に並べるゲームです", link: "/practice/slide-puzzle", created: "2023-6-01" },
    { id: 3, title: "スライドパズルゲーム", description: "タイルを指定通りの配置に並べるゲームです", link: "/practice/slide-puzzle", created: "2023-6-01" },
    { id: 4, title: "スライドパズルゲーム", description: "タイルを指定通りの配置に並べるゲームです", link: "/practice/slide-puzzle", created: "2026-6-01" },
  ];

  // 新しい順に並べ替え
  const sortedContents = [...contents].sort((a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
  });

  return (
    <div className="text-[#ffffff] p-[30px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-bold">
        {sortedContents.map((content) => (
          <div
            key={content.id}
            onClick={() => router.push(content.link)}
            className="bg-white shadow-md rounded-lg p-2 border border-gray-200 h-[100px] hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <div className="w-[100%] h-[30px] flex items-center justify-start text-[#000000]">
              <h4 className="text-[16px]">{content.title}</h4>
            </div>
            <div className="w-[100%] h-[40px] text-[#000000]">
              <h4 className="text-[12px]">{content.description}</h4>
            </div>
            <div className="w-[100%] h-[10px] text-[#000000]">
              <h4 className="text-[10px]">{content.created}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
