import CoffeeVapor from '../../components/CoffeeVapor'
import { Section, Container, Layout } from '../../Layout/Layout.common'

export default function Home() {
  return (
    <Layout>
      <Section>
        <CoffeeVapor />
      </Section>
      <Section>
        <Container>test1</Container>
      </Section>
      <Section>
        <Container>test1</Container>
      </Section>
    </Layout>
  )
}
