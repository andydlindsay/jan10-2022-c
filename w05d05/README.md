# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* finals are very much the same
* working in teams in the real world
* vocational training
* learn how others code/think
* merge everything learned so far into one project
* project management
* open-ended/flexible guidelines
* experience with git
* error handling

### Pick a Project

### User Stories
* describes how and why a user will interact with our app
* As a _____, I can _____, because ______

As a user, I can see the menu from a local restaurant, because I am hungry

As a user, I can add pins to a map, because I want to share locations of interest with my friends

As a non-logged in user, I can't add pins to a map, because it doesn't belong to me

As a logged-in user, I can favourite a blog post, because I would like to review it later AND the heart icon turns red

planning
user-stories.md

### Pick out the nouns
* nouns === resources
* nouns === table
* build out the ERD

### Routes
* define the BREAD routes to access/update resources
* Browse, Read, Edit, Add, Delete
* remember RESTful routing

REpresentational State Transfer
naming convention for routes

B GET   /dinosaurs
R GET   /dinosaurs/:id
E POST  /dinosaurs/:id/edit
A POST  /dinosaurs
D POST  /dinosaurs/:id/delete

B GET         /dinosaurs
R GET         /dinosaurs/:id
E PUT/PATCH   /dinosaurs/:id
A POST        /dinosaurs
D DELETE      /dinosaurs/:id

### MVP
* Minimum Viable Product
* @KV Minimum Viable Demo (MVD)
* what is the minimum feature set that we can show off in 5 minutes
* If you're not going to show it, don't build it

### Wireframes/Mockups
* diagrams.net, figma, balsamiq, moqups, pen/paper
* this is not a web design school

### User Login/Registration
* Don't do it

```js
// GET /login/7
app.get('/login/:user_id', (req, res) => {
  // set the cookie
  req.session.user_id = req.params.user_id;

  // plain-text cookies
  res.cookie('user_id', req.params.user_id);

  // send the user somewhere
  res.redirect('/');
});
```

### Boilerplate
* Back End: Node, postgres, express
* Front end: HTML, CSS, JS, jQuery, SCSS

### Multi-page App vs SPA
* these are not mutually exclusive

### Git Collaboration
* merge locally/push
* merge in the cloud/pull
* please use branches

### Merge Conflicts
* do want you to experience merge conflicts

### How to split up the work
* vertically - each team member is working on a different piece of the stack
* horizontally - we're all working on the same layer
* pair programming

### Communication
* single biggest challenge





