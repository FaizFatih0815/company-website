import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="HERO"
      className="relative min-h-screen -mt-[80px] pt-[80px] grid w-full place-items-center"
    >
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src="/FotoHome.jpg"
          alt="Foto Background Home"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <h1 className="font-DM-Serif font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-snug">
          Tahukah Kamu Bahwa Ritual Perawatan Tubuh dan Wajahmu Telah Diwariskan
          Turun Temurun Selama Ratusan Tahun?
        </h1>
      </div>
    </section>
  );
}
