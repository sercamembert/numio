import React from "react";
import EventBlock from "@/components/events/EventBlock";
import EventScroll from "./EventScroll";
import getEvents from "@/lib/contentful";

const Events = async () => {
  const events = await getEvents();

  return (
    <div className="section-space flex flex-col relative mb-[200px]">
      <h2 className="font-semibold heading text-center leading-tight md:leading-none mb-4 md:mb-0">
        Nadchodzące Wydarzenia
      </h2>
      <p className="hidden md:block paragraph font-extralight opacity-90 text-center mb-6 2xl:mb-10 ultra:mb-14">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec <br />
        consectetur interdum massa ac vehicula.
      </p>
      <EventScroll>
        <div
          className="w-full grid grid-cols-3 min-w-[684px] md:min-w-full
        gap-x-[31px] md:gap-x-[27px] lg:gap-x-[35px] xl:gap-x-[44px] desktop:gap-x-[54px] ultra:gap-x-[81px]
        "
        >
          {events.map((event, key) => (
            <EventBlock
              key={key}
              // @ts-expect-error
              path={"https:" + event.fields.image?.fields.file?.url}
              location={event.fields.location}
              subLocation={event.fields.sublocation}
              entryId={event.fields.entryId}
              data={event.fields.data}
            />
          ))}
        </div>
        <p
          className="hidden md:block text-center text-[11px] md:text-[10px] lg:text-[12px] xl:text-[15.49px] desktop:text-[19px] ultra:text-[28.31px]
          mt-[25px] lg:mt-[30px] xl:mt-[36px] desktop:mt-[45px] ultra:mt-[60px] opacity-60"
        >
          Kliknij w wybrane wydarzenie aby zobaczyć więcej szczegółów
        </p>
      </EventScroll>
    </div>
  );
};

export default Events;
