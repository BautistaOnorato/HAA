interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronLastIcon = ({ size, color, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path fill={color || "currentColor"} d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6l-6-6zM16 6h2v12h-2z" />
    </svg>
  );
};

export default ChevronLastIcon;
