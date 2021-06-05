import { RetrieveVersionInfoService } from './../../../services/retrieve-version-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-info-demo',
  templateUrl: './version-info-demo.component.html',
  styleUrls: ['./version-info-demo.component.less']
})
export class VersionInfoDemoComponent implements OnInit {

  constructor(
    private versionInfoService: RetrieveVersionInfoService,
  ) { }

  ngOnInit(): void {
    this.versionInfoService.getVersionInfo().subscribe(versionInfo => {
      window.console.log(versionInfo);
    });
  }

}
