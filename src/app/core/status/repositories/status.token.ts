import { InjectionToken } from '@angular/core';
import { StatusRepository } from './status.repository';

export const STATUS_REPOSITORY = new InjectionToken<StatusRepository>('StatusRepository');
