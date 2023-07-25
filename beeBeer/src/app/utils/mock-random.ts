var randomExt = require("random-ext");
import { PhonyData } from "phonydata";
let instance = new PhonyData(); //https://www.npmjs.com/package/phonydata


export class MockRandom {

    ///////////////BOOLEAN
    public static getBoolean(): boolean {
        return randomExt.boolean();
    }

    public static getBooleanArray(length: number): boolean[] {
        return randomExt.booleanArray(length);
    }

    //////////////NUMBER
    public static getDigito() : number {
        return randomExt.integer(9, 0);
    }

    public static getInteger(min: number, max: number) : number {
        return randomExt.integer(max, min);
    }

    public static getIntegerArray(min: number, max: number, length: number) : number {
        return randomExt.integerArray(length, max, min);
    }

    public static getFloat(min: number, max: number) : number {
        return randomExt.float(max, min);
    }

    public static getFloatArray(min: number, max: number, length: number): number {
        return randomExt.floatArray(length, max, min);
    }

    // public static getHex(length: number): string {
    //     return fakerator.random.hex(length);
    // }

    ////////////////DATE
    public static getDate(): Date {
        return randomExt.date(new Date());
    }

    public static getDateInterval(start: Date, end: Date): Date {
        return randomExt.date(end, start);
    }

    public static getDateIntervalArray(length: number, start: Date, end: Date): Date[] {
        return randomExt.dateArray(length, end, start);
    }

    public static getDatePast(): Date {
        return randomExt.date(new Date(), new Date(1962, 6, 7, 12)); //// noon of 1962-07-07 (7th of July 1962, month is 0-indexed)
    }

    public static getDateFuture(): Date {
        return randomExt.date(new Date(3000, 6, 7, 12), new Date());
    }

    // ///////////////STRINGS
    // public static getLetter(): string {
    //     return jabber.createWord(1);
    // }

    public static getString(): string {
        return randomExt.string(20);
    }

    // public static getWord(): string {
    //     return jabber.createWord(5, true);
    // }

    public static getSentence(): string {
        return instance.loremSentence
    }

    // public static getParagraph(): string {
    //     return jabber.createParagraph(50); 
    // }
    
    // // //Nomes
    // public static getFullName(): string {
    //     return jabber.createFullName();
    // }

    // public static getFristName(): string {
    //     return fakerator.names.firstName();
    // }

    // public static getLastName(): string {
    //     return fakerator.names.lastName();
    // }

    // public static getPrefixName(): string {
    //     return fakerator.names.prefix()	
    // }

    // public static getSuffixName(): string {
    //     return fakerator.names.suffix()	
    // }

    // //empresa
    // public static getCompany(): string {
    //     return fakerator.company.name();
    // }

    // public static getSuffixCompany(): string {
    //     return fakerator.company.suffix();
    // }

    // //internet
    // public static getUserName(): string {
    //     return fakerator.internet.userName();
    // }

    // public static getPassword(length: number) {
    //     return fakerator.internet.password(length);
    // }

    // public static getUrl(): string {
    //     return fakerator.internet.url();
    // }

    // public static getEmail(): string {
    //     return fakerator.internet.email();
    // }

    public static getColor(): string {
        return randomExt.color();
    }

    // //localidade
    // public static getEstado(): string {
    //     return casual.state
    // }

    // public static getEstadoCode(): string {
    //     return casual.state_abbr
    // }

    // public static getCidade(): string {
    //     return casual.city 
    // }

    // public static getRua(): string {
    //     return casual.street
    // }

    // public static getEndereco(): string {
    //     return this.getRua + " - Nº:" + this.getInteger(10, 90) + " - " + this.getCidade + ", " + this.getEstado + " - " + this.getEstadoCode;
    // }

    // public static getCEP(): string {
    //     return fakerator.random.masked('999.999.999-99')
    // }

    // /////////////////MASK    
    // public static getTelefone(): string {
    //     return fakerator.random.masked('(99)9 9999-9999')
    // }

    // //"aaa-AAA_999:*" -> "aqa-RPG_932:6"
    // public static getMask(mask : string) {
    //     return fakerator.random.masked(mask)
    // }

}