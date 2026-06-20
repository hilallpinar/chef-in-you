import React from 'react';

function RecipeForm({ 
  onSubmit, editingId, onCancel,
  title, setTitle, 
  duration, setDuration, 
  ingredients, setIngredients, 
  instructions, setInstructions 
}) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-[32px] p-8 border border-[#E8DFCC] shadow-[0_20px_50px_rgba(163,138,94,0.08)] sticky top-28">
      <h2 className="text-xl font-serif font-bold text-[#5C4E35] mb-8 flex items-center gap-2">
        {editingId ? 'Tarifi Düzenle' : 'Yeni Tarif Oluştur'}
      </h2>
      
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <input 
            type="text" value={title} onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#FAF8F5] border border-[#E8DFCC] rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-[#A38A5E] focus:ring-4 focus:ring-[#A38A5E]/5 outline-none transition-all text-[#332C22]"
            placeholder="Yemeğin Adı nedir?"
          />
        </div>

        <div className="grid grid-cols-3 gap-3">
          <input 
            type="number" value={duration} onChange={(e) => setDuration(e.target.value)}
            className="col-span-2 w-full bg-[#FAF8F5] border border-[#E8DFCC] rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-[#A38A5E] focus:ring-4 focus:ring-[#A38A5E]/5 outline-none transition-all text-[#332C22]"
            placeholder="Hazırlama Süresi"
          />
          <div className="bg-[#FAF8F5] border border-[#E8DFCC] rounded-2xl flex items-center justify-center text-xs font-bold text-[#8C826E]">
            dk
          </div>
        </div>

        <div>
          <textarea 
            value={ingredients} onChange={(e) => setIngredients(e.target.value)} rows="2"
            className="w-full bg-[#FAF8F5] border border-[#E8DFCC] rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-[#A38A5E] focus:ring-4 focus:ring-[#A38A5E]/5 outline-none transition-all resize-none text-[#332C22]"
            placeholder="Malzemeler (örn: Un, Süt, Yumurta)"
          />
        </div>

        <div>
          <textarea 
            value={instructions} onChange={(e) => setInstructions(e.target.value)} rows="4"
            className="w-full bg-[#FAF8F5] border border-[#E8DFCC] rounded-2xl px-5 py-4 text-sm focus:bg-white focus:border-[#A38A5E] focus:ring-4 focus:ring-[#A38A5E]/5 outline-none transition-all resize-none text-[#332C22]"
            placeholder="Nasıl hazırlanır? Adım adım detaylandır..."
          />
        </div>

        <button 
          type="submit" 
          className="w-full text-white font-bold py-4 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm tracking-wide bg-gradient-to-r from-[#C5A880] to-[#A38A5E] shadow-[#A38A5E]/20 hover:shadow-[#A38A5E]/30"
        >
          {editingId ? 'Değişiklikleri Uygula' : 'Deftere Kaydet'}
        </button>

        {editingId && (
          <button 
            type="button" onClick={onCancel}
            className="w-full bg-stone-100 text-stone-500 font-bold py-3.5 rounded-2xl text-xs hover:bg-stone-200 transition-all cursor-pointer"
          >
            İptal Et
          </button>
        )}
      </form>
    </div>
  );
}

export default RecipeForm;