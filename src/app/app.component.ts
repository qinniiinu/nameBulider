import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'name-creater';
  cr = false;
  operation = false;
  flow = false;
  confirm = false;
  update = false;
  issue = false;
date:Date = new Date()

  crName = '防火牆申請規則';

  build(val?: any) {
    console.log(val)
  this.cr = false;
  this.operation = false;
  this.flow = false;
  this.confirm = false;
  this.update = false;
  if (val === 'cr') {
    this.cr = true;
  } else if (val === 'operation') {
    this.operation = true;
  } else if (val === 'flow') {
    this.flow = true;
  } else if (val === 'confirm') {
    this.confirm = true;
  } else if (val === 'update') {
    this.update = true;
  }

    this.title =
      `[${this.crName}]` +
      `${this.cr ? '需求文件01_' : ''}` +
      `${this.operation ? '操作文件01_' : ''}` +
      `${this.flow ? '流程圖_' : ''}` +
      `${this.confirm ? '需求確認_' : ''}` +
      `${this.update ? '需求更新_' : ''}` +
      `${this.issue ? '[ISSUE]' : ''}` +
      `原本的檔案名稱`
      ;
  }
}
