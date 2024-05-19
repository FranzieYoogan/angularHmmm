import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  mouse = 0
  eventOver() {

    const yes:any = document.getElementById('yes')

    this.mouse++
    console.log(this.mouse)
    if(this.mouse == 1) {
      yes.style.right = "5em"
      yes.style.position = "relative"

    } 

    if(this.mouse == 2) {
      this.mouse = 0
     yes.style.right = "0em"
      yes.style.position = "relative"


    }
  }

  no() {

    const noText:any = document.getElementById('noText')
    const containerResult2:any = document.getElementById('containerResult2')

    noText.innerHTML = "The World doesn't want you to be trans so be it even more ^-^"
    containerResult2.style.display = "flex"

    setTimeout(() => {
      containerResult2.style.opacity = "1"
      containerResult2.style.transition = "1s"
    }, 500);
 

  }

}
