import React, {useState} from 'react';
import './Login.css';

import logo from '../assets/logo.svg';

export default function Login(){
    const [username, setUsername] = useState('');
    
    return (
        <div className="login-container">
            <form>
                <img src={logo} alt="tindev" />
                <input type="text" 
                    placeholder="Digite seu usuário do GitHub" 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="Submit">Enviar</button>
            </form>
        </div>
    );
}