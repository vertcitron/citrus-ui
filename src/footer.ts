import style from './footer.module.sass'

export default class Footer {
  private element: HTMLDivElement

  constructor () {
    const styleTag = document.createElement('style')
    styleTag.textContent = style.toString()
    this.element = document.createElement('div')
    document.body.appendChild(styleTag)
    this.element.className = 'my-footer'
    this.element.textContent = "This is the footer."
  }

  render () {
    document.body.appendChild(this.element)
  }
}
