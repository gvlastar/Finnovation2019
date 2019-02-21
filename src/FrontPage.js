import React from 'react';
import image from './trump.jpg'
import { Link } from 'react-router-dom'
import './App.css';

class FrontPage extends React.Component {
    render() {
        return <div style={{
            width: '100%',
            height: 'calc(100vh - 40px)',
            backgroundImage: `url(${ image })`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            paddingTop: 40
        }}>
        <div id="trump" style={{
        }}>
                TRUMPONOMICS
            </div>
            <Link to="/tweets">
                <div id="start" style={{
                }}>
                START
            </div>
        </Link>
        </div>
    }
}

export default FrontPage
