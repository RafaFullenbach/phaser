import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Status } from '../../../core/status/entities/status.model';
import { Observable } from 'rxjs';

@Injectable()
export class StatusApi {
  private baseUrl = '/api/Status';

  constructor(private http: HttpClient) {}

  getStatus(): Observable<Status> {
    return this.http.get<Status>(this.baseUrl);
  }
}
