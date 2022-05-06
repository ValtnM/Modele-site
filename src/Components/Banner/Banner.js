import React from 'react'
import BannerPhoto from '../../assets/banner-photo.jpg'
import './Banner.scss'

export default function Banner() {
  return (
    <div className='banner'>
        <img src={BannerPhoto} alt="Paysage de rivière" />
        <h1>Bienvenue à la ferme !</h1>
    </div>
  )
}
