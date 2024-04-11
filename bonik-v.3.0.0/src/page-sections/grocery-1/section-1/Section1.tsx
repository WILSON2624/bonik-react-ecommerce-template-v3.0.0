import { H1 } from "@component/Typography";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
// STYLED COMPONENT
import { Wrapper } from "./styles";

export default function Section1() {
  return (
    <Wrapper>
      <H1>
        Get your grocery delivery <br /> within 30 minutes
      </H1>

      <div className="searchBox">
        <TextField
          fullwidth
          placeholder="Searching for..."
          endAdornment={<Button>Search</Button>}
        />
      </div>
    </Wrapper>
  );
}
