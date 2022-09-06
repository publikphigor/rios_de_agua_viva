import ReactPlayer from "react-player";
import galleryVideo from "../assets/Iglesia_Rios_De_Agua_Viva.mp4";

export default function Gallery() {
  return (
    <div className="w-full mx-auto md:w-4/5 px-[24px] md:px-0 py-[24px]">
      <h1 className="pb-2 mb-4 text-5xl font-normal border-b-4 md:font-bold text-primary border-primary font-dancing-script">
        Galeria
      </h1>
      <div className="w-full">
        <ReactPlayer url={galleryVideo} width="100%" height="auto" controls="true" />
      </div>
    </div>
  );
}
