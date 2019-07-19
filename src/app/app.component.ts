import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date = new Date();
  posts = [
    {
      title: 'Meine premièreuh post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem Elsass ipsum messti de Bischheim Morbi knack sit schneck hoplageiss hopla salu non Strasbourg hopla sit rossbolla vielmols, geht\'s kartoffelsalad Richard Schirmeck gewurztraminer habitant nullam turpis, purus nüdle Pfourtz ! eget risus, munster Mauris morbi libero, barapli amet pellentesque vulputate tristique ac non Hans tellus jetz gehts los wie flammekueche dignissim Pellentesque auctor, Verdammi ullamcorper Yo dû. Huguette quam. leverwurscht Oberschaeffolsheim Carola sed in, yeuh. porta varius libero. bredele elit et amet kougelhopf mamsell wurscht commodo dui rucksack Kabinetpapier chambon ornare schpeck gal sit Chulia Roberstau turpis placerat Coopé de Truchtersheim elementum Gal. amet, mänele kuglopf id blottkopf, consectetur ante suspendisse  leo météor Racing.',
      loveIts: 15,
      dontLoveIts: 0,
      created_at: this.date
    },
    {
      title: 'Meine deuxiémeuh post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem Elsass ipsum messti de Bischheim Morbi knack sit schneck hoplageiss hopla salu non Strasbourg hopla sit rossbolla vielmols, geht\'s kartoffelsalad Richard Schirmeck gewurztraminer habitant nullam turpis, purus nüdle Pfourtz ! eget risus, munster Mauris morbi libero, barapli amet pellentesque vulputate tristique ac non Hans tellus jetz gehts los wie flammekueche dignissim Pellentesque auctor, Verdammi ullamcorper Yo dû. Huguette quam. leverwurscht Oberschaeffolsheim Carola sed in, yeuh. porta varius libero. bredele elit et amet kougelhopf mamsell wurscht commodo dui rucksack Kabinetpapier chambon ornare schpeck gal sit Chulia Roberstau turpis placerat Coopé de Truchtersheim elementum Gal. amet, mänele kuglopf id blottkopf, consectetur ante suspendisse  leo météor Racing.',
      loveIts: 15,
      dontLoveIts: 30,
      created_at: this.date
    },
    {
      title: 'Meine troiziémeuh post',
      // tslint:disable-next-line: max-line-length
      content: 'Lorem Elsass ipsum messti de Bischheim Morbi knack sit schneck hoplageiss hopla salu non Strasbourg hopla sit rossbolla vielmols, geht\'s kartoffelsalad Richard Schirmeck gewurztraminer habitant nullam turpis, purus nüdle Pfourtz ! eget risus, munster Mauris morbi libero, barapli amet pellentesque vulputate tristique ac non Hans tellus jetz gehts los wie flammekueche dignissim Pellentesque auctor, Verdammi ullamcorper Yo dû. Huguette quam. leverwurscht Oberschaeffolsheim Carola sed in, yeuh. porta varius libero. bredele elit et amet kougelhopf mamsell wurscht commodo dui rucksack Kabinetpapier chambon ornare schpeck gal sit Chulia Roberstau turpis placerat Coopé de Truchtersheim elementum Gal. amet, mänele kuglopf id blottkopf, consectetur ante suspendisse  leo météor Racing.',
      loveIts: 0,
      dontLoveIts: 0,
      created_at: this.date
    }
  ];
}
