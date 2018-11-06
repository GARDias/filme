import { Component, OnInit } from '@angular/core';
import{ FilmeService } from '../filme.service';
import { filme } from './filme';
@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent  implements OnInit {
  title = 'Avengers';
  filme : filme;
  listFilmes:Array<filme>;
  constructor(private service : FilmeService){}
  
  ngOnInit(){
    this.filme = new filme;
    this.listFilmes = new Array<filme>();
    this.service.getFilme('Avengers').subscribe(resp => this.filme = resp);
    console.log(this.filme);
  }

 
}


