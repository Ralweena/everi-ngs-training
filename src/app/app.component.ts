// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule, NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })

// export class AppComponent {
//   fname = "Ralweena"
//   tymVar = 21
//   salary = 20000
//   seasonVar = "Summer"
//   StsVar = false

//   tripAryVar = ["Surathkal Beach", "Panambur Beach", "City Center", "Everi Office", "SJEC", "Pilikula"]

//   clrAryVar = ['yellow', 'cyan', 'pink', 'plum', 'lime']



//   ngOnInit() {
//     setInterval(() => this.chgThmFnc(), 1000);
//   }

//   ngOnDestroy() {
//   }
  
//   prodAryVar = [
//     {
//       "NamVak" : "Sriya",
//       "Prod" : "Tesla EV Car",
//       "Cost" : 5000000
//     },
//     {
//       "NamVak" : "Navya",
//       "Prod" : "Brigade Flat",
//       "Cost" : 1000000
//     },
//     {
//       "NamVak" : "Riya",
//       "Prod" : "Ather 450",
//       "Cost" : 150000
//     },
//     {
//       "NamVak" : "Serena",
//       "Prod" : "Home Theator",
//       "Cost" : 40000
//     },
//     {
//       "NamVak" : "Jayanth",
//       "Prod" : "HP Envy 360",
//       "Cost" : 150000
//     }
//   ]

//   sortByName(a:any, b:any) {
//     return a.NamVak.localeCompare(b.NamVak) 
//   }

//   sortByCost(a:any, b:any) {
//     return a.Cost - b.Cost 
//   }

//   filterCost() {
//     return this.prodAryVar.filter(item => item.Cost <1000000)
//   }

//   totalCost() {
//     return this.prodAryVar.reduce((sum, item) => sum + item.Cost,0)    
//   }

//   abrCost(a:number) : string {

//     if (a >= 10000000) {
//         return (a / 10000000).toFixed(2) + "Cr";
//     } 
//     else if (a >= 100000) {
//         return (a / 100000).toFixed(2) + "L";
//     } else if (a >= 1000) {
//         return (a / 1000).toFixed(2) + "K";
//     } else {
//         return a.toString(); 
//     }
      
//   }

//   NamBtnClkFnc() {
//     alert("Why did u click on me")
//   }


//   stsItmAry = ["To Do", "In Progress", "Completed"]

//   taskAry = [
//     {
//       tskName : "Task 1",
//       detail : "",
//       sysItm : "To Do"
//     },
//     {
//       tskName : "Task 2",
//       detail : "",
//       sysItm : "To Do"
//     },
//     {
//       tskName : "Task 3",
//       detail : "",
//       sysItm : "To Do"
//     },
//     {
//       tskName : "Task 4",
//       detail : "",
//       sysItm : "To Do"
//     },
//     {
//       tskName : "Task 5",
//       detail : "",
//       sysItm : "To Do"
//     }
//   ]

//   DrgOvrFnc(event:DragEvent) {
//     event?.preventDefault
//   }

//   DrpStpFuc(event:DragEvent, stsItmVar:string) {

//   }

//   GetTskFltFuc(stsItmVar:string) {

//   }

//   DrgStrFnc(event:DragEvent, tskItmVar:string) {

//   }

//   index = 0
//   currentColor = this.clrAryVar[this.index]
  
//   chgThmOnBtnClkFnc() {
//     this.StsVar = !this.StsVar
//   }
  
//   chgThmFnc() {
//     this.index = (this.index + 1) % this.clrAryVar.length;
//     this.currentColor = this.clrAryVar[this.index];
//   } 

//   FormIptVar = {
//     NamIptVak : "",
//     MblIptVak : "",
//     MylIptVak : ""
//   }

//   TodoAryVar = [
//     "Play Cricket",
//     "Sleeping",
//     "Medidate",
//     "Watch movies",
//     "Learn"
//   ]

//   addTodo(NamFomPsgVav:NgForm) {
//     if(this.FormIptVar.NamIptVak.trim()) {
//       this.TodoAryVar.push(this.FormIptVar.NamIptVak); // To append at the end; To remove pop; 
//       // this.TodoAryVar.unshift(this.FormIptVar.NamIptVak); // To add on top; To remove shift

//       // Add an item using splice
//       // this.TodoAryVar.splice(2,0,
//       //   this.FormIptVar.NamIptVak)

//       this.FormIptVar.NamIptVak = '';
//     }
    
//     NamFomPsgVav.resetForm()
//   }
  
//   AddBtn : string = "Add"

//   editTodo(a:number) {
    
//     // Update an item using splice
//     this.FormIptVar.NamIptVak = this.TodoAryVar[a];
//     this.AddBtn = "Update";

//      this.TodoAryVar.splice(a,1)
//      this.addTodo

//   }


//   delTodo(a:number) {
//     // Del an item using splice
//     if(confirm("Are you sure you want to delete")){
      
//       this.TodoAryVar.splice(a,1)
//     }
//   }

