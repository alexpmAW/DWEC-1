import { createClient } from 'redis';
import { v4 as uuidv4 } from 'uuid';

const client = createClient({
  url: 'redis://default:123pass@localhost:5000'
});

await client.connect();


export async function getCars() {
  return JSON.parse(await client.get("Cars") ?? []);
}

export async function getCarByID(id) {
  const cars = await getCars();
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === id) {
      return cars[i];
    }
  }
  return null;
}

export async function getCarByNumBastidor(numBastidor) {
  const cars = await getCars();
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].numBastidor === numBastidor) {
      return cars[i];
    }
  }
  return null;
}

export async function insertCar(car) {
  const cars = await getCars();
  if (cars === null || cars === undefined) {
    cars = [];
  }
  car.id = uuidv4();
  cars.push(car);
  await client.set("Cars", JSON.stringify(cars));
}

export async function deleteCar(id) {
  const cars = await getCars();
  const newCars = cars.filter(function (value) {
    return value.id !== id
  });
  await client.set("Cars", JSON.stringify(newCars));
}

export async function modifyCar(car) {
  const cars = await getCars();
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].id === id) {
      cars[i] = car;
    }
  }
  await client.set("Cars", JSON.stringify(newCars));
}

