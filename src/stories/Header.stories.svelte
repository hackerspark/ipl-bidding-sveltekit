<script>
  import '../global.css';

  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import Header from '../lib/components/Header.svelte';
</script>

<Meta
  title="Example/Header"
  component={Header}
  argTypes={{
    title: { control: 'text' },
  }}
/>

<Template let:args>
  <Header {...args} />
</Template>

<Story
  name="Default"
  args={{
    title: 'IPL',
  }}
/>

<Story name="LoggedOut" args={{}} />
