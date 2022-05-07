import React from 'react'
import './Home.scss'
import Card from '../../Components/Card/Card'
import Farm from '../../assets/ferme.jpg'
import Exploitation from '../../assets/exploitation.jpg'
import {v4 as uuidv4} from 'uuid'

export default function Home() {

 const content = [
   {
     title: 'La Ferme',
     img: Farm,
     altImg: "Cour de la ferme",
     txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id molestias vero consectetur quisquam error aperiam, dicta nihil aspernatur, excepturi ad esse corporis reiciendis inventore modi numquam ea vel? Dolores porro aut eos, at dolorum minus fugit, laudantium cupiditate animi voluptatum sit deserunt placeat quisquam quaerat, quas accusamus explicabo harum repudiandae nobis nemo voluptate repellat. Nisi necessitatibus qui voluptatem magni odit sit quibusdam amet, eaque ipsam porro dignissimos doloremque ad aperiam eos vero maiores atque! Velit eveniet commodi minima quibusdam expedita ad unde itaque incidunt a, eos aperiam doloribus quaerat magnam debitis temporibus. Rem soluta id reiciendis! Tenetur dolorum culpa est quasi aperiam atque odio pariatur autem, nostrum dolor vero, officia ducimus! Hic nisi voluptate adipisci ut nihil maxime provident qui earum, reprehenderit quae soluta est magni vitae voluptates, voluptatibus, aspernatur iste sit dolorum tempore. Deserunt est, laborum corporis modi laboriosam, iste, similique voluptates numquam doloribus nemo tenetur non hic. Sed obcaecati dolorum iure nesciunt eos repellat, reiciendis, vero cum dolorem rerum est quisquam ipsam, itaque explicabo! Cumque assumenda qui ducimus sequi dolore officia tempore hic. Asperiores sit dolore, tempore facilis accusamus cum dolorem assumenda quae eum reprehenderit suscipit ad possimus consequuntur saepe, nobis modi porro aliquid optio eligendi provident?"
   },
   {
     title: "L'exploitation",
     img: Exploitation,
     altImg: "Champ de choux",
     txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id molestias vero consectetur quisquam error aperiam, dicta nihil aspernatur, excepturi ad esse corporis reiciendis inventore modi numquam ea vel? Dolores porro aut eos, at dolorum minus fugit, laudantium cupiditate animi voluptatum sit deserunt placeat quisquam quaerat, quas accusamus explicabo harum repudiandae nobis nemo voluptate repellat. Nisi necessitatibus qui voluptatem magni odit sit quibusdam amet, eaque ipsam porro dignissimos doloremque ad aperiam eos vero maiores atque! Velit eveniet commodi minima quibusdam expedita ad unde itaque incidunt a, eos aperiam doloribus quaerat magnam debitis temporibus. Rem soluta id reiciendis! Tenetur dolorum culpa est quasi aperiam atque odio pariatur autem, nostrum dolor vero, officia ducimus! Hic nisi voluptate adipisci ut nihil maxime provident qui earum, reprehenderit quae soluta est magni vitae voluptates, voluptatibus, aspernatur iste sit dolorum tempore. Deserunt est, laborum corporis modi"
   }
 ]

  return (
    <div className='home'>
      {content.map(item => (
        <Card key={uuidv4()} content={item} />
      ))}      
    </div>
  )
}
