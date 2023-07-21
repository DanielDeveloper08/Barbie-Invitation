import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent { 
  imageUrl: string = 'assets/img/capture.jfif';
  largeImageUrl: string = 'assets/img/ticketsMovil.jpg';
  isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.isMobile = window.innerWidth < 768; 
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
  }
}
