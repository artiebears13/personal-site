import React from 'react';
import { WinCard } from './WinCard';
import silverTrophy from '../../media/icons/silver-cup.png';
import goldTrophy from '../../media/icons/gold-cup.png';

export const WinsBanner = () => {

    const wins = [
        {
            place: '1st',
            year: '2023',
            type: 'regional stage hackathon',
            name: 'Digital Breakthrough: season AI',
            role: 'frontend',
            logo: goldTrophy,
            animation: 'slide-in-left'
        },
        {
            place: '2nd',
            year: '2023',
            type: 'international stage hackathon',
            name: 'Digital Breakthrough: season AI',
            role: 'frontend',
            logo: silverTrophy,
            animation: 'scale-in-center'
        },
        {
            place: '2nd',
            year: '2024',
            type: 'regional stage hackathon',
            name: 'Digital Breakthrough: season AI',
            role: 'frontend',
            logo: silverTrophy,
            animation: 'slide-in-right'
        },
    ];

    return (
        <div className="wins-banner">
            {wins.map((win, index) => (
                <WinCard
                    key={index}
                    place={win.place}
                    year={win.year}
                    type={win.type}
                    name={win.name}
                    role={win.role}
                    logo={win.logo}
                    animation={win.animation}
                />
            ))}
        </div>
    );
};
