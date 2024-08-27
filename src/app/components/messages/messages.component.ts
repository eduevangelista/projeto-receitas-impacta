import { Component, OnInit } from '@angular/core';
import { MesagesService } from 'src/app/services/mesages.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor(public messageService: MesagesService) { }


  ngOnInit(): void {
  }

}
