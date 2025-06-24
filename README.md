# 🎬 React + Vite + TailwindCSS + TMDB API

Project ini merupakan aplikasi berbasis React yang menggunakan Vite untuk kecepatan build dan HMR (Hot Module Replacement). Aplikasi ini menampilkan data dari [The Movie Database (TMDB)](https://www.themoviedb.org/) menggunakan API publik mereka. Selain itu, project ini sudah dilengkapi dengan TailwindCSS untuk styling, serta menggunakan beberapa library pendukung seperti React DOM dan React Icons.

---

## 🚀 Fitur

- ⚡️ Build cepat menggunakan Vite
- 🎨 Styling modern dengan Tailwind CSS
- 🔁 HMR (Hot Module Replacement) untuk pengembangan yang efisien
- 🌐 Fetch data dari API TMDB
- 📦 Modular dan scalable
- 🎯 UI clean dan responsive

---

## 📁 Struktur Dasar Project

```bash
src/
├── assets/
├── components/
├── pages/
├── services/          # untuk logic pemanggilan API TMDB
├── Routes
├── Constant
├── App.jsx
├── main.jsx
```

# Clone Project

git clone https://github.com/denzalamsyah/fake-disneyweb.git
cd nama-repo

# Install Dependencies

npm install

# buat file .env

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3

# jalankan

npm run dev

# Dependencies yang Digunakan

| Library                                                  | Deskripsi                            |
| -------------------------------------------------------- | ------------------------------------ |
| [React](https://reactjs.org)                             | Library utama untuk membangun UI     |
| [Vite](https://vitejs.dev)                               | Bundler super cepat untuk dev & prod |
| [Tailwind CSS](https://tailwindcss.com)                  | Utility-first CSS framework          |
| [React DOM](https://reactjs.org/docs/react-dom.html)     | Untuk manipulasi DOM                 |
| [React Icons](https://react-icons.github.io/react-icons) | Paket icon siap pakai                |
| [TMDB API](https://www.themoviedb.org/documentation/api) | Sumber data film dan acara TV        |

# Rekomendasi Tambahan

Gunakan Prettier dan ESLint untuk menjaga konsistensi kode.

# Jika ingin menggunakan TypeScript, kamu bisa migrasi ke template: react-ts.
