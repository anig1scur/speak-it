import { useState } from 'react';
import { Grid, Input, Heading, Text, Flex, Button, useClipboard } from '@chakra-ui/react';
import { generateZhuYinXinShengTi } from './tools.js';
const Home = () => {
  const [fake, setFake] = useState('');
  const [real, setReal] = useState('');
  const { onCopy, hasCopied } = useClipboard(
    fake.length === real.length ? generateZhuYinXinShengTi(fake, real) : 'fake 和 real 长度一致才能生成'
  );

  return (
    <Grid gap={8}>
      <Grid
        textAlign='center'
        gap={2}>
        <Heading
          fontSize='5xl'
          color={'pink.300'}
          fontWeight='extrabold'>
          说出你的心声
        </Heading>
        <Text
          color='gray.400'
          fontSize='sm'>
          还在为切换中英输入法和不停打括号而烦恼吗？ 让 Speak Your Heart Out 来帮你
        </Text>
      </Grid>
      <Grid
        templateColumns='repeat(2, 1fr)'
        gap={3}>
        <Input
          placeholder='假的'
          value={fake}
          color='gray.600'
          onChange={(e) => {
            setFake(e.target.value);
          }}
        />
        <Input
          color='gray.600'
          value={real}
          placeholder='输入你的心声'
          onChange={(e) => {
            setReal(e.target.value);
          }}
        />
      </Grid>
      {fake && real && (
        <Flex
          mb={2}
          gap={3}
          flexDirection='column'>
          <Text
            color='gray.500'
            letterSpacing={1}
            align={'center'}>
            {fake.length === real.length ? generateZhuYinXinShengTi(fake, real) : 'fake 和 real 长度一致才能生成'}
          </Text>
          <Button
            onClick={onCopy}
            m='auto'
            size='sm'
            colorScheme='blue'
            w='fit-content'>
            {hasCopied ? 'Copied' : 'Copy'}
          </Button>
        </Flex>
      )}
    </Grid>
  );
};

export default Home;
