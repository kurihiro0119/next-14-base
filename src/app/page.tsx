import { Button } from "./_components/Button";
import "./globals.css";

export default function Home()
{
  return (
    <div className="items-center">
      <Button size='small'>
        Click
      </Button>
      <Button size='medium'>
        Click
      </Button>
      <Button size='large'>
        Click
      </Button>
    </div>
  );
}
