import Image from "next/image";

export default function Testimoni() {
  return (
    <section
      id="TESTIMONI"
      className="grid grid-rows-[auto_1fr] w-full min-h-screen place-items-center bg-deep-white px-4 py-10"
    >
      <div className="font-DM-Serif font-black text-orange text-4xl sm:text-5xl lg:text-7xl flex justify-center ">
        TESTIMONIALS
      </div>
      <div className="flex flex-col gap-y-8 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image
              src="/User_4.jpg"
              alt="User 4"
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              Ayu - Jakarta
            </p>
            <p className="text-black font-montserrat text-justify">
              Setelah rutin pakai produk perawatan wajah dari Mustika Ratu,
              kulit saya terasa lebih segar dan halus. Plus, wanginya alami
              banget, bikin relaks tiap kali dipakai!
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-6 text-center md:text-right">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image src="/User_2.jpg" alt="User 2" width={200} height={200} />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              Rani - Bandung
            </p>
            <p className="text-black font-montserrat text-justify">
              Saya suka banget dengan body scrub Mustika Ratu. Teksturnya
              lembut, nggak bikin iritasi, dan kulit langsung terasa bersih dan
              cerah setelah pemakaian.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden relative">
            <Image
              src="/User_5.jpg"
              alt="User 3"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="max-w-md">
            <p className="text-black text-2xl font-montserrat font-black mb-2">
              Dewi - Yogyakarta
            </p>
            <p className="text-black font-montserrat text-justify">
              Produk jamu pelangsing dari Mustika Ratu membantu banget menjaga
              berat badan saya. Rasanya enak, dan bikin badan terasa lebih
              ringan setiap hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
