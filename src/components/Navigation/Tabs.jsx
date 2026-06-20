import React from 'react';

function Tabs({ activeTab, setActiveTab, totalCount, favoriteCount }) {
  return (
    <div className="flex bg-[#EFECE6] p-1.5 rounded-2xl w-fit border border-[#DCD1BC]/30">
      <button
        onClick={() => setActiveTab('all')}
        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          activeTab === 'all' 
            ? 'bg-white text-[#5C4E35] shadow-sm' 
            : 'text-[#8C826E] hover:text-[#5C4E35]'
        }`}
      >
         Tüm Tarifler ({totalCount})
      </button>
      <button
        onClick={() => setActiveTab('favorites')}
        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
          activeTab === 'favorites' 
            ? 'bg-white text-rose-600 shadow-sm' 
            : 'text-[#8C826E] hover:text-rose-400'
        }`}
      >
        ❤️ Favorilerim ({favoriteCount})
      </button>
    </div>
  );
}

export default Tabs;