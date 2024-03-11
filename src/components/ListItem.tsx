import Image from "next/image";
import { FC } from "react";

type Props = {
  name: string;
  image: string;
  gender: string;
};

export const ListItem: FC<Props> = ({ name, image, gender }) => {
  return (
    <div className="rounded-3xl px-6 py-4 flex gap-4 w-full">
      <Image src={image} alt="character-image" />
      <div className="flex flex-col justify-center gap-2">
        <h3>
          <b>Nombre:</b> {name}
        </h3>
        <h3>
          <b>Genero:</b> {gender}
        </h3>
      </div>
    </div>
  );
};
