import Test from './Test'
import Footer from './footer'
import webpackImg from './images/webpack-icon.svg'
import './main.sass'

const test = new Test()
test.render()

const img = document.createElement('img')
img.style.width = '64px'
img.src = webpackImg
document.body.appendChild(img)

const footer = new Footer()
footer.render()
