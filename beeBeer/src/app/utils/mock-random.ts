var randomExt = require("random-ext");
var Fakerator = require("fakerator");
var fakerator = Fakerator("pt-BR");

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
        return fakerator.random.digit();
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
        return fakerator.random.hex(length);
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
        return fakerator.date.past(new Date());
    }

    public static getDateFuture(): Date {
        return fakerator.date.future(new Date());
    }

    ///////////////STRINGS
    public static getLetter(): string {
        return fakerator.random.letter();
    }

    public static getString(): string {
        return fakerator.random.string(length);
    }

    public static getWord(): string {
        return fakerator.lorem.word();
    }

    public static getSentence(): string {
        return fakerator.lorem.sentence()
    }

    public static getParagraph(): string {
        return fakerator.lorem.paragraph()
    }
    
    //Nomes
    public static getFullName(): string {
        return fakerator.names.name();
    }

    public static getFristName(): string {
        return fakerator.names.firstName();
    }

    public static getLastName(): string {
        return fakerator.names.lastName();
    }

    public static getPrefixName(): string {
        return fakerator.names.prefix()	
    }

    public static getSuffixName(): string {
        return fakerator.names.suffix()	
    }

    //empresa
    public static getCompany(): string {
        return fakerator.company.name();
    }

    public static getSuffixCompany(): string {
        return fakerator.company.suffix();
    }

    //internet
    public static getUserName(): string {
        return fakerator.internet.userName();
    }

    public static getPassword(length: number) {
        return fakerator.internet.password(length);
    }

    public static getUrl(): string {
        return fakerator.internet.url();
    }

    public static getEmail(): string {
        return fakerator.internet.email();
    }

    public static getColor(): string {
        return fakerator.internet.color();
    }

    //localidade
    public static getEstado(): string {
        return fakerator.address.country();
    }

    public static getEstadoCode(): string {
        return fakerator.address.countryCode();
    }

    public static getCidade(): string {
        return fakerator.address.city();
    }

    public static getRua(): string {
        return fakerator.address.streetName();
    }

    public static getEndereco(): string {
        return fakerator.address.street();
    }

    public static getCEP(): string {
        return fakerator.random.masked('999.999.999-99')
    }

    /////////////////MASK    
    public static getTelefone(): string {
        return fakerator.random.masked('(99)9 9999-9999')
    }

    //"aaa-AAA_999:*" -> "aqa-RPG_932:6"
    public static getMask(mask : string) {
        return fakerator.random.masked(mask)
    }

}