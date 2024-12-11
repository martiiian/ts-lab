import {PromptService} from "./core/prompt/prompt.service";

export class App {
  async run() {
    const res = await (new PromptService()).input<number>('Число', 'number')
    // eslint-disable-next-line no-console
    console.log('res', res);
  }
}

const app = new App();
app.run();