/*
* This program is a vehicle class.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-25
*/

class Vehicle {
  // this is a  class.
  protected _speed: number
  protected _maxSpeed: number
  private _colour: string

  constructor (inicialColour: string, topspeed: number) {
    this._colour = inicialColour
    this._maxSpeed = topspeed
    this._speed = 0
  }

  public get speed () {
    return this._speed
  }

  public get maxSpeed () {
    return this._maxSpeed
  }

  public get colour () {
    return this._colour
  }

  public set speed (param: number) {
    this._speed = param
  }

  public set colour (param: string) {
    this._colour = param
  }

  public status () {
    console.log('Speed: ' + this._speed + '\nMaxSpeed: ' + this._maxSpeed +
                    '\nColour: ' + this._colour)
  }

  public accelerate (accPow: number, accTime: number) {
    this._speed = (accPow * accTime) + this._speed
    if (this._speed > this._maxSpeed) {
      this._speed = this._maxSpeed
    }
  }

  public break (breakPow: number, breakTime: number) {
    this._speed = this._speed - (breakPow * breakTime)
    if (this._speed < 0) {
      this._speed = 0
    }
  }
}

class Bike extends Vehicle {
  private _cadense: number

  constructor (inicialColour: string, topspeed: number) {
    super(inicialColour, topspeed)
    this._cadense = 0
  }

  public get cadense () {
    return this._cadense
  }

  public set cadense (param: number) {
    this._cadense = param
    this.speed = this._cadense * 2
  }

  public accelerate (accPow: number) {
    this.cadense = this.cadense + accPow
  }

  public ringBell () {
    console.log('\nDing ding!\n')
  }

  public status () {
    super.status()
    console.log('Cadense: ' + this._cadense)
  }
}

class Truck extends Vehicle {
  private _licensePlate: string

  constructor (inicialColour: string, topspeed: number,
    inicialPlate: string) {
    super(inicialColour, topspeed)
    this._licensePlate = inicialPlate
  }

  public get licensePlate () {
    return this._licensePlate
  }

  public set licensePlate (param: string) {
    this._licensePlate = param
  }

  public applyAir (airPressure: number) {
    this.speed = this.speed - airPressure / 2
  }

  public status () {
    super.status()
    console.log('License plate: ' + this._licensePlate)
  }
}

const moutin = new Bike('white', 40)

console.log('Created moutin  bike.\nStatus:\n')
moutin.status()

console.log('Set the cadense to 10\n')
moutin.cadense = 10
moutin.status()

console.log('\nAccelerate by 15:')
moutin.accelerate(15)
moutin.status()

console.log('\nRing bell.')

const bigTruck = new Truck('green', 200, 'ASD-45006F')

console.log('Created a Truck.\nStatus:\n')
bigTruck.status()

console.log('\nAccelerating, 10 of power for ten seconds:')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nBreaking, 10 of power for 10 sec.')
bigTruck.accelerate(10, 10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nApplyed air pressure of 10:')
bigTruck.applyAir(10)
console.log('New speed: ' + bigTruck.speed)

console.log('\nDone.')
