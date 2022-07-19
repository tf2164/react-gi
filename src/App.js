// VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your 
// basic information for example name, number, date of birth and etc. 
// This div should be hard-coded to prepare for the Medium Challenge.

// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   render(){
//     return (
//       <div className="App">
//         <h1>Name: Tyra Fair</h1>
//         <p>DOB: 01/16/2000</p>
//         <p>Cell: 123-222-3333</p>
//       </div>
//     );
//   }
// }

// export default App;

// EASY: Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

// import React from 'react';
// import './App.css';

// class App extends React.Component{
//   constructor(props){
//     super();
//     this.state = {
//       person: {

//       }
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//     <h1>Name: Tyra Fair</h1>
//     <p>DOB: 01/16/2000</p>
//     <p>Cell: 123-222-3333</p>
//     </div>
//   );
// }
// }

// export default App;

// // MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)


// import React from 'react';
// import './App.css';
// import info from './components/info';

// class App extends React.Component{
//   constructor(props){
//     super();
//     this.state = {
//       person: {
//         name: "Tyra Fair",
//         number: "123-222-3333",
//         age: "22",
//         birthdate: "01/16/2000"
//       }
//     }
//   }
//   render(){
//   return (
//     <div className="App">
//       <info name={this.state.person.name} age={this.state.person.age} birthday={this.state.person.birthdate} number={this.state.person.number} />
//     </div>
//   );
// }
// }

// export default App;

// // HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)

import React from 'react';
import './App.css';
// import info from './components/info';

 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          id: 1,
          name: "Tyra Fair",
          number: "555-555",
          dob: "January 16, 2000",
        },
        {
          id: 2,
          name: "Dean Winchester",
          number: "551-550",
          dob: "October 31, 1980",
        },
        {
          id: 3,
          name: "Castiel",
          number: "550-5523",
          dob: "December 20, 2 AD",
        },
        {
          id: 4,
          name: "Sam Winchester",
          number: "123-6543",
          dob: "October 30, 1982",
        },
      ],
    };
  }

  render() {
    const { person } = this.state;
    return (
      <div>
        {person.map((person) => {
          return <info people={person} key={person.id} />;
        })}
      </div>
    );
  }
}

 export default App;