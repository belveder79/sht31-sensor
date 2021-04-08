# sht31-sensor

[<img src="https://cdn-shop.adafruit.com/970x728/2857-07.jpg" width="100" align="right">](https://www.adafruit.com/product/2857)

Welcome to sht31-sensor, a Node.js I2C module for the Sensirion SHT31 Humidity and Temperature Sensor. Adafruit sells a [SHT31 breakout board](https://www.adafruit.com/product/2652) and [here is the datasheet](http://adafruit.com/images/product-files/2857/Sensirion_Humidity_SHT3x_Datasheet_digital-767294.pdf).

This module uses [i2c-bus](https://github.com/fivdi/i2c-bus) which should provide access with Node.js on Linux boards like the Raspberry Pi Zero, 1, 2, or 3, BeagleBone, BeagleBone Black, or Intel Edison.

Since sht31-sensor needs to talk directly to the I2C bus and requires access to /dev/i2c, you will typically need run Node with elevated privileges or add your user account to the i2c group: ```$ sudo adduser $USER i2c```

## Disclaimer
A lot of code snippets, inspiration and even this README was largely taken from the [BME280](https://github.com/skylarstein/bme280-sensor) implementation from Skylar Stein (actually almost everything). It is recommended to mostly follow the instructions on this site to also get the SHT31 to work on whatever breakout board available. The code was only tested on a custom board implementation available from [AR4 GmbH](https://www.ar4.io).
