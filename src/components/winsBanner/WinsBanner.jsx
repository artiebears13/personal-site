import {WinCard} from "./WinCard";

export const WinsBanner = () => {
    const wins = [
        {
            'place':'1st',
            'year': '2023',
            'type': 'regional stage hackathon',
            'name': 'Digital Breakthrough: season AI',
            'role': 'frontend'
        },
        {
            'place':'2st',
            'year': '2023',
            'type': 'international stage hackathon',
            'name': 'Digital Breakthrough: season AI',
            'role': 'frontend'
        },
        {
            'place':'2st',
            'year': '2024',
            'type': 'regional stage hackathon',
            'name': 'Digital Breakthrough: season AI',
            'role': 'frontend'
        }
    ]
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
                />
            ))}
        </div>
    )
}