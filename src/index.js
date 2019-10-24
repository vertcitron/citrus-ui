class Test {
  constructor () {
    this.element = document.createElement('h1')
    this.element.textContent = 'Test !!!'
  }

  render () {
    document.body.innerHTML = ''
    document.body.appendChild(this.element)
    setTimeout(() => {
      this.element.textContent = 'Test (deprecated) !!!'
    }, 3000)
  }
}

const test = new Test()
test.render()
