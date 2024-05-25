import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Cheval } from '../../models/cheval';
import { ChevalService } from '../../services/cheval.service';
@Component({
  selector: 'app-cheval-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cheval-detail.component.html',
  styleUrl: './cheval-detail.component.scss'
})
export class ChevalDetailComponent implements OnInit {
  idcheval: number = 0;
  chevalById: Cheval | undefined;

  constructor(private route: ActivatedRoute, private chevalService: ChevalService
  ) {
    this.route.params.subscribe(params => {
      this.chevalById = new Cheval("");
      this.idcheval = parseInt(params['id']);
      this.getData(); //Charge les donnees
    });
  }

  getData(): void {
    console.log("Id recupere : %d", this.idcheval);
    this.chevalById = this.chevalService.getChevalById(this.idcheval);
    console.log(this.chevalById);
    let name = this.chevalById?.name;
    let robe = this.chevalById?.robe;
    //ici on appelle le service prealablement injecte via constructeur
    // qui va nous donner la donne correspondante a cet id
    // this.cheval = this.chevalService.getChevalById(testId);
  }

  remove(Id:number):void {
    this.chevalService.removeChevaById(Id)
  }
  ngOnInit(): void {
  }

}
