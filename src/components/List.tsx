import { FC } from "react";
import { ListItem } from "./ListItem";

export type Character = {
  name: string;
  // TODO: add others properties
};
export const List: FC<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div className="w-60 mx-auto mt-4">
      <h2 className="text-xl">Lista personajes </h2>
      {/* TODO: Add here list call */}
    </div>
  );
};
