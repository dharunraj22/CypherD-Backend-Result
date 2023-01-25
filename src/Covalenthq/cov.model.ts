export class Product{
    constructor(
        public address:string,
        public result:any){}
}

export class items{
    constructor(
        public name:string,
        public symbol:string,
        public decimals:string,
        public contactAddress:String,
        public contactDecimals:String,
        public logo:String,
        public balance:number,
        public balanceinUSD:number
    ){}
}