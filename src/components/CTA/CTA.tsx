import Link from "next/link";
export type CTAProps = {
  label: string;
  onClick: () => void;
  href: string;
};

export const CTA = ({ label, onClick, href }: CTAProps) => {
  return (
    <Link
      href={href}
      className="btn btn-block bg-secondary text-primary hover:text-secondary hover:bg-primary"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};
