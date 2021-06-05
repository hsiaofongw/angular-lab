import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const exampleVersionInfo = {
  "dateTimestamp": 1622930006023,
  "dateUTC": "2021-06-05T21:53:26.023Z",
  "dateLocale": "6/6/2021, 5:53:26 AM",
  "gitBranchInfo": "ref: refs/heads/master",
  "gitCommitId": "a13df318c4b8631e09c01793dda0317dccf847a1",
  "humanVersion": "0.0.1"
};

type VersionInfo = typeof exampleVersionInfo;

/** 提供获取版本信息服务 */
@Injectable({
  providedIn: 'root'
})
export class RetrieveVersionInfoService {

  constructor(
    private http: HttpClient,
  ) { }

  getVersionInfo(): Observable<VersionInfo> {
    return this.http.get<VersionInfo>('assets/versionInfo.json');
  }
}
