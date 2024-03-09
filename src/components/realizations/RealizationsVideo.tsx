import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import thumbnailImg from "../../../public/images/realizations/video.png";
import ReactPlayer from "react-player";
const RealizationsVideo = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full h-full"></DialogTrigger>
      <DialogContent>
        <ReactPlayer
          url="/images/realizations/video.mp4"
          controls
          playing
          className="w-full h-full relative"
          width="100%"
          height="100%"
        />
      </DialogContent>
    </Dialog>
  );
};

export default RealizationsVideo;
