import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";


const trimUrl = (url, line, column) => {
  const maxLength = 40; // Set maximum length for the displayed content
  if (url.length > maxLength) {
    const trimmedUrl = url.slice(-maxLength); // Get the last part of the URL
    return `[…${trimmedUrl}:${line}:${column}]`;
  }
  return `${url}:${line}:${column}`;
};

const formatContent = (content) => {
  if (Array.isArray(content)) {
    return content.map((item) => formatContent(item)).join(", ");
  }

  if (typeof content === "object" && content.url) {
    return trimUrl(content.url, content.line, content.column);
  }
  if (typeof content === "string") {
    return parseLinks(content);
  }
 
  return JSON.stringify(content);
};

const parseLinks = (text) => {
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g;
  const parts = [];
  let lastIndex = 0;

  text.replace(regex, (match, p1, p2, offset) => {
    if (offset > lastIndex) {
      parts.push(text.slice(lastIndex, offset));
    }
    parts.push(
      <a
        href={p2}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#06f" }}
      >
        {p1}
      </a>
    );
    lastIndex = offset + match.length;
  });

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};


const PageSpeedAuditGrid = ({ headings, items }) => {
  return (
    <div className="table-container-pg">
      <table className="table-pg table table-hover">
        <thead>
          <tr>
            {headings.map((heading, index) => {
              const hasData = items.some(
                (item) => item[heading.key] !== undefined
              );
              return hasData ? (
                <th className="th-pg" key={index}>
                  {heading.label}
                </th>
              ) : null;
            })}
          </tr>
        </thead>
        <tbody className="">
          {items.map((item, rowIndex) => (
            <tr className="" key={rowIndex}>
              {headings.map((heading, colIndex) => {
                const cellData = item[heading.key];
                
                return cellData !== undefined ? (
                  <td
                    className="cell-content td-pg audit-description"
                    key={colIndex}
                  >
                    {typeof cellData === "object" && cellData.url ? (
                      <div className="tooltip-container">
                        <span className="tooltip-text">
                          {formatContent(cellData)}
                        </span>
                        <span className="tooltip-popup">{cellData.url}</span>
                      </div>
                    ) : (
                      formatContent(cellData )
                    )}
                  </td>
                ) : null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AuditItem = ({ audit }) => {
  const [isGridVisible, setIsGridVisible] = useState(false);
  const toggleGridVisibility = () => {
    setIsGridVisible(!isGridVisible);
  };
  const getBulletClass = (score) => {
    if (score === 1) return "bullet-circle"; // Green
    if (score >= 0.5) return "bullet-square"; // Yellow
    if (score < 0.5) return "bullet-triangle"; // Red
    if (score === null) return "bullet-hollow-circle"; // Informational
  };

  return (
    <div className="audit-item-container my-3">
      <div
        className={`audit-content-container ${isGridVisible ? "border" : ""}`}
      >
        <div className=" audit-header border-bottom d-flex flex-row justify-content-between align-items-center">
          <div className="flex flex-row align-items-center">
            {/* Add bullet icon */}
            <span className={getBulletClass(audit.score)}></span>

            <p className="audit-title m-0 pe-1">{audit.title}</p>
            {audit.displayValue && (
              <p className="audit-display-value m-0">
                {" "}
                -- {audit.displayValue}
              </p>
            )}
          </div>
          <span onClick={toggleGridVisibility} className="toggle-icon">
            {isGridVisible ? <FaAngleUp /> : <FaAngleDown />}
          </span>
        </div>
        {isGridVisible && (
          <div className="m-3">
            <p className="audit-description">
              {formatContent(audit.description)}
            </p>
            {audit.details && audit.details.headings && audit.details.items && (
              <PageSpeedAuditGrid
                headings={audit.details.headings}
                items={audit.details.items}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AuditItem;
