let interval: any = null;
import loading from "loading-cli";

let load: any = null;
export const startLoad = (prompt: string = "Loading...") => {
  load = loading({
    text: prompt,
  }).start();
};

export const stopLoad = (prompt: string = "Done!") => {
  if (load) {
    load.stop();
  }
  console.log(prompt);
};
