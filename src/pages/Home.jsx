import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard';
import RecipeForm from '../components/Form/RecipeForm';
import Tabs from '../components/Navigation/Tabs';
import logo from '../assets/logo.png';

function Home() {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem('chef-in-you-recipes');
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [duration, setDuration] = useState('');
  const [instructions, setInstructions] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  // SAYFALAMA (PAGINATION) İÇİN YENİ STATE
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 2; // Her sayfada gösterilecek tarif sayısı

  useEffect(() => {
    localStorage.setItem('chef-in-you-recipes', JSON.stringify(recipes));
    // Tarif listesi veya sekme değiştiğinde otomatik olarak 1. sayfaya dön
    setCurrentPage(1);
  }, [recipes, activeTab]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !duration || !instructions) return;

    if (editingId) {
      setRecipes(recipes.map(recipe => 
        recipe.id === editingId ? { ...recipe, title, ingredients, duration, instructions } : recipe
      ));
      setEditingId(null);
    } else {
      const newRecipe = { id: Date.now().toString(), title, ingredients, duration, instructions, isFavorite: false };
      setRecipes([newRecipe, ...recipes]);
    }
    handleCancel();
  };

  const handleCancel = () => {
    setEditingId(null); setTitle(''); setIngredients(''); setDuration(''); setInstructions('');
  };

  const handleDelete = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  const handleEditSetup = (recipe) => {
    setEditingId(recipe.id); setTitle(recipe.title); setIngredients(recipe.ingredients); setDuration(recipe.duration); setInstructions(recipe.instructions);
  };

  const toggleFavorite = (id) => {
    setRecipes(recipes.map(recipe => recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe));
  };

  // 1. Önce sekmeye göre filtrele
  const filteredRecipes = recipes.filter(recipe => activeTab === 'favorites' ? recipe.isFavorite : true);

  // 2. Sayfalama Algoritması Hesaplamaları
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // Sadece o anki sayfaya ait olan 2 tarifi kesip alıyoruz
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F4EFE6] via-[#F9F6F0] to-[#EAE3D2] text-[#332C22] antialiased pb-24">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F4EFE6]/80 backdrop-blur-xl border-b border-[#DCD1BC]/40 px-8 py-2">
        <div className="max-w-5xl mx-auto flex justify-between items-center h-16">
          <div className="flex items-center gap-2 h-full">
            <img src={logo} alt="Chef In You Logo" className="h-20 w-auto -my-2 object-contain" />
            <span className="text-2xl font-serif font-black text-[#A38A5E] tracking-tight leading-none">
              Chef In You
            </span>
          </div>
          <span className="text-xs font-bold bg-[#A38A5E]/10 text-[#7A633A] px-4 py-2 rounded-full border border-[#A38A5E]/20">
            Mutfak Günlüğü • {recipes.length} Tarif
          </span>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* FORM BÖLÜMÜ */}
          <div className="md:col-span-5">
            <RecipeForm 
              onSubmit={handleSubmit} editingId={editingId} onCancel={handleCancel}
              title={title} setTitle={setTitle} duration={duration} setDuration={setDuration}
              ingredients={ingredients} setIngredients={setIngredients} instructions={instructions} setInstructions={setInstructions}
            />
          </div>

          {/* AKIŞ BÖLÜMÜ */}
          <div className="md:col-span-7 space-y-8">
            <Tabs 
              activeTab={activeTab} setActiveTab={setActiveTab} 
              totalCount={recipes.length} favoriteCount={recipes.filter(r => r.isFavorite).length}
            />
            
            {filteredRecipes.length === 0 ? (
              <div className="bg-white/80 backdrop-blur-md rounded-[32px] border border-[#E8DFCC] p-16 text-center shadow-xl shadow-[#A38A5E]/5 flex flex-col items-center justify-center gap-4">
                <img src={logo} alt="Empty Defter" className="w-20 h-20 opacity-30" />
                <p className="text-[#8C826E] text-sm font-medium max-w-xs mx-auto">
                  {activeTab === 'favorites' 
                    ? 'Favorilere eklediğiniz bir lezzet bulunamadı.' 
                    : 'Defteriniz şu an boş görünüyor. Hemen bir tarif ekleyin!'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {/* Tüm liste yerine sadece o sayfaya ait 2 tarifi dönüyoruz */}
                {currentRecipes.map((recipe) => (
                  <RecipeCard 
                    key={recipe.id} recipe={recipe} onToggleFavorite={toggleFavorite} onEditSetup={handleEditSetup} onDelete={handleDelete}
                  />
                ))}

                {/* PREMIUM SAYFALAMA OKLARI */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between bg-white/60 backdrop-blur-sm border border-[#E8DFCC]/50 rounded-2xl p-4 mt-4 shadow-sm">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                        currentPage === 1
                          ? 'opacity-40 bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed'
                          : 'bg-white text-[#5C4E35] border-[#E8DFCC] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      ⬅️ 
                    </button>
                    
                    <span className="text-xs font-bold text-[#8C826E]">
                      Sayfa {currentPage} / {totalPages}
                    </span>

                    <button
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border cursor-pointer ${
                        currentPage === totalPages
                          ? 'opacity-40 bg-stone-100 text-stone-400 border-stone-200 cursor-not-allowed'
                          : 'bg-white text-[#5C4E35] border-[#E8DFCC] hover:bg-[#FAF8F5]'
                      }`}
                    >
                       ➡️
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;