import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent implements OnInit {
  names: string[] = ['André', 'Tiago', 'João', 'Filipe', 'Mateus', 'Pedro'];

  constructor() { }

  ngOnInit(): void {

  }

  selectName(name: string): void {
    console.log(`Você clicou no nome: ${name}`);
    alert(`Você selecionou: ${name}`);
  }
}
