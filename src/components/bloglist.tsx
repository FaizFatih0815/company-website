import Link from "next/link";
import Image from "next/image";

export default function BlogList() {
  return (
    <section
      id="BLOGLIST"
      className="grid w-full min-h-screen place-items-center bg-cream px-4 py-10"
    >
      <div className="w-full max-w-6xl space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full rounded-2xl shadow-lg grid grid-rows-[200px_1fr] overflow-hidden bg-white">
            <div className="relative w-full h-[200px]">
              <Image
                src="/Foto1.jpg"
                alt="Foto 1"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="p-5 grid grid-rows-[auto_1fr]">
              <div className="mb-2">
                <p className="font-montserrat font-black uppercase text-lg text-black">
                  Inspirasi Terbaik dari Indonesia
                </p>
              </div>

              <div className="space-y-2 text-sm font-montserrat text-justify">
                <p className="text-sm text-gray-600">Saripudin | 08-06-2025</p>
                <p>
                  Ungkap khasiat bahan alami yang dipercaya efektif oleh para
                  ratu dan putri keraton dari masa ke masa.
                </p>
                <div className="pt-2">
                  <Link
                    href="/blog"
                    className="p-2 px-4 bg-orange font-montserrat text-white rounded-full hover:bg-brown hover:text-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full rounded-2xl shadow-lg grid grid-rows-[200px_1fr] overflow-hidden bg-white">
            <div className="relative w-full h-[200px]">
              <Image
                src="/Foto2.jpg"
                alt="Foto 2"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="p-5 grid grid-rows-[auto_1fr]">
              <div className="mb-2">
                <p className="font-montserrat font-black uppercase text-lg text-black">
                  Komitmen Keberlangsungan
                </p>
              </div>

              <div className="space-y-2 text-sm font-montserrat text-justify">
                <p className="text-sm text-gray-600">Setyawan | 08-06-2025</p>
                <p>
                  Kepedulian dan komitmen Mustika Ratu terhadap keberlangsungan
                  komunitas dan lingkungan mewujud dalam beragam program dan
                  kerja sama kami.Ungkap khasiat bahan alami yang dipercaya
                  efektif oleh para ratu dan putri keraton dari masa ke masa.
                </p>
                <div className="pt-2">
                  <Link
                    href="/blog"
                    className="p-2 px-4 bg-orange font-montserrat text-white rounded-full hover:bg-brown hover:text-black"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
