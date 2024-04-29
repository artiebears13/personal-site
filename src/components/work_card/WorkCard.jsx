import React from 'react';

const WorkCard = ({ companyLogo, yearsWorked, techStack, description, companySite }) => {
    return (
        <div className="job-card">
            <a href={companySite} target="_blank" rel="noopener noreferrer">
            <img src={companyLogo} alt="Company Logo" className="company-logo" />
            </a>
            <div className="job-details">
                <div className="years-worked">{yearsWorked}</div>
                <div className="tech-stack"><code>{techStack}</code></div>
                <div className="description">{description}</div>
            </div>
        </div>
    );
};

export default WorkCard;
