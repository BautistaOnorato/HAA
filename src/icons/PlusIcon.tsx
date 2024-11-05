interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const PlusIcon = ({ className, size, color }: Props) => {
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
        d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"
      />
    </svg>
  );
};

export default PlusIcon;
