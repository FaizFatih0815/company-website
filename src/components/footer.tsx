"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <section id="CONTACT" className="grid grid-rows-[auto_1fr] h-fit">
      <div className="grid grid-cols-1 py-8 bg-grey place-items-center px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          <div className="font-montserrat font-normal text-lg sm:text-xl text-center sm:text-left">
            Follow Our Social Media
          </div>
          <a
            href="https://www.facebook.com/mustikaratuIND/"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square w-[50px] flex flex-col items-center justify-center border-white bg-deep-grey text-white rounded-full hover:bg-black transition-all duration-300"
          >
            <Image src="/facebook.svg" alt="Facebook" width={40} height={40} />
          </a>
          <a
            href="https://www.instagram.com/mustikaratuind/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square w-[50px] flex flex-col items-center justify-center border-white bg-deep-grey text-white rounded-full hover:bg-black transition-all duration-300"
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCCaNz6uvNbxRikriIDu3R8w"
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square w-[50px] flex flex-col items-center justify-center border-white bg-deep-grey text-white rounded-full hover:bg-black transition-all duration-300"
          >
            <Image src="/youtube.svg" alt="Youtube" width={40} height={40} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 text-white bg-black py-10 px-6 sm:px-12 md:px-20 gap-8 md:gap-12">
        <div className="flex flex-col gap-3 text-center md:text-left">
          <div className="font-bold text-lg mb-2">SHOP ONLINE</div>
          <div>
            Customer care hotline <br /> +6221-8711291
          </div>
          <div>
            <button className="border p-1 px-3 rounded hover:bg-white hover:text-black transition-all duration-300">
              Live Chat
            </button>
            <p>Mon-Fri : 9 am - 5 pm</p>
          </div>
          <div className="pt-2 text-sm text-gray-400">
            Terms & Conditions <br />
            2025 PT Mustika Ratu, Tbk.
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="font-bold text-lg mb-2">Info</div>
          <div>Our Brands</div>
          <div>News</div>
          <div>Join Us</div>
          <div>Contact Us</div>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <div className="font-bold text-lg mb-2">Company</div>
          <div>Our Story</div>
          <div>Leadership</div>
          <div>Awards</div>
          <div>Milestones</div>
          <div>Commitments</div>
          <div>Puteri Indonesia</div>
          <div>Investor Relations</div>
        </div>
      </div>
    </section>
  );
}
