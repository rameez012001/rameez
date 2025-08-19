import React from 'react'
import { author } from '../assets/data/data'

function Footer() {
  return (
    <footer>
        <div>
            <p>Copyright © {new Date().getFullYear()}, {author}</p>
        </div>
    </footer>
  )
}

export default Footer