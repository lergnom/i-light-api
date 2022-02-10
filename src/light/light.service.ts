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
	// 	Logger.log('send command status');
	// 	this.client.connect(IPConfig.port, IPConfig.host).then(() => {
	// 	this.client.socket.write(Light.status, () => {
	// 	});
	// this.client.socket.on('data', (data) => {
	// 	this.getState(data.toString());
	// 	});
	// }).catch(reason => {
	// 	Logger.log('reason ' + reason);
	// 	});
	}

  async lightOn() {
		await this.getConnect(Light.on);
		// Logger.log('send command on');
		//  this.client.connect(IPConfig.port, IPConfig.host).then(() => {
		// 	this.client.socket.write(Light.on, () => {
		// 	});
		// 	this.client.socket.on('data', (data) => {
		// 		this.getState(data.toString());
		// 	});
		// 	this.client.socket.end();
		// }).catch(reason => {
		// 	 Logger.log('reason ' + reason);
		//  });
	}

	async lightOff() {
		await this.getConnect(Light.off);
	// 	Logger.log('send command off');
	// 	this.client.connect(IPConfig.port, IPConfig.host).then(res => {
	// 		this.client.socket.write(Light.off, () => {
	// 		});
	// 		this.client.socket.on('data', (data) => {
	// 			this.getState(data.toString());
	// 		});
	// 		this.client.socket.end();
	// 	}).catch(reason => {
	// 		Logger.log('reason ' + reason);
	// 	});
	}
}
