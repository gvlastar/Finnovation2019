import React from 'react';
import image from './trump.jpg'
import { Link } from 'react-router-dom'

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
        <div style={{ 
            color: 'white',
            fontSize: 72,
            fontWeight: 900,
            marginBottom: 100,
            padding: 18,
        }}>
                TRUMPENOMICS
            </div>
            <Link to="/tweets">
                <div style={{ 
                    color: 'white',
                    padding: 24,
                    fontWeight: 900,
                    fontSize: 48,
                    textDecoration: 'none',
                }}>
                START
            </div>
        </Link>
        </div>
    }
}

export default FrontPage
