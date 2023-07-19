class SwitchButtom{
    constructor(status1){
        this.status1 = status1;
    }
    SwitchOn(switchbuttom){
        this.status1 = true;
    } 
}

class ElectricLamp{
    constructor(status2){
        this.status2 = status2;
    }
}


let onbuttom = new SwitchButtom(true);
onbuttom.SwitchOn();
console.log(onbuttom);