import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import PromiseSocket from 'promise-socket';

@Injectable()
export class LightService {
  private client = new PromiseSocket();
	private status: string;

	getState(st:string){
	 this.status = st;
	 return this.status;
 }
 getStatusNow(){
	 Logger.log('check status');
		return this.status;
 }

	async getStatus() {
		Logger.log('send command status');
		this.client.connect(IPConfig.port, IPConfig.host).then(() => {
		this.client.socket.write(Light.status, () => {
		});
	this.client.socket.on('data', (data) => {
		this.getState(data.toString());
		});
	}).catch(reason => {
		Logger.log('reason ' + reason);
		});
	}

  async lightOn() {
		Logger.log('send command on');
		 this.client.connect(IPConfig.port, IPConfig.host).then(() => {
			this.client.socket.write(Light.on, () => {
			});
			this.client.socket.on('data', (data) => {
				this.getState(data.toString());
			});
			this.client.socket.end();
		}).catch(reason => {
			 Logger.log('reason ' + reason);
		 });
	}

	async lightOff() {
		Logger.log('send command off');
		this.client.connect(IPConfig.port, IPConfig.host).then(res => {
			this.client.socket.write(Light.off, () => {
			});
			this.client.socket.on('data', (data) => {
				this.getState(data.toString());
			});
			this.client.socket.end();
		}).catch(reason => {
			Logger.log('reason ' + reason);
		});
	}
}
