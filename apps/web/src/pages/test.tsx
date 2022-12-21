import { Gradient, TestControl, AllControls } from 'shadergradient'
import { Button, Card, NumberInput, PresetTitles } from 'shadergradient/ui'

// Dom components go here
export default function Page(props) {
  return (
    <div>
      <Button>Button</Button>
      <Card />
      <PresetTitles />
      <TestControl />
      <NumberInput />
      <AllControls isMobile={false} />
    </div>
  )
}

Page.canvas = (props) => (
  <>
    <Gradient
    //  control='query'
    />
  </>
)

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}