import React from 'react';


function One() {
    return (
    
              <div >
                  <br/>
                    <br/>
                      <h2>This is First component</h2>
              <br/>
              <br/>
              <br/>
                            You’ve likely performed data fetching,
                             subscriptions, or manually changing the DOM 
                             from React components before. We call these operations
                             “side effects” (or “effects” for short)
                             because they can affect other components and can’t be
                             done during rendering.

                             The Effect Hook, useEffect, adds the ability to perform
                             side effects from a function component. 
                             It serves the same purpose as componentDidMount,
                             componentDidUpdate, and componentWillUnmount in React classes,
                             but unified into a single API. (We’ll show examples comparing
                             useEffect to these methods in Using the Effect Hook.)
       
    </div>
  );
}
export default One;
