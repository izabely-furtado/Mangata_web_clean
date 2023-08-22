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

    public static getHex(length: number): string {
        let retorno = "";
        for (let i = 0; i < length; i++) {
            retorno += instance.hexUpper;
          }
        return instance.hexUpper;
    }

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
    public static getLetter(): string {
        return instance.letterLower;
    }

    public static getString(): string {
        return randomExt.string(20);
    }

    public static getWord(quantity: number): string {
        return instance.words(quantity);
    }

    public static getSentence(): string {
        return instance.loremSentence
    }
    
    // // //Nomes
    public static getName(): string {
        return instance.givenName;
    }

    public static getFullName(): string {
        return instance.personName;
    }

    public static getNameFemale(): string {
        return instance.givenNameFemale;
    }

    public static getNameMale(): string {
        return instance.givenNameMale;
    }

    // //internet
    public static getUserName(): string {
        return MockRandom.getName() + "_" + MockRandom.getName();
    }

    public static getPassword(length: number) {
        return MockRandom.getWord(length);
    }

    public static getUrl(): string {
        return MockRandom.getUserName() + ".com.br";
    }

    public static getEmail(): string {
        return MockRandom.getUserName() + "@email.com";
    }

    public static getColor(): string {
        return randomExt.color();
    }

    public static getColorName(): string {
        return instance.cssColorName;
    }

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