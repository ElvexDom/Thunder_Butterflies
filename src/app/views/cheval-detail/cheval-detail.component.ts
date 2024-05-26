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
      this.getData();
    });
  }

  ngOnInit(): void {
  }

  /**
   * Cette fonctionne récupère l'ID du cheval
   */
  getData(): void {
    // console.log("Id recupere : %d", this.idcheval);
    this.chevalById = this.chevalService.getChevalById(this.idcheval);
  }

  /**
   * Cette fonctionne supprime un cheval en fonction de son ID
   * @param Id 
   */
  remove(Id:number):void {
    this.chevalService.removeChevaById(Id)
  }
}