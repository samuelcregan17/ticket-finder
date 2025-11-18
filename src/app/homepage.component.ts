import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'homepage',
  imports: [RouterOutlet],
  templateUrl: './homepage.component.html',
  styleUrl: './app.component.css'
})
export class Homepage {
  title = 'ticket finder thingy';
}