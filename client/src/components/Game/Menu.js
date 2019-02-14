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
                    <button >Favourites</button> :
                    <button onClick={() => showFavorites()}>Favourites</button>
                }
            </span>
            <span>
                {visibility.favorites ?
                    <button onClick={() => showHome()}>Trending</button> :
                    <button style={color}>Trending</button>
                }
            </span>
        </nav>
    )
}