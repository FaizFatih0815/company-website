import Link from "next/link";
import Image from "next/image";

export default function CompanySection() {
  return (
    <section id="COMPANY" className="grid grid-rows-[auto_1fr] min-h-screen">
      <div className="grid grid-rows-2 place-items-center font-montserrat bg-brown px-4 sm:px-6 md:px-12 lg:px-20 py-10">
        <p className="font-medium text-lg sm:text-xl md:text-2xl text-center text-white">
          Temukan rahasia cantik alami dari resep leluhur dan filosofi
          kecantikan Keraton Jawa dalam rangkaian persembahan Mustika Ratu yang
          aman dan halal untukmu
        </p>
        <Link
          href="/about-us"
          className="text-base sm:text-lg md:text-xl border-2 border-white w-fit h-fit px-4 py-2 text-white hover:bg-deep-brown transition-all duration-300"
        >
          Ketahui Lebih Lanjut
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 bg-deep-white place-items-center px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 md:py-20 gap-6 md:gap-10">
        <div>
          <Image src="/Mrs.png" alt="Mrs Owner" width={1000} height={1000} />
        </div>
        <div className="grid grid-rows-2 place-items-center text-center">
          <p className="font-DM-Serif font-semibold text-3xl sm:text-4xl md:text-5xl text-orange mb-4">
            Warisan Kekayaan Alam dan Budaya Indonesia
          </p>
          <p className="font-montserrat text-sm sm:text-base md:text-lg text-deep-brown">
            Kisah kami dimulai pada tahun 1975, ketika BRA Mooryati Soedibyo
            merintis Mustika Ratu dengan mengembangkan resep yang diwarisinya
            sebagai keturunan keluarga Keraton Jawa. Meyakini manfaat kekayaan
            alam dan budaya Indonesia untuk perawatan tubuh dan kecantikan,
            Mustika Ratu menjadi pelopor sekaligus pelestari budaya perawatan
            kecantikan Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}
