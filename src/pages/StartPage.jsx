import { useState, useEffect } from "react";
import StartButton from "../components/buttons/StartButton";
import Loading from "../components/ui/Loading";

function StartPage() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary to-blue-500">
      {isLoading ? <Loading /> : <StartButton />}
    </div>
  );
}

export default StartPage;
