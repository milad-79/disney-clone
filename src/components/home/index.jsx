import Silder from '../slider';
import MainNav from '../navbar/main-nav';
import './styles.css'
import Companis from '../companis';
import Movie from '../movies';
import React from 'react';

function Home() {
    return ( 
        <div style={{
            backgroundImage: `url('/images/home-background.png')`,
            backgroundSize: 'cover'
          }}>
            <MainNav/>
            <Silder/>
            <Companis/>
            <Movie/>
        </div>
     );
}

export default React.memo(Home);