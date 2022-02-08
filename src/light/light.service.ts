import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import PromiseSocket from 'promise-socket';

@Injectable()
export class LightService {
  private client = new PromiseSocket();

  async getStatus() {
	 await this.client.connect(IPConfig.port, IPConfig.host).then(res => {
		this.client.socket.write(Light.status, () => {
		});
 this.client.socket.on('data', function(data) {
		Logger.log('response:' + data.toString());
		return data.toString();
		});
		 this.client.socket.end();

	});
  }

  async lightOn() {
		Logger.log('send command on');
		await this.client.connect(IPConfig.port, IPConfig.host).then(res => {
			this.client.socket.write(Light.on, () => {
			});
			this.client.socket.on('data', function(data) {
				Logger.log('response:' + data.toString());
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
				Logger.log('response:' + data.toString());
			});
			this.client.socket.end();
		});
	}
}
