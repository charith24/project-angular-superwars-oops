// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-players',
//   templateUrl: './players.component.html',
//   styleUrls: ['./players.component.css']
// })
// export class PlayersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { SuperInterface } from '../../SuperInterface';
import { heros } from '../../heros';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  constructor() {}

  players: SuperInterface[];

  ngOnInit(): void {
    this.players = heros;
    this.viewPlayers(this.initPlayers(this.players));
  }

  initPlayers = (players) => {
    let detailedPlayers = '';
    detailedPlayers = players.map((value, index) => ({
      name: players[index].name,
      strength: Math.ceil(Math.random() * 100 + 1),
      image: '../../assets/super-' + (index + 1) + '.png',
      type: 'hero|villian',
    }));
    return detailedPlayers;
  };

  buildPlayers(players: any, type: string): any {
    let fragment: string = '';
    let indexList: number[] = [];
    if (type == 'hero') {
      players.map((item, index) => {
        if (index % 2 == 0) indexList.push(index);
      });
    } else {
      players.map((item, index) => {
        if (index % 2 != 0) indexList.push(index);
      });
    }
    console.log(indexList);

    fragment += indexList.map(
      (index) => `<div class="player">
                <img src="${players[index].image}" alt="">
                <div class="name">${players[index].name}</div>
                <div class="strength">${players[index].strength}</div></div>`
    );
    console.log(players, fragment);
    return fragment;
  }

  viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = this.buildPlayers(
      players,
      'hero'
    );
    document.getElementById('villains').innerHTML = this.buildPlayers(
      players,
      'villain'
    );
  };
}
