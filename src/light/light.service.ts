import { Injectable, Logger } from '@nestjs/common';
import net from 'net';
import {PromiseSocket} from 'promise-socket';
import { IPConfig, Light } from './light.constants';
const socket = new net.Socket();
const client = new PromiseSocket(socket);
@Injectable()
export class LightService {


  async getStatus(){
	client.connect(IPConfig.port, IPConfig.host).then(res => {
		socket.write(Light.status , function () {Logger.log('Send command status');
		});
		socket.on('data', function (data) {
		Logger.log('response:' + data.toString());
		if (data.toString() === '00000000') {
		Logger.log('status 0ff');
			socket.end();
		}
		});
	});
  }
  async lightOn(){
  return 'on';
  }
}
