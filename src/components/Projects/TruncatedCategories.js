import React, { useState, useEffect, useRef } from "react";

const TruncatedCategories = ({ categories }) => {
  const [truncated, setTruncated] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    const text = categories.join(", ");
    if (text.length > 30) {
      setTruncated(text.substring(0, 30) + "...");
    } else {
      setTruncated(text);
    }
  }, [categories]);

  return (
    <div className="truncated-categories" ref={containerRef}>
      <span className="projects-item-description__category">{truncated}</span>
    </div>
  );
};

export default TruncatedCategories;
