import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to styleUrls
})
export class LoginComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const imgBtn = document.querySelector('.img__btn') as HTMLElement | null;
    const container = document.querySelector('.cont') as HTMLElement | null;

    if (imgBtn && container) {
      imgBtn.addEventListener('click', () => {
        container.classList.toggle('s--signup');
      });
    }
  }
}
