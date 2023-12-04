import MainComponent from './QuizConfigurator';

export default {
  title: 'Components/Main',
  component: MainComponent,
};

const Template = args => <MainComponent {...args} />;
export const Main = Template.bind({});

Main.args = {
  startQuiz: () => {},
};
