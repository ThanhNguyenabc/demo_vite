import { createFileRoute, Link } from "@tanstack/react-router";

const MainPage = () => {
  return (
    <div>
      Thanh nguyen asdada thui nha
      <Link to={"/about"}>about</Link>
      <Link to={"/get-pricing"}>GET PRICING</Link>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: MainPage,
});

export default MainPage;
