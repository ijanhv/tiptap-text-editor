import React, { useState } from "react";

const ResizableImageComponent = ({ node, updateAttributes }: any) => {
  const [width, setWidth] = useState(node.attrs.width || "auto");
  const [height, setHeight] = useState(node.attrs.height || "auto");

  const handleResize = (newWidth: string, newHeight: string) => {
    setWidth(newWidth);
    setHeight(newHeight);
    updateAttributes({ width: newWidth, height: newHeight });
  };

  return (
    <div
      contentEditable={false}
      style={{ position: "relative", display: "inline-block" }}
    >
      <img
        src={node.attrs.src}
        width={width}
        height={height}
        style={{ maxWidth: "100%", display: "block" }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          cursor: "nwse-resize",
          background: "#ccc",
          width: 10,
          height: 10,
        }}
        onMouseDown={(event) => {
          const startX = event.clientX;
          const startWidth = parseInt(width, 10) || 100;

          const onMouseMove = (moveEvent: MouseEvent) => {
            const deltaX = moveEvent.clientX - startX;
            const newWidth = `${startWidth + deltaX}px`;
            handleResize(newWidth, "auto");
          };

          const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
          };

          document.addEventListener("mousemove", onMouseMove);
          document.addEventListener("mouseup", onMouseUp);
        }}
      />
    </div>
  );
};

export default ResizableImageComponent;
