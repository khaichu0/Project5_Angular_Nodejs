export class Tamgiac{
    a:any;
    b:any;
    constructor(A:number,B:number){
        this.a=A;
        this.b=B;
        
    }
    DienTich(){
        return 1/2*(this.a*this.b);
    }



}
export class HinhChop extends Tamgiac{
    h:any
    constructor(H:number, A:number,B:number){
        super(A,B);
        this.h=H;
    }
    
    TheTich(){
        let s=this.DienTich()
        return 1.0/3*(this.h*s);
    }

}