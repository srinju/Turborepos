import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";




export default function Page(): JSX.Element {
  return (
    <div>
      hello from docs app
      <Button appName="docs app">hi there</Button>
      <InputBox />
    </div>
  );
}
