const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 54321;

const wereRabbits = {
  abc: {
    ogSpecies: 'elf',
    fangs: true,
    floppyEars: false,
    diet: 'carrion',
    isCute: false,
    confirmedKills: 9002,
    colour: 'ruby-red'
  },
  def: {
    ogSpecies: 'lil bunny',
    fangs: false,
    floppyEars: false,
    diet: 'knights of the round table',
    isCute: false,
    confirmedKills: 30,
    colour: 'white'
  },
  ghi: {
    ogSpecies: 'rabbit',
    fangs: false,
    floppyEars: false,
    diet: 'other rabbits',
    isCute: true,
    confirmedKills: -1,
    colour: 'transparent'
  },
};

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// GET /rabbits
app.get('/rabbits', (req, res) => {
  res.json(wereRabbits);
});

// POST /rabbits
app.post('/rabbits', (req, res) => {
  const species = req.body.species;
  const colour = req.body.colour;
  const diet = req.body.diet;

  // const {species, colour, diet} = req.body;

  const newWR = {
    ogSpecies: species,
    colour,
    diet,
  };
  const newId = Math.random().toString(36).substring(2, 6);

  wereRabbits[newId] = newWR;
  
  setTimeout(() => {
    res.status(201).send();
  }, 3000);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
