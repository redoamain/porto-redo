import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-background to-secondary/5">
      <div className="max-w-md mx-auto px-4 text-center">
        <AlertCircle className="h-20 w-20 text-primary mx-auto mb-6" />

        <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Halaman Tidak Ditemukan</h2>

        <p className="text-muted-foreground mb-8">
          Halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak
          pernah ada.
        </p>

        <Button size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  );
}
