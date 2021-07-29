import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',

})
export class ServersComponent  {
allowNewServer = false;
serverCreationStatus = "no server was created";
serverName = 'TestServer';
servercreated = false;
serverStatus: string = 'offline'
constructor(){
this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getServerStatus(){
    return this.serverStatus;
  }

onCreateServer()
{
  this.servercreated = true;
  this.serverCreationStatus = 'server was created! name is: ' + this.serverName ;
}
  onUpdateServerName(event:any)
  {
console.log(event)
{
  this.serverName = (<HTMLInputElement>event.target).value;
};
  }

}
