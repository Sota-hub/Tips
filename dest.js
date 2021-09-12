const animals = [{
  wild: location,
  pet: dog
}];

const normal = animals;
console.log(normal);
// [{wild: location,pet: dog}]

const [dest] = animals;
console.log(dest);
// {wild: location,pet: dog}