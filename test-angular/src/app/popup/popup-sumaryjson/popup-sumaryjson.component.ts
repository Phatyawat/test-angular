import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-sumaryjson',
  templateUrl: './popup-sumaryjson.component.html',
  styleUrls: ['./popup-sumaryjson.component.css']
})
export class PopupSumaryjsonComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PopupSumaryjsonComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
