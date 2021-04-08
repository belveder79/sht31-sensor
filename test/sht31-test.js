process.env.NODE_ENV = 'test';

const chai   = require('chai');
const SHT31 = require('../SHT31.js');
const expect = chai.expect;

const options = {
  i2cBusNo   : 4, // defaults to 1
  i2cAddress : SHT31.SHT31_DEFAULT_I2C_ADDRESS() // defaults to 0x44
};

describe('sht31-sensor', () => {
  it('it should communicate with the device', (done) => {
    const sht31 = new SHT31(options);
    expect(sht31).to.be.an.instanceof(SHT31);
    sht31.init()
      .then((chipId) => {
        expect(chipId).to.be.equal(SHT31.CHIP_ID_SHT31());
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it('it should receive valid sensor data', (done) => {
    const sht31 = new SHT31(options);
    expect(sht31).to.be.an.instanceof(SHT31);
    sht31.init()
      .then((chipId) => {
        expect(chipId).to.be.equal(SHT31.CHIP_ID_SHT31());
        return sht31.readSensorData();
      })
      .then((data) => {
        console.log(`SHT31 sensor data: ${JSON.stringify(data)}`);
        expect(data).to.have.all.keys('temperature_C', 'humidity');
        expect(data.temperature_C).to.be.within(-40, 125); // per SHT31 datasheet operating range
        expect(data.humidity).to.be.within(0, 100); // per SHT31 datasheet operating range
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
