
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";

export default function Page(): JSX.Element {
  return (
    <div>
      hello from  web
      <Button appName="web app">
        Hi there
      </Button>
    </div>
  );
}
