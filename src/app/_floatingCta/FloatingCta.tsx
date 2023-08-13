import { CTA, CTAProps } from "@/components/CTA/CTA";

type FloatingCtaProps = {} & CTAProps;

export const FloatingCta = ({ label, onClick, href }: FloatingCtaProps) => {
  return (
    <div className="md:hidden fixed bottom-0 bg-white z-10 w-full px-6 py-4">
      <CTA label={label} onClick={onClick} href={href} />
    </div>
  );
};
