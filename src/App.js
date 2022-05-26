import React from 'react'
import './App.css';



// export default function App() {
//   return (
//     <div>

//       <h1>My name is Chima</h1>
//       <h2>This is my year</h2>
//     </div>
//   )
// }
//passing the parent/child component.

// function Title() {
//   return (
//     <div>
//       <h3>why I like react</h3>
//     </div>
//   )
// }


// function Logo() {
//   return (
//     <nav>
//       {/* <img src="./logo192.png" alt="" width="30px" /> */}
//     </nav>
//   )
// }


function MainContent() {
  return (
    <div>
      <header>

        <navbar className="nav-bar">
          {/* <h3>Click<span>&</span>Collect</h3> */}
          <img className='nav-logo' src="./logo192.png" alt="" />

          <ul className="nav-items">
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </navbar>
      </header>

      <h1 className='title-header'>Your on the run online shop.</h1>
      <br /> <br />
      <ol className='vision'>
        <li>Shop your london wears</li>
        <li>Best lifestyle anytime</li>
        <li>Affordable to change your wardrobe</li>
        <br /> <br />
      </ol>
    </div>
  )
}



function Footer() {
  return (
    <footer className='footer'>
        <small>&Copyright. 2021 Zirol development. All rights reserved.</small>
      </footer>
  )
}

function Menu() {
  return (
    <div>
      {/* <Title /> */}
      {/* <Logo /> */}
      <MainContent />
      {/* <header> */}
        {/* <h3>Click<span>&</span>Pay</h3> */}
        {/* <img src="./logo192.png" alt="" width="30px" /> */}

        {/* <navbar>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </navbar>
      </header> */}
      
      {/* <h1>Your one stop online shop</h1>*/}
      <Footer />
      {/* <footer>
        <small>2021 Zirol development. All rights reserved.</small>
      </footer> */}
    </div>
    
    
  )
}



// function Page() {
//   return (
//     <div>
//       <h3>why I like react</h3>
//     </div>
//   )
// }

export default Menu;

  




