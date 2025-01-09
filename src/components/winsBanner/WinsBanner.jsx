import React from 'react';
import { WinCard } from './WinCard';
import silverTrophy from '../../media/icons/silver-cup.png';
import goldTrophy from '../../media/icons/gold-cup.png';
import {useTranslation} from "react-i18next";

export const WinsBanner = () => {
    const { t, i18n } = useTranslation();

    const wins = [
        {
            place: t('winsBanner.1.place'),
            year: t('winsBanner.1.year'),
            type: t('winsBanner.1.type'),
            name: t('winsBanner.1.name'),
            role: t('winsBanner.1.role'),
            logo: goldTrophy,
        },
        {
            place: t('winsBanner.2.place'),
            year: t('winsBanner.2.year'),
            type: t('winsBanner.2.type'),
            name: t('winsBanner.2.name'),
            role: t('winsBanner.2.role'),
            logo: goldTrophy,
        },
        {
            place: t('winsBanner.3.place'),
            year: t('winsBanner.3.year'),
            type: t('winsBanner.3.type'),
            name: t('winsBanner.3.name'),
            role: t('winsBanner.3.role'),
            logo: goldTrophy,
        },{
            place: t('winsBanner.4.place'),
            year: t('winsBanner.4.year'),
            type: t('winsBanner.4.type'),
            name: t('winsBanner.4.name'),
            role: t('winsBanner.4.role'),
            logo: goldTrophy,
        }
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
                />
            ))}
        </div>
    );
};
