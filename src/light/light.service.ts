import { Injectable, Logger } from '@nestjs/common';
import { IPConfig, Light } from './light.constants';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class LightService {
  private client: ClientProxy;

  constructor() {
	this.client = ClientProxyFactory.create({
		transport: Transport.TCP,
		options: { host: IPConfig.host, port: IPConfig.port }
	});
  }

  async getStatus() {
	Logger.log('check getStatus');
	return this.client.send('status', Light.status);
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
  }

  async lightOn() {
	return 'on';
  }
}
