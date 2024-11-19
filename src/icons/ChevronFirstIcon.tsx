interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const ChevronFirstIcon = ({ size, color, className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      className={className || ""}
    >
      <path fill={color || "currentColor"} d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6l6 6zM6 6h2v12H6z" />
    </svg>
  );
};

export default ChevronFirstIcon;
