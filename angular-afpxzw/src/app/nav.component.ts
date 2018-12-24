import { Component } from '@angular/core';

@Component({
  selector: "main-nav",
  template: `<nav class="navigation">
  <input type="checkbox" id="nav" class="hidden"/>
  <label for="nav" class="nav-open"><i></i><i></i><i></i></label>
  <div class="nav-container">
    <ul>
      <li class="nav-active"><a href="#">Home</a></li>
      <li><a href="#">Books</a></li>
      <li><a href="#">Magazines</a></li>
      <li><a href="#">E-Books</a></li>
      <li><a href="#">Account</a></li>
    </ul>
  </div>
  </nav>`
})

export class NavComponent{

}