import React from 'react';
export const Menu = ({ setVisibility, visibility }) => {

    const color = { color: '#BDBDBD' };

    const showFavorites = () => {
        console.log(visibility);
        setVisibility({
            highlight: false,
            booklist: false,
            favorites: true

        });

    }

    const showHome = () => {
        setVisibility({
            highlight: false,
            booklist: true,
            favorites: false
        });

    }

    return (
        <nav aria-label="App navigation" id="app-nav">
            <span>
                {visibility.favorites ?
                    <button style={color}>Favourites</button> :
                    <button onClick={() => showFavorites()}>Favourites</button>
                }
            </span>
            <span>
                {visibility.favorites ?
                    <button onClick={() => showHome()}>Top 10</button> :
                    <button style={color}>Top 10</button>
                }
            </span>
        </nav>
    )
}