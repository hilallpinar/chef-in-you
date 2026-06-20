# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Chef In You - Dijital Yemek Tarifi Defteri

Bu projeyi, staj dönemimde geliştirdiğim ve kullanıcıların kendi yemek tariflerini kaydedip düzenleyebileceği modern bir dijital defter uygulaması olarak tasarladım. Figma üzerindeki krem ve gold tonlarındaki lüks tasarım şablonuna sadık kalarak, arayüzü tamamen Tailwind CSS ile koda döktüm.

---

##  Projenin Öne Çıkan Özellikleri

* **Özel Sayfalama (Pagination):** Çok fazla tarif eklendiğinde sayfa aşağı doğru sonsuza kadar uzamasın diye her sayfada sadece 2 tarif gösteren akıllı bir ok sistemi kurdum.
* **Favoriler ve Filtreleme:** Tarifler tek tıkla favorilere eklenebiliyor ve sekmeler sayesinde sadece favori tarifler listelenebiliyor.
* **Veri Kaybı Engelleme:** Sayfa yenilense bile tariflerin silinmemesi için tüm verileri tarayıcının `LocalStorage` hafızasında tutuyorum.
* **Tam Düzenleme Yeteneği:** Eklenen tarifler üzerinde anlık olarak "Düzenle" ve "Sil" işlemleri yapılabiliyor.
* **Responsive Yapı:** Mobil cihazlarda ve bilgisayarda ekran boyutuna göre tasarım kendini otomatik olarak hizalıyor.

---

## 🛠️ Teknik Altyapı

* **Framework:** React
* **Stil Yönetimi:** Tailwind CSS
* **Derleyici:** Vite
* **Yayınlama:** Vercel

---

## 📂 Klasör Yapısı

* `src/components/Form/RecipeForm.jsx` -> Tarif ekleme ve düzenleme formu
* `src/components/Navigation/Tabs.jsx` -> Tüm tarifler / Favoriler sekmeleri
* `src/components/RecipeCard.jsx` -> Yemeklerin listelendiği kart bileşeni
* `src/pages/Home.jsx` -> Projenin ana mantığının ve state yapısının döndüğü ana sayfa

---

## 💻 Bilgisayarda Çalıştırma Adımları

1. Projeyi bilgisayarınıza indirin veya klonlayın.
2. Terminalde proje klasörüne girip `npm install` komutuyla gerekli paketleri yükleyin.
3. `npm run dev` komutunu çalıştırarak tarayıcıda projeyi ayağa kaldırın.

🔗 **Canlı Proje Linki:** [https://chef-in-you.vercel.app](https://chef-in-you.vercel.app)