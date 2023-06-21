import React from "react";
import Image from "next/image";

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-10 relative rounded-lg bg-white bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <div className="rounded-full overflow-hidden w-24 h-24 mx-auto">
        <Image
          alt={author.name}
          unoptimized
          height={100}
          width={100}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          src={author.photo.url}
          className="mx-auto"
        />
      </div>
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;
