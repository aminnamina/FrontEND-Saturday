import { memo } from "react";

interface Props {
  onPress: () => void;
  caption: string;
}

// memo не даст перерисовываться если функция стабильна (useCallback в родителе)
export const Clicker = memo(function Clicker({ onPress, caption }: Props) {
  console.log(`Clicker "${caption}" render`);
  return (
    <button
      onClick={onPress}
      style={{
        padding: "10px 20px",
        background: "transparent",
        border: "2px solid #e879f9",
        color: "#e879f9",
        borderRadius: 8,
        cursor: "pointer",
      }}
    >
      {caption}
    </button>
  );
});