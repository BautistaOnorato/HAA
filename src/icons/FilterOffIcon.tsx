interface Props {
  className?: string;
  size?: number;
  color?: string;
}

const FilterOffIcon = ({ size, color, className }: Props) => {
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
        d="M2.39 1.73L1.11 3l8.39 8.37l.47.63H10v5.87c-.04.29.06.6.29.83l2.01 2.01c.39.39 1.02.39 1.41 0c.23-.21.33-.53.29-.83v-3.99l6.84 6.84l1.27-1.27L14 13.35L9.41 8.76L4.15 3.5zM6.21 3l8.33 8.34l5.25-6.72a1 1 0 0 0-.17-1.4c-.19-.14-.4-.22-.62-.22z"
      />
    </svg>
  );
};

export default FilterOffIcon;
