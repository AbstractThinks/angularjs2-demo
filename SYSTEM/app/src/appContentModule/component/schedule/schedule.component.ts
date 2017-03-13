import {
	Component,
	ViewChild
} from '@angular/core';


// import { UrlService } from '../../../appServiceModule/urlService.component';
@Component({
	selector: 'schedule-component',
	templateUrl:  './schedule.component.html',
	styles: [`

    div.scroll-list {

      overflow: auto;

      max-height: 70vh;

    }

    

    .drag-over-border {

      border: #ff525b dashed 2px;

    }

    

    .drag-target-border {

       border: #00bfff dashed 2px;

    }



    .drag-target-border-green {

       border: #3c763d dashed 2px;

    }



    .drag-handle {

        cursor: move;

    }

   `

    ]
})
export class ContentScheduleComponent {
	vegetables = [

        {name: "Carrot", type: "vegetable"},

        {name: "Onion", type: "vegetable"},

        {name: "Potato", type: "vegetable"},

        {name: "Capsicum", type: "vegetable"}];



    fruits = [

        {name: "Apple", type: "fruit"},

        {name: "Orange", type: "fruit"},

        {name: "Mango", type: "fruit"},

        {name: "Banana", type: "fruit"},

        {name: "Pear", type: "fruit"}];



    droppedFruits:any = [];

    droppedVegetables:any = [];

    droppedItems:any = [];
	constructor() {

	}
	 onFruitDrop(e: any) {

        this.droppedFruits.push(e.dragData);

        this.removeItem(e.dragData, this.fruits);

    }



    onVegetableDrop(e: any) {

        this.droppedVegetables.push(e.dragData);

        this.removeItem(e.dragData, this.vegetables);

    }



    onAnyDrop(e: any) {

        this.droppedItems.push(e.dragData);



        if(e.dragData.type === 'vegetable')

            this.removeItem(e.dragData, this.vegetables);

        else

            this.removeItem(e.dragData, this.fruits);

    }



    removeItem(item: any, list: Array<any>) {

        let index = list.map((e) => {

            return e.name

        }).indexOf(item.name);

        list.splice(index, 1);

    }
}
