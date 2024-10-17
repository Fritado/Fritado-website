import React, { useState, useEffect } from "react";
import AuditItem from "./PageSpeedAuditGrid";
import AuditView from "./AuditView";

const PageSpeedCardDesktop = ({desktopData}) => {
  const [filter, setFilter] = useState("ALL");

  const filterAudits = (audit) => {
    if (filter === "ALL") return true;

    const metricSavingsExists =
      audit.metricSavings && audit.metricSavings[filter];
    if (
      filter === "FCP" &&
      ((audit.details && audit.details.type === "opportunity") ||
        metricSavingsExists)
    )
      return true;
    if (
      filter === "LCP" &&
      ((audit.details && audit.details.type === "opportunity") ||
        metricSavingsExists)
    )
      return true;
    if (
      filter === "TBT" &&
      ((audit.details && audit.details.type === "table") || metricSavingsExists)
    )
      return true;
    if (
      filter === "CLS" &&
      ((audit.details && audit.details.type === "table") || metricSavingsExists)
    )
      return true;

    return false;
  };
  const groupAuditsByCategory = (audits) => {
    const grouped = {
      Passed: [], // Category for passed audits
      Others: {}, // Other categories
    };

    for (const auditId in audits) {
      const audit = audits[auditId];

      if (audit.score === 1) {
        grouped.Passed.push(audit);
      } else {
        const category = audit.group || "GENERAL";
        if (!grouped.Others[category]) {
          grouped.Others[category] = [];
        }
        grouped.Others[category].push(audit);
      }
    }

    return grouped;
  };
  return (
    <div className="container px-3 bg-white border">
      {desktopData ? <AuditView  pageSpeedData={desktopData} /> : ""}

      <div className="filter-tab flex my-2 gap-2 justify-content-end p-3">
        <p>Show audits relevant to: </p>
        {["ALL", "FCP", "LCP", "TBT", "CLS"].map((f) => (
          <p
            key={f}
            onClick={() => setFilter(f)}
            className={`tab ${filter === f ? "active" : "inactive"}`}
            style={{
              cursor: "pointer",
              backgroundColor: filter === f ? "blue" : "transparent",
              color: filter === f ? "white" : "black",
            }}
          >
            {f}
          </p>
        ))}
      </div>

      <div className="">
        {desktopData ? (
          <>
            {/* Display Passed Audits */}
            {groupAuditsByCategory(desktopData.lighthouseResult.audits).Passed
              .length > 0 && (
              <div>
                <h4 className="pb-3 ms-2 border-bottom fw-bold">PASSED AUDITS</h4>
                {groupAuditsByCategory(desktopData.lighthouseResult.audits)
                  .Passed.filter(filterAudits)
                  .map((audit) => (
                    <div key={audit.id} className="audit-item audit-passed">
                      <AuditItem audit={audit} />
                    </div>
                  ))}
              </div>
            )}

            {/* Display other grouped audits */}
            {Object.entries(
              groupAuditsByCategory(desktopData.lighthouseResult.audits).Others
            ).map(([category, audits]) => (
              <div key={category}>
                <h4 className="pb-3 ms-2 border-bottom fw-bold">{category}</h4>
                {audits.filter(filterAudits).map((audit) => (
                  <div
                    key={audit.id}
                    className={`audit-item ${
                      audit.score === 0 ? "audit-failed" : ""
                    }`}
                  >
                    <AuditItem audit={audit} />
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default PageSpeedCardDesktop;
