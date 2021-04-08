import React from './Hero';

export default function Hero({ heroName }) {
    if (heroName === 'joker') {
        throw new Error('Not a hero!');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}