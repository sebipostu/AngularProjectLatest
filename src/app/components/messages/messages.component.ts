import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { delay, Subscription } from 'rxjs';
import { MessagesFacadeService } from 'src/app/store/messages/messages-facade.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, OnDestroy, AfterViewInit {
  public subscription$ = new Subscription();
  public dataLoadingState$ = this.messagesFacade.dataLoadingState$;
  public messages$ = this.messagesFacade.messages$;
  public dataSource = new MatTableDataSource();
  public displayedColumns: string[] = ['id', 'name', 'message', 'date'];
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private dialog: MatDialog,
    private messagesFacade: MessagesFacadeService
  ) {}
  ngOnInit(): void {
    this.messagesFacade.getUserData();
    this.subscription$ = this.messages$
      .pipe(delay(1000))
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  openFormDialog() {
    this.dialog.open(FormComponent, {
      width: '400px',
      height: '400px',
    });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
