import React from 'react';

const Question = () => {
    return (
        <div className='w-4/5 mx-auto mt-10'>
            <h1 className='text-3xl font-bold text-center'>Some Important Viva Question and Answer</h1>
            <hr className='border-2 border-blue-400 my-5'/>
           <div className='my-5'>
              <h1 className='text-2xl font-bold'>1. Props vs state</h1>
              
              <ul className='px-5 text-xl list-disc ml-5'>
                <li className='py-2'> Props are read-only, whereas state can be changed </li>
                <li className='py-2'>Props are passed from the parent component to the child component, and the child component cannot directly change them. State, on the other hand, is held and controlled by the component and can be changed using the setState() method.</li>
                <li className='py-2'> Props are used to pass data from parent to child, whereas state is used to store and manage data within a component.</li>
                <li className='py-2'>Props are typically used to customize a component's behavior or appearance depending on the needs of the parent component. State, on the other hand, is used to maintain track of user interactions.</li>
              </ul>
           </div>
           <div className='my-5'>
              <h1 className='text-2xl font-bold'>2. How does useState work?</h1>
              
              <ul className='px-5 text-xl list-disc ml-5'>
                <li className='py-2'> In React, useState is a hook that allows you to add state to your functional components.
                    When you call useState, it returns an array with two values: the current state value and a function that can be used to update that value. You can then use the current state value in your component's rendering logic, and update it using the provided update function.You can set an initial state value as an argument when calling useState.</li>
                
              </ul>
           </div>
           
           <div className='my-5'>
              <h1 className='text-2xl font-bold'>3. Purpose of useEffect other than fetching data?</h1>
              
              <ul className='px-5 text-xl list-disc ml-5'>
                <p>While fetching data from APIs is a common use case for useEffect, there are many other purposes for this React hook. Here are some examples</p>
                <div className='px-7'>
                    <li className='py-2'>Updating local storage</li>
                    <li className='py-2'>directly updating the DOM, and timers</li>
                    <li className='py-2'>Animations</li>
                </div>
              </ul>
           </div>
           <div className='my-5'>
              <h1 className='text-2xl font-bold'>4. How Does React work?</h1>
              
              <ul className='px-5 text-xl list-disc ml-5'>
                <li className='py-2'> React is a JavaScript library for building user interfaces. It uses a virtual representation of the UI called the "virtual DOM" to efficiently update only the parts of the UI that have changed. React also uses a "one-way data flow" model to manage the state of the application and keep it in sync with the UI. This makes it easier to build complex web applications by providing a powerful set of tools for creating and managing UI components.</li>
                
              </ul>
           </div>
        </div>
    );
};

export default Question;