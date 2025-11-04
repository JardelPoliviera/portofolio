# Portfolio Jardel Poliviera

Portfolio website modern dengan efek glassmorphism dan animasi interaktif.

## 📋 Informasi

- **Nama**: Jardel Poliviera
- **NIM**: 2411533012
- **Universitas**: Universitas Andalas

## 🚀 Cara Menjalankan

### Prasyarat

Pastikan Anda sudah menginstall:
- [Node.js](https://nodejs.org/) (versi 18 atau lebih baru)
- npm atau yarn

### Langkah-langkah Instalasi

1. **Buka Terminal/Command Prompt** di folder proyek ini

2. **Install Dependencies**
   ```bash
   npm install
   ```
   
   Atau jika menggunakan yarn:
   ```bash
   yarn install
   ```

3. **Jalankan Development Server**
   ```bash
   npm run dev
   ```
   
   Atau dengan yarn:
   ```bash
   yarn dev
   ```

4. **Buka Browser**
   - Server akan berjalan di `http://localhost:5173`
   - Buka URL tersebut di browser Anda

### Build untuk Production

Untuk membuat versi production:

```bash
npm run build
```

File hasil build akan ada di folder `dist/`

## 🎨 Fitur

- ✨ Desain glassmorphism modern
- 🌊 Animasi smooth dengan Motion (Framer Motion)
- 🎯 Fully responsive
- ⚡ Fast loading dengan Vite
- 🎭 Dark theme dengan aksen biru dan cyan
- 📱 Mobile-friendly

## 🛠️ Teknologi yang Digunakan

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide React Icons

## 📁 Struktur Folder

```
├── components/          # Komponen React
│   ├── ui/             # Komponen UI reusable
│   ├── Hero.tsx        # Halaman hero
│   ├── About.tsx       # Halaman tentang
│   ├── Projects.tsx    # Halaman proyek
│   ├── Skills.tsx      # Halaman keahlian
│   └── Contact.tsx     # Halaman kontak
├── styles/             # File CSS
├── public/             # Asset statis
└── App.tsx            # Komponen utama
```

## 🖼️ Mengganti Foto Profil

Untuk mengganti foto profil Anda:

1. Letakkan foto Anda di folder `public/` dengan nama `profile.jpg`
2. Atau edit file `components/About.tsx` dan ubah path image sesuai lokasi foto Anda

## 📝 Kustomisasi

### Mengubah Informasi Pribadi

Edit file `components/About.tsx`, `components/Contact.tsx`, dan `components/Footer.tsx` untuk mengubah informasi kontak dan detail pribadi.

### Mengubah Warna Tema

Edit file `styles/globals.css` untuk mengubah skema warna.

## 🐛 Troubleshooting

### Port sudah digunakan

Jika port 5173 sudah digunakan, Vite akan otomatis menggunakan port lain. Cek terminal untuk melihat URL yang benar.

### Error saat install

Coba hapus folder `node_modules` dan file `package-lock.json`, lalu install ulang:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Foto tidak muncul

Pastikan path foto sudah benar di `components/About.tsx`

## 📞 Kontak

Jika ada pertanyaan, hubungi saya di:
- Email: jardel@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 📄 Lisensi

© 2024 Jardel Poliviera. All rights reserved.
