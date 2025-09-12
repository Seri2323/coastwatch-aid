import { useState } from "react";
import UserTypeSelector from "@/components/UserTypeSelector";
import CitizenDashboard from "@/components/citizen/CitizenDashboard";
import ReportEmergency from "@/components/citizen/ReportEmergency";
import CommunityUpdates from "@/components/citizen/CommunityUpdates";
import ThreatHeatmap from "@/components/citizen/ThreatHeatmap";
import GovernmentDashboard from "@/components/government/GovernmentDashboard";
import ResourceAllocation from "@/components/government/ResourceAllocation";
import SendAlert from "@/components/government/SendAlert";

type UserType = 'citizen' | 'government' | null;
type CurrentPage = 'dashboard' | 'report' | 'community' | 'heatmap' | 'government-heatmap' | 'resource-allocation' | 'send-alert' | 'verification';

const Index = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [currentPage, setCurrentPage] = useState<CurrentPage>('dashboard');

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setCurrentPage('dashboard');
  };

  const handleNavigation = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    if (currentPage !== 'dashboard') {
      setCurrentPage('dashboard');
    } else {
      setUserType(null);
    }
  };

  if (!userType) {
    return <UserTypeSelector onSelectUserType={handleUserTypeSelect} />;
  }

  if (userType === 'citizen') {
    switch (currentPage) {
      case 'report':
        return <ReportEmergency onBack={handleBack} />;
      case 'community':
        return <CommunityUpdates onBack={handleBack} />;
      case 'heatmap':
        return <ThreatHeatmap onBack={handleBack} />;
      default:
        return <CitizenDashboard onNavigate={handleNavigation} />;
    }
  }

  if (userType === 'government') {
    switch (currentPage) {
      case 'resource-allocation':
        return <ResourceAllocation onBack={handleBack} />;
      case 'send-alert':
        return <SendAlert onBack={handleBack} />;
      default:
        return <GovernmentDashboard onNavigate={handleNavigation} />;
    }
  }

  return null;
};

export default Index;
