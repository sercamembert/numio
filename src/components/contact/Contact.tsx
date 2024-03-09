import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
const Contact = () => {
  return (
    <section className="padding md:flex md:flex-row justify-between mb-[200px]">
      <div className="w-full md:w-[59%]">
        <h5 className="font-semibold heading block md:hidden">Kontakt</h5>
        <h5 className="font-semibold heading hidden md:block">
          Skontaktuj się z Nami
        </h5>
        <p className="opacity-90 paragraph">
          W Numio jesteśmy zawsze gotowi do rozmowy. Czy masz pytanie, chcesz
          omówić potencjalną współpracę, czy po prostu podzielić się swoją pasją
          do sztuki - jesteśmy tutaj, by słuchać i pomagać!
        </p>
        <ContactForm />
      </div>
      <Image
        src="/images/contact/image.png"
        alt="contact-image"
        width={696}
        height={1168}
        className="hidden md:block w-[34%] md:max-h-[350px] lg:max-h-[467px] xl:max-h-[584px] 2xl:max-h-[657px] desktop:max-h-[876px] ultra:max-h-[1168px]"
      />
    </section>
  );
};

export default Contact;
