import React from 'react';



function App(){
  const click = () => {
      let p = document.getElementById('text')
      if (p.style.display === 'none') {
          p.style.display = 'block'
      } else if (p.style.display === 'block') {
          p.style.display = 'none'
      }
  }

  return (
      <div className='main'>
          <button onClick={click}>
              Toggle Fech Component
          </button>
          <div id='text' style={{ display: 'none', fontSize: '1vw' }}>
            <h1>Fech Component</h1>
            <h3>Initial display massage.</h3>
          </div>
      </div>
  )
}

export default App;