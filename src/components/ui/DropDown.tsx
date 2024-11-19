import { useEffect, useRef, useState } from "react";

type DropDownProps<T> = {
  valueList: { value: T; label: string }[]; // 値のリスト
  onChange: (value: T) => void; // 選択に変化があった時
};

const DropDown = <T,>({ valueList, onChange }: DropDownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState("選択してください");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (containerRef.current?.contains(e.target as Node)) return;
      setIsOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = (item: { value: T; label: string }) => {
    setSelectedLabel(item.label);
    onChange(item.value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown" ref={containerRef}>
      <button onClick={toggleDropdown} className="dropdown__button">
        <span>{selectedLabel}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <ul className="dropdown__menu">
          {valueList.map((item) => (
            <li
              key={item.value as unknown as string}
              className="dropdown__item"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
