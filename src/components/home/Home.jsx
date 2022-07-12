import Slider from '../slider/Slider';
import MainNav from '../navbar/MainNav';
import './styles.css'
import Companis from '../companis/Companis';
import React from 'react';
import MoviesBody from '../movies/MoviesBody';

function Home() {
    return ( 
        <div style={{
            backgroundImage: `url('/images/home-background.png')`,
            backgroundSize: 'cover'
          }}>
            <MainNav/>
            <Slider/>
            <Companis/>
            <MoviesBody/>
        </div>
     );
}

export default React.memo(Home);