import { ReactElement } from "react";

export interface TVContainer {
  children: ReactElement;
}

export default function TVContainer({ children }: TVContainer) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full h-full bg-center bg-contain bg-no-repeat`}
      style={{ backgroundImage: "url('/tvshape.svg')" }}
    >
      {children}
    </div>
  );
}
