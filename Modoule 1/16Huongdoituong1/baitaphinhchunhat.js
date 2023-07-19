class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    acreageRectangle(acreage){
        this.acreage = this.width * this.height;
        return `Diện tích hình chữ nhật là : ${this.acreage}`
    }
    aperimeterRectangle(perimeter){
        this.perimeter = (this.width + this.height)*2;
        return `Chu vi hình chữ nhật là : ${this.acreage}`
    }
}

let a = new Rectangle(25 , 50);
// a.acreageRectangle();
// console.log(a);

a.aperimeterRectangle();
console.log(a);