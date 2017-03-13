import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';

const toolbarOptions:any = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 },{ 'header': 3 },{ 'header': 4 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': ['red','teal','blue','grey','black','white'] }, { 'background': ['red','teal','blue','grey','black','white'] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link', 'image'],
  ['clean']                                         // remove formatting button
];

@Component({
  selector: 'cms-personal-sendmessage-container',
  templateUrl:  `./sendmessage.html`,
})
export class CMSPersonalSendMessageComponent implements AfterViewInit{
	editor:any;
	ngAfterViewInit(): void {
		this.editor = new Quill('#editor', {
		  modules: { toolbar: toolbarOptions },
		  theme: 'snow'
		});
		//console.log(this.editor.getContents()); 获取内容
		//console.log(this.editor.getText());  获取文本内容
		
	}
	handleSendMessage():void {
		// console.log(this.editor.getText());
		// console.log(this.editor.getContents());
		// this.editor.setText('Hello\n');
		// this.editor.setContents([
		//   { insert: 'Hello ' },
		//   { insert: 'World!', attributes: { bold: true } },
		//   { insert: 'World!', attributes: { color: "red" } },
		//   { insert: '\n' }
		// ]); 设置内容
	}
}
