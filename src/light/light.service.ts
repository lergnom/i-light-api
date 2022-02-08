import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import PromiseSocket from 'promise-socket';

@Injectable()
export class LightService {
private client = new PromiseSocket();
  async getStatus() {
		
		this.client.connect(IPConfig.port, IPConfig.host).then(res => {
			this.client.socket.write(Light.off, ()=>{
				Logger.log('LIGHT ON');
			});
			// this.socket.write(Light.on , function () {
			// 	Logger.log('light: On');
			// });
  });
	}

  // client.connect(IPConfig.port, IPConfig.host).then(res => {
  // 	socket.write(Light.status , function () {Logger.log('Send command status');
  // 	});
  // 	socket.on('data', function (data) {
  // 	Logger.log('response:' + data.toString());
  // 	if (data.toString() === '00000000') {
  // 	Logger.log('status 0ff');
  // 		socket.end();
  // 	}
  // });
  // });

  async lightOn() {
	Logger.log('send command on');
	// return this.client.send('', Light.on);
  }
}
