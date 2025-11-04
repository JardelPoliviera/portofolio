# 📖 Panduan Setup Portfolio - Jardel Poliviera

Panduan lengkap untuk menjalankan portfolio ini di laptop Anda.

## 🎯 Langkah Cepat

1. **Install Node.js** (jika belum ada)
   - Download dari: https://nodejs.org/
   - Pilih versi LTS (Long Term Support)
   - Install seperti aplikasi biasa

2. **Buka Terminal/Command Prompt**
   - Windows: Tekan `Win + R`, ketik `cmd`, Enter
   - Mac: Tekan `Cmd + Space`, ketik `terminal`, Enter

3. **Navigasi ke Folder Proyek**
   ```bash
   cd path/ke/folder/portfolio
   ```
   Contoh: `cd C:\Users\Jardel\Documents\portfolio`

4. **Install Dependencies**
   ```bash
   npm install
   ```
   Tunggu sampai selesai (bisa 2-5 menit)

5. **Jalankan Website**
   ```bash
   npm run dev
   ```

6. **Buka Browser**
   - Buka Chrome/Firefox/Edge
   - Ketik: `http://localhost:5173`

## 📸 Cara Mengganti Foto Profil

### Metode 1: Menggunakan Foto Lokal (RECOMMENDED)

1. Siapkan foto Anda (format: .jpg, .png, atau .webp)
2. Rename foto menjadi `profile.jpg`
3. Copy foto ke folder `public/` di dalam proyek
4. Foto akan otomatis muncul!

### Metode 2: Menggunakan URL Online

1. Upload foto ke image hosting (seperti Imgur, Google Drive public, dll)
2. Copy link foto
3. Edit file `components/About.tsx`
4. Ubah baris:
   ```tsx
   src="/profile.jpg"
   ```
   Menjadi:
   ```tsx
   src="URL_FOTO_ANDA"
   ```

## 🎨 Cara Mengubah Informasi Pribadi

### Mengubah Nama dan Info Kontak

Edit file berikut dan cari bagian yang perlu diubah:

**1. components/About.tsx**
```tsx
<h3 className="text-2xl text-white">
  Halo, saya Jardel Poliviera  // <-- Ubah nama di sini
</h3>
<p className="text-white/90">
  <span className="text-blue-400">NIM:</span> 2411533012  // <-- Ubah NIM
</p>
<p className="text-white/90">
  <span className="text-blue-400">Universitas:</span> Universitas Andalas  // <-- Ubah Universitas
</p>
```

**2. components/Contact.tsx**
```tsx
{
  icon: Mail,
  title: "Email",
  value: "jardel@example.com",  // <-- Ubah email
  link: "mailto:jardel@example.com"
}
```

**3. components/Footer.tsx**
```tsx
oleh Jardel Poliviera  // <-- Ubah nama
```

## 🔧 Troubleshooting

### Problem: "npm tidak dikenali..."

**Solusi:** Node.js belum terinstall atau belum di-restart terminal
1. Install Node.js dari nodejs.org
2. Restart terminal/command prompt
3. Coba lagi

### Problem: Port 5173 sudah digunakan

**Solusi:** Vite akan otomatis menggunakan port lain
- Cek di terminal, akan muncul URL baru seperti `http://localhost:5174`

### Problem: Foto tidak muncul

**Solusi:**
1. Pastikan foto ada di folder `public/` dengan nama `profile.jpg`
2. Atau cek konsol browser (F12) untuk melihat error
3. Pastikan nama file dan path sudah benar (case-sensitive)

### Problem: Error saat npm install

**Solusi 1:** Hapus dan install ulang
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solusi 2:** Coba dengan npm cache clean
```bash
npm cache clean --force
npm install
```

**Solusi 3:** Gunakan yarn sebagai alternatif
```bash
npm install -g yarn
yarn install
yarn dev
```

### Problem: Website blank/kosong

**Solusi:**
1. Buka Console browser (F12)
2. Cek apakah ada error
3. Pastikan semua file ada di tempatnya
4. Coba refresh dengan Ctrl+F5

## 📱 Mengakses dari HP/Device Lain

1. Pastikan HP dan laptop di WiFi yang sama
2. Cari IP laptop Anda:
   - Windows: `ipconfig` di cmd, lihat "IPv4 Address"
   - Mac: `ifconfig | grep inet` di terminal
3. Di HP, buka browser dan ketik: `http://IP_LAPTOP:5173`
   - Contoh: `http://192.168.1.100:5173`

## 🌐 Deploy Online (GRATIS)

### Menggunakan Vercel (Recommended)

1. Buat akun di https://vercel.com (gratis)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Di folder proyek, jalankan:
   ```bash
   vercel
   ```
4. Ikuti instruksi di terminal
5. Website Anda akan live dalam beberapa menit!

### Menggunakan Netlify

1. Build proyek:
   ```bash
   npm run build
   ```
2. Buat akun di https://netlify.com
3. Drag & drop folder `dist/` ke Netlify
4. Done! Website sudah online

## 📞 Butuh Bantuan?

Jika masih ada masalah:

1. Screenshot error yang muncul
2. Cek apakah semua file ada
3. Pastikan Node.js sudah terinstall: `node --version`
4. Pastikan npm berfungsi: `npm --version`

## 🎓 Tips Tambahan

### Untuk Development
- Setiap kali edit file, website akan auto-reload
- Buka DevTools (F12) untuk debug
- Lihat console untuk error/warning

### Untuk Production
```bash
npm run build        # Build website
npm run preview      # Preview production build
```

### Struktur File Penting
```
portfolio/
├── public/              # Taruh foto profil di sini
│   └── profile.jpg
├── components/          # Komponen website
│   ├── About.tsx       # Edit info pribadi
│   ├── Contact.tsx     # Edit kontak
│   └── ...
├── package.json        # Dependencies
└── vite.config.ts      # Config Vite
```

## ✅ Checklist Setup

- [ ] Node.js terinstall (`node --version` works)
- [ ] Dependencies terinstall (`npm install` success)
- [ ] Foto profil sudah di `public/profile.jpg`
- [ ] Info pribadi sudah diubah
- [ ] Website berjalan di `localhost:5173`
- [ ] Tidak ada error di console browser

---

**Good luck! 🚀**

Jika panduan ini membantu, jangan lupa beri star! ⭐
