import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/servicios/pokemon.service';

@Component({
  selector: 'app-poke-grid',
  templateUrl: './poke-grid.component.html',
  styleUrls: ['./poke-grid.component.css'],
})
export class PokeGridComponent implements OnInit {
  pokemons: any[] = [];
  pages= 1;
  totalPokemons: number =1;
  constructor(private router: Router, private pokeservice: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }
  home() {
    this.router.navigateByUrl('/home');
  }
  getPokemons() {
    this.pokeservice.getPokemons().subscribe((res: any) => {
      this.totalPokemons = res.count;

      res.results.forEach((result: { name: string }) => {
        this.pokeservice
          .getDetallesPokemons(result.name)
          .subscribe((ures: any) => {
            this.pokemons.push(ures);
            console.log(this.pokemons);
          });
      });
    });
  }
}
