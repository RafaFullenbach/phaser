import { StatusRepository } from '../repositories/status.repository';
import { Status } from '../entities/status.model';
import { Observable } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { STATUS_REPOSITORY } from '../repositories/status.token';

@Injectable({
  providedIn: 'root'
})
export class GetStatusUseCase {
  constructor(@Inject(STATUS_REPOSITORY) private statusRepository: StatusRepository) { }

  execute(): Observable<Status> {
    return this.statusRepository.getStatus();
  }
}
