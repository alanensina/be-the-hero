import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import herosImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />

                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit" className="button">Entrar</button>
                    <Link className= "back-link" to="/register"><FiLogIn size={16} color="#E02041" />Não tenho cadastro</Link>
                </form>
            </section>
            <img src={herosImg} alt="Heros" />
        </div>
    );
}