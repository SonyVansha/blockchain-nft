

```
/backend
│── /src
│   ├── /config         # Konfigurasi aplikasi (database, env, dll)
│   ├── /controllers    # Handler untuk request HTTP
│   ├── /middlewares    # Middleware kustom (auth, error handling, dll)
│   ├── /models         # Model untuk database
│   ├── /routes         # Definisi endpoint API
│   ├── /services       # Business logic / helper function
│   ├── /utils          # Helper functions (formatting, logging, dll)
│   ├── app.js          # Inisialisasi Express dan middleware utama
│   ├── server.js       # Entry point aplikasi
│── .env                # Variabel lingkungan
│── .gitignore          # File yang di-ignore oleh Git
│── package.json        # Konfigurasi dan dependensi project
│── README.md           # Dokumentasi proyek

```