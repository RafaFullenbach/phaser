import { Component } from '@angular/core';
import { StatusApi } from './data/status/data-sources/status.api';
import { StatusRepositoryImpl } from './data/status/repositories/status.repository.impl';
import { STATUS_REPOSITORY } from './core/status/repositories/status.token';
import { GetStatusUseCase } from './core/status/use-cases/get-status.usecase';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  providers: [StatusApi, { provide: STATUS_REPOSITORY, useClass: StatusRepositoryImpl }, GetStatusUseCase],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'phaser';
}
