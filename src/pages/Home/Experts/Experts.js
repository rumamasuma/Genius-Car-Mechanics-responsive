import React from 'react';
import machanic1 from '../../../images/experts/machanic-1.jpg'
import machanic2 from '../../../images/experts/machanic-2.jpg'
import machanic3 from '../../../images/experts/machanic-3.jpg'
import machanic4 from '../../../images/experts/machanic-4.jpg'
import machanic5 from '../../../images/experts/machanic-5.jpg'
import Expert from '../Expert/Expert';

// fake data
const experts= [
    {
        id:101,
        img : machanic1,
        name : 'Andalib',
        expertize :'Engine Expert'
    },
    {
        id:102,
        img : machanic2,
        name : 'Abir Islam',
        expertize :'Settings Expert'
    },
    {
        id:103,
        img : machanic3,
        name : 'Minhajul',
        expertize :'Polish Expert'
    },
    {
        id:104,
        img : machanic4,
        name : 'Tarek',
        expertize :'Engine Expert'
    },
    {
        id:105,
        img : machanic5,
        name : 'Arif',
        expertize :'Color Expert'
    },
]
const Experts = () => {
    return (
        <div>
            <h2  className="text-primary mt-5">Our Experts</h2>
            <div className="row">
            {
            experts.map(expert =><Expert
            key={expert.id}
            expert={expert}
            ></Expert>)
            }
            </div>
        </div>
    );
};

export default Experts;