import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative min-h-screen -mt-[80px] pt-[80px] grid w-full place-items-center">
        <Image
          src="/ModelMustika_1.png"
          alt="Model Mustika"
          fill
          className="object-cover"
        />
        <div className="relative z-10 px-6 sm:px-10 md:px-20 text-left">
          <h1 className="font-DM-Serif font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-4xl">
            Mustika Ratu lahir dari keinginan untuk berbagi warisan budaya
            Indonesia lewat rangkaian produk dan perawatan alami kaya manfaat
            bermutu tinggi.
          </h1>
        </div>
      </div>

      <div className="flex flex-col min-h-[300px] bg-brown justify-center items-center font-DM-Serif text-white px-4 sm:px-10 text-center py-10">
        <div className="text-3xl sm:text-4xl font-semibold mb-4">
          Permata Indonesia
        </div>
        <div className="text-lg sm:text-xl font-normal max-w-4xl">
          Memanfaatkan kekayaan alam dan budaya Indonesia, Mustika Ratu
          melestarikan pusaka bangsa melalui rangkaian produk dengan sentuhan
          kemewahan yang akan memancarkan kecantikan dan kebugaranmu.
        </div>
      </div>

      <div className="relative grid w-full min-h-screen place-items-center px-6 sm:px-12 md:px-20 py-10 bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/FotoHome.jpg"
            alt="Foto Background Home"
            fill
            className="object-cover opacity-25"
          />
        </div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row w-full h-fit min-h-[400px] rounded-3xl overflow-hidden bg-white shadow-md">
            <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-auto">
              <Image
                src="/Misi.jpg"
                alt="Foto Misi"
                fill
                className="object-cover object-left"
              />
            </div>
            <div className="flex flex-col justify-center w-full lg:w-1/2 p-6 sm:p-8">
              <div className="flex flex-col mb-4 font-DM-Serif text-orange space-y-2 text-center">
                <p className="font-black uppercase text-3xl sm:text-4xl md:text-5xl">
                  Misi Kami
                </p>
              </div>

              <div className="space-y-3 font-montserrat text-sm sm:text-base text-justify text-orange">
                <ul className="list-disc list-inside">
                  <li>
                    Melindungi dan mempertahankan kekayaan sumber daya alam dan
                    budaya Indonesia, dan mengangkatnya dengan pengetahuan dan
                    teknologi modern.
                  </li>
                  <li>Memberikan produk dan layanan berkualitas tinggi.</li>
                  <li>
                    Menginspirasi karyawan kami dalam memberikan kepuasan
                    konsumen.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-deep-white">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-deep-white place-items-center px-6 sm:px-12 md:px-20 py-10 md:py-20 gap-6 md:gap-10">
          <div className="grid grid-rows-2 place-items-center text-center">
            <p className="font-DM-Serif font-semibold text-4xl md:text-5xl text-orange mb-4">
              Efektif
            </p>
            <p className="font-montserrat text-base sm:text-lg text-deep-brown">
              Mustika Ratu terus berinovasi untuk melestarikan ramuan berusia
              ratusan tahun dan menghadirkannya dalam rangkaian produk modern
              yang efektif merawat kecantikanmu.
            </p>
          </div>
          <div>
            <Image
              src="/MREfektif.png"
              alt="Mrs Owner"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-deep-white">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-deep-white place-items-center px-6 sm:px-12 md:px-20 py-10 md:py-20 gap-6 md:gap-10">
          <div>
            <Image
              src="/MRKekayaanAlam.png"
              alt="Mrs Owner"
              width={1000}
              height={1000}
            />
          </div>
          <div className="grid grid-rows-2 place-items-center text-center">
            <p className="font-DM-Serif font-semibold text-4xl md:text-5xl text-orange mb-4">
              Kekayaan Alam Indonesia
            </p>
            <p className="font-montserrat text-base sm:text-lg text-deep-brown">
              Filosofi kecantikan alami Mustika Ratu berangkat dari pengetahuan
              yang bersumber pada kekayaan alam Indonesia yang berlimpah serta
              kearifan tradisi lokal yang diwariskan turun-temurun.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-deep-white">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-deep-white place-items-center px-6 sm:px-12 md:px-20 py-10 md:py-20 gap-6 md:gap-10">
          <div className="grid grid-rows-2 place-items-center text-center">
            <p className="font-DM-Serif font-semibold text-4xl md:text-5xl text-orange mb-4">
              Sentuhan Kemewahan
            </p>
            <p className="font-montserrat text-base sm:text-lg text-deep-brown">
              Ritual kecantikan ala ratu dan putri Keraton Jawa menjadi
              inspirasi kami saat menuangkan kemewahan dalam tiap produk
              perawatan kecantikan yang memanjakanmu.
            </p>
          </div>
          <div>
            <Image
              src="/MRSentuhanKemewahan.png"
              alt="Mrs Owner"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
