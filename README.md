# Api for device from Aliexpress 
### [LAN Ethernet 2 Way Relay Board Delay Switch TCP/UDP Controller Module WEB Server l29k](https://aliexpress.ru/item/33050514379.html?_ga=2.242428992.316938242.1645105790-376335923.1618405037&_gac=1.120285818.1641815546.CjwKCAiAz--OBhBIEiwAG1rIOgmPigZdn3MVOJuo-jF4RMoMRjiF6-5deDkZ-otm3hgyZZoZLsSZYRoCA3cQAvD_BwE&sku_id=67379683442&spm=a2g39.orderlist.0.0.5c194aa6WJs8iX)
***
![Relay module](./img/lANRelayBoardSwitch.jpg)
***
**Description:**
1. Change ip address. For example download this [link](./img/SR-201.zip)
2. Create in folder src/light new file: light.constants.ts:
> export const IPConfig = {
host: '127.0.0.1',
port: 3000 
};
>
>export type LightType = {
status: string,
on: string,
off: string,
};
>
>export const Light: LightType = {
status: '00',
on: '11',
off: '21'
};
3. Git clone and docker-compose up -d
4. After you may manage this relay from api POST:
> http://127.0.0.1:3000/status
> 
> http://127.0.0.1:3000/light/on
> 
> http://127.0.0.1:3000/light/off