console.log('I am here');

$(() => {

  const createWereRabbit = (wereRabbit) => {
    const $species = $('<h2>').text(`OgSpecies: ${wereRabbit.ogSpecies}`);
    const $colour = $('<h3>').text(`Colour: ${wereRabbit.colour}`);
    const $header = $('<header>').addClass('header');

    // $header.append($species).append($colour);
    $header.append($species, $colour);

    const $section = $(`
      <section class="body">
        <h3>Has fangs: ${wereRabbit.fangs ? 'True' : 'False'}</h3>
        <h3>Has floppyEars: ${wereRabbit.floppyEars ? 'True' : 'False'}</h3>
        <h3>Is cute: ${wereRabbit.isCute ? 'True' : 'False'}</h3>
      </section>
    `);

    const $diet = $('<h3>').text(`Diet: ${wereRabbit.diet}`);
    const $killCount = $('<h3>').addClass('kill-count').text(`Confirmed kills: ${wereRabbit.confirmedKills}`);
    const $footer = $('<footer>').addClass('footer');

    // $diet.appendTo($footer);
    $footer.append($diet, $killCount);

    const $wereRabbit = $('<article>').addClass('were-rabbit');

    $wereRabbit.append($header, $section, $footer);

    return $wereRabbit;
  };

  const $wereRabbitContainer = $('#were-rabbit-container');
  
  // const $wereRabbit = createWereRabbit(oneWR);

  // $wereRabbitContainer.append($wereRabbit);

  // $.ajax({
  //   url: '/rabbits',
  //   method: 'GET',
  //   success: (rabbits) => {
  //     console.log(rabbits);
  //     for (const rabbitKey in rabbits) {
  //       console.log('rabbitKey', rabbitKey);
  //       const $wereRabbit = createWereRabbit(rabbits[rabbitKey]);
  //       $wereRabbitContainer.append($wereRabbit);
  //     }
  //   }
  // });

  const fetchRabbits = () => {
    $.ajax({
      url: '/rabbits',
      method: 'GET'
    }).then((rabbits) => {
      console.log(rabbits);

      // empty the parent element before we append new children to it
      $wereRabbitContainer.empty();

      for (const rabbitKey in rabbits) {
        console.log('rabbitKey', rabbitKey);
        const $wereRabbit = createWereRabbit(rabbits[rabbitKey]);
        $wereRabbitContainer.append($wereRabbit);
      }
    });
  };

  fetchRabbits();

  $('#new-rabbit-form').on('submit', function (event) {
    // prevent the default behaviour of the form (making a GET request to the current page)
    event.preventDefault();
    console.log('the form has submitted');

    // serialize the form data (turn it into a urlencoded string to be sent to the server)
    // const data = $('#new-rabbit-form').serialize();

    // if you use `this`, it must be a function keyword function (ie. not an arrow function)
    const data = $(this).serialize();

    console.log('data', data);
    
    $.ajax({
      method: 'POST',
      url: '/rabbits',
      data: data
    }).then(() => {
      console.log('rabbit created successfully');
      fetchRabbits();
    });
  });
  
});
