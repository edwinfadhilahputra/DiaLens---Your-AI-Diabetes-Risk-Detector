// Mengambil URL dari Environment Variable Vercel / .env
// Jika tidak ada, otomatis menggunakan fallback URL backend Vercel kamu
const ENV_URL = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL; //

export const API_BASE_URL = 
  ENV_URL && ENV_URL.trim() !== '' 
    ? ENV_URL 
    : 'https://dia-lens-backend.vercel.app';