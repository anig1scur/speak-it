import { useState } from 'react';
import { Grid, Input, Heading, Text } from '@chakra-ui/react';
import { generateZhuYinXinShengTi } from './tools.js';

const Home = () => {
  const [fake, setFake] = useState('');
  const [real, setReal] = useState('');

  return (
    <Grid gap={8}>
      <Grid
        textAlign='center'
        gap={2}>
        <Heading
          fontSize='6xl'
          color={'pink.300'}
          fontWeight='extrabold'>
          说出你的心声
        </Heading>
        <Text
          color='gray.500'
          fontSize='sm'>
          还在为切换中英输入法和不停打括号而烦恼吗？ 让 Speak Your Heart Out 来帮你
        </Text>
      </Grid>
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={5}>
        <Input
          placeholder='假的'
          value={fake}
          onChange={(e) => {
            setFake(e.target.value);
          }}
        />
        <Input
          value={real}
          placeholder='输入你的心声'
          onChange={(e) => {
            setReal(e.target.value);
          }}
        />
      </Grid>
      <Text
        letterSpacing={1}
        align={'center'}>
        {fake.length === real.length ? generateZhuYinXinShengTi(fake, real) : 'fake 和 real 长度一致才能生成'}
      </Text>
    </Grid>
  );
};

export default Home;
