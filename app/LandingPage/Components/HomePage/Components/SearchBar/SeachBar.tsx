interface SearchBarProps {
  className?: string;
  placeHolder?: string;
}

export const SearchBar = ({ className, placeHolder }: SearchBarProps) => {
  return (
    <div>
      <input type="text" placeholder={placeHolder} className={className} />
    </div>
  );
};
