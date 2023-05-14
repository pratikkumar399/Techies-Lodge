import React from 'react';
import Card from "../components/Hackathon/Card"
// import hackathons from '../components/Hackathon/Hackathondata';
const hackathons = [
    {
        id: 1,
        name: 'Hack the Future',
        place: 'San Francisco, CA',
        value: 5000,
        image: 'https://picsum.photos/id/1/400/300',
    },
    {
        id: 2,
        name: 'CodeFest',
        place: 'New York, NY',
        value: 7500,
        image: 'https://picsum.photos/id/2/400/300',
    },
    {
        id: 3,
        name: 'HackathonX',
        place: 'Seattle, WA',
        value: 10000,
        image: 'https://picsum.photos/id/3/400/300',
    },
    {
        id: 4,
        name: 'Hacker Paradise',
        place: 'Miami, FL',
        value: 2500,
        image: 'https://picsum.photos/id/4/400/300',
    },
];

const Hackathons = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hackathons.map((hackathon) => (
                <Card key={hackathon.id} {...hackathon} />
            ))}
        </div>
    );
};

export default Hackathons;




