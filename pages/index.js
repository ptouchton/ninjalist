import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nostrum eum, quidem natus iure dolorem cum sequi saepe necessitatibus ea laboriosam tenetur et voluptatibus dicta deleniti? Voluptate omnis consequuntur similique?
      </p>
      <Footer />
    </div>
  )
}
