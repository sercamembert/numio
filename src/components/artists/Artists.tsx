import React from "react";
import ArtistBlock from "./ArtistBlock";
import { client } from "@/lib/contentful";
import Link from "next/link";
import EventScroll from "../events/EventScroll";

interface Props {}

const Artists = async () => {
  const artist1 = await client.getEntry("4CwC4N50vgnyJi7jJchFGn");
  const artist2 = await client.getEntry("UxQguEdb1kgujQ3KOdYV6");
  const artist3 = await client.getEntry("3dtj9tguiUk97yo612aphK");
  return (
    <div className=" flex flex-col section-space mb-[57px] md:mb-[74px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <h4 className="font-semibold heading text-center mb-4 md:mb-6 2xl:mb-10 ultra:mb-14">
        Artyści
      </h4>
      <EventScroll>
        <div
          className=" w-full grid grid-cols-3 min-w-[730px] md:min-w-full
        gap-y-[40px] gap-x-[45px] md:gap-x-[62px] lg:gap-x-[81px] xl:gap-x-[101px] 2xl:gap-x-[106px] desktop:gap-x-[124px] ultra:gap-x-[185px]"
        >
          <ArtistBlock
            // @ts-expect-error
            path={"https:" + artist1.fields.image?.fields.file?.url}
            name={artist1.fields.name}
            role={artist1.fields.role}
            role2={artist1.fields.role2}
          />
          <ArtistBlock
            // @ts-expect-error
            path={"https:" + artist2.fields.image?.fields.file?.url}
            name={artist2.fields.name}
            role={artist2.fields.role}
            role2={artist2.fields.role2}
          />
          <ArtistBlock
            // @ts-expect-error
            path={"https:" + artist3.fields.image?.fields.file?.url}
            name={artist3.fields.name}
            role={artist3.fields.role}
            role2={artist3.fields.role2}
          />
        </div>
      </EventScroll>
      <Link
        href="/artysci"
        className="mx-auto mt-[35px] md:mt-[30px] 2xl:mt-[40px]  ultra:mt-[60px]"
      >
        <button
          className="flex items-center justify-center bg-primary text-white bg-opacity-75 uppercase font-semibold text-[10px] md:text-[8px] lg:text-[9px] xl:text-[10px] 2xl:text-[12px] desktop:text-[13px] ultra:text-[19px]
          rounded-[12px] md:rounded-[8px] lg:rounded-[10px] desktop:rounded-[17px] ultra:rounded-[26px]
          h-[40px] md:h-[30px] lg:h-[33px] xl:h-[41px] 2xl:h-[46px] desktop:h-[55px] ultra:h-[82px]
          min-w-[130px] md:min-w-[80px] lg:min-w-[110px] xl:min-w-[135px] 2xl:min-w-[153px] desktop:min-w-[182px] ultra:min-w-[271px]
          px-3 xl:px-6 
          navbar-button-animation"
        >
          <p>Zobacz wszystkich</p>
        </button>
      </Link>
    </div>
  );
};

export default Artists;
