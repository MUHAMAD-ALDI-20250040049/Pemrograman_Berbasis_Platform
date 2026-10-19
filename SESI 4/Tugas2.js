var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

// Mengelompokkan data menggunakan reduce
let groupedByCountry = motoGP.reduce((result, race) => {
  let country = race.winner.country;
  
  if (!result[country]) {
    result[country] = {
      winningCircuits: [],
      totalWin: 0
    };
  }
  
  result[country].winningCircuits.push({
    name: `${race.winner.firstName} ${race.winner.lastName}`,
    winLocation: `${race.circuit}, ${race.location}`
  });
  
  result[country].totalWin += 1;
  
  return result;
}, {});

// Menampilkan hasil dengan format yang rapi
for (let country in groupedByCountry) {
  console.log(`${country}:`);
  console.log(`  winningCircuits:`);
  groupedByCountry[country].winningCircuits.forEach(item => {
    console.log(`    { name: '${item.name}', winLocation: '${item.winLocation}' }`);
  });
  console.log(`  totalWin: ${groupedByCountry[country].totalWin}\n`);
}