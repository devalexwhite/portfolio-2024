import { ReactElement } from "react";

export enum TVSize {
  sm = "w-32 h-32",
  md = "w-48 h-48",
  lg = "w-58 h-58",
}

export interface TVContainer {
  children: ReactElement;
  size: TVSize;
}

export default function TVContainer({ children, size }: TVContainer) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${size} bg-center bg-contain bg-no-repeat`}
      style={{ backgroundImage: "url('/tvshape.svg')" }}
    >
      {children}
    </div>
  );
}
