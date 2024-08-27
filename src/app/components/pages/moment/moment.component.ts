import { MomentsService } from './../../../services/moments.service';
import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MesagesService } from 'src/app/services/mesages.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css'],
})
export class MomentComponent implements OnInit {
  moment?: Moment;
  baseApiUrl = environment.baseApiUrl

  constructor(
    private momentsService: MomentsService,
    private route: ActivatedRoute,
    private messagesService: MesagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));

    this.momentsService.getMoment(id).subscribe((item) => (this.moment = item.data));
  }

 async removeHandler(id:number){
  await this.momentsService.removeMoment(id).subscribe()

  this.messagesService.add('Receita excluida com sucesso')

  this.router.navigate(['/'])
}
}
