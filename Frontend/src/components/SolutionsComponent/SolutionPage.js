import React from "react";
import { BlogAutomationData, OnsiteSEOData, AutoSocialPostingData, IntegrationData, TrafficGrowthData, UnifiedAnalyticsData } from "./SolutionsData";
import SolutionSecrtion from "./SolutionSecrtion";

const SolutionPage = () => {
    const sections = [
        BlogAutomationData,
        OnsiteSEOData,
        AutoSocialPostingData,
        IntegrationData,
        TrafficGrowthData,
        UnifiedAnalyticsData
      ];
  return (
    <div className="container">
      {sections.map((data, index) => (
        <SolutionSecrtion
          key={index} 
          data={data} 
          flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
        />
      ))}
    </div>
  );
};

export default SolutionPage;
