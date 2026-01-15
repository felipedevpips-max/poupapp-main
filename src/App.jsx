import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/SearchInput";
import { Typography } from "./components/Typography";
import { DailyBudget } from "./components/DailyBudget";

import Card from "./components/Card";
import { SavingStatus } from "./components/SavingsStatus";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, Felipe!</Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponivel:</Card.Header>
            <Card.Body>
              <DailyBudget value={200}/>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>Progresso da meta financeira</Card.Header>
            <Card.Body>
              <SavingStatus percent={40}/>
            </Card.Body>
          </Card>

        </section>
      </Main>
    </Container>
  );
}

export default App;
