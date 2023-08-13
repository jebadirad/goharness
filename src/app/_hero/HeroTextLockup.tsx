export const HeroTextLockup = () => {
  return (
    <article
      className="prose prose-xl 
      prose-h2:text-2xl 
      prose-p:leading-[1.7rem] 
      prose-h2:pb-[1.1rem] 
      prose-h2:m-0 
      prose-h2:text-secondary
      prose-p:text-slate-800
      prose-strong:text-black
      md:prose-lg 
      md:prose-h2:text-3xl 
      md:max-w-[30rem] 

      lg:prose-2xl 
      lg:prose-h2:text-5xl 
      lg:max-w-[30rem] 

      
      max-w-[15rem]
      "
    >
      <h2 className="text-center">A new kind of rewards program</h2>
      <p className="flex flex-col justify-center items-center">
        <span className="block text-center md:max-w-[18rem]">
          when you shop local, <strong>earn 5% cash back</strong>
        </span>
        <span className="block text-center">
          <strong>+</strong>
        </span>
        <span className="block text-center md:max-w-[18rem]">
          we&apos;ll <strong>donate 2%</strong> to a charity of your choice
        </span>
      </p>
    </article>
  );
};
