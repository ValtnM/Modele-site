import React from 'react'
import './Commitments.scss'
import Tomatoes from '../../assets/tomates.jpg'
import Card from '../../Components/Card/Card'

export default function Commitments() {

  const content = {
    title: "Nos engagements",
    img: Tomatoes,
    altImg: "Tomates",
    txt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id molestias vero consectetur quisquam error aperiam, dicta nihil aspernatur, excepturi ad esse corporis reiciendis inventore modi numquam ea vel? Dolores porro aut eos, at dolorum minus fugit, laudantium cupiditate animi voluptatum sit deserunt placeat quisquam quaerat, quas accusamus explicabo harum repudiandae nobis nemo voluptate repellat. Nisi necessitatibus qui voluptatem magni odit sit quibusdam amet, eaque ipsam porro dignissimos doloremque ad aperiam eos vero maiores atque! Velit eveniet commodi minima quibusdam expedita ad unde itaque incidunt a, eos aperiam doloribus quaerat magnam debitis temporibus. Rem soluta id reiciendis! Tenetur dolorum culpa est quasi aperiam atque odio pariatur autem, nostrum dolor vero, officia ducimus! Hic nisi voluptate adipisci ut nihil maxime provident qui earum, reprehenderit quae soluta est magni vitae voluptates, voluptatibus, aspernatur iste sit dolorum tempore. Deserunt est, laborum corporis modi laboriosam, iste, similique voluptates numquam doloribus nemo tenetur non hic. Sed obcaecati dolorum iure nesciunt eos repellat, reiciendis, vero cum dolorem rerum est quisquam ipsam, itaque explicabo! Cumque assumenda qui ducimus sequi dolore officia tempore hic. Asperiores sit dolore, tempore facilis accusamus cum dolorem assumenda quae eum reprehenderit suscipit ad possimus consequuntur saepe, nobis modi porro aliquid optio eligendi provident?'
  }

  return (
    <div>
      <Card content={content} />        
    </div>
  )
}