//   <form name="NamFomVav" #NamFomVav="ngForm">
//   <h1>Add Form</h1>
//   <label>
//     <input type="text" 
//       name="NamIptVav" 
//       #NamIptVav="ngModel" 
//       [(ngModel)]="NamFomVar.NamIptVak" 
//       placeholder="Enter Todo"
//       required 
//       minlength="3"
//       maxlength="10">
//     <div *ngIf="NamIptVav.invalid && 
//     (NamIptVav.touched || NamIptVav.dirty)" class="ErrMsgCls">
//       <span *ngIf="NamIptVav.errors?.required">Todo is required.</span>
//       <span *ngIf="NamIptVav.errors?.minlength">Min length shud be 3</span>
//       <span *ngIf="NamIptVav.errors?.maxlength">Max length shud be 10</span>
//     </div>
//   </label>
//   <br>
//   <br>
//   <div *ngIf="EdtIdxVar < 0; then DspAddBtn else DspUptBtn"></div>
//     <ng-template #DspAddBtn>
//       <button (click)="AddBtnFnc(NamIptVav)"
//         type="button">Add</button>
//     </ng-template>
//     <ng-template #DspUptBtn>
//       <button (click)="UptBtnFnc(NamIptVav)"
//         type="button">Update</button>
//     </ng-template>
// </form>
// <hr>
// <h1>Todo List</h1>
// <ul *ngFor="let ItmVar of TodoAryVar; let IdxVar=index">
//   <li>{{ItmVar}}
//     <button (click)="EdtBtnFnc(IdxVar)">Edit</button>
//     <button (click)="DelBtnFnc(IdxVar)">Del</button>
//   </li>
// </ul>


// NamFomVar={
//     NamIptVak:""
//   }

//   TodoAryVar = [
//     "Play Cricket",
//     "Watch Movie",
//     "Pilimigrage Center",
//     "Mediation",
//     "Sleep"
//   ]

//   AddBtnFnc(NamIptPsgVav:NgModel)
//   {
//     this.TodoAryVar.unshift(
//       this.NamFomVar.NamIptVak)
//     // Del an item using splice
//     // this.TodoAryVar.splice(2,1)

//     // Add an item using splice
//     // this.TodoAryVar.splice(2,0,
//     //   this.FomIptVar.NamIptVak)

//       // Update an item using splice
//       this.TodoAryVar.splice(2,1,
//         this.NamFomVar.NamIptVak)
//       // this.NamFomVar.NamIptVak = ""
//       NamIptPsgVav.reset('')
//       // NamFomPsgVav.resetForm()
//   }

  

//   EdtIdxVar = -1

//   EdtBtnFnc(IdxVar:number)
//   {
//     this.EdtIdxVar = IdxVar
//     this.NamFomVar.NamIptVak = this.TodoAryVar[IdxVar]
//   }

//   UptBtnFnc(NamIptPsgVav:NgModel)
//   {
//     this.TodoAryVar[this.EdtIdxVar] = this.NamFomVar.NamIptVak
//     this.EdtIdxVar = -1
//     NamIptPsgVav.reset('')
//   }

//   DelBtnFnc(IdxVar:number)
//   {
//     if(confirm("Do u really wannu del"))
//       this.TodoAryVar.splice(IdxVar,1)
//   }
// }

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prodAryVar! : any


  constructor(public HttpConnection: HttpClient) { 
    this.HttpConnection.get("http://localhost:8000/prod")
    .subscribe(
      ResRsgVar => { console.log(ResRsgVar); 
        this.prodAryVar=ResRsgVar
        this.getProdFnc()
      }
    )
  }

  getProdFnc()
  {
    this.HttpConnection.get("http://localhost:8000/prod")
    .subscribe(
      ResRsgVar =>
      {
        console.log(ResRsgVar)
        this.prodAryVar = ResRsgVar
      })
  }
 
  AddProdFnc(NamFomVav:NgForm)
  {
    this.HttpConnection.post(
      "http://localhost:8000/prod",
      this.NamFomVar
    )
        .subscribe(
          ResRsgVar =>
          {
            console.log(ResRsgVar)
            NamFomVav.resetForm()
            this.getProdFnc()
          })
  }


  DeleteProdFunc() {

  }
 

  NamFomVar = {
    NamCol: "",
    ProdCol: "",
    CostCol: 0
  };

  EdtIdxVar = -1;
 
  editRow(index: number) {
    const selectedRow = this.prodAryVar[index];
    this.NamFomVar.NamCol = selectedRow.NamCol;
    this.NamFomVar.ProdCol = selectedRow.ProdCol;
    this.NamFomVar.CostCol = selectedRow.CostCol;
    this.EdtIdxVar = index;
  }
 
  deleteRow(index: number, UidCol: number) {
    if (confirm("Do you really want to delete?")) {
      this.HttpConnection.delete(`http://localhost:8000/prod/${UidCol}`)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Deleted:', ResRsgVar);
            this.getProdFnc();
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });
    }
  }
 
  UptProdFnc(index: number) {
    if (this.EdtIdxVar >= 0) {
      const updatedRow = this.prodAryVar[index];
      updatedRow.NamCol = this.NamFomVar.NamCol;
      updatedRow.ProdCol = this.NamFomVar.ProdCol;
      updatedRow.CostCol = this.NamFomVar.CostCol;
 
      this.HttpConnection.put(`http://localhost:8000/prod/${updatedRow.UidCol}`, updatedRow)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Updated:', ResRsgVar);
            this.getProdFnc();
            this.resetForm();
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });
 
      this.EdtIdxVar = -1;
    }
  }
 
  // addRow() {
  //   if (this.NamFomVar.NamIptVak && this.NamFomVar.prod && this.NamFomVar.cost > 0) {
  //     this.verifyTable.push({
  //       NamVak: this.NamFomVar.NamIptVak,
  //       prod: this.NamFomVar.prod,
  //       cost: this.NamFomVar.cost
  //     });
  //     this.resetForm();
  //   } else {
  //     alert("Please fill in all fields before adding.");
  //   }
  // }
 
  resetForm() {
    this.NamFomVar = {
      NamCol : "",
      ProdCol : "",
      CostCol: 0
    };
  }
}