import { HowItWorksItem } from "./HowItWorksItem";
import Image from "next/image";
import AccountSvg from "../../../public/Account.svg";
import BasketSvg from "../../../public/Basket.svg";
import CharitySvg from "../../../public/Charity.svg";
import RewardsSvg from "../../../public/Rewards.svg";

export const HowItWorks = () => {
  return (
    <article className="flex flex-col w-full flex-nowrap md:flex-row md:flex-wrap ">
      <h2 className={"py-10 text-center m-0 w-full text-2xl font-semibold"}>
        How it Works
      </h2>
      <div className="px-[1.4rem] w-full grid gap-[14px] grid-cols-1 md:grid-cols-2">
        <HowItWorksItem
          icon={
            <Image src={AccountSvg} height={50} width={50} alt="Account icon" />
          }
          title="Create a free account"
          body="Sign up for a rewards account and enter your card details"
        />
        <HowItWorksItem
          title="Shop local using your card"
          body="Shop or dine at participating stores and restaurants"
          icon={
            <Image src={BasketSvg} height={50} width={50} alt="Basket icon" />
          }
        />
        <HowItWorksItem
          title="Earn rewards"
          body="Receive cash back and discounts at local merchants"
          icon={
            <Image src={RewardsSvg} height={50} width={50} alt="Rewards icon" />
          }
        />
        <HowItWorksItem
          icon={
            <Image src={CharitySvg} height={50} width={50} alt="Charity icon" />
          }
          title="Give back to charity"
          body="Receive 'Community Cash' to donate to local charities"
        />
      </div>
    </article>
  );
};
