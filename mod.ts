import { parse } from "./deps.ts";
import { rates } from "./types.ts";

function convert(rates:any, from:string, to:string, amount: number): number {
    return amount / rates[from] * rates[to];
}

let args = parse(Deno.args);

console.log(convert(rates, args.f, args.t, args.a));
