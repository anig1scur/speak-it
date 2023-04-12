import { useState } from "react";
import { Grid, Input, Heading, Text, Flex, Button, useClipboard, Radio } from "@chakra-ui/react";
import { Config, generateZhuYinXinShengTi } from "./tools.js";

const Home = () => {
  const [fake, setFake] = useState("");
  const [real, setReal] = useState("");
  const [config, setConfig] = useState<Config>({
    withPinyin: true,
    withTone: false,
  });

  const { onCopy, hasCopied } = useClipboard(
    fake.length === real.length ? generateZhuYinXinShengTi(fake, real, config) : "fake 和 real 长度一致才能生成"
  );

  return (
    <Grid gap={8}>
      <Grid
        textAlign='center'
        gap={2}>
        <Heading
          fontSize='5xl'
          color={"pink.300"}
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
          placeholder='有点好玩'
          value={fake}
          color='gray.500'
          onChange={(e) => {
            setFake(e.target.value);
          }}
        />
        <Input
          color='gray.500'
          value={real}
          placeholder='一般般吧'
          onChange={(e) => {
            setReal(e.target.value);
          }}
        />
      </Grid>
      <Flex gap={4}>
        <Button
          onClick={() => setConfig((c) => ({ ...c, withPinyin: !c.withPinyin }))}
          colorScheme={`${config.withPinyin ? "yellow" : "gray"}`}
          size='sm'
          m='auto'
          w='fit-content'>
          带拼音
        </Button>
        {config.withPinyin && (
          <Button
            onClick={() => setConfig((c) => ({ ...c, withTone: !c.withTone }))}
            colorScheme={`${config.withPinyin && config.withTone ? "yellow" : "gray"}`}
            size='sm'
            m='auto'
            w='fit-content'>
            带音调
          </Button>
        )}
      </Flex>
      {fake && real ? (
        <Flex
          mb={2}
          gap={3}
          flexDirection='column'>
          <Text
            color='gray.600'
            letterSpacing={1}
            align={"center"}>
            {fake.length === real.length ? generateZhuYinXinShengTi(fake, real, config) : "fake 和 real 长度一致才能生成"}
          </Text>
          <Button
            onClick={onCopy}
            m='auto'
            size='sm'
            colorScheme='blue'
            w='fit-content'>
            {hasCopied ? "Copied" : "Copy"}
          </Button>
        </Flex>
      ) : (
        <Text
          color='gray.400'
          letterSpacing={1}
          align={"center"}>
          {generateZhuYinXinShengTi("有点好玩", "一般般吧", config)}
        </Text>
      )}
    </Grid>
  );
};

export default Home;
