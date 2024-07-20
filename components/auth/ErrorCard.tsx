import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import BackButton from "./BackButton";
import Header from "./Header";

const ErrorCard = () => {
  return (
    <Card className="w-[400px] shadow-xl">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
      </CardHeader>
      <CardContent>
      </CardContent>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};

export default ErrorCard;
