export type CTAProps = {
  label: string;
  onClick: () => void;
};

export const CTA = ({ label, onClick }: CTAProps) => {
  return (
    <button
      className="btn btn-block bg-secondary text-primary hover:text-secondary hover:bg-primary"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
