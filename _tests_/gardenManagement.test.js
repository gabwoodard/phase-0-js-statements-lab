const { temperature, timeOfDay, soilMoisture } = require('../gardenManagement')

test('provided variables exist with expected initial values', () => {
  expect(temperature).toBe(90)
  expect(timeOfDay).toBe('morning')
  expect(soilMoisture).toBe(30)
})
module.exports = { temperature, timeOfDay, soilMoisture }