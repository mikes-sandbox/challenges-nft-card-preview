import React from 'react';
import './nft-preview-card.component.scss';

import mainImg from '../../assets/image-equilibrium.jpg'
import { ReactComponent as EthereumIcon } from '../../assets/icon-ethereum.svg';
import { ReactComponent as ClockIcon } from '../../assets/icon-clock.svg';
import avatarImg from '../../assets/image-avatar.png';


export const NftPreviewCard = () => (
    <figure className="card">

        <div className="img-container">
            <img src={mainImg} alt="Main nft preview image" className="img" />
        </div>

        <div className="text-container">
            <a href="#" className="link" >
                <h3 className="title">
                    Equilibrium #3429
                </h3>
            </a>

            <p className="text">
                Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="stats-container">
                <span className="stat">
                    <EthereumIcon className="stat-icon" />
                    <span className="eth-text" alt="Ethereum icon">
                        0.041 ETH
                    </span>
                </span>
                <span className="stat">
                    <ClockIcon className="stat-icon" alt="Clock icon"/>
                    <span>3 days left</span>
                </span>
            </div>

            <div className="footer-container">
                <figure className="author">
                    <img src={avatarImg} alt="User avatar" className="author-img" />
                    <label className="author-text">
                        Creation of <a href="#" className="link">Jules Wyvern</a>
                    </label>
                </figure>

            </div>

        </div>
    </figure>

);

export default NftPreviewCard;