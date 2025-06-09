import { interval, map, Observable, switchMap } from 'rxjs';
import { Status } from '../../core/status/entities/status.model';
import { GetStatusUseCase } from './../../core/status/use-cases/get-status.usecase';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone:true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {

  status$: Observable<Status> | undefined

  constructor(private getStatusUseCase: GetStatusUseCase) { }

ngOnInit(): void {
  this.status$ = interval(1000).pipe( 
    switchMap(() => this.getStatusUseCase.execute()),
    map(status => ({
      ...status,
      dateTime: new Date(status.dateTime)
    }))
  );
}

}
