import Link from "next/link"

export default function NotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         <p className="text-8xl font-bold text-accent mb-4">404! <span className="text-white">Not Found</span></p>
         <h1 className="text-3xl font-bold">Maaf, halaman yang anda cari tidak ditemukan</h1>
         <Link href="/" className="mt-4 text-accent text-xl underline">Kembali ke halaman utama</Link>
      </div>
   )
}