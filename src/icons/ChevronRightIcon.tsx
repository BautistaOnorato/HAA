interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronRightIcon = ({ size, color, className }: Props) => {
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
        d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
      />
    </svg>
  );
};

export default ChevronRightIcon;
