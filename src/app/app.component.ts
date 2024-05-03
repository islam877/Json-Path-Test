import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JSONPath } from 'jsonpath-plus';
import { DSLUserwithMorethanOneContract, cable, cableConf } from './enum';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'json-path-test';

  fillterValue: any = '';
  fillterResult: any = 'no data ';
  jsonData: any;

  cableDataleft: any;
  cabledataRight: any;
  cabledataAllMapping: any;
  dslData: any;
  constractor() {}
  ngOnInit(): void {
    console.log('hello islam');
    this.cableDataleft = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="Cable")]^^^',
      json: cable,
    });
    this.cabledataRight = JSONPath({
      path: '$.relatedAsset[?(@.entityType=="billingAccount")]',
      json: cable,
    });
    this.cabledataAllMapping = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="Cable")]^^^.relatedAsset[?(@.entityType=="billingAccount")]',
      json: cableConf,
    });
    this.dslData = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="DSL")]^^^',
      json: DSLUserwithMorethanOneContract,
    });
  }

  filterByValue() {
    try {
      var parsedData = JSON.parse(this.jsonData);
      console.log('Parsed JSON data:', parsedData);
      // Now you can work with the parsed data
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
    this.fillterResult = JSONPath({
      path: this.fillterValue,
      json: parsedData,
    });
  }
}
