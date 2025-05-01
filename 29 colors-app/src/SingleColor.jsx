import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("color copied to clipboard");
      } catch (error) {
        toast.error("color failed  to copy to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      onClick={saveToClipboard}
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};

export default SingleColor;
