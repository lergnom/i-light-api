import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import PromiseSocket from 'promise-socket';

@Injectable()
export class LightService {
  private client = new PromiseSocket();
	private status: string;

	getState(st:string){
		st === '10000000' ? this.status = 'on' : this.status ='off';
	 return this.status;
 }
 getStatusNow(){
	 Logger.log('check status');
		return this.status;
 }

 async getConnect(cmd: string ){
	 Logger.log(`send command   ${cmd}`);
	 this.client.connect(IPConfig.port, IPConfig.host).then(() => {
		 this.client.socket.write(cmd, () => {
		 });
		 this.client.socket.on('data', (data) => {
			 this.getState(data.toString());
		 });
	 }).catch(reason => {
		 Logger.log('reason ' + reason);
	 });
 }

	async getStatus() {
		await this.getConnect(Light.status);
	}

  async lightOn() {
		await this.getConnect(Light.on);
	}

	async lightOff() {
		await this.getConnect(Light.off);
	}
}
