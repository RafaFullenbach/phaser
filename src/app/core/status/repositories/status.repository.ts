import { Observable } from 'rxjs';
import { Status } from '../entities/status.model';

export interface StatusRepository {
  getStatus(): Observable<Status>;
}
