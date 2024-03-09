import Link from "next/link";
import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex flex-col w-full md:w-[66%]
    mt-7 lg:mt-9 xl:mt-11 2xl:mt-12 desktop:mt-16 ultra:mt-24"
    >
      <label htmlFor="email" className="contact-paragraph mb-1 lg:mb-2">
        Adres Email
      </label>
      <input
        type="email"
        name="email"
        className="py-[7px] md:py-[5px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] desktop:py-[12px] ultra:py-[16px]
        pl-[9px] md:pl-[6px] lg:pl-[8px] xl:pl-[8px] 2xl:pl-[10px] desktop:pl-[15px] ultra:pl-[21px]
        rounded-md md:rounded-sm lg:rounded-md desktop:rounded-[9px] ultra:rounded-xl
        contact-paragraph text-primary
        "
        placeholder="Wpisz tutaj swój adres email"
      />
      <label
        htmlFor="wiadomosc"
        className="contact-paragraph mb-1 lg:mb-2 mt-4 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-5 desktop:mt-6 ultra:mt-9"
      >
        Wiadomość
      </label>
      <textarea
        name="wiadomosc"
        className="py-[7px] md:py-[5px] lg:py-[7px] xl:py-[8px] 2xl:py-[9px] desktop:py-[12px] ultra:py-[16px]
        pl-[9px] md:pl-[6px] lg:pl-[8px] xl:pl-[8px] 2xl:pl-[10px] desktop:pl-[15px] ultra:pl-[21px]
        rounded-md md:rounded-sm lg:rounded-md desktop:rounded-[9px] ultra:rounded-xl
        contact-paragraph text-primary
        min-h-[137px] md:min-h-[100px] lg:min-h-[132px] xl:min-h-[166px] 2xl:min-h-[186px] desktop:min-h-[250px] ultra:min-h-[332px]
        "
        placeholder="Wpisz tutaj swój adres email"
      />
      <div>
        <button
          className="bg-white text-primary uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] desktop:text-[13px] ultra:text-[19px]
          rounded-[8px] lg:rounded-[10px] ultra:rounded-[26px]
          h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[50px] ultra:h-[82px]
          min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
          px-3 xl:px-6 mt-[29px] md:mt-[28px] 2xl:mt-[27px] ultra:mt-[55px]
          navbar-button-animation"
        >
          <Link
            href="/realizacje"
            className="w-full h-full flex items-center justify-center"
          >
            Wyślij Wiadomość
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
