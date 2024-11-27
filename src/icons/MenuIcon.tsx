interface Props {
  className?: string;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const MenuIcon = ({ className, size, color, onClick }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 64}
      height={size || 64}
      viewBox="0 0 24 24"
      className={className || ""}
      onClick={onClick}
    >
      <path
        fill={color || "currentColor"}
        d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
      />
    </svg>
  );
};

export default MenuIcon;
