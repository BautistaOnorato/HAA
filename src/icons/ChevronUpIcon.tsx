interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronUpIcon = ({ className, size, color }: Props) => {
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
        d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
      />
    </svg>
  );
};

export default ChevronUpIcon;
