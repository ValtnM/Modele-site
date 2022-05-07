import React from 'react'
import './Services.scss'
import {v4 as uuidv4} from 'uuid'
import Card from '../../Components/Card/Card'
import Market from '../../assets/marche.jpg'
import Basket from '../../assets/panier.jpg'

export default function Services() {

  const content = [
    {
      title: "Vente sur place",
      img: Basket,
      altImg: "Panier de légumes",
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id molestias vero consectetur quisquam error aperiam, dicta nihil aspernatur, excepturi ad esse corporis reiciendis inventore modi numquam ea vel? Dolores porro aut eos, at dolorum minus fugit, laudantium cupiditate animi voluptatum sit deserunt placeat quisquam quaerat, quas accusamus explicabo harum repudiandae nobis nemo voluptate repellat. Nisi necessitatibus qui voluptatem magni odit sit quibusdam amet, eaque ipsam porro dignissimos doloremque ad aperiam eos vero maiores atque! Velit eveniet commodi minima quibusdam expedita ad unde itaque incidunt a, eos aperiam doloribus quaerat magnam debitis temporibus. Rem soluta id reiciendis! Tenetur dolorum culpa est quasi aperiam atque odio pariatur autem, nostrum dolor vero, officia ducimus! Hic nisi voluptate adipisci ut nihil maxime'
    },
    {
      title: "Marché",
      img: Market,
      altImg: "étal de marché",
      txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id molestias vero consectetur quisquam error aperiam, dicta nihil aspernatur, excepturi ad esse corporis reiciendis inventore modi numquam ea vel? Dolores porro aut eos, at dolorum minus fugit, laudantium cupiditate animi voluptatum sit deserunt placeat quisquam quaerat, quas accusamus explicabo harum repudiandae nobis nemo voluptate repellat. Nisi necessitatibus qui voluptatem magni odit sit quibusdam amet, eaque ipsam porro dignissimos doloremque ad aperiam eos vero maiores atque! Velit eveniet commodi minima quibusdam expedita ad unde itaque incidunt a, '
    }
  ]

  return (
    <div>
      {content.map(item => (
        <Card key={uuidv4()} content={item} />
      ))}
    </div>
  )
}
