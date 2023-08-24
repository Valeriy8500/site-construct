import { Button } from "@/shared/ui/button";

export const ErrorWindow = () => (
  <div>
    <h1>An error occurred</h1>
    <Button
      type="button"
      onClick={() => window.location.reload()}
    >
      Try again
    </Button>
  </div>
);
