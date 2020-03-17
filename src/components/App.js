import React from 'react';


// import component
import ExampleComponent from './ExampleComponent.js';
import Heading from './Heading';
import Image from './Image';
import Repeater from './Repeater';
import ShowHide from './ShowHide';


export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
        <Heading text="This is heading text" />
         <Image source="https://placedog.net/500/280" alternativeText="dog"/>
      {/* EXAMPLE with props the validate */}
      <ExampleComponent
      // we used "" instead of {} to pass in strings
      heading="Example component heading"
      // we must use {} instead of "" to pass in NON-strings
      isAmazingComponent={true}>
        <p>passing in child elements is required</p>
      </ExampleComponent>
     <Repeater count={5} >
         <p> Hi my name Daniel </p>
     </Repeater>

     <ShowHide show={true}>
        <p> This will be shown </p>
    </ShowHide>
    
    <ShowHide show={false}>
       <p> This will not be shown </p>
   </ShowHide>
    </div>
  );
}
