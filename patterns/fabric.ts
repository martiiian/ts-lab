// button logic
interface Button {
  render: () => string
}

class MacButton implements Button {
  constructor() {
    // some implementation
  }

  render() {
    return 'mac button'
  }
}

class WindowsButton implements Button {
  constructor() {
    // some implementation
  }

  render() {
    return 'windows button'
  }
}

// checkbox logic
interface Checkbox {
  render: () => string
}

class MacCheckbox implements Button {
  constructor() {
    // some implementation
  }

  render() {
    return 'mac checkbox'
  }
}

class WindowsCheckbox implements Button {
  constructor() {
    // some implementation
  }

  render() {
    return 'windows checkbox'
  }
}


interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
}

class WindowsFabric implements GUIFactory {
  createButton() {
    return new WindowsButton();
  }

  createCheckbox() {
    return new WindowsCheckbox();
  }
}

class MacFabric implements GUIFactory {
  createButton() {
    return new MacButton();
  }

  createCheckbox() {
    return new MacCheckbox();
  }
}

let typeOfInterface = 'windows'

const fabric = typeOfInterface === 'windows' ? new WindowsFabric() : new MacFabric();

fabric.createButton()
fabric.createCheckbox()