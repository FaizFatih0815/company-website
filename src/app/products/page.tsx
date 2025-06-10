import Image from "next/image";

export default function Products() {
  return (
    <main className="bg-white">
      <div className="relative min-h-screen -mt-[80px] pt-[80px] grid w-full place-items-center">
        <Image
          src="/Foto_Product.png"
          alt="Model Mustika"
          fill
          className="object-cover"
        />

        <div className="relative z-10 px-6 sm:px-10 md:px-20 text-left">
          <h1 className="font-DM-Serif font-semibold text-5xl sm:text-6xl md:text-8xl text-white mb-10 sm:mb-20">
            Merek Kami
          </h1>
        </div>
      </div>

      <div className="w-full h-fit mb-20 px-4 sm:px-6 md:px-12 lg:px-40">
        <p className="text-center font-montserrat font-normal text-black text-base sm:text-lg md:text-xl mb-10">
          Temukan ritual yang efektif untukmu dari ragam pilihan perawatan tubuh
          dan kecantikan yang kami ramu untuk memancarkan pesonamu.
        </p>

        <div className="flex flex-col items-center mb-10">
          <p className="font-DM-Serif text-deep-brown font-bold text-3xl sm:text-4xl md:text-5xl pb-5">
            Consumer Goods
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-8">
            {[1, 2, 3].map((item) => (
              <Image
                key={`consumer-${item}`}
                src="/MRobmustikaratu.jpg"
                alt="Produk Mustika Ratu"
                width={300}
                height={300}
                className="border-2 border-deep-brown rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <p className="font-DM-Serif text-deep-brown font-bold text-3xl sm:text-4xl md:text-5xl pb-5">
            Wellness & Spa
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-8">
            {[1, 2, 3].map((item) => (
              <Image
                key={`wellness-${item}`}
                src="/MRobmustikaratu.jpg"
                alt="Produk Mustika Ratu"
                width={300}
                height={300}
                className="border-2 border-deep-brown rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mb-10">
          <p className="font-DM-Serif text-deep-brown font-bold text-3xl sm:text-4xl md:text-5xl pb-5">
            Affiliates
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5 md:gap-8">
            {[1, 2, 3].map((item) => (
              <Image
                key={`affiliates-${item}`}
                src="/MRobmustikaratu.jpg"
                alt="Produk Mustika Ratu"
                width={300}
                height={300}
                className="border-2 border-deep-brown rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
