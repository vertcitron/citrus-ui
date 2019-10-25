export default class Test {
  constructor () {
    this.element = document.createElement('h3')
    this.element.textContent = 'Test !!!'
    console.log('Test constructor.')
  }

  render () {
    console.log('Test rendered.')
    document.body.appendChild(this.element)
    setTimeout(() => {
      console.log('Test modified.')
      this.element.textContent = 'Test (deprecated) !!!'
    }, 3000)
  }
}
