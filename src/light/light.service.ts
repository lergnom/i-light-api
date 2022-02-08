import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import PromiseSocket from 'promise-socket';

@Injectable()
export class LightService {
  private client = new PromiseSocket();
	public status: string;



  // async getStatus() {
	// 	const st = {
	// 		s:'1'
	// 	};
	// 	await this.client.connect(IPConfig.port, IPConfig.host).then(res => {
	// 	this.client.socket.write(Light.status, () => {
	// 	});
 	// this.client.socket.on('data', function(data) {
	// 	Logger.log('response:' + data.toString());
	// 	st.s = data.toString();
	// 	});
	// });
	// setTimeout(()=>{
	// 	return st.s;
	// },1000);
	//
  // }

	getState(st:string){
	 this.status = st;
	 return this.status;
 }
 getStatusNow(){
		return this.status;
 }

	async getStatus() {
		this.client.connect(IPConfig.port, IPConfig.host).then(() => {
		this.client.socket.write(Light.status, () => {
		});
	this.client.socket.on('data', (data) => {
		this.getState(data.toString());
		});
	});
	}
	

  async lightOn() {
		Logger.log('send command on');
		await this.client.connect(IPConfig.port, IPConfig.host).then(res => {
			this.client.socket.write(Light.on, () => {
			});
			this.client.socket.on('data', function(data) {
			});
			this.client.socket.end();
		});
	}

	async lightOff() {
		Logger.log('send command off');
		await this.client.connect(IPConfig.port, IPConfig.host).then(res => {
			this.client.socket.write(Light.off, () => {
			});
			this.client.socket.on('data', function(data) {
			});
			this.client.socket.end();
		});
	}
}
