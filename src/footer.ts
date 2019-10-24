export default class Footer {
  private element: HTMLDivElement

  constructor () {
    console.log('footer constructor')
    this.element = document.createElement('div')
    this.element.textContent = "This is the footer."
  }

  render () {
    document.body.appendChild(this.element)
  }
}
