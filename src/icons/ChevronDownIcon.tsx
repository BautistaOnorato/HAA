interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronDownIcon = ({ size, color, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path
        fill={color || "currentColor"}
        d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
      />
    </svg>
  );
};

export default ChevronDownIcon;
