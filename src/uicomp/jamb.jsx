import React from 'react'

const Jamb = () => {
  return (
    <div className='container hki'> 

<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>

<ul id="dropdown2" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
          <nav className="ll">
    <div class="nav-wrapper">
        
      <a href="#" class="brand-logo right">Call Us: 98898989</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2"><i class="material-icons left">add_shopping_cart</i>Shop by categaroy<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Home<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Mega menu<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Shop<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown2">Blogn<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Account<i class="material-icons right">arrow_drop_down</i></a></li>
        
      </ul>
    </div>
  </nav>
 


  <div className='row bb'>
    <div className='col-12 hk'>
        <h1 className=''><span className='dis'>30% off</span></h1>
        <h2 className='bone'> when Buying Parts<br/>
         with installation</h2>
        <p className='btwo'>installation of parts in <br/>
         the service of partners</p>

         <button className='btn center bbt'>shop now</button>
    </div>
  </div>
  


    </div>
  )
}


export default Jamb