import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JSONPath } from 'jsonpath-plus';
import { DSLUserwithMorethanOneContract, cable, cableConf } from './enum';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'json-path-test';
  constractor() {}
  ngOnInit(): void {
    console.log('hello islam');
    const cableDataleft = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="Cable")]^^^',
      json: cable,
    });
    const cabledataRight = JSONPath({
      path: '$.relatedAsset[?(@.entityType=="billingAccount")]',
      json: cable,
    });
    const cabledataAllMapping = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="Cable")]^^^.relatedAsset[?(@.entityType=="billingAccount")]',
      json: cableConf,
    });
    const dslData = JSONPath({
      path: '$[*].userAssets[?(@.entityType=="product")].characteristic[?(@.name=="stack" && @.value=="DSL")]^^^',
      json: DSLUserwithMorethanOneContract,
    });

    console.log('cableDataleft', cableDataleft);
    console.log('cableDataRight', cabledataRight);
    console.log('cableDataAllMapping', cabledataAllMapping);
    console.log('dslData', dslData);
  }
}
