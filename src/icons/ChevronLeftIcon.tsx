interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronLeftIcon = ({ size, color, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path fill={color || "currentColor"} d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z" />
    </svg>
  );
};

export default ChevronLeftIcon;
