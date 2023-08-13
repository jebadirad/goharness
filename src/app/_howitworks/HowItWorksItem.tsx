import { ReactElement } from "react";

type HowItWorksItemProps = {
  icon: ReactElement;
  title: string;
  body: string;
};

export const HowItWorksItem = ({ body, icon, title }: HowItWorksItemProps) => {
  return (
    <div className="card card-side bg-howItWorksBackground px-[1.1rem]">
      <figure className="pr-0 min-w-[3rem]">{icon}</figure>
      <div className="pl-6 py-[0.6rem]">
        <div className="prose">
          <p className="pt-[1.2rem] m-0 pb-[.6rem] text-primary font-semibold">
            {title}
          </p>
          <p className="m-0 pb-[1.1rem] text-black">{body}</p>
        </div>
      </div>
    </div>
  );
};
