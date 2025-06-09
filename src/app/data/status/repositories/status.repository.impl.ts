
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../../../core/status/entities/status.model';
import { StatusApi } from '../data-sources/status.api';
import { StatusRepository } from '../../../core/status/repositories/status.repository';

@Injectable()
export class StatusRepositoryImpl implements StatusRepository {
  constructor(private statusApi: StatusApi) {}

  getStatus(): Observable<Status> {
    return this.statusApi.getStatus();
  }
}
