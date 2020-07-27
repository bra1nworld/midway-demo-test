import { Context, config, controller, get, provide } from "midway";

@provide()
@controller("/")
export class HomeController {
  @config("test")
  test: any;

  @config("welconMsg")
  welcomeMsg: string;
  constructor(@config() private middleware: []) {
    console.log("constructor:");

    console.log(this.test);
    console.log(this.welcomeMsg);
    console.log(this.middleware);
  }

  @get("/")
  public index(ctx: Context): void {
    console.log("index:");

    console.log(this.test);
    console.log(this.welcomeMsg);
    console.log(this.middleware);

    ctx.body = `${this.test} - `;
  }

  @get("/ping")
  public ping(ctx: Context): void {
    ctx.body = "OK";
  }
}
