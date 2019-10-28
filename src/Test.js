export default class Test {
  constructor () {
    this.element = document.createElement('h3')
    this.element.textContent = 'Test !!!'
    this.element.className = 'reddark'
  }

  render () {
    document.body.appendChild(this.element)
    setTimeout(() => {
      this.element.textContent = 'Test (deprecated) !!!'
    }, 3000)
  }
}
