let distancia = 0
basic.showIcon(IconNames.Heart)
neZha.setServoAngel(neZha.ServoTypeList._180, neZha.ServoList.S1, 180)
basic.forever(function () {
    distancia = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (distancia > 3 && distancia < 20) {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 240)
        basic.pause(5000)
    } else {
        neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 180)
    }
})
