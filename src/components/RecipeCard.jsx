import React from 'react';

function RecipeCard({ recipe, onToggleFavorite, onEditSetup, onDelete }) {
  const ingredientList = recipe.ingredients.split(',').map(item => item.trim()).filter(Boolean);

  return (
    <div className="bg-white rounded-[32px] p-7 border border-[#E8DFCC]/60 shadow-[0_10px_40px_rgba(163,138,94,0.03)] transition-all duration-300 hover:shadow-[0_20px_50px_rgba(163,138,94,0.08)] relative overflow-hidden group">
      
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="bg-[#A38A5E]/10 text-[#7A633A] text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider">
            ⏱️ {recipe.duration} Dakika
          </span>
          <h3 className="text-xl font-serif font-bold text-[#5C4E35] mt-3">
            {recipe.title}
          </h3>
        </div>

        <button 
          onClick={() => onToggleFavorite(recipe.id)}
          className={`text-xl p-2 rounded-xl transition-all cursor-pointer ${
            recipe.isFavorite ? 'bg-rose-50 text-rose-500' : 'text-stone-300 hover:text-rose-400'
          }`}
        >
          {recipe.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {ingredientList.map((ing, i) => (
          <span key={i} className="bg-[#FAF8F5] text-[#7A633A] text-xs px-3 py-1.5 rounded-xl border border-[#E8DFCC]/40 font-medium">
            • {ing}
          </span>
        ))}
      </div>

      <div className="mt-5 bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8DFCC]/30">
        <p className="text-sm text-[#5C5446] leading-relaxed">
          {recipe.instructions}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-50 flex justify-end gap-3 md:opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button 
          onClick={() => onEditSetup(recipe)}
          className="text-xs text-blue-600 font-bold px-4 py-2 rounded-xl hover:bg-blue-50 transition-all cursor-pointer"
        >
          Düzenle
        </button>
        <button 
          onClick={() => {
            if(window.confirm('Silinsin mi?')) onDelete(recipe.id);
          }}
          className="text-xs text-rose-600 font-bold px-4 py-2 rounded-xl hover:bg-rose-50 transition-all cursor-pointer"
        >
          🗑️ Sil
        </button>
      </div>

    </div>
  );
}

export default RecipeCard;