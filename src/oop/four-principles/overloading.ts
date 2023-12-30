class ARRAY {

    arr: Array<string>;

    public remove(idx: number): void;
    public remove(obj: string): void;
    public remove(target: number | string): void {
        if(typeof target === "number") {
            // remove by index
        }
        else {
            // remove by string
        } 
    }
}